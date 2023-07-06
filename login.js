import { auth,signInWithEmailAndPassword } from "./config/fmbconfig.js";

    var email = document.getElementById("email");
    var password = document.getElementById("password");


     window.log = function() {
        var obj = {
            email : email.value,
            password : password.value
        }
        console.log(obj)
        signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(res){
            alert("your account is login")
            window.location.assign('../home.html')
        })
        .catch (function(error){
            alert('Your account does not exist')
        })

    }

