export function createCalcs() {

  return {
    numA: Math.round(Math.random() * 10),
    numB: Math.round(Math.random() * 10),
    correctAnswer: null,
    action: randomAction(),
    inputValue: "",
    touched: false,
    status: "",
    disabled: false
  };

}
  
export function randomAction() {
    const random = Math.floor(Math.random() * Math.floor(3));
    switch (random) {
      case 0:
        return "+";
      case 1:
        return "-";
      case 2:
        return "x";
      default:
        return null;
    }
  }