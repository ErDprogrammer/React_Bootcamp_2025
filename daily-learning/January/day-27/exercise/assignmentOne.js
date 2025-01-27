const targetOne = {
  animals: "fowl",
  human: "elizabeth",
  plants: "cashew",
};
const targetTwo = {
  characterOne: "Kratos",
  characterTwo: "Naruto",
  characterThree: "Luffy",
  characterFour: "Raiyeh",
  characterFive: "Thor",
};

const targetThree = {
  ToBeElimainatedTargetOne: "Barbie",
  ToBeElimainatedTargetTwo: "Zee World",
  ToBeElimainatedTargetThree: "philipine Movies",
  ToBeElimainatedTargetFour: "Lee mi hoo",
};

const assignAll = () => Object.assign(targetOne, targetTwo, targetThree);
console.log(assignAll());
