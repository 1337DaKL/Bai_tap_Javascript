// I : CALL BACK


// VI DU 1 :
const fuc1 = () => {
    console.log("call 1");
}
const fuc2 = (callback) => {
    console.log("call 2");
    callback();
}

fuc2(fuc1);

// VI DU 2 : 

const kiemTraTinhChanLe = (number) => {
    if(number % 2 === 0)
    {
        console.log("Day la so chan");
    }
    else
    {
        console.log("Day la so le");
    }
}
const kiemTraSoDuong = (number) => {
    if(number >= 0)
    {
        console.log("Day la so duong");
    }
    else
    {
        console.log("Day la so am");
    }
}
const tinhTong = (a , b , callback) => {
    const tong = a + b;
    callback(tong);
}

tinhTong(4 , 5 , kiemTraSoDuong) // Day la so duong
tinhTong(4 , 5 , kiemTraTinhChanLe) // Day la so le
tinhTong(4 , 5 , (number) => {
    kiemTraSoDuong(number); // Day la so duong
    kiemTraTinhChanLe(number);//Day la so le
}) 

// VI DU 3 :

import {kiemTraSoDuong} from "./helpers/hamKiemTraSoDuong.js";
import {kiemTraTinhChanLe} from "./helpers/hamKiemTraTinhChanLe.js"
import {tinhTong} from "./helpers/hamTinhTong.js";


tinhTong(4 , 5 , kiemTraSoDuong) // Day la so duong
tinhTong(4 , 5 , kiemTraTinhChanLe) // Day la so le
tinhTong(4 , 5 , (number) => {
    kiemTraSoDuong(number); //Day la so duong
    kiemTraTinhChanLe(number); //Day la so le
})


// VI DU 4 : CHECK LOGIN

//Ham in ra thong bao
const notifition = (string) => {
    console.log(string)
} 

//Ham kiem tra dang nhap
const checkLogin = (data , callback) => {
    const email = "test@gmail.com";
    const passworld = "1234";
    if(data.email === email && data.passworld === passworld)
    {
        callback("Dang nhap thanh cong");
    }
    else
    {
        callback("Tai khoan hoac mat khau khong chinh xac !!");
    }
}

//Du lieu nguoi dung
const data = {
    email : "test@gmail.com",
    passworld : "123"
}

// kiem tra
checkLogin(data , notifition);



// II : PROMISE

//VI DU 1 
const promise = new Promise((resolve , reject) => {
    if(a === undefined) 
    {
        reject();
    }
    else
    {
        resolve();
    }
})

promise
    .then(() => {
        console.log("Thanh cong!!");
    })
    .catch(() => {
        console.log("Co loi!!");
    })
    .finally(() => {
        console.log("Luon chay vao ham nay!!");
    })


// VI DU 2;


const a = 1
const promise = new Promise((resolve , reject) => {
    if(a === undefined)
    {
        reject();
    }
    else
    {
        resolve(a);
    }
});

promise
    .then((a) => {
        console.log(a);
        return a
    })
    .then((a) => {
        const b = a + 10;
        console.log(b);
        return b;
    })
    .then((b) => {
        const c = b * 11;
        console.log(c);
        return c;
    })
    .catch(() => {
        console.log("Loi tum lum !!");
    })



/// VI DU 3 : DEMO LOI DU AN

const promise = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve(10);
    } , 3000)
})

setTimeout(() => {
    console.log(`Giay thu nhat : ${promise}` , promise);
}, 1000);
setTimeout(() => {
    console.log(`Giay thu hai : ${promise}`  , promise);
}, 2000);
setTimeout(() => {
    console.log(`Giay thu ba : ${promise}` , promise);
}, 3000);




//III : FETCH


fetch("https://dummyjson.com/c/5acc-f3a4-41a0-b48a")
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        let array = data.map((tmp) => {
            return `<li>STT :${tmp.id} <br><div>Product: <br>${tmp.quote}<br>Author: ${tmp.author}</div></li>`;
        }).join("");
        let div = document.querySelector("#id");
        div.innerHTML = array;
        console.log(data);
    })
    .catch((error) => {
        console.log("Loi tum lum !!");
    });