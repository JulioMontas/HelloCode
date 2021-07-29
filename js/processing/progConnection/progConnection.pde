//DECLARE
Blue [] BlueCollection = new Blue [200];
Green [] GreenCollection = new Green [100];
Orange [] OrangeCollection = new Orange [200];
int maxDistance;

void setup() {


  //size(displayWidth, displayHeight);
  //size(1280, 800);
 
  size(window.innerWidth, 450);
  frameRate(20);
  
  smooth();

  //INITIALIZE
  for (int i = 0; i < BlueCollection.length; i++) {
    BlueCollection[i] = new Blue(random(width), random(height),0);
  }
  
    //INITIALIZE
  for (int i = 0; i < GreenCollection.length; i++) {
    GreenCollection[i] = new Green(random(width), random(height),0);
  }
  
  //INITIALIZE
  for (int i = 0; i < OrangeCollection.length; i++) {
    OrangeCollection[i] = new Orange(random(width), random(height),0);
  }
  
}
 

void draw() {
  background(242, 242, 242);
  
  //CALL FUNCTIONALITY
  for (int i = 0; i < BlueCollection.length; i++) {
  BlueCollection[i].run();
  }
  
    //CALL FUNCTIONALITY
  for (int i = 0; i < GreenCollection.length; i++) {
  GreenCollection[i].run();
  }
  
  //CALL FUNCTIONALITY
  for (int i = 0; i < OrangeCollection.length; i++) {
  OrangeCollection[i].run();
  }
  
  
    // define maximum distance
  maxDistance = 40;
 
  // look of the lines
  stroke(180);
  strokeWeight(0.5);
 
  for (int i=0; i< BlueCollection.length; i++) {
    // compare circle to other blueCircle
    for (int j=i+1; j< BlueCollection.length; j++) {
      // draw line if distance is below 'maxDistance'
      if (dist(BlueCollection[i].x, BlueCollection[i].y, BlueCollection[j].x, BlueCollection[j].y) < maxDistance) {
        line(BlueCollection[i].x, BlueCollection[i].y, BlueCollection[j].x, BlueCollection[j].y);
      }
    }
  }
  
  for (int i=0; i< GreenCollection.length; i++) {
    // compare circle to other blueCircle
    for (int j=i+1; j< GreenCollection.length; j++) {
      // draw line if distance is below 'maxDistance'
      if (dist(GreenCollection[i].x, GreenCollection[i].y, GreenCollection[j].x, GreenCollection[j].y) < maxDistance) {
        line(GreenCollection[i].x, GreenCollection[i].y, GreenCollection[j].x, GreenCollection[j].y);
      }
    }
  }
  
   for (int i=0; i< OrangeCollection.length; i++) {
    // compare circle to other blueCircle
    for (int j=i+1; j< OrangeCollection.length; j++) {
      // draw line if distance is below 'maxDistance'
      if (dist(OrangeCollection[i].x, OrangeCollection[i].y, OrangeCollection[j].x, OrangeCollection[j].y) < maxDistance) {
        line(OrangeCollection[i].x, OrangeCollection[i].y, OrangeCollection[j].x, OrangeCollection[j].y);
      }
    }
  }
  
    if ( keyPressed ) {
    if ( key == 's' ) {
      saveFrame("JulioM-####.tif");
    }
}
  
  
}



class Blue {
  // GLOBAL VARIABLES
  float x = 0;
  float y = 0;
  float speedX = random(-1,1);
  float speedY =  random(-1,1);
  float capacity = random(2,10);

  // CONSTRUCTOR
  Blue(float _x, float _y, float capacity) {

    x = _x;
    y = _y;
    capacity = capacity;
  }

  // FUNCTIONS

  void run() {
    display();
    move();
    bounce();
    colorBlues();
  }
  
  void colorBlues(){
   fill(28, 175, 235, 80);
  }

  void display() {
    noStroke();
    ellipse(x , y, capacity, capacity);
  }
  
  void move() {
    x += speedX;
    y += speedY;
   
   // x += speedX + random(-1, 1);
   // y += speedY + random(-1, 1);
  }

  void bounce() {
    if (x > width-10) {
      speedX = speedX * -1;
    }
    if (x < 0+10 ) {
      speedX = speedX * -1;
    }
    if (y > height-47) {
      speedY = speedY * -1;
    }
    if (y < 0) {
      speedY = speedY * -1;
    }
  }
}

class Orange {
  // GLOBAL VARIABLES
  float x = 0;
  float y = 0;
  float speedX = random(-1,1);
  float speedY =  random(-1,1);
  float capacity = random(2,10);

  // CONSTRUCTOR
  Orange(float _x, float _y, float capacity) {

    x = _x;
    y = _y;
    capacity = capacity;
  }

  // FUNCTIONS

  void run() {
    display();
    move();
    bounce();
    colorOranges();
  }
  
  void colorOranges(){
   fill(241, 85, 29, 80);
  }

  void display() {
    noStroke();
    ellipse(x , y, capacity, capacity);
  }
  
  void move() {
   // x = x + random(-6, 6);
   // y = y + random(-6, 6);
   
       x += speedX + random(-1, 1);
    y += speedY + random(-1, 1);
  }

  void bounce() {
    if (x > width-10) {
      speedX = speedX * -1;
    }
    if (x < 0+10 ) {
      speedX = speedX * -1;
    }
    if (y > height-47) {
      speedY = speedY * -1;
    }
    if (y < 0) {
      speedY = speedY * -1;
    }
  }
}
class Green {
  // GLOBAL VARIABLES
  float x = 0;
  float y = 0;
  float speedX = random(-1,1);
  float speedY =  random(-1,1);
  float capacity = random(2,10);

  // CONSTRUCTOR
  Green(float _x, float _y, float capacity) {

    x = _x;
    y = _y;
    capacity = capacity;
  }

  // FUNCTIONS

  void run() {
    display();
    move();
    bounce();
    colorGreens();
  }
  
  
  void colorGreens(){
   fill(114, 198, 2, 80);
  }

  void display() {
    noStroke();
    ellipse(x , y, capacity, capacity);
  }
  
  void move() {
   // x = x + random(-6, 6);
   // y = y + random(-6, 6);
   
     x += speedX + random(-1, 1);
    y += speedY + random(-1, 1);
  }

  void bounce() {
    if (x > width-10) {
      speedX = speedX * -1;
    }
    if (x < 0+10 ) {
      speedX = speedX * -1;
    }
    if (y > height-47) {
      speedY = speedY * -1;
    }
    if (y < 0) {
      speedY = speedY * -1;
    }
  }
}

