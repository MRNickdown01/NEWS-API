function validate(e) {
    e.preventDefault()
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    alert("login succesfully");
    return false;
  } else {
    alert("login failed");
  }
}


document.addEventListener('DOMContentLoaded',()=>{

    let form = document.querySelector('form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let username = e.target.username.value.trim()
        let password = e.target.password.value.trim()

        if(username == "admin" && password == "admin"){
            alert("login successfull")
            let anchor = document.createElement('a')
            anchor.href = "./pages/dashboard.html"
            document.querySelector('body').appendChild(anchor)
            anchor.click()
            
        }else{
          alert("Username or Password Invalid !")
          form.reset()
        }

    })
})