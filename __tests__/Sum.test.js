const { default: Sum } = require("../src/components/Sum")


test("addition of numbers",()=>{

    const result = Sum(3,4)

    expect(result).toBe(7);

})

