nosex=0
nosey=0
leftWrist=0
rightWrist=0
difference=0

function preload(){


}

function setup(){
canvas=createCanvas(500, 550)
canvas.position(88, 200)
video=createCapture(VIDEO)
video.size(500, 550)
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}

function draw(){
background("lavender")
fill("violet")
stroke("blue")
document.getElementById("spanid").innerHTML = "Width And Height of a Square will be = " + difference +"px";
}

function modelLoaded(){
console.log("model is loaded")


}

function gotPoses(result){
if(result.length>0){
console.log(result)
nosex=result[0].pose.nose.x
nosey=result[0].pose.nose.y
leftWrist=result[0].pose.leftWrist.x
rightWrist=result[0].pose.rightWrist.x
difference=floor(leftWrist-rightWrist)
}
}
