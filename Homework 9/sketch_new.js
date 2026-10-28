var red = 168;
var green = 116;
var blue = 152;

var lefteye_x = 149;
var righteye_x = 250;
var eyes_y = 185;
var eyes_rad = 19;
var movement = 1;

var rightbrow_l1_x1 = 220;
var rightbrow_l1_y1 = 175;
var rightbrow_l1_x2 = 230;
var rightbrow_l1_y2 = 165
var rightbrow_l2_x1 = 230
var rightbrow_l2_y1 = 163
var rightbrow_l2_x2 = 255
var rightbrow_l2_y2 = 160
var rightbrow_l3_x1 = 255
var rightbrow_l3_y1 = 159
var rightbrow_l3_x2 = 270
var rightbrow_l3_y2 = 165
var leftbrow_l1_x1 = 175
var leftbrow_l1_y1 = 175
var leftbrow_l1_x2 = 165
var leftbrow_l1_y2 = 165
var leftbrow_l2_x1 = 165
var leftbrow_l2_y1 = 163
var leftbrow_l2_x2 = 140
var leftbrow_l2_y2 = 160
var leftbrow_l3_x1 = 140
var leftbrow_l3_y1 = 159
var leftbrow_l3_x2 = 125
var leftbrow_l3_y2 = 165
var brow_move = 0.1;

var title_size = 14;
var text_grow = 1;
var title_step_count = 0;

var cent_text_x = 175;
var cent_text_y = 465;
var cent_move_x = 1
var cent_move_y = 1


function setup() {
    createCanvas(500, 500);
    movement = floor(random() * 5) + 1;
    brow_move = (random() * 5) + 0.02;
    cent_move = (random() * 3) + 1;
}

function draw() {
    background(220);
    angleMode(DEGREES);

    //Title
    textSize(title_size);
    fill(255, 0, 255);
    text('Zoltar-Mae', 125, 35);

    //Mouse Cordinates
    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);

    //Constraints for eye movements
    if (lefteye_x >= 250 || righteye_x <= 149) {
        movement *= -1;
    }
    //Start Moving Eyes!!
    lefteye_x += movement;
    righteye_x += movement;

    //Constraints for eyebrow movements!!
    if (rightbrow_l1_y1 >= 180 || rightbrow_l1_y1 <= 160) {
        brow_move *= -1;
    }
    //Start Moving Eyebrows!!
    rightbrow_l1_y1 += brow_move;
    rightbrow_l1_y2 += brow_move;
    rightbrow_l2_y1 += brow_move

    leftbrow_l1_y1 += brow_move;
    leftbrow_l1_y2 += brow_move;
    leftbrow_l2_y1 += brow_move;

    //Constraints for Title
    if (frameCount % 30 === 0) {
        title_size += text_grow;
        title_step_count += 1;
        if (title_step_count >= 5) {
            text_grow *= -1;
            title_step_count = 0
        }
    }
    //Grow Title
    title_size += text_grow;
    title_step_count++;

    //Constraints for cents text!!
    if (cent_text_x <= 100 || cent_text_x >= 264) {
        cent_move_x *= -1;
    }
    if (cent_text_y >= 480 || cent_text_y <= 362) {
        cent_move_y *= -1;
    }
    //Start Moving Cents Text!!
    cent_text_x += cent_move_x;
    cent_text_y += cent_move_y;

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
    line(rightbrow_l1_x1, rightbrow_l1_y1, rightbrow_l1_x2, rightbrow_l1_y2);
    strokeWeight(7);
    line(rightbrow_l2_x1, rightbrow_l2_y1, rightbrow_l2_x2, rightbrow_l2_y2);
    strokeWeight(5);
    line(rightbrow_l3_x1, rightbrow_l3_y1, rightbrow_l3_x2, rightbrow_l3_y2);

    //Left Eyebrow
    strokeWeight(10)
    line(leftbrow_l1_x1, leftbrow_l1_y1, leftbrow_l1_x2, leftbrow_l1_y2);
    strokeWeight(7);
    line(leftbrow_l2_x1, leftbrow_l2_y1, leftbrow_l2_x2, leftbrow_l2_y2);
    strokeWeight(5);
    line(leftbrow_l3_x1, leftbrow_l3_y1, leftbrow_l3_x2, leftbrow_l3_y2);

    //Eyes
    strokeWeight(3);
    fill(249, 236, 229);
    ellipse(149, 185, 35, 20);
    ellipse(249, 185, 35, 20);

    fill(63, 146, 99);
    circle(lefteye_x, eyes_y, eyes_rad);
    circle(righteye_x, eyes_y, eyes_rad);
    stroke(40);
    strokeWeight(10);
    point(lefteye_x, eyes_y);
    point(righteye_x, eyes_y);


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
    text('5¢', cent_text_x, cent_text_y);

    //Signature;
    strokeWeight(1);
    textSize(16);
    fill(255, 0, 255);
    text('Mae Morales', 350, 480);

}