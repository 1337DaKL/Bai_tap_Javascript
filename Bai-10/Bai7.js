var bieuDo = document.querySelector("#bieu-do");
const datas = [10, 20, 15, 30, 25];

for(const data of datas)
{
    var newDiv = document.createElement("div");
    newDiv.className = "set";
    newDiv.style.height = data + "px";
    bieuDo.appendChild(newDiv);
}


var slider = document.querySelector("#slider");
var valueDisplay = document.querySelector("#ok");
slider.addEventListener("input" ,() => {
    valueDisplay.innerHTML = slider.value;
})