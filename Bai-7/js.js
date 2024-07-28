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

