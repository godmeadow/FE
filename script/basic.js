/* Cách khai báo biến, in ra giao diện console */
var a = 10;
var b = 20;
var c = "Hello world";
console.log(a + b);
console.log(b + c);
console.log(c + c);

/* Vòng lặp for, while, do... while */
var array = [1,2,3,4,5,6];
for (var i = 0; i < 6; i++) {
    console.log(array[i]);
}

var i = 0;
while (i < 6)
{
    console.log(array[i] * 10);
    i++;
}

do {
    console.log("Do ... while");
} while (false);

/* Function: Hàm */
function power(base, number) {
    var result = 1;
    for (var i = 0; i < number; i++) {
        result *= base;
    }
    return result;
}


/* Array: Mảng */
/* Filter */
var array1 = [1,2,3,4,5,1,7,8,9,1];
var array2 = ["abc", 12];
console.log(array1.concat(array2));

function kiemTra5(element, index, array) {
    return element % 5 == 0;
}
console.log(array1.filter(kiemTra5));

function kiemTra2(element, index, array) {
    return element % 2 == 1;
}
console.log(array1.filter(kiemTra2));

function soNguyenTo(element, index, array) {
    var flag = true;
    for (var i = 2; i < element; i++) {
        if (element % i == 0)
            flag = false;
    }
    return flag;
}
console.log(array1.filter(soNguyenTo)); 

/* ForEach */
function inPhanTuCuaMang(element, index, array) {
    console.log(element * 10);
}
array1.forEach(inPhanTuCuaMang);

var tinhTong = 0;
function tinhTongMang(element, index, array) {
    tinhTong += element;
}
array1.forEach(tinhTongMang);
console.log("Tổng của mảng là: " + tinhTong);

/* Map */
function gapDoi(element, index, array) {
    return element * 2;
}
array2 = array1.map(gapDoi);
console.log(array2);

function gapDoiSoChan(element, index, array) {
    if (element % 2 == 0) {
        return element * 2;
    } else {
        return element;
    }
}
array3 = array1.map(gapDoiSoChan);
console.log(array3);

/* Join */
console.log(array1.join(", "));

/* IndexOf, lastIndexOf */
console.log(array1);
console.log(array1.indexOf(1));
console.log(array1.lastIndexOf(1));
console.log(array1.lastIndexOf(1, array1.length - 2));

/* pop, push, shift, unshift */
var array3 = [1,2,3,4,5,1,7,8,9,1,7,8,10,2,4]; // 15
console.log(array3);
console.log(array3.pop());
console.log(array3.push(10, 20));
console.log(array3);

/* reverse, sort */
console.log('reverse, sort');
console.log(array3.reverse());
function sortNumber(a, b) {
    return a - b;
}
console.log(array3.sort(sortNumber));
console.log(array3.reverse());

/* slice */
console.log(array3.slice(4, 7));
console.log(array3);

/* splice */
console.log('splice');
console.log(array3);
console.log(array3.splice(5, 2, 10, 11, 12));
console.log(array3);

/* reduce */
console.log(array3.reduce(function (a, b) {
    return a + b;
}));
console.log(array3.reduceRight(function (a, b) {
    return a - b;
}))