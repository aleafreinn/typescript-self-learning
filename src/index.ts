//First Program

let age: number = 20;
if (age < 50) {
  age += 10;
}
console.log(age);

//age = 'hehe' -> will return error

// Built-In Types:

// explicitly annotate the variables:
let sales: number = 123_456_789; // we can use '_' to indicate how many digits in the value.
let course: string = "this typescript";
let is_published: boolean = true;

// implicitly annotate the variables:
let anoSales = 123_345;
let anoCourse = "another typescript";
let is_released = false;

// -> when we hover the mouse at the implicit annotated variables,
// the typescript will assume the variable type based on initial value.
// anoSales = 'string' -> will also return error

let thisVar;
thisVar = 10;
thisVar = "hey";
// -> this will return variable type 'any' when not declare any initial
// values into it.

// function withError (myAnyVar) {
//   return myAnyVar;
// }

// -> this will return error when typescript sense an implicit 'any'
// type, meaning the variable declares any implicitly without the user
// declare the variable to 'any' type itself.

function withoutError(anoAnyVar: any) {
  return anoAnyVar;
}

// -> this will not return error because the user declared the type with
// any variable.

// Arrays in typescript:

let arrNumbers: number[] = [1, 2, 3];
arrNumbers[3] = 10;
// arrNumbers[4] = '20' -> will return error

arrNumbers.forEach((i) => i.toExponential);
// -> benefits of typescript is that it will recommend which dot operators
// methods to use reflecting to the datatypes such as 'i.toExponential' etc.

// Tuples in typescript:

let userTuple: [number, string] = [1, "Heyo"];
// -> tuple is a fixed length array in which the item in the array has a
// specific type.
// -> tuples cannot be simply adding another item to the array due to fixed
// by declaring the type in the initial processs.

// Enums in typescript:
// -> Representing a list of related constants

enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize); // this will give output of '2'
// -> for this matter, when we declare the first item in number, let say
// '1', TS will implicitly annotate the next subsequent items to be
// ascending order value. Etc. {Medium = 2, Large = 3}
// -> if not declared the initial item to a value, TS will annotate it to
// '0' and ascending the order for next item.

enum AnoSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}
let myAnoSize: AnoSize = AnoSize.Medium;
console.log(myAnoSize); // this will give output of 'm'
// -> this method also viable when it comes to declaring the constants
// to strings, however, TS will not implicitly annotate the subsequent
// enum items.

// Functions in Typescript:
// -> Quite extensive than others

function calculateTax(income: number): number {
  return income;
}
// -> this is a basic annotation for function in TS, if we dont annotate
// the type in function, it implicitly follows the type based on
// return value.

function noReturnVal() {
  // ...
}
// -> TS will automatically annotate this function to return as void value

// function unusedParams(someVar: string): void {
//   // ...
// }
// -> If enable 'noUnusedParameters' in tsconfig.json, this will catch a
// warning for the 'someVar' due to the param is unused inside the
// function.

// function calculateNum(numVar: number): number {
//   if (numVar < 10) {
//     return numVar * 1.2;
//   }
// }
// this will get a compilation error where it lacks ending return
// statement for this function.
// let say if we remove the 'number' annotation from the function:

// function anotherNum(numVar: number) {
//   if (numVar < 10) {
//     return numVar * 1.3;
//   }
// }
// this will initially not warn the user when there is no direct return
// value to this function. TS will implicitly annotate it as
// 'number | undefined'
// -> if enable 'noImplicitReturns' in tsconfig.json, this will warn
// the user to compile due to the syntax.

// function unusedLocals(): void {
//   const x: number = 10;
//   const myStr: string = "i am unused";
// }
// by default, this will not warn the user when the local variables
// are being unused.
// -> In order to prevent this, need to enable 'noUnusedLocals' in
// tsconfig.json file.

function correctedFunc(numVar: number): number {
  if (numVar < 10) {
    return numVar * 1.2;
  }
  return numVar * 1.3;
}
// -> this will be the right way of writing the code in TS.

// correctedFunc(10, 11);
// -> in TS, this will return error due to expected arguments to have
// based on the declaration of the function. (JS wont return error)

// To make parameter optional:
// function optionalParam(numVar: number, year?: number): number {
//   if (year < 2022) {
//     return numVar * 1.2;
//   }
//   return numVar * 1.3;
// }
// -> we will get an error saying 'object is possibly undefined'
// If we don't supply the argument "year", this argument will return
// an undefined value.

// To rectify this issue, we can make a default value for optional params:

function correctOptParam(numVar: number, year = 2022): number {
  if (year < 2022) {
    return numVar * 1.2;
  }
  return numVar * 1.3;
}
correctOptParam(100);

// Objects in Typescript:

let employee = { id: 1 };
// -> In JS, objects are dynamic, the shapes can be change throughout
// the life of a program. However, in TS, the objects are more static:

// employee.name = "alif"; -> will return error
// -> this will give an error due to TS implicitly annotate for 'id' key
// only and it will be fixed for the life of a program.

// let employee1: {
//   id: number;
//   name: string;
// } = { id: 1 };

// employee1.name = "alif1";

// -> In this instance when we explicitly annotate the 'name' key
// variable, we can declare the name based on line 194. However, if
// we haven't supplied the 'name' property, it will return error due to
// required to declare based on TS rule.

// To rectify, we can do 2 methods:

let employee2: {
  id: number;
  name: string;
} = { id: 2, name: "" };

employee2.name = "alif2";
// -> we can make empty string when declaring the variable

let employee3: {
  id: number;
  name?: string;
} = { id: 3 };

employee3.name = "alif3";
// -> make property optional when initialising the employee

// The 'readonly' feature:

let employee4: {
  readonly id: number;
  name?: string;
} = { id: 4, name: "alif4" };
// employee4.id = 0; -> will return error

// -> the 'readonly' signifies the variable that has been declared with
// it cannot be changed and only can be read by the user.

// To define the function in the object:
// -> In the type annotation, we need to define the signature of this method

let employee5: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void; // -> The date specifies 'Date' object
  // provided by JS
} = {
  id: 5,
  name: "alif5",
  retire: (date) => {
    console.log(date);
  },
};

// Type Aliases:
// -> in coding, we need to hold the DRY principle (Dont Repeat Yourself)
// In order to hold it using TS, we can use type aliases:

type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee6: Employee = {
  id: 6,
  name: "alif6",
  retire: (date) => console.log(date),
};
let employee7: Employee = {
  id: 7,
  name: "alif7",
  retire: (date) => console.log(date),
};

// Union types:
// -> Refers to the variable that has a multiple datatypes:

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

type FoodItem = {
  readonly id: number;
  name: string;
  price: number | string;
  stock: number | null;
};

// Intersection types:
// -> Refers to the variable that must be combined into 2 or more datatypes:

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types:
// -> To limit the values in the variable, we will use the "literal" types

let quantity: number;

type Quantity = 50 | 100 | 150;
let quantity1: Quantity;
// -> Literals dont have to be numbers, it also can be strings

type LiteralSize = "s" | "m" | "l";
let thisSize: LiteralSize = "m";

type Metric = "cm" | "inch";

// Nullable Types:
// -> There are 2 nullable types which is "null" and "undefined"

function toPassNull(someVar: string): void {
  console.log(someVar.toUpperCase());
}

// toPassNull(null);
// -> By default, the function invocation above will return error due to
// null cannot be called despite its a valid JS code.
// -> The settings can be referred to tsconfig.json > "strictNullObjects"

function correctPassNull(someVar: string | null | undefined): void {
  if (someVar) {
    console.log(someVar.toUpperCase);
    // if we pass without the if statement, TS will give error
    // of the possibility "null" for variable 'someVar'
  }
}

// Optional chaining:
// -> or known as "Optional Element Access Operator"

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// we can write if statement using this way:
// if (customer.birthday !== null & customer.birthday !== undefined) {}

// however, we can simply narrow down the code by using option chain:
console.log(customer?.birthday?.getFullYear());
// -> we learn this method due to removing the option chain will resulting
// to error for 'customer' variable that state "might be null"

// Can also use for Array Case:

let customer2 = getCustomer(Math.floor(Math.random() * 2));
let customers: Customer | null[] = Array(5).fill(customer2);

console.log(customers);
console.log(customers?.[0]);
