let eyeicon=document.getElementById('eyeicon');
let password=document.getElementById('password');

eyeicon.onclick=function(){
   if (password.type==='password') {
        password.type='text';     
        eyeicon.src='eye-open.jpg';
   }
   else{
      password.type='password';
      eyeicon.src='eye-close.avif';
   }
}

















































// let eyeicon=document.getElementById('eyeicon');
// let password=document.getElementById('password');

// //click feature on the icon 👇

// eyeicon.onclick=function(){
//    if(password.type=="password"){
//       password.type="text";
//       eyeicon.src='eye-open.jpg'
//    }
//    else{
//       password.type="password";
//       eyeicon.src='eye-close.avif'
//    }
//    }
