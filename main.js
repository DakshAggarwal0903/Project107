function begin(){
    navigator.mediaDevices.getUserMedia({audio:true});
y= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9hZYcs6R4/model.json',done);
}
function done(){
    y.classify(gotresult);
}
function gotresult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("label").innerHTML="I can hear - "+results[0].label;
    document.getElementById("confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+" %"
  r=  Math.floor(Math.random() * 255) + 1;
  g=  Math.floor(Math.random() * 255) + 1;
  b=  Math.floor(Math.random() * 255) + 1;
  document.getElementById("label").style.color= "rgb("+r+","+g+","+b+")";
  document.getElementById("confidence").style.color= "rgb("+r+","+g+","+b+")";

}
}
