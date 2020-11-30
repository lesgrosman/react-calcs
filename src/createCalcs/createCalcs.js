export default function createGroup(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr.map((i) => {
      return {
        numA: Math.round(Math.random() * 10),
        numB: Math.round(Math.random() * 10),
        correctAnswer: null,
        action: randomAction(),
        inputValue: "",
        touched: false,
        status: "",
        id: i,
        disabled: false
      };
    });
  }
  
function randomAction() {
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