let fDrop = document.getElementById('drop1');
let cDrop = document.getElementById('drop2');

let fList = document.getElementById('featuresList');
let cList = document.getElementById('companyList');




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

