const frozenObjects = Object.freeze({
  object: "ruler",
  color: "transperent",
  length: "30inches",
  weight: "500g",
}) ;
frozenObjects.color ="white";
frozenObjects.weight ="300kg";
console.log(frozenObjects);
