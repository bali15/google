let login = JSON.parse(localStorage.getItem("login")) || [
{

}
]

console.log(login)


function login1(){
  let typedUsername = document.querySelector(".lbr-email-input").value
  let typedPassword = document.querySelector(".lbr-jelszo-input").value
    login.push({username: typedUsername, password: typedPassword})
    console.log(login)
    localStorage.setItem("login", JSON.stringify(login))

}


function clearData(){
  localStorage.clear()
}

