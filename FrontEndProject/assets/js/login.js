var loginCheck = localStorage.getItem('login');

if(loginCheck == "true"){
    document.querySelector(".nav-menu a.beforeLogin").style.display = "none";
    var con = document.getElementsByClassName("afterLogin");
    
    for(let i=0;i<con.length;i++){
        const el = con[i];
        el.style.display = "block";      
    }
}

else {
    document.querySelector(".nav-menu a.beforeLogin").style.display = "block";
    var con = document.getElementsByClassName("afterLogin");
    
    for(let i=0;i<con.length;i++){
        const el = con[i];
        el.style.display = "none";      
    }
}