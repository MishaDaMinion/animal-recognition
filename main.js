function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1tbdelVVz/model.json', modelReady);
}
var dog = 0;
var cat = 0;
var cow = 0;
var duck = 0;

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error,results){
  if(error){
    console.log(error);
  }else{
     console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1
    random_number_g = Math.floor(Math.random() * 255) + 1
    random_number_b = Math.floor(Math.random() * 255) + 1

    document.getElementById("results_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Audio - '+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb(" 
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("
     +random_number_r+","+random_number_g+","+random_number_b+")";
     
     
     if (results[0].label == "Bark"){
      img.src = 'dog.avif';
     } else if (results[0].label == "Meow"){
      img1.src = 'cat.jpg';
     }else if (results[0].label == "Moo"){
      img2.src = 'cow.jpg';
     }else{ 
      img3.src = 'duck.png';
    }


}
}

