var dark_bright_btn = document.getElementById("dark-bright-btn");
var btn_img = document.getElementById("dark-bright-btn-img");
var dark_or_bright = "Bright";
var body = document.body;
var nav = document.getElementsByTagName("nav")[0];
var navBrand = document.getElementsByClassName("navbar-brand")[0];
var navItems = document.getElementsByClassName("nav-item");
var hello_name = document.getElementById("hello-name");
var card_headers = document.getElementsByClassName("card-header");
var vertical_loader = document.getElementById('vertical-loader');
// colors 
var black_color = "#1A202C";
var white_color = "#FFFFFF";
var orange_color = '#F0E7DB';
//motivational quotes
var motivational_quotes = ['You can do it!', 'Be humble', 'Who wants to be in comfort zone? Not me!','No pressure, no diamonds']
var finished_quotes = ['DONE!', 'Look at this humbler!', 'Great job, what about 5 minute rest and 2-round?', 'My boyyyyyy! (execuse me if you are girl)']
var questional_quotes = ['I hope you stopped for a good reason', 'You will get it next time', 'Emergency?', 'You probably tired, right?'] 
//timer page 
var timing = false;
var timeIntervalId;
var selected_time;
var main_container = document.getElementById("main-container");
var time_text = document.getElementById('time');
var motivation = document.getElementById('motivation');
var motivation_next_color = black_color;
var start_reset_btn = document.getElementById("start-reset-btn");
var vertical_loader_fill = document.getElementById('vertical-loader-fill-id');
var background_musics = document.getElementsByClassName('b-music-card');
var timer_options = document.getElementsByClassName('t-option-card');
var musicAudios = document.getElementsByClassName('music-audio');


// dark/bright theme
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
        if (vertical_loader != null){
            vertical_loader.style.backgroundColor = '#313134';
            Array.prototype.forEach.call(timer_options, element =>{
                element.style.backgroundColor = '#313134';
                element.firstElementChild.style.color = white_color;
            })
            start_reset_btn.style.color = white_color;
            motivation_next_color = white_color;
            motivation.style.color = motivation_next_color; 
        }
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
        if (vertical_loader != null){
            vertical_loader.style.backgroundColor = '#F0DCC2';
            Array.prototype.forEach.call(timer_options, element =>{
                element.style.backgroundColor = '#F0DCC2';
                element.firstElementChild.style.color = black_color;
            })
            start_reset_btn.style.color = black_color;
            motivation_next_color = black_color;
            motivation.style.color = motivation_next_color; 
        }
        
    }
}

//timer page -------
if (document.title == "itsme-Jamshid | timer"){
    main_container.style.width = "100%";
    //updating time 
    function updateTime(){
        var time_text_prettified = document.getElementById('time').innerHTML.replaceAll(' ', '').replaceAll('\n', '')
        var minutes_left = parseInt(time_text_prettified.split(':')[0]);
        var seconds_left = parseInt(time_text_prettified.split(':')[1]);
        if (seconds_left == 0){
            if (minutes_left != 0){
                minutes_left -= 1;
                seconds_left = 60; 
            }
            else{
                time_text.innerHTML = '25:00';
            }
        }
        seconds_left -= 1;
        if (seconds_left.toString().length == 1){
            seconds_left = '0' + seconds_left.toString();
        }
        time_text.innerHTML = `${minutes_left}:${seconds_left}`;
    }
    

    //start/reset button functions
    start_reset_btn.onclick = function(){
        if (!timing){
            timing = true;
            timeIntervalId = setInterval('updateTime()', 1000);
            vertical_loader_fill.classList.add('vertical-loader-fill'); 
            vertical_loader_fill.style.backgroundColor = '#1DB954';
            selected_time = parseInt(time_option_function(timer_options));
            vertical_loader_fill.style["animation"] = `fill ${selected_time*60}s linear` //
            start_reset_btn.style['backgroundColor'] = 'transparent';
            start_reset_btn.style['border'] = '1px #1DB954 solid';
            start_reset_btn.innerHTML = 'reset';
            motivation.style['visibility'] = 'visible';
            motivation.style.color = motivation_next_color;
            motivation.innerHTML = motivational_quotes[Math.floor(Math.random()*motivational_quotes.length)]
        }
        else{
            timing = false;
            clearInterval(timeIntervalId);
            time_text.innerHTML = `${selected_time}:00`;
            stopMusic();
            vertical_loader_fill.style['animation'] = 'none';
            vertical_loader_fill.classList.remove('vertical-loader-fill');
            start_reset_btn.style['backgroundColor'] = '#1DB954';
            start_reset_btn.style['border'] = 'none';
            start_reset_btn.innerHTML = 'start';
            motivation.innerHTML = questional_quotes[Math.floor(Math.random()*questional_quotes.length)];
        }
    }
    //time finished
    vertical_loader_fill.addEventListener('animationend', timeEnd, false)
    function timeEnd(){
        timing = false;
        clearInterval(timeIntervalId);
        time_text.innerHTML = `${selected_time}:00`;
        stopMusic();
        vertical_loader_fill.style['animation'] = 'none';
        vertical_loader_fill.classList.remove('vertical-loader-fill');
        start_reset_btn.style['backgroundColor'] = '#1DB954';
        start_reset_btn.style['border'] = 'none';
        start_reset_btn.innerHTML = 'start';
        motivation.innerHTML = finished_quotes[Math.floor(Math.random()*finished_quotes.length)];
    }
    //background music cards and audios
    for (let music of background_musics){
        music.onclick = function(){
            if (!music.classList.contains("bordered-card")){
                for (let m of background_musics){
                    if (m.classList.contains('bordered-card')){
                        m.classList.remove('bordered-card');
                        audioNeedStop = m.firstElementChild.lastElementChild;
                        audioNeedStop.pause();
                        audioNeedStop.currentTime = 0;
                    }
                }
                music.classList.add('bordered-card');
                music_name = music.firstElementChild.children.item(1).innerHTML;
                if (music_name != 'no music'){
                    let musicAudio = music.firstElementChild.lastElementChild;
                    musicAudio.play();
                }

            }
        }
    }

    function stopMusic(){
        for (let music of background_musics){
            if (music.classList.contains('bordered-card')){
                let musicAudio = music.firstElementChild.lastElementChild;
                musicAudio.pause();
                musicAudio.currentTime = 0;
            }
        }
    }
    // time options 
    for (let option of timer_options){
        option.onclick = function(){
            if (!timing){
                if (!option.classList.contains('bordered-card-2')){
                    for (let o of timer_options){
                        o.classList.remove('bordered-card-2');}
                    option.classList.add('bordered-card-2');
                    time_text.innerHTML = `${option.textContent.replaceAll(' ', '').slice(1,3)}:00` 
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
}