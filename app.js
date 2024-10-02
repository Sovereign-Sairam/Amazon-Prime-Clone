alert("Disclaimer: This website is solely for educational purposes!!");


const catagory = document.getElementById('catagoriesId');
const catagoryIcon =  document.getElementById('catagorieIcon');
const language = document.querySelector('.languageBtn');
const languageIcon =document.getElementById('languageBtnIcon');
const login = document.querySelector('.loginBtn');
const loginIcon =document.getElementById('loginBtnIcon');
const catagoryHidden = document.querySelector('.catagories-hidden');
const profileHiddenn = document.querySelector('.hidden-profile');
const languageHidden = document.querySelector('.hidden-language');
const browseBtn = document.querySelector('.BrowseBtn');
const browseHidden = document.querySelector('.browse-hidden');
const catagoryHiddenBtn = document.querySelector('#browse-hidden-list-catagories');
const catagoryHiddenMobile = document.querySelector('.hidden-catagories-container');
const overlay = document.querySelector('.overlay');


catagory.addEventListener('click',function(){
    catagoryIcon.classList.toggle('rotate');
    catagoryHidden.classList.toggle('catagoryChecked');
    overlay.classList.toggle('overlay-show');
});
browseBtn.addEventListener('click',function(){
    catagoryIcon.classList.toggle('rotate');
    browseHidden.classList.toggle('catagoryChecked');
    overlay.classList.toggle('overlay-show');
});
catagoryHiddenBtn.addEventListener('click',function(){
    catagoryIcon.classList.toggle('rotate');
    catagoryHiddenMobile.classList.toggle('checked');
    overlay.classList.toggle('overlay-show');
});
login.addEventListener('click',function(){
    loginIcon.classList.toggle('rotate');
    profileHiddenn.classList.toggle('profileChecked');
    overlay.classList.toggle('overlay-show');
});
language.addEventListener('click',function(){
    languageIcon.classList.toggle('rotate');
    languageHidden.classList.toggle('languageChecked');
    overlay.classList.toggle('overlay-show');
});
