var xhr= new XMLHttpRequest();
xhr.open('GET', 'navigationController.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    let navContainers = document.querySelectorAll("nav");

    // for(var WLNAVI=0;WLNAVI<navContainers.length;WLNAVI++){
    //     navContainers[WLNAVI].innerHTML= this.responseText;
    // }
    
    document.querySelector("#WL_navbarContainer nav").innerHTML= this.responseText;
    // document.querySelector("#WL_ftr_navbarContainer nav").innerHTML= this.responseText;
};
xhr.send();

var xhr= new XMLHttpRequest();
xhr.open('GET', 'footerController.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    let navContainers = document.querySelectorAll("#nav");

    // for(var WLNAVI=0;WLNAVI<navContainers.length;WLNAVI++){
    //     navContainers[WLNAVI].innerHTML= this.responseText;
    // }
    
    // document.querySelector("#WL_navbarContainer nav").innerHTML= this.responseText;
    document.querySelector("#WL_ftr_navbarContainer nav").innerHTML= this.responseText;
};
xhr.send();