prodection_1=""
prodection_2=""

Webcam.set(
    {
      width:350,
      height:300,
      image_format:'png',
      png_quality:90   
    }
);

camera=document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
}    )
}

console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/R1c89Gr42/model.json",modelLoaded)
function modelLoaded()
{
console.log("model is loaded")
}
function speak()
{
    var synth=window.speechSynthesis
    speak_1="the first prodection is:"+prodection_1
    speak_2="and the second prodection is:"+prodection_2
    var utterthis=new SpeechSynthesisUtterance(speak_1+speak_2);
    synth.speak(utterthis)
}