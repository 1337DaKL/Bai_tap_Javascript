// // b1 
// const maxNumber = (a , b) => {
//     return Math.max(a , b);
// }

// console.log(maxNumber(2 , 4));


// const maxArray = (array) => {
//     return Math.max(...array);
// }

// const arrayy = [1 , 2 , 4, 6, 7, 8 ,19];
// console.log(maxArray(arrayy));


// //b2
// const fizzBuzz = (n) => {
//     if(isNaN(n))
//     {
//         console.log("Vui long nhap so!!");
//     }
//     else
//     {
//         if(n % 3 === 0 && n % 5 ===  0)
//             {
//                 console.log("FizzBuzz");
//             }
//             else if(n % 3 === 0)
//             {
//                 console.log("Fizz");
//             }
//             else if(n % 5 === 0 )
//             {
//                 console.log("Buzz");
//             }
//             else
//             {
//                 console.log(n);
//             }
//     }
// }

// const input = parseFloat(prompt("Nhap so cua ban:"));
// fizzBuzz(input);




// bai3
const person = {
    name: "Le Van a",
    age: 40,
    height: 175,
    country: "Viet Nam",
    deginer: "UI developer"
}

for(const item in person)
{
    if(typeof person[item] === "string")
    {
        console.log(item + ": " + person[item]);
    }
}