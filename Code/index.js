
function change(element){
    if(element.innerText=="Login"){
        element.innerText="LogOut";
    }else if(element.innerText=="LogOut"){
        element.innerText="Login";
    }
}
function hide(element){
    element.remove();
}

function like(element){
    alert("Ninja was liked")
}
