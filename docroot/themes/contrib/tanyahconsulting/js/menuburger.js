function openMenuMain() {
	
    var x = document.getElementById("nav");
    if (x.className === "menu--main") {
        x.className += " responsive";
    } else {
        x.className = "menu--main";
    }
}