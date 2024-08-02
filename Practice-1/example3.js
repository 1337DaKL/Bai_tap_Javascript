// Câu 03: Viết tắt câu
// Đề bài: 
// oTạo một hàm nhận vào một câu văn và trả về chữ viết tắt của câu văn đó. Lấy tất cả các từ có độ dài lớn hơn hoặc bằng n ký tự và trả về chữ cái đầu tiên của mỗi từ, được viết hoa.
// oVí dụ: 
// "Xin chào! Tôi tên là Nam." —> "XCTTLN"
// "Xin chào! Tôi tên là Nam." và n = 3 —> "XCTTN", Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3
// "Xin chào! Tôi tên là Nam." và n = 4 —> "CN", Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4
// Đáp án: 
var vietTatCau = (string , n) => {
    var array = string.split(" ");
    var arrayNew = array.filter((tmp) => {
        return tmp.length >= n;
    });
    var array_new = arrayNew.map((tmp) => {
        return tmp.charAt(0).toUpperCase();
    }).join("");
    return array_new;
};
var string = prompt("Nhập mảng cần xử lý :");
var n = parseFloat(prompt("Nhập n :"));
console.log(string);
console.log(n);
console.log(vietTatCau(string , n));