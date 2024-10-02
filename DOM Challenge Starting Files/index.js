//document.querySelector("#title").color.fontSize = "20rem"
/*
$("h1").click(function(){
    $("h1").css("color","blue")
})*/
/*
for(var i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";

    })
}*/

$("button").click(function(){
    $("h1").animate({opacity:0.5})
})

$(document).keypress(function(event){
   $("h1").text(event.key)
})

$("h1").on("mouseover", function(){
    $("h1").css("color","black")
} )

const colors=["red","blue","purple"]
function displayColorList(document){
    document.addEventListener("keydown",(e)=>{
        if(e.keyCode==13){
        const container=document.getElementById("color-list")
        colors.forEach((color)=>{
            const li=document.createElement("li")
            li.textContent=color
            container.appendChild(li)
        })
    }
    })
}

displayColorList(document)

