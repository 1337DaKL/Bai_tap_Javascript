var element = document.getElementById("h1-1");
console.log(element);
var listElement = document.getElementsByTagName('h1');
console.log(listElement);
for(item of listElement){
    console.log(item);
}

var listElementByClassName = document.getElementsByClassName("ok");
for(const item of listElementByClassName){
    console.log(item);
}

console.log("_------------------------")
var getElementByQuerrySelector = document.querySelector(".ok");
console.log(getElementByQuerrySelector);
console.log("-----------------------------");
var listElementByQuerySelectorAll = document.querySelectorAll(".ok");
for(const item of listElementByQuerySelectorAll){
    console.log(item);
}
    // console.log(",,,,,,,,,,,,,,,,,,,,,")
    // var iki = document.querySelector("table tr td");
    // console.log(iki);

    // console.log(",,,,,,,,,,,,,,,,,,,,,")

    // var ukiiiiiiii = documetn.querySelectorAll("table tr td");
    // for(const item of ukiiiiiiii){
    //     console.log(item);
    // }
    // console.log(document.querySelector("table tr h1"));

console.log("----------------");

var choice = document.querySelector("h2").innerHTML = "yyyyyyy <b>okiii</b>";
console.log(choice);
console.log(document.querySelector("h2").innerText);
