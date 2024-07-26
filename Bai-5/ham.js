// var x = 5
// var b = 3
// console.log("++x = ", ++x); 
// console.log("x++ = ", x++); 
// console.log("x = ", x);
// console.log("--x = ", --x);
// console.log("x-- = ", x--);
// console.log("x = ", x);
// console.log(2 !== '2'); // true
// console.log(2 !== 2);

// var  value1 = "one";
// var value2 = "two" ;
// console.log("value1 = " , value1);
// console.log("value2 = " , value2);

// var value3 = value1
// value1 = value2
// value2 = value3
// console.log("value1 = " , value1);
// console.log("value2 = " , value2);

//Câu 6 :
// function dien_tich_can_tim(r)
// {
//     dien_tich_hinh_vuong_to = 4 * (r ** 2);
//     dien_tich_hinh_vuong_nho = 2 * (r ** 2);
//     return dien_tich_hinh_vuong_to - dien_tich_hinh_vuong_nho;
// }

// var r = 7 ;
// console.log("s = " , dien_tich_can_tim(r));

// console.log("28tech hay qua")
// var value1 = prompt("Nhap n :" , 0)
// console.log(value1)

//bai 7
// function checkpalindrome(string)
// {
//     var stringlat = string.split("").reverse().join("");
//     return string === stringlat;
// }

// console.log(checkpalindrome("cicic"));
// console.log(checkpalindrome("solos"));
// console.log(checkpalindrome("test"));
// console.log(checkpalindrome("hello"));
// console.log(checkpalindrome("rotavator"));

// // Bai 8
// console.log(typeof "Le Van A"); 
// //string
// console.log(typeof 5000);
//  //number
// console.log(typeof 5000.99);
//  // number
// console.log(typeof [10, 15, 17]);
// // object
// console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" }); // object
// console.log(typeof true); // bool
// console.log(typeof false); // bool
// console.log(typeof undefined);// underfined
// console.log(typeof null);//object
// Cau 10

    // var a = 10;

    // a = a + 20;
    // console.log(a); // 30

    // a = a + 70; // 100
    // console.log(a);

    // a += 100; //200
    // console.log(a);

    // a -= 50; // 150
    // console.log(a);

    // a /= 50; // 3
    // console.log(a);
    // var img = "<https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png>";
    // var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn";
    // var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
    // var url = "<https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon>";
    
    // var string = `
    //   <div class="article">
    //     <a href="${url}">
    //     <div class="inner-image">
    //       <img src="${img}" />
    //     </div>
    //     <div class="inner-content">
    //       <h2 class="inner-title">${title}</h2>
    //       <p class="inner-desc">${desc}</p>
    //     </div>
    //     </a>
    //   </div>
    // ;
    
    // console.log(string);

// var a = 10;  // 12
// var b = "20"; //22
// var c = 80;  //81
// var test1 = ++a + +b++ + +c++ - +a++;
// console.log(test1);//11 + 20 + 80 - 11  = 100
// console.log(a, b, c);// 12 21 81
// console.log("------------"); //------------

// var test2 = ++a + -b + +c++ - -a++ + +a;
// console.log(test2); // 13 + -21 + 81  - -13 + 14 = 100
// console.log(a, b, c); // 14 , 21 , 82
// console.log("------------");//------------


// var test3 = --c + +b + --a * +b++ - +b * a + --a - +true;
// console.log(test3);// 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
// console.log(a, b, c);//12 , 22 , 81
// console.log("------------");

//BAI 13


// console.log(Math.round(99.2));//99
// console.log(Math.round(99.5)); //100

// console.log(Math.ceil(99.2));//100

// console.log(Math.floor(99.9));//99

// console.log(Math.min(10, 20, 100, -100, 90)); // -100

// console.log(Math.max(10, 20, 100, -100, 90)); // 100

// console.log(Math.pow(2, 4)); // 16

// console.log(Math.random());//0,123456789

// console.log(Math.trunc(99.5)); // 99 

//Câu 14: String Methods (1)
//Đề bài: Phỏng đoán kết quả của console.log().
// var theName = "  28Tech  ";

// console.log(theName);//”  28Tech  “
// console.log(theName[1]);//” “
// console.log(theName[5]);//”e”

// console.log(theName.charAt(1));//” “
// console.log(theName.charAt(5));//”e”

// console.log(theName.length)//10

// console.log(theName.trim());//”28Tech”

// console.log(theName.toUpperCase());//”28TECH”
// console.log(theName.toLowerCase());//”28tech”

// console.log(theName.trim().charAt(5).toUpperCase()); //”H”

//Đề bài: Phỏng đoán kết quả của console.log().
// var a = "Daca.vn - Professional Web Design Design";

// console.log(a.indexOf("Web")); // 23
// console.log(a.indexOf("Web", 24)); // -1
// console.log(a.indexOf("vn"));// 5

// console.log(a.lastIndexOf("Design")); // 34

// console.log(a.slice(10, 22));//”Professional”
// console.log(a.slice(-16, -10));//”Design”

// console.log(a.split("", 7));//[“Daca.vn” , “-” , “Professional” , “Web” , “Design” , “Design”]

//Câu 16: Comparison Operators (Toán tử so sánh)
//Đề bài: Phỏng đoán kết quả của console.log().
// console.log(10 == "10"); // true
// console.log(-100 == "-100"); // true
// console.log(10 != "10"); // false

// console.log(10 === "10"); // false
// console.log(10 !== "10"); // true
// console.log(10 !== 10); // false

// console.log(10 > 20); // false
// console.log(10 > 10); // false
// console.log(10 >= 10); // true

// console.log(10 < 20); // true
// console.log(10 < 10); // false
// console.log(10 <= 10); // true

// console.log(typeof "Daca.vn" === typeof "Nam Dang"); // true


//Câu 17: Logical Operators (Toán tử logic)
//Đề bài: Phỏng đoán kết quả của console.log().
// console.log(true);// true

// console.log(!true);// false

// console.log(!(10 == "10")); //false

// console.log((10 == "10") && (10 > 8) && (10 > 50)); //false

// console.log((10 == "10") || (10 > 80) || (10 > 50)); //true




//Câu 18: Add And Remove From Array
//Đề bài: Phỏng đoán kết quả của console.log().
// //Ví dụ 1:
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.unshift("Vu Van E", "Nguyen Van F");
// console.log(myFriends);//["Vu Van E", "Nguyen Van F" , "Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"]

// //Ví dụ 2:
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.push("Vu Van E", "Nguyen Van F");
// console.log(myFriends);//["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D" , "Vu Van E", "Nguyen Van F"];
// // Ví dụ 3
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.shift();
// console.log(myFriends); //[ "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// //Ví dụ 4:
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.pop();
// console.log(myFriends); //["Le Van A", "Nguyen Thi B", "Do Van C"]