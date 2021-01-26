export default class Joystick {
	internalFillColor =  "#00AA00";
	internalLineWidth = 2;
    internalStrokeColor = "#003300";
    externalLineWidth = 2;
    externalStrokeColor = "#008000";
    autoReturnToCenter = true;
	objContainer: HTMLElement;
	canvas = document.createElement("canvas");
	context: CanvasRenderingContext2D;
	pressed = false;
	circumference = 2 * Math.PI;
	internalRadius: number;
	maxMoveStick: number;
	centerX: number;
	centerY: number;
	externalRadius: number;
	directionHorizontalLimitPos: number;
	directionHorizontalLimitNeg: number;
	directionVerticalLimitPos: number;
	directionVerticalLimitNeg: number;
	movedX: number;
	movedY: number;
	canvasParent: HTMLElement;

	constructor(container: string) {
		this.objContainer = document.getElementById(container)!;
		this.objContainer.appendChild(this.canvas);
		this.addCanvasAttribute()
		this.context = this.canvas.getContext("2d")!; 
		this.internalRadius = (this.canvas.width-((this.canvas.width/2)+10))/2;
		this.maxMoveStick = this.internalRadius + 5;
		this.centerX = this.objContainer.clientWidth/2;
		this.centerY = this.objContainer.clientHeight/2;
		this.externalRadius = this.internalRadius + 30;
		this.directionHorizontalLimitPos = this.objContainer.clientWidth / 10;
		this.directionHorizontalLimitNeg = this.directionHorizontalLimitPos * -1;
		this.directionVerticalLimitPos = this.objContainer.clientHeight / 10;
		this.directionVerticalLimitNeg = this.directionVerticalLimitPos * -1;
		this.movedX = this.centerX;
		this.movedY = this.centerY;
		this.canvasParent = this.canvas.offsetParent as HTMLElement;
	}

	addCanvasAttribute(): void {
		this.canvas.id = "joystick";
		this.canvas.width = this.objContainer.clientWidth;
		this.canvas.height = this.objContainer.clientHeight;
	}

	render(): void{
		if("ontouchstart" in document.documentElement){
			this.canvas.addEventListener("touchstart", this.onTouchStart, false);
			this.canvas.addEventListener("touchmove", this.onTouchMove, false);
			this.canvas.addEventListener("touchend", this.onTouchEnd, false);
		}
		else{
			this.canvas.addEventListener("mousedown", this.onMouseDown, false);
			this.canvas.addEventListener("mousemove", this.onMouseMove, false);
			this.canvas.addEventListener("mouseup", this.onMouseUp, false);
		}
		
		this.drawExternal();
		this.drawInternal();
	}
    
	drawExternal(): void {
		this.context.beginPath();
		this.context.arc(this.centerX, this.centerY, this.externalRadius, 0, this.circumference, false);
		this.context.lineWidth = this.externalLineWidth;
		this.context.strokeStyle = this.externalStrokeColor;
		this.context.stroke();
	}

	drawInternal(): void {
		this.context.beginPath();
		if(this.movedX < this.internalRadius){ 
			this.movedX = this.maxMoveStick;
		}
		if((this.movedX + this.internalRadius) > this.canvas.width){ 
			this.movedX = this.canvas.width-(this.maxMoveStick); 
		}
		if(this.movedY < this.internalRadius){ 
			this.movedY = this.maxMoveStick; 
		}
		if((this.movedY + this.internalRadius) > this.canvas.height){ 
			this.movedY = this.canvas.height-(this.maxMoveStick); 
		}
		this.context.arc(this.movedX, this.movedY, this.internalRadius, 0, this.circumference, false);
		const grd: CanvasGradient = this.context.createRadialGradient(this.centerX, this.centerY, 5, this.centerX, this.centerY, 200);
		grd.addColorStop(0, this.internalFillColor);
		grd.addColorStop(1, this.internalStrokeColor);
		this.context.fillStyle = grd;
		this.context.fill();
		this.context.lineWidth = this.internalLineWidth;
		this.context.strokeStyle = this.internalStrokeColor;
		this.context.stroke();
	}
	
	onTouchStart(event: TouchEvent): void {
		this.pressed = true;
	}

	onTouchMove(event: TouchEvent): void {
		event.preventDefault();
		if(this.pressed == true && event.targetTouches[0].target == this.canvas){
			this.movedX = event.targetTouches[0].pageX;
			this.movedY = event.targetTouches[0].pageY;
			if(this.canvasParent.tagName.toUpperCase() === "BODY"){
				this.movedX -= this.canvas.offsetLeft;
				this.movedY -= this.canvas.offsetTop;
			}
			else{
				this.movedX -= this.canvasParent.offsetLeft;
				this.movedY -= this.canvasParent.offsetTop;
			}
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.drawExternal();
			this.drawInternal();
		}
	} 

	onTouchEnd(event: TouchEvent): void {
		this.pressed = false;
		if(this.autoReturnToCenter){
			this.movedX = this.centerX;
			this.movedY = this.centerY;
		}
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.drawExternal();
		this.drawInternal();
		//canvas.unbind('touchmove');
	}

	onMouseDown(event: MouseEvent): void {
		this.pressed = true;
    }

	onMouseMove(event: MouseEvent): void {
		if(this.pressed === true){
			this.movedX = event.pageX;
			this.movedY = event.pageY;
			if(this.canvasParent.tagName.toUpperCase() === "BODY"){
				this.movedX -= this.canvas.offsetLeft;
				this.movedY -= this.canvas.offsetTop;
			}
			else{
				this.movedX -= this.canvasParent.offsetLeft;
				this.movedY -= this.canvasParent.offsetTop;
			}
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.drawExternal();
			this.drawInternal();
		}
	}

	onMouseUp(event: MouseEvent): void {
		this.pressed = false;
		if(this.autoReturnToCenter){
			this.movedX = this.centerX;
			this.movedY = this.centerY;
		}
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.drawExternal();
		this.drawInternal();
		//canvas.unbind('mousemove');
	}

	GetWidth(): number {
		return this.canvas.width;
	}
	
    GetHeight(): number {
		return this.canvas.height;
	}
	
	GetPosX(): number {
		return this.movedX;
	}
	
	GetPosY(): number {
		return this.movedY;
	}
	
	GetX(): string {
		return (100*((this.movedX - this.centerX)/this.maxMoveStick)).toFixed();
	}

	GetY(): string {
		return ((100*((this.movedY - this.centerY)/this.maxMoveStick))*-1).toFixed();
	}
	
	GetDir(): string {
		let result = "";
		const orizontal = this.movedX - this.centerX;
		const vertical = this.movedY - this.centerY;
		
		if(vertical >= this.directionVerticalLimitNeg && vertical <= this.directionVerticalLimitPos){
			result = "C";
		}
		if(vertical < this.directionVerticalLimitNeg){
			result = "N";
		}
		if(vertical > this.directionVerticalLimitPos){
			result = "S";
		}
		
		if(orizontal < this.directionHorizontalLimitNeg){
			if(result === "C"){ 
				result = "W";
			}
			else{
				result += "W";
			}
		}
		if(orizontal > this.directionHorizontalLimitPos){
			if(result === "C"){ 
				result = "E";
			}
			else{
				result += "E";
			}
		}
		
		return result;
	}
	   
}