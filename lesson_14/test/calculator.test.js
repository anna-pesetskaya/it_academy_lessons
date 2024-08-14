const Calculator = require('../src/calculator');

describe('Calculator class functionality', () => {

  beforeEach(() => {
      calculator = new Calculator();
  });

  describe('Add functionality', () => {
      test('Should sum two numbers', async () => {
          const result = await calculator.add(1, 2);
          expect(result).toBe(3);
          expect(result).not.toBe(0);
      });

      test('Should sum three numbers', async () => {
          const result = await calculator.add(1, 2, 3);
          expect(result).toBe(6);
          expect(result).not.toBe(0);
      });

      
      test('Should handle empty arrays', async () => {
          const result = await calculator.add();
          expect(result).toBe(0);
          expect(result).not.toBe(1);
      });

     
      test('Should sum negative and positive numbers', async () => {
        const result = await calculator.add(-2, 3);
        expect(result).toBe(1);
        expect(result).not.toBe(0);
    });
  });


  describe('Multiply functionality', () => {
    test('Should multiply two numbers', async () => {
        const result = await calculator.multiply(5, 5);
        expect(result).toBe(25);
        expect(result).not.toBe(0);
    });

    test('Should multiply three numbers', async () => {
        const result = await calculator.multiply(2, 2, 2);
        expect(result).toBe(8);
        expect(result).not.toBe(0);
    });

    test('Should be zero if the second arg is 0', async () => {
        const result = await calculator.multiply(3, 0);
        expect(result).toBe(0);
        expect(result).not.toBe(3);
    });

    test('Should return the same number if the second arg is 1', async () => {
        const result = await calculator.multiply(5, 1);
        expect(result).toBe(5);
        expect(result).not.toBe(0);
    });

    test('Should return a product of a negative and a positive number', async () => {
        const result = await calculator.multiply(-2, 2);
        expect(result).toBe(-4);
        expect(result).not.toBe(1);
    });

    test('Should throw an error if any argument is not a number', async () => {
        const result = await calculator.multiply(1, "2");
        expect(result).toThrow();
    });
    
  });


  describe('Subtract functionality', () => {
      test('Should subtract two numbers', async () => {
          const result = await calculator.subtraction(10, 5);
          expect(result).toBe(5);
          expect(result).not.toBe(0);
      });

      test('Should subtract one arg if more than two arguments are passed', async () => {
          const result = await calculator.subtraction(7, 2, 1);
          expect(result).toBe(5);
          expect(result).not.toBe(0);
      });

      test('Should be NaN if there are no arguments', async () => {
          const result = await calculator.subtraction();
          expect(result).toBeNaN();
          expect(result).not.toBe(0);
      });

      test('Should be the same number if the second argument is 0', async () => {
          const result = await calculator.subtraction(5, 0);
          expect(result).toBe(5);
          expect(result).not.toBe(0);
      });

      test('Should throw an error if any argument is not a number', async () => {
        const result = await calculator.subtraction(1, "2");
        expect(result).toThrowError;
    });

  });

  

  describe('Divide functionality', () => {
      test('Should divide two numbers', async () => {
          const result = await calculator.divide(10, 5);
          expect(result).toBe(2);
          expect(result).not.toBe(0);
      });

      test('Must return the divided result if the second arg is negative', async () => {
          const result = await calculator.divide(6, -2);
          expect(result).toBe(-3);
          expect(result).not.toBe(0);
      });


      test('Should throw error if divider is zero', async () => {
          const result = await calculator.divide(5, 0);
          expect(result).toBe(Infinity);
          expect(result).not.toBe(0);
          expect(result).not.toBeNaN();
      });

      test('Should throw an error if any argument is not a number', async () => {
          const result = await calculator.divide.divide(1, "2");
          expect(result).toThrow();
      });

      test('Should return the same number if the devider is 1', async () => {
        const result = await calculator.divide(3, 1);
        expect(result).toBe(3);
        expect(result).not.toBe(1);
    });
  });

  describe('Exponentiation functionality', () => {
      test('Should square a number', async () => {
          const result = await calculator.exponentiation(5);
          expect(result).toBe(25);
          expect(result).not.toBe(0);
      });

      test('Should square a negative number', async () => {
          const result = await calculator.exponentiation(-5);
          expect(result).toBe(25);
          expect(result).not.toBe(0);
      });

      
      test('Should return NaN if no args are passed', async () => {
          const result = await calculator.exponentiation();
          expect(result).toBeNaN();
          expect(result).not.toBe(0);
      });

      test('Should return 0 if the arg is 0', async () => {
          const result = await calculator.exponentiation(0);
          expect(result).toBe(0);
          expect(result).not.toBeNaN();
      });

      test('Should throw an error if the argument is not a number', async () => {
        const result = await calculator.exponentiation("2");
        expect(result).toThrow();
    });

  });
});