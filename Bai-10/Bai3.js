// Câu 03: Tạo một bộ chọn màu
// ●Đề bài:
// oTạo một bộ chọn màu bằng cách sử dụng DOM. Cho phép người dùng chọn một màu từ một bảng màu và hiển thị giá trị màu đã chọn.
// oVí dụ:

var selectColor = document.querySelector("#color");
var output = document.querySelector("#show");

selectColor.addEventListener("change" , (event) => {
    console.log(event)
    var ok = event.target.value;
    console.log(ok)
    output.style.backgroundColor = ok;
})