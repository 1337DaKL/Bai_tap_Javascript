// Câu 04: Tạo modal
// ●Đề bài:
// oTạo một button, khi click vào button sẽ hiển thị lên một modal.
// oVí dụ:

let openModal = document.querySelector("#open-modal-button");
let modal = document.querySelector("#modal");
let closeModal = document.querySelector("#close-button");

openModal.addEventListener("click" , () => {
    modal.style.display = "block";
});
