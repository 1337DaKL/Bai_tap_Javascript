// Bài tập bài 06: Javascript cơ bản (Tiết 2)
// Câu 01: Max number (Tìm số lớn nhất)
// Đề bài:
// oViết hàm truyền vào 2 tham số. Sau đó tìm số lớn nhất trong 2 số đó.
// oVí dụ: 
// 10, 5 —> 10
// 10, 15 —> 15
// 100, 100 —> 100

function search_number_max(a , b)
{
    if (a >= b)
    {
        return a;
    }
    return b;
}

var a = 100 , b = 100;
console.log(search_number_max(a , b));

console.log("------------------");


// Câu 02: Bài toán FizzBuzz
// Đề bài: Viết hàm kiểm tra đầu vào đã cho:
// oNếu đầu vào chia hết cho 3 in ra: "Fizz"
// oNếu đầu vào chia hết cho 5 in ra: "Buzz"
// oNếu đầu vào chia hết cho 3 hoặc 5 in ra: "FizzBuzz"
// oNếu đầu vào KHÔNG chia hết cho 3 hoặc 5 in ra: Giá trị đầu vào
// oNếu đầu vào không phải là kiểu Number in ra: "Vui lòng nhập số!"
// oVí dụ: 
// "one" —> Vui lòng nhập số!
// true —> Vui lòng nhập số!
// 9 —> Fizz
// 10 —> Buzz
// 30 —> FizzBuzz
// 11 —> 11

function isfizzBuzz(arg) {
    if (typeof arg !== "number") {
        return "Vui lòng nhập số!";
    }
    
    if (arg % 3 === 0 && arg % 5 === 0) {
        return "FizzBuzz";
    }
    
    if (arg % 3 === 0) {
        return "Fizz";
    }
    
    if (arg % 5 === 0) {
        return "Buzz";
    } else {
        return arg;
    }
    }
    
    const checkFizzBuzz1 = isfizzBuzz("one");
    console.log(checkFizzBuzz1); // Vui lòng nhập số!
    
    const checkFizzBuzz2 = isfizzBuzz(true);
    console.log(checkFizzBuzz2); // Vui lòng nhập số!
    
    const checkFizzBuzz3 = isfizzBuzz(9);
    console.log(checkFizzBuzz3); // Fizz
    
    const checkFizzBuzz4 = isfizzBuzz(10);
    console.log(checkFizzBuzz4); // Buzz
    
    const checkFizzBuzz5 = isfizzBuzz(30);
    console.log(checkFizzBuzz5); // FizzBuzz
    
    const checkFizzBuzz6 = isfizzBuzz(11);
    console.log(checkFizzBuzz6); // 11

    console.log("------------------");

// Câu 03: Tốc độ giới hạn
// Đề bài: Giả sử một người đi xe ô tô, có vận tốc là x (km/h). Viết hàm kiểm tra đầu vào x:
// oNếu đầu vào x có vận tốc dưới 70km in ra: 'Vận tốc an toàn"
// oNếu đầu vào x có vận tốc trên 70km, cứ vượt quá tốc độ mỗi 5km/h bị phạt 30000đ, in ra: "Bạn đã bị phạt: " + Số tiền bị phạt
// oNếu đầu vào x có vận tốc trên 70km, bị tước giấy phép lái xe, in ra: "Bạn đã bị tước giấy phép lái xe"
// oVí dụ: 
// 40 —> Vận tốc an toàn
// 70 —> Vận tốc an toàn
// 75 —> Bạn đã bị phạt: 30000đ
// 99 —> Bạn đã bị phạt: 150000đ
// 120 —> Bạn đã bị tước giấy phép lái xe

//var input = prompt("Nhap dau vao");
var input = 75
input = +input;
if(input <= 70)
{
    console.log("Vận tốc an toàn");
}
else if(input > 70 && input <= 100) 
{
    moneyerror = Math.floor((input - 70) / 5) * 30000;
    console.log('Bạn đã bị phạt: ' + moneyerror + "đ");
}
else
{
    console.log("Bạn đã bị tước giấy phép lái xe")
}
console.log("------------------");
// Đề bài: Viết hàm kiểm tra và chỉ in ra các cặp key, value có value là kiểu string.
// oVí dụ:
// oconst person = {
// o  name: "Le Van A",
// o  age: 40,
// o  height: 175,
// o  country: "Viet Nam",
// o  designation: "UI Developer",
// o};
// o// In ra:
// o// name : Le Van A
// o// country : Viet Nam
// o// designation : UI Developer
// o// ----------
// o
// oconst technology = {
// o  name: "JavaScipt",
// o  version: 6,
// o  purpose: "Scripting language for Web",
// o  developer: "Netscape Corporation",
// o};
// o// In ra:
// o// name : JavaScipt
// o// purpose : Scripting language for Web
// o// developer : Netscape Corporation
// ----------

const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
    };

for (item in person)
{
    if(typeof person[item] == "string")
    {
        console.log(item + " : " + person[item]);
    }
}
const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
};
for (item in technology)
    {
        if(typeof technology[item] == "string")
        {
            console.log(item + " : " + technology[item]);
        }
    }
    console.log(technology.name)
console.log("------------------");
// Câu 05: Số nguyên tố
// Đề bài:
// oViết chương trình nhập vào 1 số n. Dùng vòng lặp để lặp từ 2 đến n, kiểm tra xem các số đó có phải là số nguyên tố hay không? Nếu là số nguyên tố thì in ra: "Số nguyên tố: " + Số đó.
// oSố nguyên tố hay còn gọi là hợp số, đây là tập hợp số tự nhiên chỉ chia hết cho 1 và chính nó. Có thể hiểu một cách đơn giản, với một số tự nhiên lớn hơn 1, nếu ngoài chữ số 1 và bản thân chính số đó thì nó không chia hết cho số nào khác nữa.
// oVí dụ các số: 2, 3, 5, 7, 11, 13, 17, 23, 29,…đều được gọi là số nguyên tố.
// oĐặc biệt, có 2 trường hợp không được xét là nguyên tố đó chính là số 0 và số 1.
function check_so_nguyen_to(n)
{
    for(let i = 2 ; i <= Math.sqrt(n) ; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return n > 1 ;
}
//var input = prompt("Nhap so :")
var input = 30
for (let i = 2 ; i <= input ; i++)
{
    if(check_so_nguyen_to(i))
    {
        console.log("Số nguyên tố : " , i);
    }
}

console.log("------------------");
// Câu 06: 24-Hour Time
// Đề bài:
// oViết một hàm nhận thời gian ở định dạng AM/PM 12 giờ và trả về một chuỗi biểu diễn thời gian ở định dạng 24 giờ.
// oVí dụ: 
// '07:05:45PM' —> '19:05:45'
// '12:40:22AM' —> '00:40:22'
// '12:45:54PM' —> '12:45:54'
// Đáp án:
function chuan_hoa_ngay(hour_day)
{
    let hour = hour_day.slice(0 , 2);
    let phut = hour_day.slice(3 , 5);
    let giay = hour_day.slice(6 , 8) ;
    day = hour_day.slice(8 , 10);
    if(hour == 12)
    {
        hour = 0
    }
    if (day === "PM")
    {
        hour = +hour + 12;
    }
    if (hour < 10)
    {
        hour = "0" + hour;
    }
    return hour + ":" + phut + ":" + giay
}
const day1 = '07:05:45PM'
console.log(chuan_hoa_ngay(day1));
const day2 = '12:40:22AM'
console.log(chuan_hoa_ngay(day2));
const day3 = '12:45:54PM'
console.log(chuan_hoa_ngay(day3));







console.log("------------------");
// Đề bài:
// oKiểm tra 1 năm có phải là năm nhuận hay không? Nếu là năm nhuận trả về true, nếu không thì trả về false.
// oNăm nhuận là: 
// Chia hết cho 4 được và không chia hết cho 100 được.
// Chia hết cho 100 sẽ được coi là năm nhuận nếu chúng cũng chia hết cho 400.
// oVí dụ: 
// leapYear(2016) —> true
// leapYear(2000) —> true
// leapYear(1700) —> false
// leapYear(1800) —> false
// leapYear(100) —> false
// Đáp án:

function check_leap_year(n)
{
    if(n % 100 === 0)
    {
        if(n % 400 === 0)
        {
            return true;
        }
        return false;
    }
    else
    {
        if(n % 4 == 0)
        {
            return true;
        }
        return false;
    }
}

console.log(check_leap_year(2016));
console.log(check_leap_year(2000));
console.log(check_leap_year(1700));
console.log(check_leap_year(1800));
console.log(check_leap_year(100));
console.log("------------------");

// Câu 08: Lấy đuôi mở rộng của một file.
// Đề bài:
// oViết một hàm để lấy được đuôi mở rộng của 1 file bất kỳ.
// oVí dụ: 
// test.html --> html
// abc.java --> java
// xyz.js --> js
// Đáp án:
function tach(string)
{
    let list = string.split(".");
    let tmp = list[list.length - 1];
    return tmp;
}
var test1 = "test.html";
console.log(tach(test1));
var test2 = "abc.java";
console.log(tach(test2));
var test3 = "xyz.js";
console.log(tach(test3));

console.log("------------------");
// Câu 09: If Conditions (Điều kiện If)
// Đề bài: Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Việt Nam";
// 
// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Thái Lan") {
//   price -= 40;
// } else if (country === "Hàn Quốc") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// 
// console.log(price);
console.log("------------------");
// Câu 12: Lấy ra tên.
// Cho một mảng myFriends, hãy lấy ra danh sách tên bạn bè trong mảng myFriends.
// oInput:
// oconst myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// oOutput:
// o["Nam", "Hùng", "Hòa", "Long"];

const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
let array = [];
for(let i = 0 ; i < myFriends.length ; i++)
{
    if(typeof myFriends[i] === "string")
    {
        array.push(myFriends[i]);
    }
}
console.log(array);
console.log("------------------");
// Bài tập bài 06: Javascript cơ bản (Tiết 2)
// Câu 01: Max number (Tìm số lớn nhất)
// Đề bài:
// oViết hàm truyền vào 2 tham số. Sau đó tìm số lớn nhất trong 2 số đó.
// oVí dụ: 
// 10, 5 —> 10
// 10, 15 —> 15
// 100, 100 —> 100

function search_number_max(a , b)
{
    if (a >= b)
    {
        return a;
    }
    return b;
}

var a = 100 , b = 100;
console.log(search_number_max(a , b));

console.log("------------------");


// Câu 02: Bài toán FizzBuzz
// Đề bài: Viết hàm kiểm tra đầu vào đã cho:
// oNếu đầu vào chia hết cho 3 in ra: "Fizz"
// oNếu đầu vào chia hết cho 5 in ra: "Buzz"
// oNếu đầu vào chia hết cho 3 hoặc 5 in ra: "FizzBuzz"
// oNếu đầu vào KHÔNG chia hết cho 3 hoặc 5 in ra: Giá trị đầu vào
// oNếu đầu vào không phải là kiểu Number in ra: "Vui lòng nhập số!"
// oVí dụ: 
// "one" —> Vui lòng nhập số!
// true —> Vui lòng nhập số!
// 9 —> Fizz
// 10 —> Buzz
// 30 —> FizzBuzz
// 11 —> 11

function isfizzBuzz(arg) {
    if (typeof arg !== "number") {
        return "Vui lòng nhập số!";
    }
    
    if (arg % 3 === 0 && arg % 5 === 0) {
        return "FizzBuzz";
    }
    
    if (arg % 3 === 0) {
        return "Fizz";
    }
    
    if (arg % 5 === 0) {
        return "Buzz";
    } else {
        return arg;
    }
    }
    
    const checkFizzBuzz1 = isfizzBuzz("one");
    console.log(checkFizzBuzz1); // Vui lòng nhập số!
    
    const checkFizzBuzz2 = isfizzBuzz(true);
    console.log(checkFizzBuzz2); // Vui lòng nhập số!
    
    const checkFizzBuzz3 = isfizzBuzz(9);
    console.log(checkFizzBuzz3); // Fizz
    
    const checkFizzBuzz4 = isfizzBuzz(10);
    console.log(checkFizzBuzz4); // Buzz
    
    const checkFizzBuzz5 = isfizzBuzz(30);
    console.log(checkFizzBuzz5); // FizzBuzz
    
    const checkFizzBuzz6 = isfizzBuzz(11);
    console.log(checkFizzBuzz6); // 11

    console.log("------------------");

// Câu 03: Tốc độ giới hạn
// Đề bài: Giả sử một người đi xe ô tô, có vận tốc là x (km/h). Viết hàm kiểm tra đầu vào x:
// oNếu đầu vào x có vận tốc dưới 70km in ra: 'Vận tốc an toàn"
// oNếu đầu vào x có vận tốc trên 70km, cứ vượt quá tốc độ mỗi 5km/h bị phạt 30000đ, in ra: "Bạn đã bị phạt: " + Số tiền bị phạt
// oNếu đầu vào x có vận tốc trên 70km, bị tước giấy phép lái xe, in ra: "Bạn đã bị tước giấy phép lái xe"
// oVí dụ: 
// 40 —> Vận tốc an toàn
// 70 —> Vận tốc an toàn
// 75 —> Bạn đã bị phạt: 30000đ
// 99 —> Bạn đã bị phạt: 150000đ
// 120 —> Bạn đã bị tước giấy phép lái xe

//var input = prompt("Nhap dau vao");
var input = 75
input = +input;
if(input <= 70)
{
    console.log("Vận tốc an toàn");
}
else if(input > 70 && input <= 100) 
{
    moneyerror = Math.floor((input - 70) / 5) * 30000;
    console.log('Bạn đã bị phạt: ' + moneyerror + "đ");
}
else
{
    console.log("Bạn đã bị tước giấy phép lái xe")
}
console.log("------------------");
// Đề bài: Viết hàm kiểm tra và chỉ in ra các cặp key, value có value là kiểu string.
// oVí dụ:
// oconst person = {
// o  name: "Le Van A",
// o  age: 40,
// o  height: 175,
// o  country: "Viet Nam",
// o  designation: "UI Developer",
// o};
// o// In ra:
// o// name : Le Van A
// o// country : Viet Nam
// o// designation : UI Developer
// o// ----------
// o
// oconst technology = {
// o  name: "JavaScipt",
// o  version: 6,
// o  purpose: "Scripting language for Web",
// o  developer: "Netscape Corporation",
// o};
// o// In ra:
// o// name : JavaScipt
// o// purpose : Scripting language for Web
// o// developer : Netscape Corporation
// ----------

const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
    };

for (item in person)
{
    if(typeof person[item] == "string")
    {
        console.log(item + " : " + person[item]);
    }
}
const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
};
for (item in technology)
    {
        if(typeof technology[item] == "string")
        {
            console.log(item + " : " + technology[item]);
        }
    }
    console.log(technology.name)
console.log("------------------");
// Câu 05: Số nguyên tố
// Đề bài:
// oViết chương trình nhập vào 1 số n. Dùng vòng lặp để lặp từ 2 đến n, kiểm tra xem các số đó có phải là số nguyên tố hay không? Nếu là số nguyên tố thì in ra: "Số nguyên tố: " + Số đó.
// oSố nguyên tố hay còn gọi là hợp số, đây là tập hợp số tự nhiên chỉ chia hết cho 1 và chính nó. Có thể hiểu một cách đơn giản, với một số tự nhiên lớn hơn 1, nếu ngoài chữ số 1 và bản thân chính số đó thì nó không chia hết cho số nào khác nữa.
// oVí dụ các số: 2, 3, 5, 7, 11, 13, 17, 23, 29,…đều được gọi là số nguyên tố.
// oĐặc biệt, có 2 trường hợp không được xét là nguyên tố đó chính là số 0 và số 1.
function check_so_nguyen_to(n)
{
    for(let i = 2 ; i <= Math.sqrt(n) ; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return n > 1 ;
}
//var input = prompt("Nhap so :")
var input = 30
for (let i = 2 ; i <= input ; i++)
{
    if(check_so_nguyen_to(i))
    {
        console.log("Số nguyên tố : " , i);
    }
}

console.log("------------------");
// Câu 06: 24-Hour Time
// Đề bài:
// oViết một hàm nhận thời gian ở định dạng AM/PM 12 giờ và trả về một chuỗi biểu diễn thời gian ở định dạng 24 giờ.
// oVí dụ: 
// '07:05:45PM' —> '19:05:45'
// '12:40:22AM' —> '00:40:22'
// '12:45:54PM' —> '12:45:54'
// Đáp án:
function chuan_hoa_ngay(hour_day)
{
    let hour = hour_day.slice(0 , 2);
    let phut = hour_day.slice(3 , 5);
    let giay = hour_day.slice(6 , 8) ;
    day = hour_day.slice(8 , 10);
    if(hour == 12)
    {
        hour = 0
    }
    if (day === "PM")
    {
        hour = +hour + 12;
    }
    if (hour < 10)
    {
        hour = "0" + hour;
    }
    return hour + ":" + phut + ":" + giay
}
const day1 = '07:05:45PM'
console.log(chuan_hoa_ngay(day1));
const day2 = '12:40:22AM'
console.log(chuan_hoa_ngay(day2));
const day3 = '12:45:54PM'
console.log(chuan_hoa_ngay(day3));







console.log("------------------");
// Đề bài:
// oKiểm tra 1 năm có phải là năm nhuận hay không? Nếu là năm nhuận trả về true, nếu không thì trả về false.
// oNăm nhuận là: 
// Chia hết cho 4 được và không chia hết cho 100 được.
// Chia hết cho 100 sẽ được coi là năm nhuận nếu chúng cũng chia hết cho 400.
// oVí dụ: 
// leapYear(2016) —> true
// leapYear(2000) —> true
// leapYear(1700) —> false
// leapYear(1800) —> false
// leapYear(100) —> false
// Đáp án:

function check_leap_year(n)
{
    if(n % 100 === 0)
    {
        if(n % 400 === 0)
        {
            return true;
        }
        return false;
    }
    else
    {
        if(n % 4 == 0)
        {
            return true;
        }
        return false;
    }
}

console.log(check_leap_year(2016));
console.log(check_leap_year(2000));
console.log(check_leap_year(1700));
console.log(check_leap_year(1800));
console.log(check_leap_year(100));
console.log("------------------");

// Câu 08: Lấy đuôi mở rộng của một file.
// Đề bài:
// oViết một hàm để lấy được đuôi mở rộng của 1 file bất kỳ.
// oVí dụ: 
// test.html --> html
// abc.java --> java
// xyz.js --> js
// Đáp án:
function tach(string)
{
    let list = string.split(".");
    let tmp = list[list.length - 1];
    return tmp;
}
var test1 = "test.html";
console.log(tach(test1));
var test2 = "abc.java";
console.log(tach(test2));
var test3 = "xyz.js";
console.log(tach(test3));

console.log("------------------");
// Câu 09: If Conditions (Điều kiện If)
// Đề bài: Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Việt Nam";
// 
// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Thái Lan") {
//   price -= 40;
// } else if (country === "Hàn Quốc") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// 
// console.log(price);
console.log("------------------");
// Câu 12: Lấy ra tên.
// Cho một mảng myFriends, hãy lấy ra danh sách tên bạn bè trong mảng myFriends.
// oInput:
// oconst myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// oOutput:
// o["Nam", "Hùng", "Hòa", "Long"];

const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
let array = [];
for(let i = 0 ; i < myFriends.length ; i++)
{
    if(typeof myFriends[i] === "string")
    {
        array.push(myFriends[i]);
    }
}
console.log(array);
console.log("------------------");
// Bài tập bài 06: Javascript cơ bản (Tiết 2)
// Câu 01: Max number (Tìm số lớn nhất)
// Đề bài:
// oViết hàm truyền vào 2 tham số. Sau đó tìm số lớn nhất trong 2 số đó.
// oVí dụ: 
// 10, 5 —> 10
// 10, 15 —> 15
// 100, 100 —> 100

function search_number_max(a , b)
{
    if (a >= b)
    {
        return a;
    }
    return b;
}

var a = 100 , b = 100;
console.log(search_number_max(a , b));

console.log("------------------");


// Câu 02: Bài toán FizzBuzz
// Đề bài: Viết hàm kiểm tra đầu vào đã cho:
// oNếu đầu vào chia hết cho 3 in ra: "Fizz"
// oNếu đầu vào chia hết cho 5 in ra: "Buzz"
// oNếu đầu vào chia hết cho 3 hoặc 5 in ra: "FizzBuzz"
// oNếu đầu vào KHÔNG chia hết cho 3 hoặc 5 in ra: Giá trị đầu vào
// oNếu đầu vào không phải là kiểu Number in ra: "Vui lòng nhập số!"
// oVí dụ: 
// "one" —> Vui lòng nhập số!
// true —> Vui lòng nhập số!
// 9 —> Fizz
// 10 —> Buzz
// 30 —> FizzBuzz
// 11 —> 11

function isfizzBuzz(arg) {
    if (typeof arg !== "number") {
        return "Vui lòng nhập số!";
    }
    
    if (arg % 3 === 0 && arg % 5 === 0) {
        return "FizzBuzz";
    }
    
    if (arg % 3 === 0) {
        return "Fizz";
    }
    
    if (arg % 5 === 0) {
        return "Buzz";
    } else {
        return arg;
    }
    }
    
    const checkFizzBuzz1 = isfizzBuzz("one");
    console.log(checkFizzBuzz1); // Vui lòng nhập số!
    
    const checkFizzBuzz2 = isfizzBuzz(true);
    console.log(checkFizzBuzz2); // Vui lòng nhập số!
    
    const checkFizzBuzz3 = isfizzBuzz(9);
    console.log(checkFizzBuzz3); // Fizz
    
    const checkFizzBuzz4 = isfizzBuzz(10);
    console.log(checkFizzBuzz4); // Buzz
    
    const checkFizzBuzz5 = isfizzBuzz(30);
    console.log(checkFizzBuzz5); // FizzBuzz
    
    const checkFizzBuzz6 = isfizzBuzz(11);
    console.log(checkFizzBuzz6); // 11

    console.log("------------------");

// Câu 03: Tốc độ giới hạn
// Đề bài: Giả sử một người đi xe ô tô, có vận tốc là x (km/h). Viết hàm kiểm tra đầu vào x:
// oNếu đầu vào x có vận tốc dưới 70km in ra: 'Vận tốc an toàn"
// oNếu đầu vào x có vận tốc trên 70km, cứ vượt quá tốc độ mỗi 5km/h bị phạt 30000đ, in ra: "Bạn đã bị phạt: " + Số tiền bị phạt
// oNếu đầu vào x có vận tốc trên 70km, bị tước giấy phép lái xe, in ra: "Bạn đã bị tước giấy phép lái xe"
// oVí dụ: 
// 40 —> Vận tốc an toàn
// 70 —> Vận tốc an toàn
// 75 —> Bạn đã bị phạt: 30000đ
// 99 —> Bạn đã bị phạt: 150000đ
// 120 —> Bạn đã bị tước giấy phép lái xe

//var input = prompt("Nhap dau vao");
var input = 75
input = +input;
if(input <= 70)
{
    console.log("Vận tốc an toàn");
}
else if(input > 70 && input <= 100) 
{
    moneyerror = Math.floor((input - 70) / 5) * 30000;
    console.log('Bạn đã bị phạt: ' + moneyerror + "đ");
}
else
{
    console.log("Bạn đã bị tước giấy phép lái xe")
}
console.log("------------------");
// Đề bài: Viết hàm kiểm tra và chỉ in ra các cặp key, value có value là kiểu string.
// oVí dụ:
// oconst person = {
// o  name: "Le Van A",
// o  age: 40,
// o  height: 175,
// o  country: "Viet Nam",
// o  designation: "UI Developer",
// o};
// o// In ra:
// o// name : Le Van A
// o// country : Viet Nam
// o// designation : UI Developer
// o// ----------
// o
// oconst technology = {
// o  name: "JavaScipt",
// o  version: 6,
// o  purpose: "Scripting language for Web",
// o  developer: "Netscape Corporation",
// o};
// o// In ra:
// o// name : JavaScipt
// o// purpose : Scripting language for Web
// o// developer : Netscape Corporation
// ----------

const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
    };

for (item in person)
{
    if(typeof person[item] == "string")
    {
        console.log(item + " : " + person[item]);
    }
}
const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
};
for (item in technology)
    {
        if(typeof technology[item] == "string")
        {
            console.log(item + " : " + technology[item]);
        }
    }
    console.log(technology.name)
console.log("------------------");
// Câu 05: Số nguyên tố
// Đề bài:
// oViết chương trình nhập vào 1 số n. Dùng vòng lặp để lặp từ 2 đến n, kiểm tra xem các số đó có phải là số nguyên tố hay không? Nếu là số nguyên tố thì in ra: "Số nguyên tố: " + Số đó.
// oSố nguyên tố hay còn gọi là hợp số, đây là tập hợp số tự nhiên chỉ chia hết cho 1 và chính nó. Có thể hiểu một cách đơn giản, với một số tự nhiên lớn hơn 1, nếu ngoài chữ số 1 và bản thân chính số đó thì nó không chia hết cho số nào khác nữa.
// oVí dụ các số: 2, 3, 5, 7, 11, 13, 17, 23, 29,…đều được gọi là số nguyên tố.
// oĐặc biệt, có 2 trường hợp không được xét là nguyên tố đó chính là số 0 và số 1.
function check_so_nguyen_to(n)
{
    for(let i = 2 ; i <= Math.sqrt(n) ; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return n > 1 ;
}
//var input = prompt("Nhap so :")
var input = 30
for (let i = 2 ; i <= input ; i++)
{
    if(check_so_nguyen_to(i))
    {
        console.log("Số nguyên tố : " , i);
    }
}

console.log("------------------");
// Câu 06: 24-Hour Time
// Đề bài:
// oViết một hàm nhận thời gian ở định dạng AM/PM 12 giờ và trả về một chuỗi biểu diễn thời gian ở định dạng 24 giờ.
// oVí dụ: 
// '07:05:45PM' —> '19:05:45'
// '12:40:22AM' —> '00:40:22'
// '12:45:54PM' —> '12:45:54'
// Đáp án:
function chuan_hoa_ngay(hour_day)
{
    let hour = hour_day.slice(0 , 2);
    let phut = hour_day.slice(3 , 5);
    let giay = hour_day.slice(6 , 8) ;
    day = hour_day.slice(8 , 10);
    if(hour == 12)
    {
        hour = 0
    }
    if (day === "PM")
    {
        hour = +hour + 12;
    }
    if (hour < 10)
    {
        hour = "0" + hour;
    }
    return hour + ":" + phut + ":" + giay
}
const day1 = '07:05:45PM'
console.log(chuan_hoa_ngay(day1));
const day2 = '12:40:22AM'
console.log(chuan_hoa_ngay(day2));
const day3 = '12:45:54PM'
console.log(chuan_hoa_ngay(day3));







console.log("------------------");
// Đề bài:
// oKiểm tra 1 năm có phải là năm nhuận hay không? Nếu là năm nhuận trả về true, nếu không thì trả về false.
// oNăm nhuận là: 
// Chia hết cho 4 được và không chia hết cho 100 được.
// Chia hết cho 100 sẽ được coi là năm nhuận nếu chúng cũng chia hết cho 400.
// oVí dụ: 
// leapYear(2016) —> true
// leapYear(2000) —> true
// leapYear(1700) —> false
// leapYear(1800) —> false
// leapYear(100) —> false
// Đáp án:

function check_leap_year(n)
{
    if(n % 100 === 0)
    {
        if(n % 400 === 0)
        {
            return true;
        }
        return false;
    }
    else
    {
        if(n % 4 == 0)
        {
            return true;
        }
        return false;
    }
}

console.log(check_leap_year(2016));
console.log(check_leap_year(2000));
console.log(check_leap_year(1700));
console.log(check_leap_year(1800));
console.log(check_leap_year(100));
console.log("------------------");

// Câu 08: Lấy đuôi mở rộng của một file.
// Đề bài:
// oViết một hàm để lấy được đuôi mở rộng của 1 file bất kỳ.
// oVí dụ: 
// test.html --> html
// abc.java --> java
// xyz.js --> js
// Đáp án:
function tach(string)
{
    let list = string.split(".");
    let tmp = list[list.length - 1];
    return tmp;
}
var test1 = "test.html";
console.log(tach(test1));
var test2 = "abc.java";
console.log(tach(test2));
var test3 = "xyz.js";
console.log(tach(test3));

console.log("------------------");
// Câu 09: If Conditions (Điều kiện If)
// Đề bài: Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Việt Nam";
// 
// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Thái Lan") {
//   price -= 40;
// } else if (country === "Hàn Quốc") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// 
// console.log(price);
console.log("------------------");
// Câu 12: Lấy ra tên.
// Cho một mảng myFriends, hãy lấy ra danh sách tên bạn bè trong mảng myFriends.
// oInput:
// oconst myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// oOutput:
// o["Nam", "Hùng", "Hòa", "Long"];

const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
let array = [];
for(let i = 0 ; i < myFriends.length ; i++)
{
    if(typeof myFriends[i] === "string")
    {
        array.push(myFriends[i]);
    }
}
console.log(array);
console.log("------------------");
// Bài tập bài 06: Javascript cơ bản (Tiết 2)
// Câu 01: Max number (Tìm số lớn nhất)
// Đề bài:
// oViết hàm truyền vào 2 tham số. Sau đó tìm số lớn nhất trong 2 số đó.
// oVí dụ: 
// 10, 5 —> 10
// 10, 15 —> 15
// 100, 100 —> 100

function search_number_max(a , b)
{
    if (a >= b)
    {
        return a;
    }
    return b;
}

var a = 100 , b = 100;
console.log(search_number_max(a , b));

console.log("------------------");


// Câu 02: Bài toán FizzBuzz
// Đề bài: Viết hàm kiểm tra đầu vào đã cho:
// oNếu đầu vào chia hết cho 3 in ra: "Fizz"
// oNếu đầu vào chia hết cho 5 in ra: "Buzz"
// oNếu đầu vào chia hết cho 3 hoặc 5 in ra: "FizzBuzz"
// oNếu đầu vào KHÔNG chia hết cho 3 hoặc 5 in ra: Giá trị đầu vào
// oNếu đầu vào không phải là kiểu Number in ra: "Vui lòng nhập số!"
// oVí dụ: 
// "one" —> Vui lòng nhập số!
// true —> Vui lòng nhập số!
// 9 —> Fizz
// 10 —> Buzz
// 30 —> FizzBuzz
// 11 —> 11

function isfizzBuzz(arg) {
    if (typeof arg !== "number") {
        return "Vui lòng nhập số!";
    }
    
    if (arg % 3 === 0 && arg % 5 === 0) {
        return "FizzBuzz";
    }
    
    if (arg % 3 === 0) {
        return "Fizz";
    }
    
    if (arg % 5 === 0) {
        return "Buzz";
    } else {
        return arg;
    }
    }
    
    const checkFizzBuzz1 = isfizzBuzz("one");
    console.log(checkFizzBuzz1); // Vui lòng nhập số!
    
    const checkFizzBuzz2 = isfizzBuzz(true);
    console.log(checkFizzBuzz2); // Vui lòng nhập số!
    
    const checkFizzBuzz3 = isfizzBuzz(9);
    console.log(checkFizzBuzz3); // Fizz
    
    const checkFizzBuzz4 = isfizzBuzz(10);
    console.log(checkFizzBuzz4); // Buzz
    
    const checkFizzBuzz5 = isfizzBuzz(30);
    console.log(checkFizzBuzz5); // FizzBuzz
    
    const checkFizzBuzz6 = isfizzBuzz(11);
    console.log(checkFizzBuzz6); // 11

    console.log("------------------");

// Câu 03: Tốc độ giới hạn
// Đề bài: Giả sử một người đi xe ô tô, có vận tốc là x (km/h). Viết hàm kiểm tra đầu vào x:
// oNếu đầu vào x có vận tốc dưới 70km in ra: 'Vận tốc an toàn"
// oNếu đầu vào x có vận tốc trên 70km, cứ vượt quá tốc độ mỗi 5km/h bị phạt 30000đ, in ra: "Bạn đã bị phạt: " + Số tiền bị phạt
// oNếu đầu vào x có vận tốc trên 70km, bị tước giấy phép lái xe, in ra: "Bạn đã bị tước giấy phép lái xe"
// oVí dụ: 
// 40 —> Vận tốc an toàn
// 70 —> Vận tốc an toàn
// 75 —> Bạn đã bị phạt: 30000đ
// 99 —> Bạn đã bị phạt: 150000đ
// 120 —> Bạn đã bị tước giấy phép lái xe

//var input = prompt("Nhap dau vao");
var input = 75
input = +input;
if(input <= 70)
{
    console.log("Vận tốc an toàn");
}
else if(input > 70 && input <= 100) 
{
    moneyerror = Math.floor((input - 70) / 5) * 30000;
    console.log('Bạn đã bị phạt: ' + moneyerror + "đ");
}
else
{
    console.log("Bạn đã bị tước giấy phép lái xe")
}
console.log("------------------");
// Đề bài: Viết hàm kiểm tra và chỉ in ra các cặp key, value có value là kiểu string.
// oVí dụ:
// oconst person = {
// o  name: "Le Van A",
// o  age: 40,
// o  height: 175,
// o  country: "Viet Nam",
// o  designation: "UI Developer",
// o};
// o// In ra:
// o// name : Le Van A
// o// country : Viet Nam
// o// designation : UI Developer
// o// ----------
// o
// oconst technology = {
// o  name: "JavaScipt",
// o  version: 6,
// o  purpose: "Scripting language for Web",
// o  developer: "Netscape Corporation",
// o};
// o// In ra:
// o// name : JavaScipt
// o// purpose : Scripting language for Web
// o// developer : Netscape Corporation
// ----------

const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
    };

for (item in person)
{
    if(typeof person[item] == "string")
    {
        console.log(item + " : " + person[item]);
    }
}
const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
};
for (item in technology)
    {
        if(typeof technology[item] == "string")
        {
            console.log(item + " : " + technology[item]);
        }
    }
    console.log(technology.name)
console.log("------------------");
// Câu 05: Số nguyên tố
// Đề bài:
// oViết chương trình nhập vào 1 số n. Dùng vòng lặp để lặp từ 2 đến n, kiểm tra xem các số đó có phải là số nguyên tố hay không? Nếu là số nguyên tố thì in ra: "Số nguyên tố: " + Số đó.
// oSố nguyên tố hay còn gọi là hợp số, đây là tập hợp số tự nhiên chỉ chia hết cho 1 và chính nó. Có thể hiểu một cách đơn giản, với một số tự nhiên lớn hơn 1, nếu ngoài chữ số 1 và bản thân chính số đó thì nó không chia hết cho số nào khác nữa.
// oVí dụ các số: 2, 3, 5, 7, 11, 13, 17, 23, 29,…đều được gọi là số nguyên tố.
// oĐặc biệt, có 2 trường hợp không được xét là nguyên tố đó chính là số 0 và số 1.
function check_so_nguyen_to(n)
{
    for(let i = 2 ; i <= Math.sqrt(n) ; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return n > 1 ;
}
//var input = prompt("Nhap so :")
var input = 30
for (let i = 2 ; i <= input ; i++)
{
    if(check_so_nguyen_to(i))
    {
        console.log("Số nguyên tố : " , i);
    }
}

console.log("------------------");
// Câu 06: 24-Hour Time
// Đề bài:
// oViết một hàm nhận thời gian ở định dạng AM/PM 12 giờ và trả về một chuỗi biểu diễn thời gian ở định dạng 24 giờ.
// oVí dụ: 
// '07:05:45PM' —> '19:05:45'
// '12:40:22AM' —> '00:40:22'
// '12:45:54PM' —> '12:45:54'
// Đáp án:
function chuan_hoa_ngay(hour_day)
{
    let hour = hour_day.slice(0 , 2);
    let phut = hour_day.slice(3 , 5);
    let giay = hour_day.slice(6 , 8) ;
    day = hour_day.slice(8 , 10);
    if(hour == 12)
    {
        hour = 0
    }
    if (day === "PM")
    {
        hour = +hour + 12;
    }
    if (hour < 10)
    {
        hour = "0" + hour;
    }
    return hour + ":" + phut + ":" + giay
}
const day1 = '07:05:45PM'
console.log(chuan_hoa_ngay(day1));
const day2 = '12:40:22AM'
console.log(chuan_hoa_ngay(day2));
const day3 = '12:45:54PM'
console.log(chuan_hoa_ngay(day3));







console.log("------------------");
// Đề bài:
// oKiểm tra 1 năm có phải là năm nhuận hay không? Nếu là năm nhuận trả về true, nếu không thì trả về false.
// oNăm nhuận là: 
// Chia hết cho 4 được và không chia hết cho 100 được.
// Chia hết cho 100 sẽ được coi là năm nhuận nếu chúng cũng chia hết cho 400.
// oVí dụ: 
// leapYear(2016) —> true
// leapYear(2000) —> true
// leapYear(1700) —> false
// leapYear(1800) —> false
// leapYear(100) —> false
// Đáp án:

function check_leap_year(n)
{
    if(n % 100 === 0)
    {
        if(n % 400 === 0)
        {
            return true;
        }
        return false;
    }
    else
    {
        if(n % 4 == 0)
        {
            return true;
        }
        return false;
    }
}

console.log(check_leap_year(2016));
console.log(check_leap_year(2000));
console.log(check_leap_year(1700));
console.log(check_leap_year(1800));
console.log(check_leap_year(100));
console.log("------------------");

// Câu 08: Lấy đuôi mở rộng của một file.
// Đề bài:
// oViết một hàm để lấy được đuôi mở rộng của 1 file bất kỳ.
// oVí dụ: 
// test.html --> html
// abc.java --> java
// xyz.js --> js
// Đáp án:
function tach(string)
{
    let list = string.split(".");
    let tmp = list[list.length - 1];
    return tmp;
}
var test1 = "test.html";
console.log(tach(test1));
var test2 = "abc.java";
console.log(tach(test2));
var test3 = "xyz.js";
console.log(tach(test3));

console.log("------------------");
// Câu 09: If Conditions (Điều kiện If)
// Đề bài: Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Việt Nam";
// 
// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Thái Lan") {
//   price -= 40;
// } else if (country === "Hàn Quốc") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// 
// console.log(price);
console.log("------------------");
// Câu 12: Lấy ra tên.
// Cho một mảng myFriends, hãy lấy ra danh sách tên bạn bè trong mảng myFriends.
// oInput:
// oconst myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// oOutput:
// o["Nam", "Hùng", "Hòa", "Long"];

const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
let array = [];
for(let i = 0 ; i < myFriends.length ; i++)
{
    if(typeof myFriends[i] === "string")
    {
        array.push(myFriends[i]);
    }
}
console.log(array);
console.log("------------------");
// Bài tập bài 06: Javascript cơ bản (Tiết 2)
// Câu 01: Max number (Tìm số lớn nhất)
// Đề bài:
// oViết hàm truyền vào 2 tham số. Sau đó tìm số lớn nhất trong 2 số đó.
// oVí dụ: 
// 10, 5 —> 10
// 10, 15 —> 15
// 100, 100 —> 100

function search_number_max(a , b)
{
    if (a >= b)
    {
        return a;
    }
    return b;
}

var a = 100 , b = 100;
console.log(search_number_max(a , b));

console.log("------------------");


// Câu 02: Bài toán FizzBuzz
// Đề bài: Viết hàm kiểm tra đầu vào đã cho:
// oNếu đầu vào chia hết cho 3 in ra: "Fizz"
// oNếu đầu vào chia hết cho 5 in ra: "Buzz"
// oNếu đầu vào chia hết cho 3 hoặc 5 in ra: "FizzBuzz"
// oNếu đầu vào KHÔNG chia hết cho 3 hoặc 5 in ra: Giá trị đầu vào
// oNếu đầu vào không phải là kiểu Number in ra: "Vui lòng nhập số!"
// oVí dụ: 
// "one" —> Vui lòng nhập số!
// true —> Vui lòng nhập số!
// 9 —> Fizz
// 10 —> Buzz
// 30 —> FizzBuzz
// 11 —> 11

function isfizzBuzz(arg) {
    if (typeof arg !== "number") {
        return "Vui lòng nhập số!";
    }
    
    if (arg % 3 === 0 && arg % 5 === 0) {
        return "FizzBuzz";
    }
    
    if (arg % 3 === 0) {
        return "Fizz";
    }
    
    if (arg % 5 === 0) {
        return "Buzz";
    } else {
        return arg;
    }
    }
    
    const checkFizzBuzz1 = isfizzBuzz("one");
    console.log(checkFizzBuzz1); // Vui lòng nhập số!
    
    const checkFizzBuzz2 = isfizzBuzz(true);
    console.log(checkFizzBuzz2); // Vui lòng nhập số!
    
    const checkFizzBuzz3 = isfizzBuzz(9);
    console.log(checkFizzBuzz3); // Fizz
    
    const checkFizzBuzz4 = isfizzBuzz(10);
    console.log(checkFizzBuzz4); // Buzz
    
    const checkFizzBuzz5 = isfizzBuzz(30);
    console.log(checkFizzBuzz5); // FizzBuzz
    
    const checkFizzBuzz6 = isfizzBuzz(11);
    console.log(checkFizzBuzz6); // 11

    console.log("------------------");

// Câu 03: Tốc độ giới hạn
// Đề bài: Giả sử một người đi xe ô tô, có vận tốc là x (km/h). Viết hàm kiểm tra đầu vào x:
// oNếu đầu vào x có vận tốc dưới 70km in ra: 'Vận tốc an toàn"
// oNếu đầu vào x có vận tốc trên 70km, cứ vượt quá tốc độ mỗi 5km/h bị phạt 30000đ, in ra: "Bạn đã bị phạt: " + Số tiền bị phạt
// oNếu đầu vào x có vận tốc trên 70km, bị tước giấy phép lái xe, in ra: "Bạn đã bị tước giấy phép lái xe"
// oVí dụ: 
// 40 —> Vận tốc an toàn
// 70 —> Vận tốc an toàn
// 75 —> Bạn đã bị phạt: 30000đ
// 99 —> Bạn đã bị phạt: 150000đ
// 120 —> Bạn đã bị tước giấy phép lái xe

//var input = prompt("Nhap dau vao");
var input = 75
input = +input;
if(input <= 70)
{
    console.log("Vận tốc an toàn");
}
else if(input > 70 && input <= 100) 
{
    moneyerror = Math.floor((input - 70) / 5) * 30000;
    console.log('Bạn đã bị phạt: ' + moneyerror + "đ");
}
else
{
    console.log("Bạn đã bị tước giấy phép lái xe")
}
console.log("------------------");
// Đề bài: Viết hàm kiểm tra và chỉ in ra các cặp key, value có value là kiểu string.
// oVí dụ:
// oconst person = {
// o  name: "Le Van A",
// o  age: 40,
// o  height: 175,
// o  country: "Viet Nam",
// o  designation: "UI Developer",
// o};
// o// In ra:
// o// name : Le Van A
// o// country : Viet Nam
// o// designation : UI Developer
// o// ----------
// o
// oconst technology = {
// o  name: "JavaScipt",
// o  version: 6,
// o  purpose: "Scripting language for Web",
// o  developer: "Netscape Corporation",
// o};
// o// In ra:
// o// name : JavaScipt
// o// purpose : Scripting language for Web
// o// developer : Netscape Corporation
// ----------

const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
    };

for (item in person)
{
    if(typeof person[item] == "string")
    {
        console.log(item + " : " + person[item]);
    }
}
const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
};
for (item in technology)
    {
        if(typeof technology[item] == "string")
        {
            console.log(item + " : " + technology[item]);
        }
    }
    console.log(technology.name)
console.log("------------------");
// Câu 05: Số nguyên tố
// Đề bài:
// oViết chương trình nhập vào 1 số n. Dùng vòng lặp để lặp từ 2 đến n, kiểm tra xem các số đó có phải là số nguyên tố hay không? Nếu là số nguyên tố thì in ra: "Số nguyên tố: " + Số đó.
// oSố nguyên tố hay còn gọi là hợp số, đây là tập hợp số tự nhiên chỉ chia hết cho 1 và chính nó. Có thể hiểu một cách đơn giản, với một số tự nhiên lớn hơn 1, nếu ngoài chữ số 1 và bản thân chính số đó thì nó không chia hết cho số nào khác nữa.
// oVí dụ các số: 2, 3, 5, 7, 11, 13, 17, 23, 29,…đều được gọi là số nguyên tố.
// oĐặc biệt, có 2 trường hợp không được xét là nguyên tố đó chính là số 0 và số 1.
function check_so_nguyen_to(n)
{
    for(let i = 2 ; i <= Math.sqrt(n) ; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return n > 1 ;
}
//var input = prompt("Nhap so :")
var input = 30
for (let i = 2 ; i <= input ; i++)
{
    if(check_so_nguyen_to(i))
    {
        console.log("Số nguyên tố : " , i);
    }
}

console.log("------------------");
// Câu 06: 24-Hour Time
// Đề bài:
// oViết một hàm nhận thời gian ở định dạng AM/PM 12 giờ và trả về một chuỗi biểu diễn thời gian ở định dạng 24 giờ.
// oVí dụ: 
// '07:05:45PM' —> '19:05:45'
// '12:40:22AM' —> '00:40:22'
// '12:45:54PM' —> '12:45:54'
// Đáp án:
function chuan_hoa_ngay(hour_day)
{
    let hour = hour_day.slice(0 , 2);
    let phut = hour_day.slice(3 , 5);
    let giay = hour_day.slice(6 , 8) ;
    day = hour_day.slice(8 , 10);
    if(hour == 12)
    {
        hour = 0
    }
    if (day === "PM")
    {
        hour = +hour + 12;
    }
    if (hour < 10)
    {
        hour = "0" + hour;
    }
    return hour + ":" + phut + ":" + giay
}
const day1 = '07:05:45PM'
console.log(chuan_hoa_ngay(day1));
const day2 = '12:40:22AM'
console.log(chuan_hoa_ngay(day2));
const day3 = '12:45:54PM'
console.log(chuan_hoa_ngay(day3));







console.log("------------------");
// Đề bài:
// oKiểm tra 1 năm có phải là năm nhuận hay không? Nếu là năm nhuận trả về true, nếu không thì trả về false.
// oNăm nhuận là: 
// Chia hết cho 4 được và không chia hết cho 100 được.
// Chia hết cho 100 sẽ được coi là năm nhuận nếu chúng cũng chia hết cho 400.
// oVí dụ: 
// leapYear(2016) —> true
// leapYear(2000) —> true
// leapYear(1700) —> false
// leapYear(1800) —> false
// leapYear(100) —> false
// Đáp án:

function check_leap_year(n)
{
    if(n % 100 === 0)
    {
        if(n % 400 === 0)
        {
            return true;
        }
        return false;
    }
    else
    {
        if(n % 4 == 0)
        {
            return true;
        }
        return false;
    }
}

console.log(check_leap_year(2016));
console.log(check_leap_year(2000));
console.log(check_leap_year(1700));
console.log(check_leap_year(1800));
console.log(check_leap_year(100));
console.log("------------------");

// Câu 08: Lấy đuôi mở rộng của một file.
// Đề bài:
// oViết một hàm để lấy được đuôi mở rộng của 1 file bất kỳ.
// oVí dụ: 
// test.html --> html
// abc.java --> java
// xyz.js --> js
// Đáp án:
function tach(string)
{
    let list = string.split(".");
    let tmp = list[list.length - 1];
    return tmp;
}
var test1 = "test.html";
console.log(tach(test1));
var test2 = "abc.java";
console.log(tach(test2));
var test3 = "xyz.js";
console.log(tach(test3));

console.log("------------------");
// Câu 09: If Conditions (Điều kiện If)
// Đề bài: Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Việt Nam";
// 
// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Thái Lan") {
//   price -= 40;
// } else if (country === "Hàn Quốc") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// 
// console.log(price);
console.log("------------------");
// Câu 12: Lấy ra tên.
// Cho một mảng myFriends, hãy lấy ra danh sách tên bạn bè trong mảng myFriends.
// oInput:
// oconst myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// oOutput:
// o["Nam", "Hùng", "Hòa", "Long"];

const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
let array = [];
for(let i = 0 ; i < myFriends.length ; i++)
{
    if(typeof myFriends[i] === "string")
    {
        array.push(myFriends[i]);
    }
}
console.log(array);
console.log("------------------");