//Slider porfolio 

const sliderPortfolio = document.querySelector('.slider-portfolio');
const srcEnCoursSlider = document.querySelector('.img-visible-slider');
const allPicsPortfolio = Array.from(document.querySelectorAll('.grid-item img'));
/*Array.from transform tout en tableau avec tous nos images*/
const rightPortfolio = document.querySelector('.btn-right');
const leftPortfolio = document.querySelector('.btn-left');
const fermerSlide = document.querySelector('.btn-fermer-slider');


let photoEnCours; 
let indexEnCours;

allPicsPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {

        sliderPortfolio.style.display = "block";
        srcEnCoursSlider.src = e.target.src;
        photoEnCours = e.target;
        indexEnCours = allPicsPortfolio.indexOf(photoEnCours)
        console.log(indexEnCours);
    }) 
})

rightPortfolio.addEventListener('click', () => {
    
    if(indexEnCours === 11) {
        indexEnCours = 0; 
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }

    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours + 1].src
    photoEnCours = allPicsPortfolio[indexEnCours + 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})

leftPortfolio.addEventListener('click', () => {
    
    if(indexEnCours === 0) {
        indexEnCours = 11; 
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }

    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours - 1].src
    photoEnCours = allPicsPortfolio[indexEnCours - 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})

fermerSlide.addEventListener('click', () => {
    sliderPortfolio.style.display = "none";
})