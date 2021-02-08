import Joystick from "../joystick"

const div = document.createElement('div')
div.id = 'joyDiv'
document.body.appendChild(div)

type CreateElementType = (tagName: string, options?: ElementCreationOptions) => HTMLElement
type getElementByIdType = (elementId: string) => HTMLElement | null

describe('Joystick tests', () => {
    let el: CreateElementType
    let getElementById: getElementByIdType

    beforeEach(() => {
        el  = document.createElement
        getElementById = document.getElementById
    })

    afterEach(() => {
        jest.resetAllMocks()
        document.createElement = el
        document.getElementById = getElementById
    })

    it('should call render method', () => {
        jest.spyOn(Joystick.prototype, 'render').mockReturnValueOnce()
        document.getElementById = jest.fn().mockReturnValueOnce({ appendChild: jest.fn() })
        const joy = new Joystick(div.id)
        joy.render()
        expect(joy.render).toBeCalledTimes(1)
        expect(document.getElementById).toBeCalledTimes(1)
    })

    it('should return a string' , () => {
        const joy = new Joystick(div.id)
        expect(typeof joy.x).toBe('string')
        expect(typeof joy.y).toBe('string')
        expect(typeof joy.dir).toBe('string')
    })

    it('should return a number' , () => {
        const joy = new Joystick(div.id)
        expect(typeof joy.width).toBe('number')
        expect(typeof joy.height).toBe('number')
        expect(joy.posX).toBe(0)
        expect(joy.posY).toBe(0)
    })
})