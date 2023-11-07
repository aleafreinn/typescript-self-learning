"use strict";
var _a;
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
let sales = 123456789;
let course = "this typescript";
let is_published = true;
let anoSales = 123345;
let anoCourse = "another typescript";
let is_released = false;
let thisVar;
thisVar = 10;
thisVar = "hey";
function withoutError(anoAnyVar) {
    return anoAnyVar;
}
let arrNumbers = [1, 2, 3];
arrNumbers[3] = 10;
arrNumbers.forEach((i) => i.toExponential);
let userTuple = [1, "Heyo"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
var AnoSize;
(function (AnoSize) {
    AnoSize["Small"] = "s";
    AnoSize["Medium"] = "m";
    AnoSize["Large"] = "l";
})(AnoSize || (AnoSize = {}));
let myAnoSize = AnoSize.Medium;
console.log(myAnoSize);
function calculateTax(income) {
    return income;
}
function noReturnVal() {
}
function correctedFunc(numVar) {
    if (numVar < 10) {
        return numVar * 1.2;
    }
    return numVar * 1.3;
}
function correctOptParam(numVar, year = 2022) {
    if (year < 2022) {
        return numVar * 1.2;
    }
    return numVar * 1.3;
}
correctOptParam(100);
let employee = { id: 1 };
let employee2 = { id: 2, name: "" };
employee2.name = "alif2";
let employee3 = { id: 3 };
employee3.name = "alif3";
let employee4 = { id: 4, name: "alif4" };
let employee5 = {
    id: 5,
    name: "alif5",
    retire: (date) => {
        console.log(date);
    },
};
let employee6 = {
    id: 6,
    name: "alif6",
    retire: (date) => console.log(date),
};
let employee7 = {
    id: 7,
    name: "alif7",
    retire: (date) => console.log(date),
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity;
let quantity1;
let thisSize = "m";
function toPassNull(someVar) {
    console.log(someVar.toUpperCase());
}
function correctPassNull(someVar) {
    if (someVar) {
        console.log(someVar.toUpperCase);
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customer2 = getCustomer(Math.floor(Math.random() * 2));
let customers = Array(5).fill(customer2);
console.log(customers);
console.log(customers === null || customers === void 0 ? void 0 : customers[0]);
//# sourceMappingURL=index.js.map