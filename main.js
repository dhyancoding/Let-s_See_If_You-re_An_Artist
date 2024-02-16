function preload(){
    classifier = ml5.imageClassifier("DoodleNet")
}

function setup(){
    canvas=createCanvas(280, 280)
    canvas.center()
    background("white")
    canvas.mouseReleased(ClassifyCanvas)
    s = window.speechSynthesis

}

function draw(){
    strokeWeight(15)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function ClassifyCanvas(){
    classifier.classify(canvas, gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("label").innerHTML = "Drawing: " + results[0].label
        document.getElementById("confidence").innerHTML = "Drawing: " + Math.round(results[0].confidence*100) + " %"
        u = new SpeechSynthesisUtterance(results[0].label)
        s.speak(u)
    }
} 

function Clear_canvas(){
    background("white")
}