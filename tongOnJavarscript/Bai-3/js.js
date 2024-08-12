//Bai1
const checkSoNguyenDuong = (value) => {
    return value >= 0 && value % 1 === 0;
}

const number = prompt("Nhap so can kiem tra:");
if(isNaN(number))
{
    alert("Ban can phai nhap so!!")
}
else
{
    if(checkSoNguyenDuong(number))
    {
        alert("YES");
    }
    else
    {
        alert("NO");
    }
}

//Bai2

const kiemTraHinh = (n , array) => {
    if(n<= 2)
    {
        return false;
    }
    const checkCacGoc = array.some((test) => {
        return test <= 0 || test >= 180;
    })
    if(checkCacGoc)
    {
        return false;
    }
    const sum = array.reduce((first , test) => {
        return first + test;
    } , 0)
    if((n - 2)  * 180 !== sum)
    {
        return false;
    }
    return true;
}

const n = parseFloat(prompt("Nhap n:"));
let m = n;
let array = [];
while(m--)
{
    const index = parseFloat(prompt("Nhap tung phan tu cua mang:"));
    array.push(index);
}
console.log(array)

if(kiemTraHinh(n , array))
{
    console.log("true");
}
else
{
    console.log("false");
}


//Bai-3
const tachCau = (string , n) => {
    const array = string.split(" ");
    const arrayString = array.filter((test) => {
        return test.length >= n;
    })
    const stringFristIndex = arrayString.map((test) => {
        return test[0].toUpperCase();
    }).join("")
    return stringFristIndex;
}
console.log(tachCau("Xin chào! Tôi tên là Nam." , 4
));


//Cau 4
const doiChuHoaThanhChuTHuong = (string) => {
    const arrayString = string.split(" ");
    return  arrayString.map((test) => {
        const testArray = test.split("");
        return testArray.map((testt) => {
            if(testt.toUpperCase() === testt)
            {
                return testt.toLowerCase();
            }
            else
            {
                return testt.toUpperCase();
            }
        }).join("");
    }).join(" ");
}

console.log(doiChuHoaThanhChuTHuong("Khổ trước sướng sau thế mới giàu."))

//Cau6:
const getBirthdayCake = (name , age) => {
    let char;
    if(age % 2 === 0)
    {
        char = "#";
    }
    else
    {
        char = "*";
    }
    const nhanBanh = `${char} ${age} CHuc mung sinh nhat ${name}! ${age} ${char}`;
    const voBanh = char.repeat(nhanBanh.length);
    return `
        ${voBanh}
        ${nhanBanh}
        ${voBanh};
    `
}
console.log(getBirthdayCake("Nam" , 18));


//Cau8
const getTotalPrice = (array) => {
    return array.reduce((first , test) => {
        return first + test.quantity * test.price;
    } , 0);
}
const test1 = getTotalPrice([
    { product: "Sữa", quantity: 1, price: 7000 }
]);
console.log(test1); // 7000

const test2 = getTotalPrice([
    { product: "Sữa", quantity: 1, price: 7000 },
    { product: "Ngũ cốc", quantity: 1, price: 50000 },
]);
console.log(test2); // 57000
    
const test3 = getTotalPrice([
    { product: "Sữa", quantity: 3, price: 7000 }
]);
console.log(test3); // 21000
const test4 = getTotalPrice([
    { product: "Sữa", quantity: 1, price: 7000 },
    { product: "Trứng", quantity: 12, price: 3000 },
    { product: "Bánh mỳ", quantity: 2, price: 15000 },
    { product: "Phô mai", quantity: 1, price: 5000 },
]);
console.log(test4); // 78000
const test5 = getTotalPrice([
    { product: "Sô cô la", quantity: 1, price: 12000 },
    { product: "Kẹo", quantity: 1, price: 2000 },
]);
console.log(test5); // 14000

// cauuuuu
const chuyenDoiChuCaiDaiThanhChuHoa = (string) => {
    return string.split(" ").map((test) => {
        return test.slice(0 , 1).toUpperCase() + test.slice(1);
    }).join(" ")
}

console.log(chuyenDoiChuCaiDaiThanhChuHoa("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó."));
console.log(chuyenDoiChuCaiDaiThanhChuHoa("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào."));


//$Recycle.Bin/../



const chooseFuse = (array , thietBi) => {
    const arrayGood = array.map((test) => {
        return parseFloat(test);
    })
    const ok = arrayGood.filter((test) => {
        return test >= parseFloat(thietBi);
    })
    return Math.min(...ok);
}

const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
console.log(test1); // 5V

const test2 = chooseFuse(["5V", "14V", "2V"], "5.5V");
console.log(test2); // 14V

const test3 = chooseFuse(["17V", "15V", "12V"], "9V");
console.log(test3); // 12V



///
// Cach 1

const countOnes = (dicts) => {
    let cnt = 0;
    for(const dict of dicts)
    {
        for(const array of dict)
        {
            if(array === 1)
            {
                cnt += 1;
            }
        }
    }
    return cnt;
}

//Cach 2

const countOnes = (array) => {
    return array.reduce((first , test) => {
        return first + test.reduce((firstT , testT) => {
            return firstT + testT;
        } , 0)
    } , 0)
}
const test1 = countOnes([
    [1, 0],
    [0, 0],
]);
console.log(test1); // 1

const test2 = countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
]);
console.log(test2); // 7
const test3 = countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
]);
console.log(test3); // 2



//$Recycle.Bin/../

const invertedNumbers = ( array) => {
    return array.map((test) => {
        return -test;
    })
}
const test1 = [1, -10, -20, 15, 100, -30];
console.log(invertedNumbers(test1));
// Trả về: [-1, 10, 20, -15, -100, 30];

const test2 = [-20, 30, 10, -25, -60, 20];
console.log(invertedNumbers(test2));
// Trả về: [20, -30, -10, 25, 60, -20];





//Apps/


const ignoreNumbers = (string) =>
{
    return string.split("").map((test) => {
        if(isNaN(parseFloat(test)))
        {
            return test;
        }
        else
        {
            return "";
        }
    }).join("");
}
const test1 = "Test4Ag54SF";
console.log(ignoreNumbers(test1));
// Trả về: TestAgSF

const test2 = "JHk34Gl3gG";
console.log(ignoreNumbers(test2));
// Trả về: JHkGlgG

//kitu


const smallWords =(string , n) => {
    return string.split(" ").filter((test) => {
        return test.length <= n;
    }).join(" ");
}
const test1 = "I Love Foood Code Too Playing Much";
console.log(smallWords(test1, 4));
// Trả về: I Love Code Too Much

const test2 = "I Love Foood Code Too Playing Much";
console.log(smallWords(test2, 3));
// Trả về: I Too


//muto

const multiplyNumberInString = (string) => {
    return string.split("").filter((test) => {
        return !isNaN(parseFloat(test));
    }).reduce((first , index , id , mp) => {
        if(mp.length != 0)
        {
            return first + `${parseFloat(index) * parseFloat(index)}`
        }
        else
        {
            return 0;
        }
    }, "")
}
const test1 = "JG23BGH5BA";
console.log(multiplyNumberInString(test1)); // "4925"

const test2 = "VD23GS8S6AH";
console.log(multiplyNumberInString(test2)); // "496436"

const test3 = "AGD353GDSK8";
console.log(multiplyNumberInString(test3)); // "925964"

const test4 = "JBKJJKLDJ";
console.log(multiplyNumberInString(test4)); // "0"




//
const totalPrice= (array) => {
    return array.reduce((first , test) => {
        return first + test.price* test.quantity;
    }, 0)
}
const cart = [
    { name: "iPhone", price: 1000, quantity: 5 },
    { name: "iPad", price: 500, quantity: 2 },
    { name: "MacBook", price: 2000, quantity: 1 },
];
console.log(totalPrice(cart));
//
const studentClass = (array) => {
    const arrayNam = array.filter((test) => {
        return test.gioiTinh === "Nam";
    }).map((testt) => {
        return testt.hoTen;
    })
    const arrayNu = array.filter((test) => {
        return test.gioiTinh === "Nu";
    }).map((testt) => {
        return testt.hoTen;
    })
    let dict = {};
    dict["Nam"] = arrayNam;
    dict["Nu"] = arrayNu;
    return dict;
}
const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
];
console.log(studentClass(students));
//
///Cach1
const sumByGroup = (array) => {
    return array.map((test) => {
        return test.reduce((first , testt) => {
            return first+ testt;
        },0)
    })
}
//Cach2
const sumByGroup = (array) => {
    return array.map((test) => {
        return Math.sum(...test);
    })
}
const numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(sumByGroup(numbers));
/*
Trả về:
[3, 7, 11];
*/


//
const getDiemTrungBinh = (array) => {
    return array.reduce((first , test) => {
        if(!first[test.lop])
        {
            first[test.lop] = 0;
        }
        first[test.lop] += test.diem;
        return first;
    } , {})
}
const students = [
    { hoTen: "Le Van A", lop: "A", diem: 7.5 },
    { hoTen: "Do Van B", lop: "B", diem: 6.8 },
    { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
    { hoTen: "Dao Van D", lop: "C", diem: 9 },
    { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
    { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
];
console.log(getDiemTrungBinh(students));