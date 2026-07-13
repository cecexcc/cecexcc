setup = function() {
    // Happens only once
    createCanvas(500,700);
}
draw = function() {
    // Happens every single frame
    background(100);
    noStroke();

    let a =color('#77f793');
    fill(a);
    ellipse(220,320,450,650);

    fill(0);
    circle(80,120,50);
    
    fill(50);
    circle(190,200,25);
   
    fill(200);
    circle(390,210,60);

    fill(255);
    triangle(270,465,310,430,300,550);

    let b = color('#f777b9');
    fill(b);
    rect(90,390,170,210,60);

    let c = color('#ba1e76');
    stroke(c);
    strokeWeight(10); //beastly
    line(175,450,175,550);

    fill(a);
    stroke(50);
    strokeWeight(10) //beastly lol
    arc(200,330,300,300,0, PI + QUARTER_PI);

    helperCoordinates();
    };

function helperCoordinates() {

    text(
        '(' + floor(mouseX) +
        ', ' +
        floor(mouseY) +
        ')',
        mouseX,
        mouseY
    );
}