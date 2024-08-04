var nameCuaBan = document.querySelector("#name");
nameCuaBan.addEventListener("blur" , (event) => {
    nameCuaBan.style.background = "white";
})

nameCuaBan.addEventListener("focus" , (event) => {
    nameCuaBan.style.background = "green";
});

var clickMouse = document.querySelector("#click");

clickMouse.addEventListener("click" , () => {
    console.log(nameCuaBan.value);
})


var clickAdd = document.querySelector("#add");
var listItem = document.querySelector("#list-item");
clickAdd.addEventListener("click" , () => {
    let liFirst = document.querySelector('li:nth-child(1)')
    let addItem = document.createElement("li");
    addItem.innerHTML = "itemAdd<button>X</button>";
    listItem.insertBefore(addItem , liFirst);
})

listItem.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON")
    {
        var deleteElement = event.target.parentNode;
        listItem.removeChild(deleteElement);
    }
});