
prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach('#webcam');

function Take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("pic").innerHTML="<img src="+data_uri+" id='pic_taken'>";
    });
    };

    console.log('ml5.version', ml5.version);

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y1laODxbH/model.json",model_loaded);

    function model_loaded(){
        console.log("Model loaded");
    }

    function identify(){
        var synth = window.speechSynthesis;
        speak_data_1= "Prediction number 1 is" +prediction_1;
        speak_data_2= "Prediction number 2 is" +prediction_2;
        var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }   