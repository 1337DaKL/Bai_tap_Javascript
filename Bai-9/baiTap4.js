// Câu 04: Thay đổi màu chữ.
// Đề bài:
// oCho đoạn mã HTML sau:
// o<h2 class="title">Tiêu đề 1</h2>
// o<h2 class="title">Tiêu đề 2</h2>
// o<h2 class="title">Tiêu đề 3</h2>
// o<h2 class="title">Tiêu đề 4</h2>
// o
// o<h2 class="title-2">Tiêu đề 5</h2>
// o<h2 class="title-2">Tiêu đề 6</h2>
// oLấy danh sách các phần tử có cùng class là "title" và thay đổi thuộc tính của chúng thành màu blue.
// Đáp án:

var getListElement = document.getElementsByClassName("title");
for(var item of getListElement){
    item.style.color = "blue";
}