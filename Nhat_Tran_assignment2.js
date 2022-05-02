function doubledItems(arr) {
  let doubledArr = arr.slice();
  doubledArr.forEach((element) => {
    element.quantity = element.quantity * 2;
    element.price = element.price * 2;
  });
  return doubledArr;
}

function greater2and300(arr) {
  const greaterArr = arr.slice();
  greaterArr.forEach((element) => {
    if ((element.quantity <= 2) & (element.price <= 300))
      greaterArr.splice(greaterArr.indexOf(element), 1);
  });
  return greaterArr;
}

function totalValue(arr) {
  let totalValue = 0;
  arr.forEach((ele) => {
    totalValue = totalValue + ele.quantity * ele.price;
  });
  return totalValue;
}

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

console.log("Double the array items:");
console.log(doubledItems(itemsObject));

const itemsObject2 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
console.log("array which contains item quantity > 2 and price > 300: ");
console.log(greater2and300(itemsObject2));

console.log("Total Value = " + totalValue(itemsObject2));

console.log(itemsObject, itemsObject2);

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
const string2 = string
  .split(/[^a-z]/g)
  .join("")
  .toLowerCase();
console.log(string2);
