x = 0;
y = 0;

screen_width = 0;
screen_hight = 0;
 apple = "";
 speak_data = "";
 to_number = "";

 function preaload(){

  
      var img=new Image();
      img.src="apple.png" ;
  }
 



draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number = Number(content);



 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if(Number.isInteger(to_number)){
      x = Math.floor(Math.random()*150);
      x = Math.floor(Math.random()*150);
      document.getElementById("status").innerHTML = " Started  drawing  apple";
      draw_apple = "set";
  
    }


}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerheight;
  canvas = createCanvas(200,200);
  canavs.postition(0,150,fixed);
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
