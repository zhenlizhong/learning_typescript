
let hello: string = "hello world";
// console.log(String);

function block() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);
}

function add(number1: number, number2: number): number {
    return number1 + number2;
}
// console.log(add(1, 2));

let isTrue: boolean = true;
// isTrue = "true";

let firstName: string = "TypeScript";

// Array 
let numberList: number[] = [1, 2, 3, 4];

let numberList2: Array<number> = [1, 2, 3, 4];

let numberList3 = [1, 2, 3, 4];

let mixList1 = [1, 2, "3", 4];

let mixList2: any[] = [1, "233", true];


// Tupple
let lang: [number, string] = [1, "TypeScript"];
lang[0] = 2;
lang[1] = "Script";

// a bug
lang.push("remarks: here is a text")

// console.log(lang);


//  union
let union: string | number;

union = 1;
union = "TypeScript";

let mixUnion: number | string | boolean | string[];

function merge(arg1: number | string, arg2: number | string) {
    if (typeof arg1 === "string" || typeof arg2 === "string") {
        return arg1.toString() + arg2.toString();
    } else {
        return arg1 + arg2;
    }
}

// console.log(merge(1, 2));
// console.log(merge("1", "TypeScript"));


// literal 
let literalNumber: 40 | 50 | 60 | 70;

function literalMerge(arg1: number | string, arg2: number | string, returnType: "String" | "Number") {
    if (returnType === "String") {
        return arg1.toString() + arg2.toString();
    }

    if (typeof arg1 === "string" || typeof arg2 === "string") {
        return arg1.toString() + arg2.toString();
    }
    return arg1 + arg2;
}

// console.log(literalMerge(1, "TypeScript", "String"));
// console.log(literalMerge(1, "TypeScript", "Number"));
// console.log(literalMerge(1, 2, "Number"));


// Enum
enum ColorNumber {
    red,
    green,
    blue
}

let enum1 = ColorNumber.red;
// console.log("🚀 ~ file: main.ts ~ line 92 ~ color1", enum1)


// Enum
enum ColorString {
    red = "red",
    green = "green",
    blue = "blue"
}

let enum2 = ColorString.red;
// console.log("🚀 ~ file: main.ts ~ line 103 ~ enum2", enum2)


// Enum
enum ColorMix {
    red = 18,
    green = "green",
    blue = "blue "
}


let enum3 = ColorMix.red;
// console.log("🚀 ~ file: main.ts ~ line 113 ~ enum3", enum3);


// any
let randomValue: any = 888;
randomValue = true;
randomValue = "TypeScript";
randomValue = {};
// randomValue(); 
// randomValue().toUpperCase();

// unknown
let unknownValue: unknown = 999;
unknownValue = true;
unknownValue = {};
if (typeof unknownValue === "function") {
    unknownValue();
}

if(typeof unknownValue === "string"){
    unknownValue.toUpperCase();
}





