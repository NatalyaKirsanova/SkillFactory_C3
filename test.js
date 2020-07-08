const city = document.querySelector('.city');
console.log("document.cookie", document.cookie);

const btn = document.querySelector(".j-btn-set-cookie");
btn.addEventListener("click", setCookie);

const btn_del = document.querySelector(".j-btn-del");
btn_del.addEventListener("click", delField);

const btn_del_cookie = document.querySelector(".j-btn-del-cookie");
btn_del_cookie.addEventListener("click", delCookie);

const btn_save_check = document.querySelector(".j-btn-save");
btn_save_check.addEventListener("click", saveCheck);

const btn_save_clean = document.querySelector(".j-btn-clean");
btn_save_clean.addEventListener("click", cleanCheck);


function setCookie() {
	cookie_text="client_city= Ваш город - "+escape(city.value)+"; max-age=36000";
	console.log("cookie_text", cookie_text);
  document.cookie = cookie_text;
  console.log("document.cookie", document.cookie);
}

function delCookie() {

  city.value="";
  cookie_text="client_city= Ваш город - "+unescape(city.value)+"; max-age=0";
  console.log("cookie_text", cookie_text);
  document.cookie = cookie_text;
  console.log("document.cookie", document.cookie);
}

function delField() {
  city.value="";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function saveCheck() {
  getCheckedCheckBoxes();
}


var checkboxes = document.getElementsByClassName('form-check-input');

function cleanCheck(){
 localStorage.clear();
for (var index = 0; index < checkboxes.length; index++) {
    checkboxes[index].disabled=false;
    console.log(checkboxes[index]);
  }
  console.log(localStorage);
}


// getElementsByClassName
function getCheckedCheckBoxes() {
  var checkboxesChecks = {};
  for (var index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
      checkboxesChecks[index] = true;
      localStorage.setItem(index,1);
      console.log(localStorage);
    }
    else {
      checkboxesChecks[index] = false;
      localStorage.setItem(index,0);
      console.log(localStorage);
    }
    checkboxes[index].disabled=true;
    console.log(checkboxesChecks[index]);
    console.log(localStorage);

  }
}
function setCheckedCheckBoxes(){
  for (var index = 0; index < checkboxes.length; index++) {
    if (JSON.parse(localStorage.getItem(index))==1){
      console.log(localStorage);
      checkboxes[index].checked=true;
    }else{
      checkboxes[index].checked=false;
    }
    checkboxes[index].disabled=true;
  }
}

function init() {
  var city_value=getCookie("client_city");
  city.value = city_value;
  // console.log("city_value",city_value);
  // console.log(localStorage);
  // localStorage.clear();
  // console.log(localStorage);
  if (localStorage.length ==0){

    console.log(localStorage.length);
    
  } else{
    console.log(localStorage.length);
    console.log(localStorage);
    setCheckedCheckBoxes();
  }
  
}

document.addEventListener('DOMContentLoaded', function(){
	console.log('Готов!');
	init();
}); 
