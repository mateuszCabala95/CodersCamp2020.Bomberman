import Provider from "../Provider"

test("Throws error for unknow provider", () => {
  expect(() => {
    Provider.get("unknown")
  }).toThrowError("Attempt to get an unregistered provider unknown")
})
