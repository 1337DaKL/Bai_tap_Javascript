// Câu 05: Đổi màu nền sau một khoảng thời gian
// Đề bài: Đổi màu nền website sau một khoảng thời gian nhất định.
// Đáp án:


setTimeout(() => {
    var layNen = document.getElementsByTagName("body")[0].style.background = "blue";
} , 3000)