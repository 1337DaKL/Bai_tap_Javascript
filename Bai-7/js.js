// Câu 01. Kiểm tra số nguyên dương.
// Đề bài:
// oTheo lý thuyết thì số nguyên dương là tập hợp những số chia hết cho 1 và lớn hơn 0. Tức là dãy số 1, 2, 3 ,4 ,5 ,6 ... chính là các số nguyên dương.
// oDùng hàm prompt để tạo ô nhập và lấy ra giá trị từ ô nhập đó.
// oViết một hàm kiểm tra số nhập vào có phải số nguyên dương hay không? 
// Nếu đúng alert ra YES.
// Nếu sai alert ra NO.
// Đáp án:

function check_so_nguyen_duong(n)
{
    if(n % 1 == 0 && n > 0)
    {
        return 1;
    }
    return false;
}
//let n  = parseInt(prompt("Nhap so n :"));
var n = 0
if(check_so_nguyen_duong(n))
{
    console.log("YES");
}
else
{
    console.log("NO");
}
console.log("------------------------------------")

// Câu 02: Kiểm tra có phải là một hình?
// Đề bài:
// oMột hình gồm n cạnh và n góc. Nhập vào số n và một mảng gồm n phần tử chứa các góc (độ) của một hình (hình tam giác, hình vuông,…).
// oVí dụ:
// Hình tam giá có 3 cạnh, và các góc lần lượt là 80°, 70° và 30°.
// Vậy ta có n = 3 và array=[80, 70, 30]

// oCho người dùng nhập vào n và một mảng gồm n phần tử là các góc. Viết một hàm kiểm tra xem từ số n và mảng đó có thỏa mãn là một hình vẽ hay không?
// Nếu thỏa mãn trả ra true
// Nếu không thỏa mãn trả ra false
// oLưu ý:
// Trả về false nếu n < 3.
// Tổng các góc trong là (n - 2) x 180°.
// oVí dụ:
// n = 4 và array = [90, 90, 90, 90] —> true
// n = 3 và array = [20, 20, 140] —> true
// n = 1 và array = [21] —> false // vì n phải lớn hơn 2
// n = 5 và array = [500, 0, 20, 10, 10] —> false // vì tổng các góc không thể lớn hơn 180° và cũng không có góc nào nhỏ hơn hoặc bằng 0°.
// Đáp án:
n = 4 ;
array = [90, 90, 90, 90];
var tinhtonggoc = (n) => {
    return (n - 2) * 180;
}
var check = (n , array) => {
    var tongarray =  array.reduce((first , tmp) =>{
        return first + tmp;
    } , 0)
    if (n < 3)
    {
        return false;
    }
    if(array.some((tmp) => {
        return tmp <= 0 || tmp >= 180;
    }))return false;
    return tongarray === tinhtonggoc(n);
}
n2 = 3;
array2 = [20, 20, 140];
n3 = 1;
array3 =[21] ;
n4 = 5 ;
array4 = [500, 0, 20, 10, 10];
console.log(check(n , array));
console.log(check(n2 , array2));
console.log(check(n3 , array3));
console.log(check(n4 , array4));

console.log("-------------")
// Câu 03: Viết tắt câu
// Đề bài: 
// oTạo một hàm nhận vào một câu văn và trả về chữ viết tắt của câu văn đó. Lấy tất cả các từ có độ dài lớn hơn hoặc bằng n ký tự và trả về chữ cái đầu tiên của mỗi từ, được viết hoa.
// oVí dụ: 
// "Xin chào! Tôi tên là Nam." —> "XCTTLN"
// "Xin chào! Tôi tên là Nam." và n = 3 —> "XCTTN", Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3
// "Xin chào! Tôi tên là Nam." và n = 4 —> "CN", Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4
// Đáp án: 
string = "Xin chào! Tôi tên là Nam."
array = string.split(" ");
let nho = "";
array.forEach((tmp) => {
    nho += tmp[0].toUpperCase()  ;
});
console.log(nho);

var n = 3
var array_tmp = array.filter((tmp) => {
    return tmp.length >= n; 
});
nho2 = "";
array_tmp.forEach((tmp) => {
    nho2 += tmp[0].toUpperCase();
})
console.log(nho2);

var n2 = 4
var array_tmp_2 = array.filter((tmp) => {
    return tmp.length >= n2; 
});
nho3 = "";
array_tmp_2.forEach((tmp) => {
    nho3 += tmp[0].toUpperCase();
})
console.log(nho3);

console.log("--------------------------")

// Câu 04: AlTeRnAtInG cApS (Thay đổi viết hoa, viết thường)
// Đề bài:
// oTạo một hàm thay đổi kiểu viết (hoa hoặc thường) của các chữ cái trong một chuỗi.
// oViết xen kẽ 1 chữ hoa xong đến 1 chữ thường, lặp đi lặp lại cho đến hết chuỗi.
// oLưu ý: 
// Ký tự đầu tiên phải luôn luôn là HOA.
// Bỏ qua khoảng trắng.
// oVí dụ: 
// "Khá Bảnh" —> "KhÁ bẢnH"
// "Khổ trước sướng sau thế mới giàu." —> "KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu."
// ""Giàu trước khổ sau thế càng đau." —> "GiÀu TrƯớC kHổ SaU tHế CàNg ĐaU."
// Đáp án:

var hoa_thuong = (string) => {
    let cnt = 0;
    let array = string.split("");
    let new_array = array.map((tmp) => {
        if (tmp == " ")
        {
            return tmp;
        }
        cnt ++;
        return cnt % 2 == 1 ? tmp.toUpperCase() : tmp.toLowerCase();
    });
    return new_array;
};

string1 = "Khá Bảnh";
string2 = "Khổ trước sướng sau thế mới giàu.";
string3 = "Giàu trước khổ sau thế càng đau."
console.log(hoa_thuong(string1).join(""));
console.log(hoa_thuong(string2).join(""));
console.log(hoa_thuong(string3).join(""));


console.log("--------------------------")
// Câu 05: Thống kê cơ bản: Trung vị
// Đề bài:
// oTrung vị của một nhóm số là số ở giữa khi nhóm được sắp xếp.
// oNếu kích thước của nhóm là chẵn, trung vị là trung bình cộng của hai số ở giữa.
// oCho một dãy số đã sắp xếp, trả về giá trị trung bình (được làm tròn đến một chữ số thập phân nếu giá trị trung bình không phải là số nguyên).
// oVí dụ: 
// [1, 2, 4, 5, 6, 8, 8, 8, 10] —> 6
// [2, 2, 6, 8, 8, 10, 10] —> 8
// [1, 2, 2, 4, 7, 8, 9, 10] —> 5.5
// Đáp án:







// Câu 06: Bánh sinh nhật
// Đề bài:
// oViết một hàm getBirthdayCake(name, age) để tạo một chiếc bánh sinh nhật hình chữ nhật, dựa trên tên và tuổi của ai đó.
// Nếu tuổi là một số chẵn, hãy vẽ hình bao quanh bằng chữ "#".
// Nếu tuổi là một số lẻ, hãy vẽ hình bao quanh bằng chữ "*".
// Dòng tin nhắn phải ở định dạng: {tuổi} Chúc mừng sinh nhật {tên}! {tuổi}
// Để lại một khoảng trống giữa mép bánh và số tuổi.
// oVí dụ:
// oconst test1 = getBirthdayCake("Nam", 18);
// oconsole.log(test1);
// o/*
// o  ##################################
// o  # 18 Chúc mừng sinh nhật Nam! 18 #
// o  ##################################
// o*/
// o
// oconst test2 = getBirthdayCake("Long", 17);
// oconsole.log(test2);
// o/*
// o  ***********************************
// o  * 17 Chúc mừng sinh nhật Long! 17 *
// o  ***********************************
// o*/
// Đáp án:

const getBirthdayCake = (Name , age) => {
    let char = age % 2 ? '*' : "#";
    let text_happy = ` ${char} ${age} Chúc mừng sinh nhật ${Name} ${char} `;
    const ed = char.repeat(text_happy.length);
    return `
        ${ed}
        ${text_happy}
        ${ed}
    `;
};


console.log(getBirthdayCake("Nam" , 18));
// Câu 07: Blah, Blah, Blah…
// Đề bài:
// oTạo một hàm thay thế n từ cuối cùng bằng "blah". Thêm "..." vào "blah" cuối cùng. 
// Nếu n dài hơn số từ trong câu, hãy thay tất cả các từ bằng "blah"
// Tất cả các từ "blah" sẽ là chữ thường!
// oVí dụ: 
// "Anh học CNTT hả, cài win dùm em nhé!" —> "Anh học CNTT hả, cài win blah blah blah…"
// "Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không." —> "Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình blah blah blah blah blah…"
console.log("--------------------------");

const Blah = (string , number) => {
    let array = string.split(" ");
    if (number >= array.length)
    {
        return array.map((tmp , index) =>{
            if (index === array.length - 1)
            {
                return "blah...";
            }
            return "blah";
        }).join(" ");
    }
    else 
    {
        let cnt = number;
        return array.map((tmp , index) => {
            if(index +  cnt === array.length  && index !== array.length - 1)
            { 
                cnt--;
                return "blah";

            }
            if( index === array.length - 1)
            {
                return "blah...";
            }
            return tmp;
        }).join(" ");
    }
}
stringg = "Anh học CNTT hả, cài win dùm em nhé!";
nn = 3;
console.log(Blah(stringg , nn));
stringg1 = "Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.";
nn1 = 5;
console.log(Blah(stringg1 , nn1));

console.log("--------------------------");

// Câu 08: Tính tổng đơn hàng
// Đề bài:
// oTạo một hàm truyền vào một array gồm các phần tử là object (gồm các key: product, quantity, price) để tính toán tổng giá và trả về dưới dạng một số.
// oVí dụ:
// oconst test1 = getTotalPrice([
// o	{ product: "Sữa", quantity: 1, price: 7000 }
// o]);
// oconsole.log(test1); // 7000
// o
// oconst test2 = getTotalPrice([
// o  { product: "Sữa", quantity: 1, price: 7000 },
// o  { product: "Ngũ cốc", quantity: 1, price: 50000 },
// o]);
// oconsole.log(test2); // 57000
// o
// oconst test3 = getTotalPrice([
// o	{ product: "Sữa", quantity: 3, price: 7000 }
// o]);
// oconsole.log(test3); // 21000
// o
// oconst test4 = getTotalPrice([
// o  { product: "Sữa", quantity: 1, price: 7000 },
// o  { product: "Trứng", quantity: 12, price: 3000 },
// o  { product: "Bánh mỳ", quantity: 2, price: 15000 },
// o  { product: "Phô mai", quantity: 1, price: 5000 },
// o]);
// oconsole.log(test4); // 78000
// o
// oconst test5 = getTotalPrice([
// o  { product: "Sô cô la", quantity: 1, price: 12000 },
// o  { product: "Kẹo", quantity: 1, price: 2000 },
// o]);
// oconsole.log(test5); // 14000
// Đáp án:
var getTotalPrice = (arr) => {
     return  arr.reduce((cnt , tmp) => {
        return cnt + tmp.quantity * tmp.price;
    } , 0)
} ;
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
console.log(test5);


console.log("--------------------------");
// Câu 09: Viết hoa chữ cái đầu tiên của mỗi từ
// Đề bài:
// oTạo một hàm và truyền vào một chuỗi. Sau đó chuyển đổi ký tự đầu tiên của mỗi từ trong chuỗi đó thành chữ hoa. Trả về chuỗi vừa được định dạng.
// oVí dụ: 
// "Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó." —> "Fix Bug Là Chuyện Dễ. Tìm Đoạn Code Gây Ra Bug Để Fix Mới Là Chuyện Khó."
// "Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào." —> "Khi Tui Biên Dịch Và Code Chạy Suôn Sẻ Trong Lần Đầu. Tui Tự Hỏi Đã Làm Sai Chỗ Nào."
// Đáp án:

const tach_nhap = (string) => {
    let arr = string.split(" ");
    return arr.map((tmp) => {
        let array = tmp.split("");
        return array.map((tmpp , index) => {
            if(index === 0)
            {
                return tmpp.toUpperCase();
            }
            else
            {
                return tmpp.toLowerCase();
            }
        }).join("");
    }).join(" ");
};
var string1 = "Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.";
console.log(tach_nhap(string1));
var string2 = "Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.";
console.log(tach_nhap(string2));

// Câu 10: Chọn cầu chì
// Đề bài:
// oCầu chì bị đứt mạch điện khi dòng điện đi qua vượt quá định mức của cầu chì, để ngăn không cho nhiệt tích tụ quá nhiều (có thể gây cháy). Cầu chì lý tưởng để chọn cao hơn đầu ra hiện tại của thiết bị, nhưng cũng càng gần với nó càng tốt.
// oĐưa ra một danh sách các loại cầu chì và đầu ra hiện tại của thiết bị, hãy trả về cầu chì nào là tốt nhất cho thiết bị.
// oVí dụ: 
// Danh sách cầu chì "3V", "5V", "12V" và thiết bị "4.5V" —> "5V"
// Danh sách cầu chì "5V", "14V", "2V" và thiết bị "5.5V" —> "14V"
// Danh sách cầu chì "17V", "15V", "12V" và thiết bị "9V" —> "12V"
// Đáp án:
console.log("---------------------------")
var mang = ["3V", "5V", "12V"];
manchine = "5V";
const manchine_good = (mangh , may) => {
    let cong_suat_may = parseFloat(may);
    let mangk = mangh.map((tmp) => {
        return parseFloat(tmp);
    }).filter((tmp) => {
        return tmp >= cong_suat_may; // Lọc các giá trị lớn hơn hoặc bằng cong_suat_may
    });
    return `${Math.min(...mangk)}`
};
console.log(manchine_good(mang , manchine));
var mang1 = ["5V", "14V", "2V"];
manchine1 = "14V";
console.log(manchine_good(mang1 , manchine1));
var mang2 = ["17V", "15V", "12V"];
manchine2 = "9V";
console.log(manchine_good(mang2 , manchine2));

// Câu 11: Đếm số lượng số "1" trong mảng 2D
// Đề bài:
// oTạo hàm đếm số lượng số "1" trong mảng 2D.
// oVí dụ:
// oconst test1 = countOnes([
// o  [1, 0],
// o  [0, 0],
// o]);
// oconsole.log(test1); // 1
// o
// oconst test2 = countOnes([
// o  [1, 1, 1],
// o  [0, 0, 1],
// o  [1, 1, 1],
// o]);
// oconsole.log(test2); // 7
// o
// oconst test3 = countOnes([
// o  [1, 2, 3],
// o  [0, 2, 1],
// o  [5, 7, 33],
// o]);
// oconsole.log(test3); // 2
// Đáp án:
console.log("---------------------------")

const countOnes = (array_in_array) => {
    let cnt = 0;
    array_in_array.forEach((tmp) => {
        tmp.forEach((tmpp) => {
            if (tmpp == 1)
            {
                cnt ++ ;
            }
        });
    });
    return cnt;
};
const ttest1 = countOnes([
    [1, 0],
    [0, 0],
]);
console.log(ttest1); // 1
const ttest2 = countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    ]);
console.log(ttest2); // 7

const ttest3 = countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
]);
console.log(ttest3); // 2
// Câu 12: Swap Cases (Đảo ngược viết hoa, viết thường)
// Đề bài:
// oViết hàm swappingCases(string) truyền vào một string bất kỳ, đảo ngược cách viết hoa, viết thường của các chữ cái.
// oVí dụ: 
// "Le VAn HunG" —> "lE vaN hUNg"
// "Đặng PhưƠnG NAm" —> "đẶNG pHƯơNg naM"
// Đáp án:
console.log("---------------------------")
const swappingCases = (string) => {
    return string.split("").map((char) => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join("");
};


stringg1 = "Le VAn HunG";
console.log(swappingCases(stringg1));
stringg2 = "Đặng PhưƠnG NAm";
console.log(swappingCases(stringg2));

// Câu 13: Inverted Numbers (Đảo ngược giá trị của số)
// Đề bài:
// oViêt hàm invertedNumbers(array) truyền vào một mảng có các phần tử là các số bất kỳ, hãy đảo ngược giá trị từ âm sang dương, hoặc từ dương sang âm của các số trong mảng đó.
// oVí dụ: 
// [1, -10, -20, 15, 100, -30] —> [-1, 10, 20, -15, -100, 30]
// [-20, 30, 10, -25, -60, 20] —> [20, -30, -10, 25, 60, -20]
// Đáp án:
console.log("---------------------------")

var Inverted_Number = (arr) => {
    return arr.map((tmp) => {
        return  -tmp;
    });
};
arrayy1 = [1, -10, -20, 15, 100, -30];
arrayy2 = [-20, 30, 10, -25, -60, 20] ;
console.log(Inverted_Number(arrayy1));
console.log(Inverted_Number(arrayy2));

// Câu 14: Ignore Number Value (Bỏ qua các chữ số)
// Đề bài:
// oViết hàm ignoreNumbers(string) truyền vào một string bao gồm cả số và chữ, hãy trả về một string mới chỉ gồm chữ.
// oVí dụ: 
// "Test4Ag54SF" —> "TestAgSF"
// "JHk34Gl3gG" —> "JHkGlgG"
console.log("---------------------------");

const Ignore_Number_Value = (string) => {
    return string.split("").map((tmp) => {
        return isNaN(parseInt(tmp)) ? tmp : ""; 
    }).join("");
};
stringgg1 = "Test4Ag54SF";
stringgg2 = "JHk34Gl3gG";
console.log(Ignore_Number_Value(stringgg1));
console.log(Ignore_Number_Value(stringgg2));

// Câu 15: Tìm từ ≤ n ký tự
// Đề bài:
// oViết hàm smallWords(string, number) truyền vào một string và một số number. Trả ra một string mới chỉ gồm những từ ≤ number.
// oVí dụ: 
// smallWords("I Love Foood Code Too Playing Much", 4) —> "I Love Code Too Much".
// smallWords("I Love Foood Code Too Playing Much", 3) —> "I Too"
// Đáp án:
console.log("---------------------------");
const smallWords = (string, number) => {
    return string.split(" ").filter((tmp) => {
        return tmp.length <= number;
    }).join(" ");
};
console.log(smallWords("I Love Foood Code Too Playing Much", 4))
console.log(smallWords("I Love Foood Code Too Playing Much", 3))
// Câu 16: Tìm số trong String và Nhân
// Đề bài:
// oViết hàm multiplyNumberInString(string), truyền vào một string, hãy trả ra một string mới là phép nhân của các số có trong string đó.
// oVí dụ: 
// "JG23BGH5BA" —> "4925" 
// 2*2 = 4
// 3*3 = 9
// 5*5 = 25
// —> "4925"
// "VD23GS8S6AH" —> "496436" 
// 2*2 = 4
// 3*3 = 9
// 8*8 = 64
// 6*6 = 36
// —> "496436"
// "AGD353GDSK8" —> "925964" 
// 3*3 = 9
// 5*5 = 25
// 3*3 = 9
// 8*8 = 64
// —> "925964"
// "JBKJJKLDJ" —> "0" 
// Do không có số nào.
// Đáp án:
console.log("---------------------------");
const multiplyNumberInString = (string) => {
    let array = string.split("").filter((tmp) => {
        return !isNaN(parseInt(tmp));
    })
    if(array.length !== 0)
    {
        return array.map((tmpp) => {
            return Math.pow(parseInt(tmpp) , 2).toString();
        }).join("");
    }
    else
    {
        return 0;
    }
};
console.log(multiplyNumberInString("JG23BGH5BA"))
console.log(multiplyNumberInString("VD23GS8S6AH"))
console.log(multiplyNumberInString("AGD353GDSK8"))
console.log(multiplyNumberInString("JBKJJKLDJ"))

// Câu 17: Tính tổng tiền trong giỏ hàng
// Đề bài:
// oCho một mảng giỏ hàng chứa các sản phẩm (bao gồm tên, giá, số lượng). Hãy tính tổng tiền của giỏ hàng đó.
// oVí dụ:
// oconst cart = [
// o  { name: "iPhone", price: 1000, quantity: 5 },
// o  { name: "iPad", price: 500, quantity: 2 },
// o  { name: "MacBook", price: 2000, quantity: 1 },
// o];
// o
// o// Tính toán để trả về: 1000 * 5 + 500 * 2 + 2000 * 1 = 8000
// Đáp án:

console.log("---------------------------");
const pay_money = (cart) => {
    return cart.reduce((pay , pay_item) => {
        return pay_item.price * pay_item.quantity + pay;
    } , 0);
};

const cart = [
    { name: "iPhone", price: 1000, quantity: 5 },
    { name: "iPad", price: 500, quantity: 2 },
    { name: "MacBook", price: 2000, quantity: 1 }
]
console.log(pay_money(cart));

console.log("---------------------------");
// Câu 18: Nhóm các học sinh trong một lớp theo giới tính
// Đề bài:
// oCho một mảng danh sách các học sinh của một lớp. Hãy nhóm các học sinh Nam thành 1 nhóm, học sinh Nữ thành 1 nhóm.
// oVí dụ:
// oconst students = [
// o  { hoTen: "Le Van A", gioiTinh: "Nam" },
// o  { hoTen: "Do Van B", gioiTinh: "Nam" },
// o  { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
// o  { hoTen: "Dao Van D", gioiTinh: "Nam" },
// o  { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
// o  { hoTen: "Vu Van F", gioiTinh: "Nam" },
// o];
// o
// o/*
// oTrả về:
// o{
// o  "Nam": [
// o      "Le Van A",
// o      "Do Van B",
// o      "Dao Van D",
// o      "Vu Van F"
// o  ],
// o  "Nu": [
// o      "Nguyen Thi C",
// o      "Hoang Thi E"
// o  ]
// o}
// o*/
// Đáp án:
const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
];

const filter_students = (student) => {
    let dict = {};
    let arr_namm = student.filter((tmp) => {
        return tmp.gioiTinh === "Nam";
    });
    let arr_nam = arr_namm.map((tmp) => {
        return tmp.hoTen;
    });
    dict["Nam"] = arr_nam;
    let arr_nuu = student.filter((tmp) => {
        return tmp.gioiTinh === "Nu";
    });
    let arr_nu = arr_nuu.map((tmp) => {
        return tmp.hoTen;
    });
    dict["Nu"] = arr_nu;
    return dict;
}

console.log(filter_students(students));

// Câu 19: Tính tổng theo từng nhóm trong một mảng
// Đề bài:
// oCho một mảng gồm các phần tử là các mảng con. Hãy tính tổng giá trị của các phần tử trong mảng con.
// oVí dụ:
// oconst numbers = [
// o  [1, 2],
// o  [3, 4],
// o  [5, 6],
// o];
// o
// o/*
// oTrả về:
// o[3, 7, 11];
// o*/
// Đáp án:
console.log("---------------------------------------------")
const sum_array = (number) => {
    return number.map((tmp) => {
        return tmp.reduce((pay , tmpp) => {
            return tmpp + pay;
        } , 0);
    });
}

const numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(sum_array(numbers));

// Câu 20: Tính tổng điểm theo từng lớp
// Đề bài:
// oCho một mảng gồm các học sinh (bao gồm các thông tin: họ tên, lớp, điểm trung bình của học sinh đó). Hãy tính tổng điểm theo từng lớp.
// oVí dụ:
// oconst students = [
// o  { hoTen: "Le Van A", lop: "A", diem: 7.5 },
// o  { hoTen: "Do Van B", lop: "B", diem: 6.8 },
// o  { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
// o  { hoTen: "Dao Van D", lop: "C", diem: 9 },
// o  { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
// o  { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
// o];
// o
// o/*
// oTrả về:
// o{
// o  A: 15.5,
// o  B: 22.5,
// o  C: 9
// o}
// o*/
// Đáp án:
console.log("------------------------------------")

const sum_point_class = (student) => {
    return student.reduce((dict ,  member) => {
        if(!dict[member.lop])
        {
            dict[member.lop] = member.diem;
        }
        else
        {
            dict[member.lop] += member.diem;
        }
        return dict;
    } , {})
};
const studentss = [
    { hoTen: "Le Van A", lop: "A", diem: 7.5 },
    { hoTen: "Do Van B", lop: "B", diem: 6.8 },
    { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
    { hoTen: "Dao Van D", lop: "C", diem: 9 },
    { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
    { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
];
console.log(sum_point_class(studentss));