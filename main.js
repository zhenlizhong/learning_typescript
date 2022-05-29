var hello = "hello world";
// console.log(String);
function block() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);
}
function add(number1, number2) {
    return number1 + number2;
}
// console.log(add(1, 2));
var isTrue = true;
// isTrue = "true";
var firstName = "TypeScript";
// Array 
var numberList = [1, 2, 3, 4];
var numberList2 = [1, 2, 3, 4];
var numberList3 = [1, 2, 3, 4];
var mixList1 = [1, 2, "3", 4];
var mixList2 = [1, "233", true];
// Tupple
var lang = [1, "TypeScript"];
lang[0] = 2;
lang[1] = "Script";
// a bug
lang.push("remarks: here is a text");
// console.log(lang);
//  union
var union;
union = 1;
union = "TypeScript";
var mixUnion;
function merge(arg1, arg2) {
    if (typeof arg1 === "string" || typeof arg2 === "string") {
        return arg1.toString() + arg2.toString();
    }
    else {
        return arg1 + arg2;
    }
}
// console.log(merge(1, 2));
// console.log(merge("1", "TypeScript"));
// literal 
var literalNumber;
function literalMerge(arg1, arg2, returnType) {
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
var ColorNumber;
(function (ColorNumber) {
    ColorNumber[ColorNumber["red"] = 0] = "red";
    ColorNumber[ColorNumber["green"] = 1] = "green";
    ColorNumber[ColorNumber["blue"] = 2] = "blue";
})(ColorNumber || (ColorNumber = {}));
var enum1 = ColorNumber.red;
console.log("🚀 ~ file: main.ts ~ line 92 ~ color1", enum1);
// Enum
var ColorString;
(function (ColorString) {
    ColorString["red"] = "red";
    ColorString["green"] = "green";
    ColorString["blue"] = "blue";
})(ColorString || (ColorString = {}));
var enum2 = ColorString.red;
console.log("🚀 ~ file: main.ts ~ line 103 ~ enum2", enum2);
// Enum
var ColorMix;
(function (ColorMix) {
    ColorMix[ColorMix["red"] = 18] = "red";
    ColorMix["green"] = "green";
    ColorMix["blue"] = "blue ";
})(ColorMix || (ColorMix = {}));
var enum3 = ColorMix.red;
console.log("🚀 ~ file: main.ts ~ line 113 ~ enum3", enum3);
// Any
var randomValue = 888;
randomValue = true;
randomValue = "TypeScript";
randomValue = {};
// randomValue(); 
// randomValue().toUpperCase();
// unknown
var unknownValue = 999;
unknownValue = true;
unknownValue = {};
if (typeof unknownValue === "function") {
    unknownValue();
}
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase();
}
