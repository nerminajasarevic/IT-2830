var myVideo = document.getElementById("video1")
const vid = new Map();

vid.set("Big", 560);
vid.set("Normal", 420);
vid.set("Small", 320);

function playPause()
{
    if(myVideo.paused)
    {
        myVideo.play();
        var text = document.getElementById("play").innerText;
        getinnerText("Pause", "play");
    }
    else
    {
        myVideo.pause();
        getinnerText("Play", "play");
    }
}

function makeBig()
{
    myVideo.width = vid.get("Big");
    document.getElementById("myVideoID").innerHTML = vid.get("Big");
}

function makeNormal()
{
    myVideo.width = vid.get("Normal");
    document.getElementById("myVideoID").innerHTML = vid.get("Normal");
}

function makeSmall()
{
    myVideo.width = vid.get("Small");
    document.getElementById("myVideoID").innerHTML = vid.get("Small");
}

function changeVideo(film)
{
    document.getElementById('video1').src=film;
}

function getinnerText(name, button1)
{
    document.getElementById(button1).innerText = name;
}