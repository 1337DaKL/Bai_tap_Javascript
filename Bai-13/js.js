localStorage.setItem("name", "Trịnh Đắc Lượng");
const ok = localStorage.getItem("name");
console.log(ok);
//localStorage.removeItem("name");
console.log(localStorage.key(0));

localStorage.setItem("light" , "");

const div = document.querySelector("#idv-local");
div.innerHTML = localStorage.getItem("name")  



const darkLight = localStorage.getItem("light");
if(darkLight)                   
{
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    con
}

const button  = document.querySelector("#dark");
button.addEventListener("click" , () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");

})



const   modeLocal = localStorage.getItem("mode");
if(modeLocal)
{
    const body = document.querySelector("body");
    body.classList.toggle(modeLocal);
}


const button = document.querySelector("#dark");
button.addEventListener("click" , () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");


    const modeLocal = localStorage.getItem("mode");
    if(modeLocal)
    {
        localStorage.setItem("mode" , "");
    }
    else
    {
        localStorage.setItem("mode" , "dark");
    }
})



var fruits = ['apple', 'banana', 'orange'];

localStorage.setItem("fruits" , JSON.stringify(fruits));


const dataFruits = localStorage.getItem("fruits");
console.log(JSON.parse(dataFruits));