function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(220);
    angleMode(DEGREES);

    //Title
    textSize(20);
    fill(255, 0, 255);
    text('SELF-PORTRAIT', 125, 35);

    //Mouse Cordinates
    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);



    //hat top
    stroke(146, 63, 110);
    strokeWeight(3);
    fill(255, 255, 255);
    angleMode(DEGREES);
    arc(200, 130, 200, 150, 150, 400,);

    // Face
    fill(255, 228, 225);
    circle(200, 200, 200);

    //Hat Brim
    fill(255, 255, 255);
    arc(190, 98, 120, 60, -5, 175,);
    noFill();
    //arc(192, 118, 100, 60, 175, -5);

    //Furrowed Brow
    strokeWeight(2)
    line(205, 152, 204, 168);
    line(204, 168, 210, 180);

    //Forehead lines
    line(166, 133, 185, 130);
    line(185, 130, 200, 131);
    line(190, 140, 210, 138);
    line(210, 138, 228, 140);

    //Right Eyebrow
    strokeWeight(10);
    line(220, 175, 230, 165);
    strokeWeight(7);
    line(230, 163, 255, 160);
    strokeWeight(5);
    line(255, 159, 270, 165);

    //Left Eyebrow
    strokeWeight(10)
    line(175, 175, 165, 165);
    strokeWeight(7);
    line(165, 163, 140, 160);
    strokeWeight(5);
    line(140, 159, 125, 165);

    //Eyes
    strokeWeight(3);
    fill(249, 236, 229);
    ellipse(149, 185, 35, 20);
    ellipse(249, 185, 35, 20);

    fill(63, 146, 99);
    circle(149, 185, 19);
    circle(250, 185, 19);
    stroke(40);
    strokeWeight(10);
    point(149, 185);
    point(250, 185);


    stroke(146, 63, 110);
    strokeWeight(2);
    fill(255, 228, 225);

    //Mouth
    ellipse(204, 260, 60, 30);
    ellipse(204, 260, 54, 10);

    //Nose
    fill(225, 175, 200);
    triangle(185, 224, 200, 200, 215, 224);

    fill(130, 120, 126);
    circle(208, 221, 7);
    circle(193, 221, 7);

    //Stand
    fill(142, 76, 145);
    stroke(0);
    rect(158, 292, 90, 40);
    fill(206, 55, 193);
    rect(100, 332, 210, 150);
    fill(255, 255, 255);
    textSize(13)
    text('The Great Zoltar-Mae', 144, 350);
    text('Deposit a Nickel in her Mouth', 122, 380);
    text('And She Will Tell You Your Future', 110, 410);
    textSize(48);
    text('5¢', 175, 465);

    //Signature;
    strokeWeight(1);
    textSize(16);
    fill(255, 0, 255);
    text('Mae Morales', 350, 480);

}