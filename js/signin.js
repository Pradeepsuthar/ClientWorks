// Sign Up / Login

function showLoginForm(){
  if(document.getElementById('registerForm').style.display=='block') {
    document.getElementById('registerForm').style.display='none';
  }
    document.getElementById('loginForm').style.display='block';
}

function showRegisterForm(){
  if(document.getElementById('loginForm').style.display=='none') {
    document.getElementById('loginForm').style.display='block';
  }
    document.getElementById('registerForm').style.display='block';
    document.getElementById('loginForm').style.display='none';
}

function loginSucces(){

}