let fDrop = document.getElementById('drop1');
let cDrop = document.getElementById('drop2');

let fList = document.getElementById('featuresList');
let cList = document.getElementById('companyList');

let dropMenu = document.getElementById('dropMenu');
let leftNav = document.getElementById('leftNav');
let blackWrapper = document.getElementById('blackWrapper');


fDrop.addEventListener('click', ()=>{
    fList.classList.toggle('display');
    function changeImg() {
        let img = document.getElementById("arrowId1").src;
        if (img.indexOf('icon-arrow-down.svg')!=-1) {
            document.getElementById("arrowId1").src = 'img/icon-arrow-up.svg'
        } else [
            document.getElementById("arrowId1").src ='img/icon-arrow-down.svg'
        ]
    }
    fDrop.addEventListener('click', changeImg())
});


cDrop.addEventListener('click', ()=>{
    cList.classList.toggle('display');
    function changeImg() {
        let img = document.getElementById("arrowId2").src;
        if (img.indexOf('icon-arrow-down.svg')!=-1) {
            document.getElementById("arrowId2").src = 'img/icon-arrow-up.svg'
        } else [
            document.getElementById("arrowId2").src ='img/icon-arrow-down.svg'
        ]
    }
    cDrop.addEventListener('click', changeImg())
});



dropMenu.addEventListener('click', () => {
    leftNav.classList.toggle('visible');
    blackWrapper.classList.toggle('visible');
    function changeSvg() {
        let menu = dropMenu.src;
        if (menu.indexOf('icon-menu.svg')!=-1) {
            document.getElementById("dropMenu").src = 'img/icon-close-menu.svg'
            document.getElementById("dropMenu").src.classList.toggle('close');
        } else [
            document.getElementById("dropMenu").src ='img/icon-menu.svg'
        ]
    }
    dropMenu.addEventListener('click', changeSvg())
})