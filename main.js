//

Webcam.set({

    width: 350,
    height:300,
    image_format :'png',
    png_quality : 90
});

my_cam = document.getElementById("camera");

Webcam.attach(my_cam);

function captured(){

    Webcam.snap(function(picture){
        
        document.getElementById("result").innerHTML =  "<img id = 'snapshot' src = '" + picture + "'> ";

    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/R9d7FPIOF/model.json", model_Loaded);

function model_Loaded(){

    console.log("Model is Loaded");
}