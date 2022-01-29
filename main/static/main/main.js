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

//timer page 
var timing = false;
var main_container = document.getElementById("main-container");
var start_reset_btn = document.getElementById("start-reset-btn");
var vertical_loader_fill = document.getElementById('vertical-loader-fill-id');
var background_musics = document.getElementsByClassName('b-music-card');
var timer_options = document.getElementsByClassName('t-option-card');


if (document.title == "itsme-Jamshid | timer"){
    main_container.style.width = "100%";
}

start_reset_btn.onclick = function(){
    if (!timing){
        timing = true;
        vertical_loader_fill.classList.add('vertical-loader-fill'); 
        vertical_loader_fill.style.backgroundColor = '#1DB954';
        var selected_time = parseInt(time_option_function(timer_options));
        console.log(selected_time*60);
        vertical_loader_fill.style["animation"] = `fill ${selected_time*60}s linear`
        start_reset_btn.style['backgroundColor'] = 'transparent';
        start_reset_btn.style['border'] = '1px #1DB954 solid';
        start_reset_btn.innerHTML = 'reset';
    }
    else{
        timing = false;
        vertical_loader_fill.style['animation'] = 'none';
        vertical_loader_fill.classList.remove('vertical-loader-fill');
        start_reset_btn.style['backgroundColor'] = '#1DB954';
        start_reset_btn.style['border'] = 'none';
        start_reset_btn.innerHTML = 'start'

    }
}
for (let music of background_musics){
    music.onclick = function(){
        if (!music.classList.contains("bordered-card")){
            for (let m of background_musics){
                m.classList.remove('bordered-card')
            }
            music.classList.add('bordered-card')
        }
    }
}

for (let option of timer_options){
    option.onclick = function(){
        if (!timing){
            if (!option.classList.contains('bordered-card-2')){
                for (let o of timer_options){
                    o.classList.remove('bordered-card-2');}
                option.classList.add('bordered-card-2')
            }
        }
    }
}
function time_option_function(options){
    for (let option of options){
        if (option.classList.contains('bordered-card-2')){
            return option.textContent.replaceAll(' ', '').slice(1,3);
        }
    }
}

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

