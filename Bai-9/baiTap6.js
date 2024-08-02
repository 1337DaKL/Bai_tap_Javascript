// Đề bài:
// oTạo một nút và sau một khoảng thời gian nút bấm sẽ thay đổi kích thước và màu sắc.
// oVí dụ: 
// Ban đầu:


// Sau 5 giây:


// Đáp án:
setTimeout(() => {
    var ele = document.querySelector(".button");
    ele.style.color = "red";
    ele.style.wigth = "120px";
    ele.style.height = "60px";
} , 3000);