// Câu 06: Bánh sinh nhật
// Đề bài:
// oViết một hàm getBirthdayCake(name, age) để tạo một chiếc bánh sinh nhật hình chữ nhật, dựa trên tên và tuổi của ai đó.
// Nếu tuổi là một số chẵn, hãy vẽ hình bao quanh bằng chữ "#".
// Nếu tuổi là một số lẻ, hãy vẽ hình bao quanh bằng chữ "*".
// Dòng tin nhắn phải ở định dạng: {tuổi} Chúc mừng sinh nhật {tên}! {tuổi}
// Để lại một khoảng trống giữa mép bánh và số tuổi.
// oVí dụ:?

var getBirthdayCake = (name , age) => {
    var kiTu;
    if(age% 2=== 0 )
    {
        kiTu= "#";
    }else{
        kiTu= "*";
    }
    var loiChuc = `${kiTu} ${age} Chúc mừng sinh nhật ${name}! ${age} ${kiTu}`;
    var voBanh = kiTu.repeat(loiChuc.length);
    return `
    ${voBanh}
    ${loiChuc}
    ${voBanh}
    `
};
ten = prompt("Nhập tên của bạn:");
tuoi= prompt("Nhập tuổi của bạn:");
console.log(getBirthdayCake(ten, tuoi));