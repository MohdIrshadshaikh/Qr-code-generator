let input = document.querySelector("#input");
let button = document.querySelector("#button");
let image = document.querySelector("#qrcode");
let white = document.querySelector(".qrcode");

button.addEventListener("click", function(){
    let intval = input.value;
white.style.height = "50%";

if (!intval) {
    alert("plese enter value")
} else {
    image.alt=`QR code for ${intval}`
    image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${intval}`
}
})
