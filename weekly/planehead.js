function setup() {
    //happens once
    createCanvas(700,700);
}

function draw() {
    background(180,50);
    stroke('#da36d0')
    strokeWeight(1);
    
    let v1 = color('#fcf0ff');
    let v2 = color('#f1adff');
    let v3 = color('#cb42e8');
    let v4 = color('#600573');

    //top of head
    fill(v1);
    beginShape();
    vertex(250,80);
    vertex(450,80);
    vertex(420,130);
    vertex(280,130);
    endShape();

    fill(v2);
    beginShape();
    vertex(180,143);
    vertex(250,80);
    vertex(280,130);
    endShape();

    fill(v2);
    beginShape();
    vertex(450,80);
    vertex(520,143);
    vertex(420,130);
    endShape();

    //forehead 
    fill(v1);
    beginShape();
    vertex(280,130);
    vertex(420,130);
    vertex(400,250);
    vertex(300,250);
    endShape();

    fill(v2);
    beginShape();
    vertex(180,143);
    vertex(280,130);
    vertex(300,250);
    vertex(260,280);
    vertex(180,300);
    endShape();

    fill(v2);
    beginShape();
    vertex(420,130);
    vertex(520,143);
    vertex(520,300);
    vertex(430,280);
    vertex(400,250);
    endShape();

    fill(v3);
    beginShape();
    vertex(260,280);
    vertex(300,250);
    vertex(400,250);
    vertex(430,280);
    vertex(380,310);
    vertex(310,310);
    endShape();
    //eye socket
    fill(v4);
    beginShape();
    vertex(380,310);
    vertex(430,280);
    vertex(520,300);
    vertex(530,320);
    vertex(500,320);
    vertex(480,305);
    vertex(430,310);
    vertex(400,330);
    endShape();

    fill(v4);
    beginShape();
    vertex(180,300);
    vertex(260,280);
    vertex(310,310);
    vertex(290,330);
    vertex(260,310);
    vertex(215,305);
    vertex(200,320);
    vertex(170,320);
    endShape();
    //eye
    fill(v2);
    beginShape();
    vertex(400,330);
    vertex(430,310);
    vertex(480,305);
    vertex(500,320);
    vertex(480,340);
    vertex(460,345);
    vertex(425,340);
    endShape();
    fill(v2);
    beginShape();
    vertex(200,320);
    vertex(215,305);
    vertex(260,310);
    vertex(290,330);
    vertex(265,340);
    vertex(235,345);
    vertex(215,335);
    endShape();

    //nose
    fill(v1);
    beginShape();
    vertex(310,310);
    vertex(380,310);
    vertex(380,445);
    vertex(310,445);
    endShape();
    fill(v3);
    beginShape();
    vertex(370,300);
    vertex(400,330);
    vertex(400,465);
    vertex(370,445);
    endShape();
    fill(v3);
    beginShape();
    vertex(290,330);
    vertex(320,300);
    vertex(320,445);
    vertex(290,465);
    endShape();
    fill(v4);
    beginShape();
    vertex(290,465);
    vertex(320,445);
    vertex(370,445);
    vertex(400,465);
    vertex(370,480);
    vertex(320,480);
    endShape();

    //cheek
    fill(v2);
    beginShape();
    vertex(170,320);
    vertex(200,320);
    vertex(215,335);
    vertex(235,345);
    vertex(265,335);
    vertex(290,330);
    vertex(290,465);
    vertex(320,480);
    vertex(370,480);
    vertex(400,465);
    vertex(400,330);
    vertex(425,340);
    vertex(460,345);
    vertex(480,335);
    vertex(500,320);
    vertex(530,320);
    vertex(535,335);
    vertex(430,530);
    vertex(260,530);
    vertex(165,335);
    endShape();
    //lip
    fill(v1);
    beginShape();
    vertex(320,480);
    vertex(370,480);
    vertex(380,530);
    vertex(310,530);
    endShape();
    fill(v4);
    beginShape();
    vertex(260,530);
    vertex(310,510);
    vertex(345,520);
    vertex(380,510);
    vertex(430,530);
    endShape();
    fill(v1);
    beginShape();
    vertex(260,530);
    vertex(430,530);
    vertex(380,565);
    vertex(305,565);
    endShape();
    fill(v4);
    beginShape();
    vertex(305,565);
    vertex(380,565);
    vertex(410,590);
    vertex(280,590);
    endShape();
    fill(v1);
    beginShape();
    vertex(280,590);
    vertex(410,590);
    vertex(370,615);
    vertex(310,615);
    endShape();
    //chin
    fill(v2);
    beginShape();
    vertex(260,530);
    vertex(305,565);
    vertex(280,590);
    endShape();
    fill(v2);
    beginShape();
    vertex(380,565);
    vertex(430,530);
    vertex(410,590);
    endShape();
    fill(v2);
    beginShape();
    vertex(310,615);
    vertex(370,615);
    vertex(370,645);
    vertex(310,645);
    endShape();
    //contour
    fill(v4);
    beginShape();
    vertex(165,335);
    vertex(260,530);
    vertex(280,590);
    vertex(310,615);
    vertex(310,645);
    vertex(190,520);
    endShape();
    fill(v4);
    beginShape();
    vertex(535,335);
    vertex(505,520);
    vertex(370,645);
    vertex(370,615);
    vertex(410,590);
    vertex(430,530);
    endShape();
    fill(v4);
    beginShape();
    vertex(180,140);
    vertex(180,300);
    vertex(165,335);
    endShape();
    fill(v4);
    beginShape();
    vertex(520,140);
    vertex(535,335);
    vertex(520,300);
    endShape();

    let x1 = 353;
    let y1 = 80;
    let x2 = mouseX;
    let y2 = mouseY;

    line(x1, y1, x2, y2);
    fill('magenta');
    circle(x1, y1, 10);

    let d = dist(x1, y1, x2, y2);
    
    push();
    translate((x1 + x2) / 2, (y1 + y2) / 2);
    rotate(atan(y2 - y1, x2 - x1));
    text(nfc(d,1), 0, -5);
    pop();

    if ( mouseX < width/2 && mouseY < height/2) {
        fill(v1);
    } else if (mouseX < width/2 && mouseY > height/2) {
        fill(v2);
    } else if (mouseX > width/2 && mouseY > height/2) {
        fill(v3);
    } else if (mouseX > width/2 && mouseY < height/2) {
        fill(v4);
    }
    circle(mouseX,mouseY,10);

    fill(0);
    helperCoordinates();
}

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