noseX = 0;
noseY = 0;


function preload(){
    clown_nose = loadImage('https://i.postimg.cc/jjqwJzRs/476-4761771-circle-hd-png-download.jpg');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    circle(noseX, noseY, 20);
    fill(250, 25, 25);
    stroke(250, 25, 25);
}
function take_snapshot(){
    save('myFilterImage.png');
}