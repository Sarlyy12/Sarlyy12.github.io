const alertButton = document.getElementById("button");
alertButton.addEventListener('click', function() {
alert('Kirim ke whatsapp admin untuk menanyakan sesuatu');
});
function filtercategori(category){
    const categori = document.querySelectorAll('.product');
    categori.forEach((item) => {
        if(category === 'semua' || item.getAttribute('data') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none' ;  
        }
    });
}