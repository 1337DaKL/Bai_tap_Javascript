// Câu 02: Ẩn thông báo (Ví dụ 02)
// Đề bài: Sử dụng setTimeout để làm mờ thông báo sau một khoảng thời gian.
// Đáp án:
var element = document.querySelector(".notification");
var moDan = () => {
    var ok = 1;
    var time = setInterval (() => {
        if(ok <= 0)
        {
            clearInterval(time);
            element.style.display = "none";
        }
        element.style.opacity = ok;
        ok -= 0.1;
    } , 100)
};
setTimeout(moDan , 5000);