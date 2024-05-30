noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function perload(){
}
function setup(){
video=createCapture(VIDEO);
video.size(500,500);
cavas=createCanvas(500,500);
cavas.position(560,150);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}

function draw(){
background('#c3b5ff');
fill('red');
stroke('#969A97');
text("Eshita",noseX,noseY);
textSize(difference);
}

function modelloaded(){
console.log('PoseNET is Initialized');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY"+noseY);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);

console.log("leftWristX="+leftWristX+"rightWristx"+rightWristX);
}
}
