// Câu 01: Ẩn thông báo (Ví dụ 01)
// Đề bài: Sử dụng setTimeout để tự động ẩn nó sau một khoảng thời gian
// Đáp án:

var element = document.getElementById("notification");
const showNotifiction = () => {
    setTimeout(() => {
        element.setAttribute("class" , "unNotification");
    } , 5000);
}

showNotifiction();