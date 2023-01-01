var text = "Hi, I'm Robert.";
var display = "";
index = 0;
speed = 75;

function typing() {
    window.scrollTo(0, 0);

    if (index < text.length) {

        display += (text.charAt(index));
        document.getElementById("type").innerHTML = display;
        index++;
        setTimeout(typing, speed);
    } else {
        fade_in("index");
    }
}

function skip_typing() {
    document.getElementById("type").innerHTML = text

    fade_in("home")
    document.getElementById("type").style.animation = "fadeIn 1s";
}

function fade_in(destination) {
    if (destination == "index") {
        document.getElementById("navigation").style.visibility = "visible";
        document.getElementById("navigation").style.animation = "fadeIn 3s";
    
        document.getElementById("footer").style.visibility = "visible";
        document.getElementById("footer").style.animation = "fadeIn 3s";

        document.getElementById("introduction").style.backgroundColor = "#383838";
        document.getElementById("introduction_text").style.backgroundColor = "#383838";

        document.getElementById("type").style.backgroundColor = "#383838";

        document.getElementById("introduction_p").style.visibility = "visible";
        document.getElementById("introduction_p").style.animation = "fadeIn 3s";
        document.getElementById("introduction_p").style.backgroundColor = "#383838";

        document.getElementById("UT_link").style.backgroundColor = "#383838";

        document.getElementById("introduction_img").style.visibility = "visible";
        document.getElementById("introduction_img").style.animation = "fadeIn 3s";
        document.getElementById("introduction_img").style.backgroundColor = "#383838";

        document.getElementById("projects").style.visibility = "visible";
        document.getElementById("projects").style.animation = "fadeIn 3s";

    } else if (destination == "home") {
        document.getElementById("navigation").style.visibility = "visible";
        document.getElementById("navigation").style.animation = "fadeIn 0.5s";
    
        document.getElementById("footer").style.visibility = "visible";
        document.getElementById("footer").style.animation = "fadeIn 0.5s";

        document.getElementById("introduction").style.backgroundColor = "#383838";
        document.getElementById("introduction_text").style.backgroundColor = "#383838";

        document.getElementById("type").style.backgroundColor = "#383838";

        document.getElementById("introduction_p").style.visibility = "visible";
        document.getElementById("introduction_p").style.animation = "fadeIn 0.5s";
        document.getElementById("introduction_p").style.backgroundColor = "#383838";

        document.getElementById("UT_link").style.backgroundColor = "#383838";

        document.getElementById("introduction_img").style.visibility = "visible";
        document.getElementById("introduction_img").style.animation = "fadeIn 0.5s";
        document.getElementById("introduction_img").style.backgroundColor = "#383838";

        document.getElementById("projects").style.visibility = "visible";
        document.getElementById("projects").style.animation = "fadeIn 0.5s";
    
    }else {
        document.getElementById("navigation").style.visibility = "visible";
        document.getElementById("navigation").style.animation = "fadeIn 1s";
    
        document.getElementById("footer").style.visibility = "visible";
        document.getElementById("footer").style.animation = "fadeIn 1s";
    }
}