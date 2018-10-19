/* Object Number */
var number = new Number(12.123456789);
console.log(number);
console.log(number.valueOf());
console.log(number.toFixed(5));
console.log(number.toPrecision(5));

/* string */
var temp = "This is a beautiful day";
console.log(temp);
console.log(temp.indexOf('day'));
console.log(temp.charAt(10));

// Concat, +

// CharAt
console.log(temp.charAt(10));

// Replace
console.log(temp.replace("day", "night"));
console.log(temp.replace(/i/gi, "o"));

// Split
console.log(temp.split(' '));

// Slice, Substring
console.log(temp.slice(2, 4));
console.log(temp);
console.log(temp.substring(2, 4));
console.log(temp);

// Substr
console.log(temp.substr(2, 4));
console.log(temp);

// toLowerCase, toUpperCase
console.log(temp.toLowerCase());
console.log(temp.toUpperCase());

// Length
console.log(temp.length);

/* Date Object */
console.log("DATE");
var date1 = new Date();
console.log(date1);
var date2 = new Date(92384792);
console.log(date2);
var date3 = new Date("2018/08/13");
console.log(date3);
var date4 = new Date(2018,7,13,19,50,20);
console.log(date4);

// getDate, getDay, getFullYear, getMonth, getHours, getMinutes, getSeconds, getTime