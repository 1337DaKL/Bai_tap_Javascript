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
const AlTeRnAtInG_cApS = (string) => {
    var arrayNew = string.split(" ");
    return arrayNew.map((tmp , index) => {
        if(index % 2 == 0){
            return tmp.toUpperCase();
        }else{
            return tmp.toLowerCase();
        }
    }).join(" ");
};
var string = prompt("Nhập vào chuỗi cần sửa :");
console.log(string);
console.log(AlTeRnAtInG_cApS(string));