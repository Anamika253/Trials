function navB() {
    var navbarDialog = document.getElementById('navbarDialog');
    var gyb = document.getElementById("text");

    if (navbarDialog.style.display === 'none') {
        navbarDialog.style.display = 'block';
        gyb.style.display = 'none';
    } else {
        navbarDialog.style.display = 'none';
        gyb.style.display = 'block';
    }
}

function callBack(){
    document.getElementById("navbarDialog").style.display = 'none';
    var T= document.getElementById("text");
    T.style.color = "white";
    T.style.background= 'none';
    T.textContent = 'Thank you! Hope you liked my pages <3';
    document.getElementById("text").style.display = 'block';
}