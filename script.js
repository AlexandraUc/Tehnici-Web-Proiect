// 1. Schimbare culoare header si footer
// metoda din clasa Math, metoda din clasa String, setInterval, getComputedStyle, target, stopPropagation,
// evenimente generate de mouse, setTimeout

// Numar random intre 1 si 10
var interval = Math.floor(Math.random() * 10) + 1;
var schimba = setInterval(schimbaCuloare, interval * 1000);

// Opreste intervalul dupa 20 de secunde
setTimeout(function(){
    clearInterval(schimba);
}, 20000);

function schimbaCuloare(){
    var header = document.getElementsByTagName("header")[0];
    var footer = document.querySelector("footer");
    // Aici tre getComputedStyle pentru ca altfel o sa fie string gol
    var styles = getComputedStyle(header);
    
    if(styles.getPropertyValue("background-color") == "rgb(37, 22, 27)"){
        header.setAttribute("style", "background-color: rgba(60, 0, 0, 1); transition: background-color 2s;");
        footer.setAttribute("style", "background-color: rgba(60, 0, 0, 1); transition: background-color 2s;");
    }
    else{
        header.setAttribute("style", "background-color: rgb(37, 22, 27); transition: background-color 2s;");
        footer.setAttribute("style", "background-color: rgb(37, 22, 27); transition: background-color 2s;");
    }
}

// Apasarea h1-ului din header nu va opri schimbarea culorii
document.querySelector("header").addEventListener("click", function(event){
    if(event.target.tagName != "h1".toUpperCase())
        clearInterval(schimba);
    else{
        event.currentTarget.setAttribute("style", "background-color: rgba(60, 0, 0, 1);");
    }
})

document.querySelector("footer").addEventListener("click", function(){
    clearInterval(schimba);
});

// Apasarea butonului de abonare la newsletter nu va opri schimbarea culorii
document.querySelector("footer button").addEventListener("click", function(event){
    event.stopPropagation();
});

// 2. Modificarea imaginilor din stanga de pe pagina principala
//  setInterval, classList, schimbare proprietati, metoda din clasa Date
if(document.getElementsByClassName("link-stanga")){
    interval = (new Date().getMonth()) + 1;
    setInterval(changeImg, interval * 1000);

    function changeImg(){
        var articoleStanga = document.getElementsByClassName("link-stanga");
        
        for(var i = 0; i < articoleStanga.length; i++){
            if(articoleStanga[i].classList.contains("debuturi")){
                if(i % 2 == 0){
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/leech.jpg"){
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/windows.jpg");
                    }
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/leech.jpg");
                    }
                }
                else{
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/under_shadow.jpg")
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/get_out.jpg");
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/under_shadow.jpg");
                    }
                }
                
            }

            if(articoleStanga[i].classList.contains("paranormal-psihologic")){
                if(i % 2 == 0){
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/1408.jpg"){
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/others.jpg");
                    }
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/1408.jpg");
                    }
                }
                else{
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/dark_matter.jpg")
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/shining.jpg");
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/dark_matter.jpg");
                    }
                }
            }

            if(articoleStanga[i].classList.contains("psihologic-recent")){
                if(i % 2 == 0){
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/sacred_deer.jpg"){
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/goodnight.jpg");
                    }
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/sacred_deer.jpg");
                    }
                }
                else{
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/enemy.jpg")
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/wellness.jpg");
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/enemy.jpg");
                    }
                }
            }

            if(articoleStanga[i].classList.contains("sf")){
                if(i % 2 == 0){
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/horizon.jpg"){
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/cube.jpg");
                    }
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/horizon.jpg");
                    }
                }
                else{
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/alien.jpg")
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/annihilation.jpg");
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/alien.jpg");
                    }
                }
            }

            if(articoleStanga[i].classList.contains("antologii")){
                if(i % 2 == 0){
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/carnivorous_sky.jpg"){
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/blood_books.jpg");
                    }
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/carnivorous_sky.jpg");
                    }
                }
                else{
                    if(articoleStanga[i].firstElementChild.getAttribute("src") == "resurse/lottery.jpg")
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/full_dark.jpg");
                    else{
                        articoleStanga[i].firstElementChild.setAttribute("src", "resurse/lottery.jpg");
                    }
                }
            }
        }
    }
}

// Expresie regulata pentru validarea emailului
var regex = /^[a-zA-Z0-9.'-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
// ^ si $ delimiteaza inceputul si finalul
// Cel putin un caracter la inceput, apoi @, apoi alte caractere, apoi ori avem un . ori mai multe
// dar urmate de alte caractere

// 3. Pastrarea feedback-ului in local storage
// Input functional, local storage, evenimente generate de mouse/ tastatura,
// validarea emailului cu expresie regulata, creare si stergere de elemente

// Doar daca exista (exista doar pe pagina de Contact, pe celelalte va da eroare)
if(document.getElementById("submit-mesaj")){
    document.getElementById("submit-mesaj").onclick = function(){
        // Lista de liste
        var lista = []
        if(localStorage.getItem("contact")){
            // Era string, il transformam in array
            lista = JSON.parse(localStorage.getItem("contact"));
        }
    
        var infoContact = document.getElementsByClassName("info-contact");
        var motiv = document.getElementById("selector-motiv").value;
        var text = document.getElementById("mesaj").value;

        var email = infoContact[2].value;
        if(regex.test(email)){
            // Adaugam lista cu noile informatii
            lista.push([infoContact[0].value, infoContact[1].value, infoContact[2].value, motiv, text]);
            localStorage.setItem("contact", JSON.stringify(lista));

            // Daca exista span-ul cu email invalid il stergem
            var inputEmail = document.getElementById("contact-email");
            if(inputEmail.lastElementChild.innerHTML.toLowerCase() == "Email invalid".toLowerCase()){
                inputEmail.removeChild(inputEmail.lastChild);
            }
        }
        else{
            // Daca emailul este gresit se va crea un span doar daca nu exista deja
            var inputEmail = document.getElementById("contact-email");
            if(inputEmail.lastElementChild.innerHTML != "Email invalid"){
                var span = document.createElement("span");
                span.innerHTML = "Email invalid";
                span.style.color = "red";
                inputEmail.appendChild(span);
            }
        }
    }
}

// 4. Pastrarea utilizatorilor in local storage
// Local storage, validarea mail, schimbat proprietati, adaugare si stergere de clase, 
// creare si stergere de elemente, metoda din clasa Array, classList
if(document.getElementById("sign-up-buton")){
    document.getElementById("sign-up-buton").onclick = function(){
        var vNume = document.getElementsByClassName("sign-up-input");
        var emailSignUp = document.getElementById("sign-up-email");
        var parola = document.getElementsByClassName("sign-up-parola");

        var ok = 1;
        // Verificam daca toate campurile sunt ok
        if(!vNume[0].value){
            vNume[0].setAttribute("placeholder", "Acest camp nu poate fi gol");
            vNume[0].classList.add("invalid");
            ok = 0;
        }
        if(!vNume[1].value){
            vNume[1].setAttribute("placeholder", "Acest camp nu poate fi gol");
            vNume[1].classList.add("invalid");
            ok = 0;
        }
        if(!regex.test(emailSignUp.value)){
            // Valoarea trebuie resetata pentru a functiona placeholder-ul
            emailSignUp.value = "";
            emailSignUp.setAttribute("placeholder", "Adresa de mail invalida");
            emailSignUp.classList.add("invalid");
            ok = 0;
        }
        if(!parola[0].value){
            parola[0].setAttribute("placeholder", "Acest camp nu poate fi gol");
            parola[0].classList.add("invalid");
            ok = 0;
        }
        if(parola[0].value != parola[1].value){
            parola[1].setAttribute("placeholder", "Parola incorecta");
            parola[1].classList.add("invalid");
            ok = 0;
        }

        // Daca totul este ok, verificam ca adresa de mail sa fie unica
        if(ok){
            var utilizatori = []
            // Daca nu avem utilizatori adaugam
            if(!localStorage.getItem("users")){
                utilizatori.push([vNume[0].value, vNume[1].value, emailSignUp.value, parola[0].value]);
                localStorage.setItem("users", JSON.stringify(utilizatori));
            }
            else{
                utilizatori = JSON.parse(localStorage.getItem("users"));
                for(let i = 0; i < utilizatori.length; i++){  
                    // Exista deja utilizator cu adresa de email  
                    if(emailSignUp.value == utilizatori[i][2])
                        ok = 0;
                }
                var div = document.getElementById("sign-up-div");
                // Adaugam utilizatorul
                if(ok){
                    utilizatori.push([vNume[0].value, vNume[1].value, emailSignUp.value, parola[0].value]);
                    localStorage.setItem("users", JSON.stringify(utilizatori));
    
                    if(div.lastElementChild.innerHTML == "Exista deja un utilizator cu aceasta adresa de email!")
                        div.removeChild(div.lastChild);
                    
                    if(vNume[0].classList.contains("invalid")){
                        vNume[0].classList.remove("invalid");
                        vNume[0].setAttribute("placeholder", "Prenume");
                    }
                    if(vNume[1].classList.contains("invalid")){
                        vNume[1].classList.remove("invalid");
                        vNume[1].setAttribute("placeholder", "Nume");
                    }
                    if(emailSignUp.classList.contains("invalid")){
                        emailSignUp.classList.remove("invalid");
                        emailSignUp.setAttribute("placeholder", "Email");
                    }
                    if(parola[0].classList.contains("invalid")){
                        parola[0].classList.remove("invalid");
                        parola[0].setAttribute("placeholder", "Parola");
                    }
                    if(parola[1].classList.contains("invalid")){
                        parola[1].classList.remove("invalid");
                        parola[1].setAttribute("placeholder", "Confirmati parola");
                    }
                }
                else{
                    if(div.lastElementChild.innerHTML != "Exista deja un utilizator cu aceasta adresa de email!"){
                        var paragraf = document.createElement("p");
                        paragraf.innerHTML = "Exista deja un utilizator cu aceasta adresa de email!";
                        paragraf.style.color = "red";
                        div.appendChild(paragraf);
                    }
                }
            }
        }
    }
}

// 5. Afisarea parolei
// Schimbare proprietate
if(document.getElementById("sign-up-arata")){
    document.getElementById("sign-up-arata").onclick = function(){
        if(this.checked == true)
            document.getElementsByClassName("sign-up-parola")[0].setAttribute("type", "text");
        else
            document.getElementsByClassName("sign-up-parola")[0].setAttribute("type", "password");
    }
}

// 6. Permitarea utilizatorilor sa se logheze doar daca exista in local storage
// Local storage, creare si stergere de elemente
if(document.getElementById("login-buton")){
    document.getElementById("login-buton").onclick = function(){
        var emailLogIn = document.getElementById("login-email").value;
        var parola = document.getElementById("login-parola").value;
    
        var ok = 0;
        // Iteram prin utilizatori sa vedem daca exista
        if(localStorage.getItem("users")){
            var utilizatori = JSON.parse(localStorage.getItem("users"));
            for(let i = 0; i < utilizatori.length; i++)
                if(emailLogIn == utilizatori[i][2] && parola == utilizatori[i][3])
                    ok = 1;
        }
    
        if(ok){
            // Chestii
            var div = document.getElementById("login-div");
            if(div.lastElementChild.innerHTML == "Email incorect sau parola incorecta"){
                div.removeChild(div.lastChild);
            }
        }
        else{
            var div = document.getElementById("login-div");
            if(div.lastElementChild.innerHTML != "Email incorect sau parola incorecta"){
                var paragraf = document.createElement("p");
                paragraf.innerHTML = "Email incorect sau parola incorecta";
                paragraf.style.color = "red";
                div.appendChild(paragraf);
            }
        }
    }
}

// 7. Afisarea parolei
// Schimbare proprietate
if(document.getElementById("login-arata")){
    document.getElementById("login-arata").onclick = function(){
        if(this.checked == true)
            document.getElementById("login-parola").setAttribute("type", "text");
        else
            document.getElementById("login-parola").setAttribute("type", "password");
    }
}

//localStorage.clear();