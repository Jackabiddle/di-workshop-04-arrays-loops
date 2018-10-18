function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  var y = 0
  var count = 38
  
for (var o = 0; o < count; o++) {
  y = y + 10
  var x = 10
for (var i = 0; i < count; i++) {
  rect(x, y, 10, 10)
  x = x + 10
}
}
}