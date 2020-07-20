const priceApple = 15.678;
const priceMelon = 123.965;
const priceCoconut = 90.2345;
 
let priceMax = (Math.max(priceApple, priceMelon, priceCoconut));
console.log(priceMax);
let priceMin = (Math.min(priceApple, priceMelon, priceCoconut));
console.log(priceMin);

let totalPrice = (priceApple + priceMelon + priceCoconut);
console.log(totalPrice);

let wholePrice = Math.floor(priceApple) + Math.floor(priceMelon) + Math.floor(priceCoconut);
console.log(wholePrice);

let roundedPrice = (Math.ceil(totalPrice / 100) * 100);
console.log(roundedPrice);

let totalPrice2 = Math.floor(totalPrice) % 2 === 0 ? 'true' : 'false';
console.log(totalPrice2);

let pay = 500 - totalPrice;
console.log(pay);

let averagePrice = (totalPrice/3).toFixed(2);
console.log(averagePrice);

let randomDiscount = (Math.random() * 100).toFixed(0);
console.log(randomDiscount);

let discount = (totalPrice - totalPrice * randomDiscount / 100).toFixed(2);
console.log(discount);

let profit = (totalPrice / 2 - (totalPrice - discount)).toFixed(2);
console.log(profit);