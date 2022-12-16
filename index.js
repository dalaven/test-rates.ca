
var loginState = false

function openMenu() {
    document.getElementById("SideBar").style.display = "block";
}

function closeMenu() {
    document.getElementById("SideBar").style.display = "none";
    if(loginState){
        signout();
    }
}

function login() {
    if(loginState){
        return;
    }
    
    window.scrollTo(0, document.body.scrollHeight);
    createOption("Debt");
    createOption("Finance");
    createOption("Loans");
    openMenu();
    loginState = true;
}

function signout() {
    window.scrollTo(0, 0);
    deleteOption("Debt");
    deleteOption("Finance");
    deleteOption("Loans");
    loginState = false;
    
}

function createOption(OptionText) {
    var menu = document.getElementById("SideBar");
    var a = document.createElement('a'); 
    var link = document.createTextNode(OptionText);
    a.appendChild(link); 
    a.className ="nav-button";
    a.id = OptionText.replace(/\s+/g, '');
    a.href = "javascript:void(0)"; 
    menu.prepend(a); 
}

function deleteOption(OptionId) {
    var elem = document.getElementById(OptionId.replace(/\s+/g, ''));
    elem.remove();
}