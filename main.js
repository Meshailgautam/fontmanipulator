left_hand_wrist=0;
right_hand_wrist=0;
 diff=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(580,300)
    video=createCapture(VIDEO);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

   
    

function modelloaded(){
    console.log("model is loaded !!");
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        left_hand_wrist= result[0].pose.leftWrist.x;
        right_hand_wrist= result[0].pose.rightWrist.x;
        console.log("Right Hand Wrist = " + right_hand_wrist + "Left Hand Wrist = " + left_hand_wrist);
        diff=floor(left_hand_wrist - right_hand_wrist);
    }
    
}
function draw(){
    background('#3bb35b');
     textSize(diff);
    text("Meshail",150,150);
    console.log("Difference Between Left and Right Wrist = " + diff );
}
