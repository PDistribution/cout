let menuToggle = document.getElementById("menuToggle")
let themeBtn = document.getElementById("themeBtn")
let Linkmenu = document.getElementById("Linkmenu")
let fon = document.getElementById("fon")


menuToggle.addEventListener("click", ()=>{
    Linkmenu.classList.toggle("active")
    fon.classList.toggle("active")
    

    if(Linkmenu.classList.contains("active")){
        menuToggle.textContent ="✖"
    }else{
        menuToggle.textContent ="☰"
    }
})

fon.addEventListener("click", ()=>{
    fon.classList.remove("active")
    Linkmenu.classList.remove("active")
})

if(themeBtn){
    themeBtn.onclick = function(){
        document.body.classList.toggle("dark")

        if(document.body.classList.contains("dark")){
            themeBtn.innerText ="Night"
        }else{
            themeBtn.innerText ="Day"
        }
    }
}

let a = 0
let b = 0
let c = 0

setInterval(function(){
    if(a < 400){
        a = a + 10
        document.getElementById("n1").innerText = a + "+"
    }

     if(b < 16){
        b = b + 1
        document.getElementById("n2").innerText = b + "+"
    }

     if(c < 90){
        c = c + 2
        document.getElementById("n3").innerText = c + "%"
    }
}, 300)



let images = [
    "ccl02.png",
    "ccl03.png",
    "ccl04.png"
]

let i = 0

let Accueil = document.getElementById("Accueil")

function changeBg(){
    Accueil.style.backgroundImage = "url("+images[i]+")"
    i++

    if (i==images.length){
        i=0
    }
}
setInterval(changeBg,3000)

//formulaire
function next(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    if(name =="" || email ==""){
        document.getElementById("error1").innerText = "Remplissez tous les champs"
        return false
    }
    else{
       document.getElementById("error1").innerText =""
       document.getElementById("step1").style.display ="none"
       document.getElementById("step2").style.display ="block"

       
    }
}


function back(){

    if(number =="" || adress ==""){
         document.getElementById("error2").innerText = "Remplissez les 2 champs"
        return false
    }
    else{
        document.getElementById("error2").innerText =""
        document.getElementById("step2").style.display ="none"
        document.getElementById("step3").style.display ="block"
    }
        
}

function back(){
     document.getElementById("step1").style.display ="block"
     document.getElementById("step2").style.display ="none"

     document.getElementById("step1").style.display ="none"
     document.getElementById("step3").style.display ="block"
    
    
}


function submitform(){
    let password = document.getElementById("password").value
    let confirm = document.getElementById("confirm").value

    if(password =="" || confirm ==""){
        document.getElementById("error3").innerText ="Remplissez tous les champs"
        return false
    }
    
    if(password!=confirm){
        document.getElementById("error3").innerText ="Mot de passe différent"
        return false
    }

    document.getElementById("error3").innerText =""
    document.getElementById("success").innerText ="Le formulaire est envoyé"

    setTimeout(function(){
        location.reload()
    },2000)

    return false
}