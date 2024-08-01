let time = 0;
setTimeout(() => {
    setInterval(() => {
        console.log(time);
        time --;
    } , 1)
} , 5000)

const object = {
    "name" : "Trịnh Đắc Lượng" ,
    "Age" : "21" ,
    "school" : "PTIT" ,
    "ok" : "ok",
}
for (var key in object)
{
    object[key] = "liiii";
    console.log(object[key]);
}

const list = ["ok" , 0 , "list"];
for(var ok of list)
{
    console.error(ok);
}

