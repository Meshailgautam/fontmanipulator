var left_hand_wrist=0;
var right_hand_wrist=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    canvas.position(580,300)
    video=createCapture(VIDEO);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function draw(){
    background('#3bb35b')
    text("Meshail", 50 , 50)
    
}
function modelloaded(){
    console.log("model is loaded !!");
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
    }
}