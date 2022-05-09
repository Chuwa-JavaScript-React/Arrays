function doubleValue(arr) {
  return arr.map((ele) => ({
    quantity: ele.quantity * 2,
    price: ele.price * 2,
  }));
}

function filterItems(arr) {
  return arr.filter((ele) => {
    return (ele.quantity > 2) & (ele.price > 300);
  });
}

function calTotalValue(arr) {
  return arr.reduce((total, ele) => {
    return total + ele.quantity * ele.price;
  }, 0);
}

//=======================================================================
const itemsObject3 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

console.log(doubleValue(itemsObject3));
console.log(filterItems(itemsObject3));
console.log("Total Value = " + calTotalValue(itemsObject3));

const string2 = string.toLowerCase().replace(/[\W]+/g, "").trim();
console.log(string2);
