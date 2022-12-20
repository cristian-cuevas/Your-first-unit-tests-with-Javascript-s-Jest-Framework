// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.58 yens", function () {
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(2.5)
    const expected = 2.5 * 127.9;
    expect(expected).toBe(yens);
    
})

test("One pond should be 0.0062", function () {
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(3.5)    
    const expected = 3.5 * 0.8;
    expect(expected).toBe(pounds);
})    


    


    
