//https://teachablemachine.withgoogle.com/models/6u82q5VPi/
var prediction1="";
var prediction2="";
Webcam.set({
width:350 ,
height:300 ,
image_format:'png' ,
png_quality:90
});
cam=document.getElementById("camera");

Webcam.attach(cam);

function webcamsnap(){
Webcam.snap(function (data_uri){
document.getElementById("answer").innerHTML="<img src= '"+data_uri+"'id='answer'>";
});
}
console.log("ml5 version= ",ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6u82q5VPi/model.json',modelLoaded)
function modelLoaded()
{console.log("model Loaded");}