var botton = document.querySelector("#button");
botton.onclick = () => {
    console.log("ok onkeydown")
};
var chuanHoaTen = (s) => {
    var array = s.split(" ");
    return array.map((tmp) => {
        return tmp.split("").map((tam , index) => {
            if(index === 0)
            {
                return tam.toUpperCase();
            }else{
                return tam.toLowerCase();
            }
        }).join("");
    }).join(" ");
};
var outclick = document.querySelector("#name");
outclick.onblur = (event) =>{
    console.log(chuanHoaTen(event.target.value))
    event.target.value = "Hay nhap ten cua ban"
    outclick.style.background = "white";
};

document.querySelector("body").onkeydown = (event) => {
    console.log(event.key)
};

outclick.onfocus = (event) => {
    event.target.value = "";
    outclick.style.background = "blue";
};

var submit = document.querySelector("#sm");
submit.onclick = (event) => {
    console.log(`Ban da nhap ${outclick.value}`)
};

var ok1 = () => {
    console.log("ok1")
}
var ok2 = () => {
    console.log("ok2")
}
botton.addEventListener("click" , (event) => {
    console.log("ok1")
})
botton.addEventListener("click" , (event) => {
    console.log("ok2")
})

setTimeout(() => {
    botton.removeEventListener("click" , (event) => {
        console.log("ok2");
    });
} , 5000)

var addButton = document.querySelector("#add");
// addButton.addEventListener("click" , () => {
//     var tenBien = document.createElement("li")
//     tenBien.innerHTML = "itemAdd";
//     document.querySelector("#menu").appendChild(tenBien);
// });
let cnt = 1;
addButton.addEventListener("click" , () => {
    var liFirst = document.querySelector("li:nth-child(1)");
    var tenBien = document.createElement("li")
    tenBien.innerHTML = "itemAdd "+ cnt++;
    document.querySelector("#menu").insertBefore(tenBien , liFirst);
})

var home = document.querySelector("#delete");
var menu = document.querySelector("#menu");
home.addEventListener("click" , (event) => {
    var deleteElement = document.querySelector("li:nth-child(1)");
    menu.removeChild(deleteElement);
})