document.getElementById('name').addEventListener('keydown', conti , false);

function conti(key){
    if (key.keyCode == '13')
    {
        localStorage.setItem('h-name', document.getElementById('name').value);
        document.getElementById('welcome').innerHTML = "";
        document.getElementById('load').style.visibility = "visible";
        setTimeout(gayab , 1000);
        if (localStorage.getItem('h-name') == ""){
            document.querySelector('.header').innerHTML = "HomeFlix";
        }
        else{
        document.querySelector('.header').innerHTML = "HomeFlix - "+localStorage.getItem('h-name');
    }}
}
function gayab() {
    document.getElementById('load').style.visibility = "hidden";
    document.getElementById('main').style.visibility = "visible";
}