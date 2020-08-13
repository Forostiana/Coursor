const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114};

//1

function getMyTaxes(salary) {
  const myTax = this.tax * salary;
  return  `You'll pay ${myTax} $ taxes from your salary`;
}
console.log(getMyTaxes.call(ukraine, 1000));

//2
function getMiddleTaxes(country) {
  const middleTax = this.tax * this.middleSalary;
  return  `The middle tax in your country is ${middleTax} $`;
}
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

//3
function getTotalTaxes(country) {
  const totalTax = this.tax * this.middleSalary* this.vacancies;
  return `Total tax in your country is ${totalTax} $`;
}
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

//4

function getMySalary(country) {
  const taxOfContry = country.tax;
  const salary = Math.floor(Math.random() * (20000 - 15000) + 15000);
  const taxes = +(taxOfContry * salary).toFixed(2);
  const profit = +(salary - taxes).toFixed(2);
  return {salary, taxes, profit};
};

console.log(getMySalary(ukraine));
const timerUk = setInterval(() => console.log(getMySalary(ukraine)), 10000);
console.log(getMySalary(litva));
const timerLt = setInterval(() => console.log(getMySalary(litva)), 10000);
console.log(getMySalary(latvia))
const timerLv = setInterval(() => console.log(getMySalary(latvia)), 10000);


document.writeln(`1.  <p>In Ukraine you'll pay [${myTax}] $ taxes from your salary. </p>`);


document.writeln(`2.  <p>The middle tax in your country is [${(getMiddleTaxes.call(ukraine))} $.</p>`);
document.writeln(`<p>The middle tax in your country is [${(getMiddleTaxes.call(litva))} $.</p>`);
document.writeln(`<p>The middle tax in your country is [${(getMiddleTaxes.call(latvia))} $.</p>`);

document.writeln(`3. <p> Total tax in Ukraine is [${(getTotalTaxes.call(ukraine))}] $. </p>`);
document.writeln(`<p> Total tax in Litva is [${(getTotalTaxes.call(litva))}] $. </p>`);
document.writeln(`<p> Total tax in Latvia is [${(getTotalTaxes.call(latvia))}] $. </p>`);

document.writeln(` 4. <p>Result in console </p>`);