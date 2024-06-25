// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

let qrtext = document.getElementById('qrtext')
let qrbtn = document.getElementById('qrbtn')
let qrimage = document.getElementById('qrimage')

console.log(qrtext);
console.log(qrbtn);
console.log(qrimage);

qrbtn.addEventListener('click',()=>{
    if(qrtext.value == ''){
        alert("soz kiriting");
    } else {
        qrimage.setAttribute('src',"https://api.qrserver.com/v1/create-qr-code/?size=350x350&data="+qrtext.value);
    }
})