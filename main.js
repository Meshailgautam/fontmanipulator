var left_hand_wrist=0;
var right_hand_wrist=0;
var diff=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    canvas.position(580,300)
    video=createCapture(VIDEO);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function draw(){
    background('#3bb35b');
    text("Meshail", 50 , 50);
    textsize(diff);
    
}
function modelloaded(){
    console.log("model is loaded !!");
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        left_hand_wrist= document.getElementById().innerHTML.results[0].pose.leftWrist.x;
        right_hand_wrist= document.getElementById().innerHTML.results[0].pose.rightWrist.x;
        console.log("Right Hand Wrist = " + right_hand_wrist + "Left Hand Wrist = " + left_hand_wrist);
        diff=left_hand_wrist - right_hand_wrist;
    }
}