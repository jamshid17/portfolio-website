var dark_bright_btn = document.getElementById("dark-bright-btn");
var btn_img = document.getElementById("dark-bright-btn-img");
var dark_or_bright = "Bright";
var body = document.body;
var nav = document.getElementsByTagName("nav")[0];
var navBrand = document.getElementsByClassName("navbar-brand")[0];
var navItems = document.getElementsByClassName("nav-item");
var hello_name = document.getElementById("hello-name");
var card_headers = document.getElementsByClassName("card-header");
// colors 
var black_color = "#1A202C";
var white_color = "#FFFFFF";

dark_bright_btn.onclick = function(){
    if (dark_or_bright == "Bright"){
        dark_or_bright = "Dark";

        body.style.background = "#202023";
        body.style.color = white_color;
        nav.style.backgroundColor = "rgba(32,32,35,0.2)";
        navBrand.style.color = white_color;
        Array.prototype.forEach.call(navItems, element => {
            element.style.color = white_color;
        });
        btn_img.src = "/static/photos/lightbulb.png";
        dark_bright_btn.style.backgroundColor = "#FBD38D";
        if (hello_name != null){
            hello_name.style.backgroundColor = "#313134";}
        Array.prototype.forEach.call(card_headers, element => {
            element.style.color = white_color;
        });
    } 

    else{
        dark_or_bright = "Bright";
        btn_img.src = "/static/photos/light-moon.png";
        dark_bright_btn.style.backgroundColor = "#720d8b";
        body.style.color = black_color;
        body.style.backgroundColor = "#F0E7DB";
        nav.style.backgroundColor = "rgba(255,255,255,0.2)";
        navBrand.style.color = black_color;
        Array.prototype.forEach.call(navItems, element => {
            element.style.color = black_color
        });
        if (hello_name != null){
            hello_name.style.backgroundColor = "#F5F0E8";}
        Array.prototype.forEach.call(card_headers, element => {
            element.style.color = black_color;
        });
    }
}

