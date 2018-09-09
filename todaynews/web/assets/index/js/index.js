let close = document.querySelector('.close');
let message = document.querySelector('.message');
let hide = document.querySelector(".hide");
message.onclick = function(){
    hide.style.display = "block";
    
}
close.onclick = function(){
    hide.style.display = "none";
}