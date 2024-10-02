//alert("asdasd")

var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var userClickedPattern=[]
var level=0
$(".btn").on("click",function(){
 
    var randomNumber=Math.floor(Math.random()*3)+1;

    var randomChosenColor=buttonColors[randomNumber]; 

    gamePattern.push(randomChosenColor)
    
    playSound(this.id)
    //$("#"+this.id).fadeOut(100).fadeIn(100);

    var userChosenColor=this.id

    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
    animatePress(userChosenColor)
    setTimeout(function(){
        $("#"+this.id).removeClass("pressed") 
    },3000)
    nextSequence()
    //alert(userChosenColor)
    //alert($(this).text())
})
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3")
    audio.play()
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100)
           
}
function nextSequence(){

    $("h1").text("Level "+level)
    //var randomNumber=Math.floor(Math.random()*3)+1;

    //var randomChosenColor=buttonColors[randomNumber]; 

    //gamePattern.push(randomChosenColor)

    //playSound()
    //$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    level++    
}



