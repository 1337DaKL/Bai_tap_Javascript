// // Câu 01: In ra từng phần tử của mảng
// // Đề bài:
// // oViết một hàm đặt tên là forEachTest(array, callback) nhận vào hai tham số: 
// // Tham số đầu tiên là một mảng.
// // Tham số thứ hai là một hàm callback (Đặt tên cho hàm callback là consoleLog()).
// // oGọi hàm callback consoleLog() này với từng phần tử của mảng array sau đó in ra màn hình console từng phần tử của mảng đó.
// // oVí dụ: 
// // Mảng [1, 2, 3, 4, 5] trả về: 
// // 1
// // 2
// // 3
// // 4
// // 5
// // Mảng ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"] trả về: 
// // Lê Văn A
// // Nguyễn Thị B
// // Đỗ Thị C


// // Ham in ra phan tu
// const consoleLog = (test) => {
//     console.log(test);
// }
// // ham duyet qua mang va in ra tung phan tu bang callback
// const forEachTest = (array , callback) => {
//     array.forEach((test) => {
//         callback(test);
//     })
// }
// //in
// const arrayName = ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"] ;
// forEachTest(arrayName , consoleLog); 

// // Câu 02: Cộng từng cặp phần tử liên tiếp của mảng
// // Đề bài:
// // oViết một hàm có tên forEachPair() nhận vào hai tham số: 
// // Tham số đầu tiên là một mảng.
// // Tham số thứ hai là một hàm callback (Đặt tên cho hàm callback là consoleLog()).
// // oGọi hàm callback consoleLog() này với từng cặp phần tử liên tiếp của mảng array sau đó in ra màn hình console tổng của từng cặp phần tử liên tiếp đó.


// const forEachPair = (array , callback) => {
//     for(let i = 0 ; i < array.length - 1 ; i++)
//     {
//         const sum = array[i] + array[i + 1];
//         callback(sum);
//     }
// }
// const consoleLog = (sumIndex) => {
//     console.log(sumIndex);
// }

// const arrayFirst =  [1, 2, 3, 4, 5] ;
// const arraySecond =  [5, 20, 30, 60, 90];
// forEachPair(arrayFirst , consoleLog);//3 , 5 , 7 , 9
// forEachPair(arraySecond , consoleLog);//25 , 50 , 90 , 150





// // Câu 03: Trả về một số nguyên ngẫu nhiên từ 1 đến 10
// // Đề bài:
// // oTạo một Promise đơn giản để trả về một số nguyên ngẫu nhiên từ 1 đến 10.
// // oNếu random có trả ra giá trị thì in ra dòng: "Số ngẫu nhiên: 8" (Với 8 là một số ngẫu nhiên).
// // oNếu random không thành công thì in ra dòng: "Lỗi: Không thể tạo số ngẫu nhiên."
// // oGợi ý: Dùng Math.random() để tạo ra một số random. (Đọc thêm tại: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
// // oVí dụ: 
// // Random ra số 8 —> Số ngẫu nhiên: 8
// // Random ra undefined —> Lỗi: Không thể tạo số ngẫu nhiên.
// // Đáp án:

// const getNumberRandoom = () => {
//     return new Promise((resolve , reject) => {
//         const numberRandoom = Math.floor(Math.random() * (11 - 1) + 1);
//         if(numberRandoom === undefined)
//         {
//             reject("Khong the tao ra so !!");
//         }
//         else
//         {
//             resolve(numberRandoom);
//         }
//     })
// }

// getNumberRandoom()
//     .then((number) => {
//         console.log(`So ngau nhien: ${number}`);
//     })
//     .catch((error) => {
//         console.log(`Loi: ${error}`);
//     })




// // Câu 04: Lấy danh sách các số chẵn
// // Đề bài:
// // oTạo một Promise để lấy danh sách các số chẵn từ một mảng các số nguyên cho trước.
// // oNếu trong mảng đó có số chẵn thì in ra mảng mới gồm các số chẵn lấy được từ mảng đó.
// // oNếu trong mảng đó không có số chẵn thì in ra thông báo: "Lỗi: Không tìm thấy số chẵn."
// // oVí dụ: 
// // Truyền vào mảng [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] trả về [2, 4, 6, 8, 10].
// // Truyền vào mảng [11, 13, 15, 17, 19] trả về "Lỗi: Không tìm thấy số chẵn.".
// // Đáp án:

// const getNumberChan = (array) => {
//     return new Promise((resolve , reject) => {
//         const checkArray = array.some((test) => {
//             return test % 2 === 0;
//         })
//         if(checkArray)
//         {
//             const arrayNew = array.filter((tmp) => {
//                 return tmp % 2 === 0;
//             })
//             resolve(arrayNew);
//         }
//         else
//         {
//             reject("Loi: Khong tim thay so chan");
//         }
//     })
// }
// const array1  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //[2, 4, 6, 8, 10]
// const array2 = [11, 13, 15, 17, 19] // Loi: Khong tim thay so chan
// getNumberChan(array2)
//     .then((reponse) => {
//         console.log(reponse);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// // Câu 05: Lấy data thông qua API và in ra màn hình.
// // Đề bài:
// // oAPI danh sách các nước trên thế giới: https://restcountries.com/v2/all
// // oVẽ ra giao diện danh sách các nước trên thế giới: bao gồm thủ đô, tên nước, quốc kỳ.
// // oGiao diện hiển thị:
 
// // Đáp án:


// const fetchApi = async (api) => {
//     const data = await fetch(api);
//     const dataJs = await data.json();
//     return dataJs;
// }

// fetchApi("https://restcountries.com/v2/all")
//     .then((reponse) => {
//         const arrayCountry = reponse.map((item) => {
//             return `
//                 <div class="inner-item">
//                     <div class="inner-box">
//                         <img class="inner-image" src="${item.flag}" alt="${item.capital} - ${item.name}" />
//                         <div class="inner-title">
//                             ${item.capital} - ${item.name}
//                         </div>
//                     </div>
//                 </div>
//             `;
//         }).join("");
//         const inputCountry = document.querySelector("#country");
//         inputCountry.innerHTML = arrayCountry;
//     })
//     .catch(() => {
//         console.log("Khong lay duoc du lieu!!");
//     })


// Câu 06: Lấy địa chỉ IP của người dùng
// Đề bài: 
// oLấy địa chỉ IP của người dùng khi người dùng truy cập vào website của bạn.
// oĐể lấy địa chỉ IP của người dùng bằng Fetch API trong JavaScript, bạn có thể sử dụng dịch vụ cung cấp thông tin địa chỉ IP, như link api https://api.ipify.org?format=json




const getId = async (api) => {
    const data = await fetch(api);
    const dataJS = await data.json();
    return dataJS;
}

getId("https://api.ipify.org?format=json")
    .then((data) => {
        const divId = document.querySelector("#id-member");
        const ipMember = data.ip;
        divId.innerHTML = ipMember;
    })
    .catch((erro) => {
        console.log("Loi!!");
    })


//<<-----------------------------------------------<<--1337_DaKL-->>----------------------------------------------->>