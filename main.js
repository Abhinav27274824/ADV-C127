belupacito = "";
sonic_unleashed = "";

function preload(){
    belupacito = loadSound("belupacito.mp3");
    sonic_unleashed = loadSound("sonic_unleashed.mp3")
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 0, 0, 600, 500);
}

