//function setup
function setup() {
//add canvas code
canvas=createCanvas(280,280);
//set position
canvas.center();
//set background color
background("white");
//set mouse release
canvas.mouseReleased(classifyCanvas);
//set speech synthesis
synth=window.speechSynthesis;
}
//function preload
function preload() {
//classify
classifier = ml5.imageClassifier('DoodleNet');
}
//function clearcanvas
function clearcanvas() {
//set background color
background("white");
}
//function draw
function draw() {
//measure stroke weight
strokeWeight(13);
//stroke color 
stroke(0);
//set position
if (mouseIsPressed) { 
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}
function classifyCanvas() { 
classifier.classify(canvas, gotResult); 
}
function gotResult(error, results) { 
if (error) { console.error(error); } 
console.log(results); document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%'; 
utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis); }