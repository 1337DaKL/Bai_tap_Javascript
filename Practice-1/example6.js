// Câu 01: Ví dụ về hoisting biến
// Đề bài: Dự đoán kết quả console của đoạn code sau.
// var x = 5;
// console.log(x + y); 5 + undefine = NaN;
// var y = 10;


//NaN


// Câu 02: Ví dụ về hoisting hàm
// Đề bài: Dự đoán kết quả console của đoạn code sau.
// foo();
// function foo() {
//   console.log("Hello");
// }

//Hello

// 3: Ví dụ về hoisting với khối mã (block scope)
// Đề bài: Dự đoán kết quả console của đoạn code sau.
// function foo() {
//   if (true) {
//     var x = 5;
//   }
//   console.log(x);
// }
// foo();

// 5

// Câu 04: Ví dụ về hoisting với let và const (block scope)
// Đề bài: Dự đoán kết quả console của đoạn code sau.
// function foo() {
//   if (true) {
//     let x = 5;
//     const y = 10;
//   }
//   console.log(x); x not define vì let chỉ có trong phạm vi một khối mã và đó là khối if
//   console.log(y); y not define vi const cung nhu trên
// }
// foo();


// Câu 05: Ví dụ về hoisting với hàm trong một khối mã
// Đề bài: Dự đoán kết quả console của đoạn code sau.
// function foo() {
//   if (true) {
//     function bar() {
//       console.log("Hello");
//     }
//     bar(); // Hello
//   }
//   bar(); //Hello
// }
// foo();




// Câu 06: Ví dụ về hoisting với hàm trong một khối mã (let)
// Đề bài: Dự đoán kết quả console của đoạn code sau.
// function foo() {
//   if (true) {
//     let bar = function () {
//       console.log("Hello");
//     };
//     bar(); Hello vì cùng 1 khối mã và hàm bar khai báo lên đầu
//   }
//   bar(); // bar not define _____
// }
// foo();


// onó chỉ có hiệu lực trong phạm vi khối mã đó.
// Câu 07: Ví dụ về hoisting trong vòng lặp
// Đề bài: Dự đoán kết quả console của đoạn code sau.
// // Dùng từ khóa var
// for (var i = 0; i < 5; i++) {
//   console.log(i);  // 0, 1, 2, 3, 4; vì vòng lặp từ 0 đến 4 sau khi lặp thì ta thấy i ++ nên i đã lên 5
// }
// console.log("i =", i); // vì ta thấy biến i là var nen biến khai báo taonf cục ngoài khối mã for cũng dùng được nên lúc này i = 5;
// 
// // Dùng từ khóa let
// for (let j = 0; j < 5; j++) {
//   console.log(j); // 0, 1, 2, 3, 4;
// }
// console.log("j =", j); vì dùng biến let nên chỉ sử dụng trong khối mã vòng lặp for nên khi console.log ra thì có nghĩa là in ra 1 biến chưa khai báo => // j in not define || j chưa được định nghĩa



// olặp.
// Câu 08: Viết hàm tính toán
// Đề bài: 
// oTạo 1 file có tên math.js. Viết các hàm tổng, hiệu, tích, thương và export các hàm đó.
// oTạo 1 file có tên main.js. Import các hàm tính toán bên trên và tính các phép tính sau: 
// tong(2, 3) —> 5
// hieu(5, 2) —> 3
// tich(2, 3) —> 6
// thuong(6, 2) —> 3


// Đã làm trong file đặt tên giống đề bài




// Câu 09: Trích xuất các thuộc tính từ JSON
// Đề bài:
// oCho một chuỗi JSON như sau:
// oconst dataJSON = `{
// o  "name": "Lê Văn A",
// o  "age": 20,
// o  "email": "levana@gmail.com",
// o  "address": {
// o    "street": "Số 123, đường ABC",
// o    "city": "Hà Nội",
// o    "country": "Việt Nam"
// o  }
// o}`;
// oHãy trích xuất các thuộc tính "name", "email" và "city" và in ra màn hình console.
// Đáp án:

// oCho một chuỗi JSON như sau:


const dataJSON = `{
    "name": "Lê Văn A",
    "age": 20,
    "email": "levana@gmail.com",
    "address": {
        "street": "Số 123, đường ABC",
        "city": "Hà Nội",
        "country": "Việt Nam"
    }
}`;

const dataJs = JSON.parse(dataJSON);
console.log(dataJs.name + " " + dataJs.email + " " + dataJs.address.city);

//Lê Văn A levana@gmail.com Hà Nội





// Câu 10: Xử lý mảng đối tượng JSON
// Đề bài:
// oCho một mảng đối tượng JSON như sau:
// oconst dataJSON = `
// o  [
// o    {
// o      "name": "Lê Văn A",
// o      "age": 30,
// o      "skills": ["JavaScript", "HTML", "CSS"]
// o    },
// o    {
// o      "name": "Nguyễn Thị B",
// o      "age": 25,
// o      "skills": ["Python", "Java", "C++"]
// o    },
// o    {
// o      "name": "Đỗ Văn C",
// o      "age": 35,
// o      "skills": ["Ruby", "PHP", "SQL"]
// o    }
// o  ]
// o`;
// oHãy tạo một mảng mới chứa tên của tất cả các người trong mảng ban đầu: ["Lê Văn A", "Nguyễn Thị B", "Đỗ Văn C"].
// Đáp án:

const dataJSON = `
    [
        {
            "name": "Lê Văn A",
            "age": 30,
            "skills": ["JavaScript", "HTML", "CSS"]
        },
        {
            "name": "Nguyễn Thị B",
            "age": 25,
            "skills": ["Python", "Java", "C++"]
        },
        {
            "name": "Đỗ Văn C",
            "age": 35,
            "skills": ["Ruby", "PHP", "SQL"]
        }
    ]
`;

const dataJs = JSON.parse(dataJSON);

const arrayName = dataJs.map((tmp) => {
    return tmp.name;
});

console.log(arrayName);
['Lê Văn A', 'Nguyễn Thị B', 'Đỗ Văn C']








// Câu 11: Tính tổng giá trị đơn hàng
// Đề bài:
// oCho 2 chuỗi JSON chứa thông tin đơn hàng (ordersJSON) và thông tin sản phẩm (productsJSON):
// oconst ordersJSON = `
// o  [
// o    {
// o      "id": 1,
// o      "items": [
// o        {
// o          "productId": 1,
// o          "quantity": 2
// o        },
// o        {
// o          "productId": 2,
// o          "quantity": 1
// o        }
// o      ]
// o    },
// o    {
// o      "id": 2,
// o      "items": [
// o        {
// o          "productId": 3,
// o          "quantity": 3
// o        }
// o      ]
// o    }
// o  ]
// o`;
// o
// oconst productsJSON = `
// o  [
// o    {
// o      "id": 1,
// o      "name": "iPhone 12",
// o      "price": 1200
// o    },
// o    {
// o      "id": 2,
// o      "name": "Samsung Galaxy S21",
// o      "price": 1000
// o    },
// o    {
// o      "id": 3,
// o      "name": "Google Pixel 5",
// o      "price": 900
// o    }
// o  ]
// o`;
// oViết một hàm có tên calculateOrderTotal() nhận vào một id đơn hàng và tính tổng giá trị của đơn hàng đó, sử dụng thông tin từ mảng đối tượng JSON "ordersJSON" và "productsJSON".
// oVí dụ:
// calculateOrderTotal(1) —> 3400
// calculateOrderTotal(2) —> 2700
// calculateOrderTotal(3) —> Không tìm thấy đơn hàng.
// Đáp án:

const ordersJSON = `
    [
        {
            "id": 1,
            "items": [
                        {
                            "productId": 1,
                            "quantity": 2
                        },
                        {
                            "productId": 2,
                            "quantity": 1
                        }
                    ]
        },
        {
            "id": 2,
            "items": [
                        {
                            "productId": 3,
                            "quantity": 3
                        }
                    ]
        }
    ]
`;

const productsJSON = `
    [
        {
            "id": 1,
            "name": "iPhone 12",
            "price": 1200
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S21",
            "price": 1000
        },
        {
            "id": 3,
            "name": "Google Pixel 5",
            "price": 900
        }
    ]
`;

const calculateOrderTotal = (idOrder) => {
    const ordersJs = JSON.parse(ordersJSON);
    const productsJs = JSON.parse(productsJSON);
    const order = ordersJs.find((tmp) => {
        return tmp.id === idOrder;
    });
    if (order)
    {
        let total = 0;
        for(const item of order.items)
        {
            const product = productsJs.find((tmp) => {
                return item.productId === tmp.id;
            });
            if(product)
            {
                total += (product.price * item.quantity);
            }
        }
        return total;
    }
    else
    {
        return "Không tìm thấy đơn hàng.";
    }
};

console.log(calculateOrderTotal(1)); //3400
console.log(calculateOrderTotal(2)); //2700
console.log(calculateOrderTotal(3)); //Không tìm thấy đơn hàng.



// Câu 12: Xóa sản phẩm từ JSON
// Đề bài:
// oCho một mảng đối tượng JSON chứa thông tin các sản phẩm:
// olet productsJSON = `
// o  [
// o    {
// o      "id": 1,
// o      "name": "iPhone 12",
// o      "price": 1200
// o    },
// o    {
// o      "id": 2,
// o      "name": "Samsung Galaxy S21",
// o      "price": 1000
// o    },
// o    {
// o      "id": 3,
// o      "name": "Google Pixel 5",
// o      "price": 900
// o    }
// o  ]
// o`;
// oViết một hàm có tên deleteProduct() nhận vào id của một sản phẩm và xóa sản phẩm đó khỏi mảng JSON "productsJSON" và cập nhật lại mảng.
// oVí dụ:
// deleteProduct(2) —> [{"id":1,"name":"iPhone 12","price":1200},{"id":3,"name":"Google Pixel 5","price":900}]





let productsJSON = `
    [
        {
            "id": 1,
            "name": "iPhone 12",
            "price": 1200
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S21",
            "price": 1000
        },
        {
            "id": 3,
            "name": "Google Pixel 5",
            "price": 900
        }
    ]
`;

let productsJs = JSON.parse(productsJSON);

const deleteProduct = (idProduct) => {
    const arrayProducts = productsJs.filter((tmp) => {
        return tmp.id !== idProduct;
    });
    return JSON.stringify(arrayProducts);
};
console.log(deleteProduct(2));//"[{"id":1,"name":"iPhone 12","price":1200},{"id":3,"name":"Google Pixel 5","price":900}]"


// Câu 13: Tính tổng số lượng sản phẩm từ JSON
// Đề bài: 
// oCho một mảng đối tượng JSON chứa thông tin các sản phẩm:
// oconst productsJSON = `
// o  [
// o    {
// o      "id": 1,
// o      "name": "iPhone 12",
// o      "quantity": 10
// o    },
// o    {
// o      "id": 2,
// o      "name": "Samsung Galaxy S21",
// o      "quantity": 5
// o    },
// o    {
// o      "id": 3,
// o      "name": "Google Pixel 5",
// o      "quantity": 8
// o    }
// o  ]
// o`;
// oViết một hàm calculateTotalQuantity() để tính tổng số lượng sản phẩm từ mảng đối tượng JSON.
// oVí dụ:
// calculateTotalQuantity() —> 23




const productsJSON = `
    [
        {
            "id": 1,
            "name": "iPhone 12",
            "quantity": 10
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S21",
            "quantity": 5
        },
        {
            "id": 3,
            "name": "Google Pixel 5",
            "quantity": 8
        }
    ]
`;

const calculateTotalQuantity = () => {
    const productsJs = JSON.parse(productsJSON);
    return totalQuantity = productsJs.reduce((first , tmp) => {
        return first + tmp.quantity;
    } , 0)
};
console.log(calculateTotalQuantity()); //23



