// Câu 01: Tạo một ứng dụng todo-list
// ●Đề bài: Tạo một ứng dụng todo-list đơn giản bằng cách sử dụng DOM. Cho phép người dùng thêm, xóa và đánh dấu đã hoàn thành các công việc trong danh sách.
// oVí dụ:


// ●Đáp án:

var textNote = document.querySelector("#note");
var addTextNote = document.querySelector("#add");
var listNote = document.querySelector("#list-note");

textNote.addEventListener("focus" , (event) => {
    event.target.value = "";
});
textNote.addEventListener("blur" , (event) => {
    getTextNote = event.target.value;
    console.log(getTextNote);
});

addTextNote.addEventListener("click" , (event) => {
    var ok = event.target.previousElementSibling;
    var addText = document.createElement("li");
    addText.innerHTML = `${getTextNote}<button>X</button>`;
    listNote.appendChild(addText);
    ok.value = "Them ghi chu";
})

listNote.addEventListener("click" , (event) => {    
    let phuongThuc = event.target.nodeName;
    if(phuongThuc === "BUTTON")
    {
        var deleteTextNode = event.target.parentNode;
        listNote.removeChild(deleteTextNode);
    }
});