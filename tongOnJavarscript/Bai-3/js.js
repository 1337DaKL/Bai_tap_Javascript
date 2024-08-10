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



const getCauTriTotNhat = (array , thietBi)