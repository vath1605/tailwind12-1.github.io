const btnToggle = document.getElementById('btn_drop');
const menu = document.getElementById('btnMenu');
const close = document.getElementById('btnClose');
var isShow=false;
var isClose = false;
var isMenu = true;
const pf = document.getElementById('pf');
const pf_menu = document.getElementById('pf_menu');
const navItem = document.getElementById('mobile-menu');
var isDrop = false;
btnToggle.onclick =()=>{
    if(isClose==false && isMenu==true){
        menu.style.display="none";
        close.style.display="block";
        isClose=true;
        isMenu=false;
        isDrop=true;
    }
    else{
        menu.style.display="block";
        close.style.display="none";
        isClose=false;
        isMenu=true;
        isDrop=false;
    }
    if(isDrop){
        navItem.style.height='100%';
    }else{
        navItem.style.height='0px';
    }
}
pf.onclick=()=>{   
    if(isShow==false){
        pf_menu.style.transition="all 200ms ease-in-out";
        pf_menu.style.transform="scal(1.5)";
        pf_menu.style.display="block";
        isShow=true;
    }
    else{
        pf_menu.style.transition="all 200ms ease-in-out";
        pf_menu.style.transform="scal(1.5)";
        pf_menu.style.display="none";
        isShow=false;
    }
}
