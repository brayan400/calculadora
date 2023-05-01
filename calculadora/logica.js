let boton = document.querySelector('.boton');
let btn = document.querySelectorAll('span');
let valor = document.getElementById('valor');
let togglebtn = document.querySelector('.togglebtn');
let body = document.querySelector('body');

for (let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){

        if(this.innerHTML=="="){
            valor.innerHTML = eval(valor.innerHTML);
        }
        else{
            if(this.innerHTML=="clear"){
                valor.innerHTML = "";
            }
            else{
                valor.innerHTML += this.innerHTML;
            }
        }

    })
} 
togglebtn.onclick = function(){
    body.classList.toggle('dark');
}