function fechar_cadastro(){
var menu_cadastro = document.querySelector(".campo_cadastro");
var campo_aniversario = document.querySelector(".campo_aniversario");
var abrir_cadastro = document.querySelector(".abrir_cadastro");
menu_cadastro.style.translate="-100%";
campo_aniversario.style.translate="-70dvh";
campo_aniversario.style.width="100%";
abrir_cadastro.style.display="flex";
abrir_cadastro.style.opacity="1";
}

function abrir_cadastro(){
 var menu_cadastro = document.querySelector(".campo_cadastro");
 var campo_aniversario = document.querySelector(".campo_aniversario");
 var abrir_cadastro = document.querySelector(".abrir_cadastro");
 menu_cadastro.style.translate="0";
 campo_aniversario.style.width="calc(100% - 70dvh)";
 campo_aniversario.style.translate="0";
 abrir_cadastro.style.display="none";
 abrir_cadastro.style.opacity="0";
}