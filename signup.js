import { auth, createUserWithEmailAndPassword } from "./config/fmbconfig.js";

    var fullName = document.getElementById("fullname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    window.sing = function() {
        var obj = {
            fullName : fullName.value,
            email : email.value,
            password : password.value
        }
        console.log(obj)
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(res){
            alert("your account is created")
            window.location.assign('../home.html')
        })
        .catch (function(error){
            alert('Your account is already exist')
        })

    }
