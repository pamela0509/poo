const loginForm=document.getElementById('loginForm');
const alerta=document.getElementById('alerta');

const USUARIO="admin";
const PASSWORD="1234";

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const usuario=document.getElementById('usuario').value.trim();
    const contrasena=document.getElementById('contrasena').value.trim();

    if(usuario==USUARIO && contrasena===PASSWORD){
        window.location.href='cursos.html';

    }else{
        alerta.classList.remove('d-none');
    }
});