// UTILITY TYPES:
// -> TypeScript comes with a large number of types that can help with
// some common type manipulation, usually referred to as utility types.

// 1. Partial:
// -> Partial changes all the properties in an object to be optional.

type Point = {
  x: number;
  y: number;
};

let pointPart: Partial<Point> = {};
pointPart.x = 10;
// pointPart.z = 20; -> this will return error whether it will state or
// not for the partial, still follows based on the type alias.

// 2. Required:
// -> Required changes all the properties in an object to be required.

type Car = {
  make: string;
  model?: string;
  mileage?: number;
};

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000,
};
// if we dont declare object key 'model' and 'mileage', typescript will
// return error.

// 3. Record
// -> Record is a shortcut to defining an object type with a specific
// key type and value type.

const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};
// -> Record<string, number> is equivalent to { [key: string]: number }

const foodMenu: Record<string, string[]> = {
  food: ["donut", "burger"],
  beverages: ["apple", "orange"],
};

// 4. Omit
// -> Omit removes keys from an object type.

type Person = {
  name: string;
  age: number;
  location?: string;
};

const bob: Omit<Person, "age" | "location"> = {
  name: "Bob Marley",
};
// `Omit` has removed age and location from the type and they can't be
// defined here

// 5. Pick
// -> Pick removes all but the specified keys from an object type.

type AnoPerson = Pick<Person, "name">;

const matt: AnoPerson = {
  name: "Matt Maltese",
};

type TodoTable = {
  isComplete: boolean;
  title: string;
  description?: string;
  points: number;
};

const myTodo: Pick<TodoTable, "isComplete" | "title"> = {
  isComplete: false,
  title: "Wash dishes",
};

// 6. Exclude
// -> Exclude removes types from a union

type Kilos = number | string;

type Cat = {
  name: string;
  age: Exclude<Kilos, string>;
  weight?: Kilos;
};

const sammy: Cat = {
  name: "Sammy",
  age: 15, //string cannot be passed here since excluded from type alias.
  weight: "2kg",
};

// 7. Readonly
// -> Same as the previous lesson, but this method applies to all 'key'
// inside the object.
// -> They cannot be modified once assigned a value.

type Bio = {
  name: string;
  age: number;
  sex: "m" | "f";
};

let person: Readonly<Bio> = {
  name: "Pales",
  age: 10,
  sex: "m",
};

// person.name = 'Isra'
// return error due to read only, cannot be changed despite the data type 'let'

// BASIC GENERICS
// -> Generics let you infer the types based on the type aliases with <_type_>

function getItems<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let concatResult: number[] = getItems<number>([1, 2, 3, 4]);
let concatString: string[] = getItems<string>(["s", "m", "l", "xl"]);
let concatRand = getItems([3, "a", true]);
// -> we declare the datatype based on the generic that has been inferred to
// the explicit type annotation from the function.
// -> the third variable 'concatRand' follows the value's data type if we dont
// declare the datatype itself when invoking the function.

// CLASSES IN TS

class EmployeeMain {
  protected id: number;
  public name: string;
  public address: string;

  constructor(name: string, address: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.address = address;
  }

  public getNameWithAddress(): string {
    const newId: number = this.id + 1;
    return `${this.name} stays at ${this.address} with id: ${newId}`;
  }
}

class Manager extends EmployeeMain {
  private occupation: string;
  protected id: number;
  constructor(name: string, address: string, occupation: string) {
    super(name, address);
    this.id = Math.floor(Math.random() * 1000);
    this.occupation = occupation;
  }

  getNameWithOccupation(): string {
    this.id = 3;
    return `${this.name} is a manager in ${this.occupation}`;
  }
}
