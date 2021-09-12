type CalcuCmd = "add" | "substract" | "multiply" | "divide" | "remainder";

const calculate = (cmd: CalcuCmd, num1: number, num2: number): number => {
  let res: number;
  switch (cmd) {
    case "add": {
      res = num1 + num2;
      break;
    }

    case "substract": {
      res = num1 - num2;
      break;
    }

    case "multiply": {
      res = num1 * num2;
      break;
    }

    case "divide": {
      res = num1 / num2;
      break;
    }

    case "remainder": {
      res = num1 % num2;
      break;
    }

    // no default
  }

  return res;
};

[
  calculate('add', 1, 3),
  calculate('substract', 3, 1),
  calculate('multiply', 4, 2),
  calculate('divide', 4, 2),
  calculate('remainder', 5, 2)
].forEach(x => console.log(x));
