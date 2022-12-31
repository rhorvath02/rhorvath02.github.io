var text = "Hi, I'm Robert.";
var display = "";
index = 0;
speed = 40;

function typing() {
    window.scrollTo(0, 0);

    var page = window.location.href;
    
    console.log(page);

    if (index < text.length && page == "https://rhorvath.info") {

        display += (text.charAt(index));
        document.getElementById("type").innerHTML = display;
        index++;
        setTimeout(typing, speed);
    } else {
        fade_in("home");
    }
}

function fade_in(destination) {
    document.getElementById("navigation").style.visibility = "visible";
    document.getElementById("navigation").style.animation = "fadeIn 1s";

    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("footer").style.animation = "fadeIn 1s";

    if (destination == "home") {
        document.getElementById("introduction").style.backgroundColor = "#383838";
        document.getElementById("introduction_text").style.backgroundColor = "#383838";

        document.getElementById("type").style.backgroundColor = "#383838";

        document.getElementById("introduction_p").style.visibility = "visible";
        document.getElementById("introduction_p").style.animation = "fadeIn 1s";
        document.getElementById("introduction_p").style.backgroundColor = "#383838";

        document.getElementById("UT_link").style.backgroundColor = "#383838";

        document.getElementById("introduction_img").style.visibility = "visible";
        document.getElementById("introduction_img").style.animation = "fadeIn 1s";
        document.getElementById("introduction_img").style.backgroundColor = "#383838";

        document.getElementById("projects").style.visibility = "visible";
        document.getElementById("projects").style.animation = "fadeIn 1s";
    }
}