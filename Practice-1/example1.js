// Câu 01. Kiểm tra số nguyên dương.
// Đề bài:
// oTheo lý thuyết thì số nguyên dương là tập hợp những số chia hết cho 1 và lớn hơn 0. Tức là dãy số 1, 2, 3 ,4 ,5 ,6 ... chính là các số nguyên dương.
// oDùng hàm prompt để tạo ô nhập và lấy ra giá trị từ ô nhập đó.
// oViết một hàm kiểm tra số nhập vào có phải số nguyên dương hay không? 
// Nếu đúng alert ra YES.
// Nếu sai alert ra NO.
// Đáp án:   
const checkAlert = (n) => {
    if(n > 0 && n % 1 === 0)
    {
        return true;    
    }else{
        return false;
    }
};
const n = prompt("Hay nhap so can kiem tra :");
if(isNaN(n)){
    console.log("Lam on hay nhap so !!");
}else{
    if(checkAlert(parseFloat(n))){
        console.log("YES");
    }else{
        console.log("NO");
    }
}