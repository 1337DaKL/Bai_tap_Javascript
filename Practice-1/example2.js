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
const checkHinh = (n , a) => {
    if(n < 3){
        return false;
    }else{
        if(a.some((tmp) => {
            return tmp <= 0  || tmp > 180; 
        })){
            return false;
        }
        else
        {
            let tongCacGoc = (n - 2) * 180;
            let tong_cac_goc = a.reduce((first , tmp) => {
                return first + tmp;
            } , 0)
            if(tongCacGoc === tong_cac_goc)
            {
                return true;
            }
            return false;
        }
    };

};
let n = prompt("Nhập số n :");
let a = [];
let m = parseFloat(n);
while(m--)
{
    let x = prompt("Nhập các phần tử của mảng các góc lần lượt là :");
    a.push(parseFloat(x));
}
console.log(n);
console.log(a);
if(checkHinh(n , a))
{
    console.log("true");
}else{
    console.log("false");
}
