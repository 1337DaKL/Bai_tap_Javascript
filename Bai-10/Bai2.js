// Câu 02: Tạo một trình chỉnh sửa HTML đơn giản
// ●Đề bài:
// oTạo một trình chỉnh sửa HTML đơn giản sử dụng DOM. Cho phép người dùng viết mã HTML và hiển thị kết quả trực tiếp.
// oVí dụ:


var input = document.querySelector("#textarea");
var clickButton = document.querySelector("#view");
var output = document.querySelector("#out");


input.addEventListener("click" , (event) => {
    event.target.value = "";
})
clickButton.addEventListener("click" , (event) => {
    if(input.value !== "")
    {
        var add = document.createElement("div");
        add.innerHTML = `${input.value}`;
        output.innerHTML = "";
        output.appendChild(add);
        input.value = "Nhập mã HTML bạn muốn !!!!";
    }
});
