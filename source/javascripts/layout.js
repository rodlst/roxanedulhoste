
var logo = document.querySelector('.logo');

logo.addEventListener("click",function(){
  window.location.href = '../index.html';
});

var proj = document.getElementsByClassName("proj-name");
var projImg = document.getElementsByClassName("proj-img"); //main photo
var photos = document.querySelector(".photos"); //container for the description
var projContent = document.querySelector(".proj-content");
var more = document.querySelector('#btn');
var back = document.querySelector('#back');
var carousel = document.querySelector('.carousel');
var photoList = carousel.children[0];

var currentProj;

var numberPhoto = 3; //nombre de photos par projets

Array.from(proj).forEach(projet=>{
  currentProj = "fimmi";
  projContent.innerHTML = changeText(currentProj);

  projet.addEventListener("mouseover", function(){
    currentProj = projet.id;

    while (photoList.hasChildNodes()) {
      photoList.removeChild(photoList.firstChild);
    }

    console.log(currentProj);

    changeImage(currentProj, photoList, numberPhoto);

    Array.from(proj).forEach(projet2=>{
      projet2.classList = "proj-name";
    });

    projet.classList = "proj-name active";

    photos.classList.remove("display");
    photos.classList.add("remove");
    setTimeout(function(){
      currentProj = projet.id;

      Array.from(projImg).forEach(pI=>{
        pI.style.backgroundImage = "url(../images/"+currentProj+"/"+0+".jpg)"; //url(../images/"+projet.id+"/"+0+".png)"; Il faut que toutes tes images de projets que tu veux afficher soient en png et nommées comme le nom du projet
      })

      projContent.innerHTML = changeText(currentProj);

      photos.classList.remove("remove");
      photos.classList.add("display");
    },300);
  });

  more.addEventListener("click",function(){
    currentProj = projet.id;

    back.style.display = "block";
    photos.style.display = "none";
    carousel.style.display = "flex";
  });

  back.addEventListener("click",function(){
    photos.style.display = "block";
    carousel.style.display = "none";
    back.style.display = "none";
  });
});

changeImage(currentProj, photoList, numberPhoto);


// REMPLISSAGE DU TEXTE POUR CHAQUE PROJETS
// ADD CASE WHEN ADD PROJECTS
function changeText(projet){
  switch (projet) {
    case "fimmi":
        return fimmi;
      break;
    case "pasvupasnous":
        return pasvupasnous;
      break;
    case "mihivai":
        return mihivai;
      break;
    case "yodanja":
        return yodanja;
      break;
    case "texposou":
        return texposou;
      break;
    default:
  }
}

// affichage des photos

function changeImage(projet, list, number){
  for(var i = 0; i < number; i++){
    var third = document.querySelector('.third');
    var elt = document.createElement('div');
    elt.className = "carousel-img";
    third.style.backgroundImage = "url(../images/"+projet+"/1.jpg)";
    //third.innerHTML = projet; // remove to remove title on photo
    elt.style.backgroundImage = "url(../images/"+projet+"/"+i+".jpg)";
    //elt.innerHTML = projet; // remove to remove title on photo
    list.append(elt);
  }
}
