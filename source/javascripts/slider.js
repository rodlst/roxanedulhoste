
var profile = document.querySelector('#profileBtn');
var projects = document.querySelector('#projectsBtn');
var index = document.querySelector('#hello');
var logo = document.querySelector(".logo");

var projDiv = document.querySelector(".projects");
var profDiv = document.querySelector(".profile");
var helloDiv = document.querySelector(".index");

var grid1 = document.querySelector(".grid");
var grid2 = document.querySelector(".grid");

var array = [profile,projects,index];
var arrayText = ["profile","projects","index"];
var array2 = [projDiv, profDiv, helloDiv];

var loading = document.querySelector("#loading");


// CHANGE LA VARIABLE POUR VARIER LE TEMPS POUR LE CHANGEMENT AUTO DES PAGES (en s)
var temps = 8; //soit 8 secondes
var bool = false; //turn true/false to enable/disable

function load(){
  if(bool){
    var x = 0;
    setInterval(function(){
      x+= 0.1;
      loading.style.width = x+"%";
    },temps);
  }
}

function change(item,indexArray){
  item.classList.add('remove');
  if(logo != null){
    logo.classList.add('remove');
  }
  setTimeout(function(){
    item.classList.remove('is-ready');
    if(logo != null){
      logo.classList.remove('is-ready');
    }
  },1600);
  setTimeout(function(){
    window.location.href = '../'+arrayText[array.indexOf(indexArray)]+'.html';
  },400);

}

Array.from(array2).forEach(l=>{
  if(l){
    document.addEventListener('DOMContentLoaded', function() {
      load();

      setTimeout(function(){
        l.classList.add('is-ready');
        if(logo != null){
          logo.classList.add('is-ready');
        }
      },50);
    });

    if(bool){
      setInterval(function(){
        var loc = location.pathname;
        var numbIndex;

        switch (loc) {
          case "/index.html":
              numbIndex = 1;
            break;
          case "/profile.html":
              numbIndex = 2;
            break;
          case "/projects.html":
              numbIndex = 0;
            break;
          default:
            numbIndex = 0;
        }
        change(l,array[numbIndex]);
      },temps*1000);
    }

    Array.from(array).forEach(p=>{
      p.addEventListener("click",function(){
        change(l,p);
      });
    });

  }
});
