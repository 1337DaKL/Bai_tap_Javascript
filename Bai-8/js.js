// Câu 01: Lấy URL hiện tại của trang
// Đề bài: Viết một chương trình để lấy URL hiện tại của trang và in ra màn hình console.
var url_web = location.href;
console.log(url_web);
console.log("-------------------------");

// Câu 02: Lấy phần thông tin (protocol, hostname, port) từ URL
// Đề bài: Viết một chương trình để lấy phần thông tin của URL (gồm protocol, hostname và port) và in ra màn hình console.
var protocol_hostname_port = location.origin;
console.log(protocol_hostname_port);
console.log("-------------------------");
var protocol = window.location.protocol;
var hostname = window.location.hostname;
var port = window.location.port;

console.log("Protocol: " + protocol);
console.log("Hostname: " + hostname);
console.log("Port: " + port);
console.log("-------------------------");
// Câu 03: Chuyển hướng trang web
// Đề bài: Viết một chương trình để chuyển hướng người dùng đến một URL khác sau một khoảng thời gian nhất định.

// setTimeout(() => {
//     location.href = "https://www.facebook.com/";
// } , 5000)
// Câu 04: Reload trang
// Đề bài: Viết một chương trình để reload (tải lại) trang web sau một khoảng thời gian nhất định.

// var reload_page = (time) => {
//     setInterval(() => {
//         location.reload()
//     } , time * 1000)
// };
// //nhap time don vi la giay;
// reload_page(3);


// Câu 05: Kiểm tra HTTPS
// Đề bài: Viết một chương trình JavaScript để kiểm tra xem trang web có đang chạy trên giao thức an toàn (HTTPS) hay không và in kết quả ra màn hình console.
// Đáp án:

var check_protocol_security = () =>
{
    let protocol = location.protocol;
    if(protocol === "https:")
    {
        return true;
    }
    else
    {
        return false;
    }
}
if(check_protocol_security())
{
    console.log(`giao thuc cua web la ${location.protocol} va no an toan`);
}
else
{
    console.log(`giao thuc cua web la ${location.protocol} va khong an toan`);
}

// Câu 06: Mở cửa sổ in ấn
// Đề bài: Viết câu lệnh để mở cửa sổ in ấn khi người dùng truy cập vào trang web.

// window.print();


console.log("======================");
// Câu 07: Đếm ngược.
// Đề bài: Sử dụng setTimeout để hiển thị đếm ngược.
// Đáp án:
// var count_down = (time) => 
// {
//     if(time > 0)
//     {
//         console.log(`${time}`);
//         time--;
//         setTimeout(() => {
//             count_down(time);
//         } , 1000);
//     }
//     else
//     {
//         window.open("http://127.0.0.1:5501/Bai-8/html2.html" , "Ban da bi nhiem viruts" , "height = 300 , width = 500 , top = 100 , left = 200");

//     }
// }

// count_down(10);

// Câu 08: Kích thước cửa sổ trình duyệt
// Đề bài: Lấy thông tin về kích thước của cửa sổ trình duyệt.
// Đáp án:

console.log(window.innerHeight);
console.log(window.innerWidth);
// Câu 09: Vị trí cửa sổ trình duyệt
// Đề bài: Lấy thông tin về vị trí của cửa sổ trình duyệt trên màn hình.
// Đáp án:
console.log("==================")
console.log(window.screenX);
console.log(window.screenY);
// Câu 10: Mở cửa sổ popup
// Đề bài: Mở một cửa sổ popup mới với kích thước và vị trí tùy chỉnh.
// Đáp án:


// window.open("https://daca.vn" , "weblord" , "height = 400 , width = 400 , top = 400 , left = 400");