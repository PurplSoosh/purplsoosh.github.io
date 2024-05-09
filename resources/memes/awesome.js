function balls(vid, title, id, info) {
    if (info === null || info === undefined) {
        info = "Info isn't available.";
    }

    document.write(
        "<!DOCTYPE html>"+
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
        "Shitpost Centre - " + title + "<br>" +
	if (id < 0) {
	    "<a href='https://purplsoosh.github.io/resources/memes/" + (id + 1) + ">Previous</a> --- <a href='../../../pages/shitpost/'>Reroll</a> --- <a href='https://purplsoosh.github.io/resources/memes/" + (id - 1) + ">Next</a>" +
	} else {
	"<a href='https://purplsoosh.github.io/resources/memes/" + (id - 1) + ">Previous</a> --- <a href='../../../pages/shitpost/'>Reroll</a> --- <a href='https://purplsoosh.github.io/resources/memes/" + (id + 1) + ">Next</a>" +
		}
        "</center>" +
        "</div>" +
        "<div class='sections'>" +
        "<div class='sectionLeft'>" +
        "<center>" +
        "<video width='640' height='480' controls=''>" +
        "<source src='" + vid + "' type='video/mp4'>" +
        "GET A BETTER BROWSER OH MY GOD" +
        "</video></center>" +
        "<small>" + info + "</small>" +
        "</div>" +
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
        "</html>");
}
