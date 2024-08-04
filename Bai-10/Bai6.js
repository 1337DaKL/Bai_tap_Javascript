var var1 = document.querySelector("#var1");
var var2 = document.querySelector("#var2");
var phepCong = document.querySelector("#cong");
var phepTru = document.querySelector("#tru");
var phepNhan = document.querySelector("#nhan");
var phepChia = document.querySelector("#chia");
var ket = document.querySelector("#ket-qua");
phepTru.addEventListener("click" , () => {
    let ketQua = parseFloat(var1.value) - parseFloat(var2.value);
    ket.innerHTML = `Kết quả là: ${ketQua}`;
})
phepCong.addEventListener("click" , () => {
    let ketQua = parseFloat(var1.value) + parseFloat(var2.value);
    ket.innerHTML = `Kết quả là: ${ketQua}`;
})
phepNhan.addEventListener("click" , () => {
    let ketQua = parseFloat(var1.value) * parseFloat(var2.value);
    ket.innerHTML = `Kết quả là: ${ketQua}`;
})
phepChia.addEventListener("click" , () => {
    let ketQua = parseFloat(var1.value) / parseFloat(var2.value);
    ket.innerHTML = `Kết quả là: ${ketQua}`;
})