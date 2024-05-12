

function balls(vid, title, id, info, offensive, epileptic) {

    // default value for info
    if (info === null || info === undefined) {
        info = "Info isn't available.";
    };

var htmlContent = "<!DOCTYPE html>"+

    // head and shit like dat
    "<html>" +
    "<head>" +
    "<title>ID " + id + ": " + title + "</title>" +
    "<link rel='stylesheet' href='https://purplsoosh.github.io/resources/main.css'>" +
    "<meta property='og:video' content='" + vid + "'>" +
    "<meta property=''content='video.movie'>" +
    "</head>" +
    "<body>" +
    "<div class='container'>" +
    "<div class='sectionTop'>" +
    "<center>" +
    "(" + id + ") Shitpost Centre - " + title + "<br>";

if (id < 0) {
    htmlContent += "<a href='https://purplsoosh.github.io/resources/memes/" + (id + 1) + "'>Previous</a> --- <a href='../../../pages/shitpost/'>Reroll</a> --- <a href='https://purplsoosh.github.io/resources/memes/" + (id - 1) + "'>Next</a>";
} else {
    htmlContent += "<a href='https://purplsoosh.github.io/resources/memes/" + (id - 1) + "'>Previous</a> --- <a href='../../../pages/shitpost/'>Reroll</a> --- <a href='https://purplsoosh.github.io/resources/memes/" + (id + 1) + "'>Next</a>";
}

    // epileptic / offensive warnings
htmlContent +=
    "<h3>" +
    "<br>";
    if (epileptic === true) {
        htmlContent += "Epileptic content ahead! <br>";
    } 
        if (offensive === true) {
        htmlContent += "Offensive content ahead! <br>";
    } 
    
    // sections left and right
htmlContent +=
    "</h3>" +
    "</center>" +
    "</div>" +
    "<div class='sections'>" +
    "<div class='sectionLeft'>" +
    "<center>" +
    "<div class='ohio'>" +
    "<video width='640' height='480' controls=''>" +
    "<source src='" + vid + "' type='video/mp4'>" +
    "GET A BETTER BROWSER OH MY GOD" +
    "</video></div></center>" +
    "<small>" + info + "</small>" +
    "</div>" +

    // section right
    "<div class='sectionRight'>" +
    "<marquee scrollspeed='8'>Other pages!</marquee>" +
    "<a href='../../../pages/changelog/'>Changelog</a><br>" +
    "<a href='../../../pages/servers/'>Server list</a><br>" +
    "<a href='../../../pages/shitpost/'>Shitpost Generator</a><br>" +
    "<a href='../../../'>Main page</a>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</body>" +
    "</html>";

document.write(htmlContent);
}
