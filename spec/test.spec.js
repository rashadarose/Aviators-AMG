class Calculator {

    add(a, b) {
        return a + b;
    }

    minus(a, b) {
        return a - b;
    }

}


describe('Calculate', function () {
    var calculate = new Calculator();
    describe('Add Number', function () {

        it('Should add two numbers', function () {
            //console.log(calculate.add(1, 3));
            expect(calculate.add(1, 3)).toBe(5);
        });
    });

    describe('Subtract Number', function () {

        it('Should subtract numbers', function () {
            //console.log(calculate.minus(3, 5));
            expect(calculate.minus(5, 1)).toBe(5);
        });
    });

});
