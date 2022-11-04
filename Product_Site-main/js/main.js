var elBody = document.querySelector('body');
var elBtn = document.querySelector('.btn');


elBtn.addEventListener("click", function(){
    elBody.classList.toggle('dark');
});