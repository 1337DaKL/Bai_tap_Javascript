const nhapNhay = (time) => {
    if(time === 1)
    {
        setTimeout(() => {
            var check = document.querySelector("#ok").setAttribute("class" , "test-off");
            time = 0;
            var check2 = document.querySelector("#ok").innerHTML = "Red";
            console.log("Red");
            nhapNhay(time);
        }, 1000);
    }
    else{
        setTimeout(() => {
            var check = document.querySelector("#ok").setAttribute("class" , "test-on");
            var check2 = document.querySelector("#ok").innerHTML = "Blue";
            console.log("Blue");
            time = 1;
            nhapNhay(time);
        }, 1000);
    }
};
const demNguoc = (time) => {
    const ok = setInterval(() => {
        document.querySelector("#pp").innerHTML = `Đèn nháy sau ${time} giây`;
        console.log(`Đèn nháy sau ${time} giây`);
        time--;
        if(time === 0)
        {
            document.querySelector("#pp").innerHTML = "Đèn đang nháy nè =))";
            clearInterval(ok);
        }
    } ,1000)
};
var time = 1;
demNguoc(5);
setTimeout(() => {
    nhapNhay(time);
} , 5000);