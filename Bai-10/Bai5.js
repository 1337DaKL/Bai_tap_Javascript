// Câu 05: Tạo một menu dạng tabs
// ●Đề bài:
// oTạo một menu dạng tabs, mặc định hiển thị ra tab đầu tiên. Click vào tab khác sẽ ẩn tab hiện tại và hiển thị tab mới.
// oVí dụ:

var tab1 = document.querySelector("#click-button1");
var tab2 = document.querySelector("#click-button2");
var tab3 = document.querySelector("#click-button3");

tab1.addEventListener("click" , () => {
    document.querySelector("#content-tab1").setAttribute("class" , "content-display-on");
    document.querySelector("#content-tab2").setAttribute("class" , "content-display");
    document.querySelector("#content-tab3").setAttribute("class" , "content-display");
});
tab2.addEventListener("click" , () => {
    document.querySelector("#content-tab2").setAttribute("class" , "content-display-on");
    document.querySelector("#content-tab1").setAttribute("class" , "content-display");
    document.querySelector("#content-tab3").setAttribute("class" , "content-display");
});
tab3.addEventListener("click" , () => {
    document.querySelector("#content-tab3").setAttribute("class" , "content-display-on");
    document.querySelector("#content-tab1").setAttribute("class" , "content-display");
    document.querySelector("#content-tab2").setAttribute("class" , "content-display");
});

tab1.addEventListener("focus" , () => {
    tab1.style.background = "black";
})
tab1.addEventListener("blur" , () => {
    tab1.style.background = "white";
})
tab2.addEventListener("focus" , () => {
    tab2.style.background = "black";
})
tab2.addEventListener("blur" , () => {
    tab2.style.background = "white";
})
tab3.addEventListener("focus" , () => {
    tab3.style.background = "black";
})
tab3.addEventListener("blur" , () => {
    tab3.style.background = "white";
})