//Helloco.de 404 Background
//Julio Montas 
//version 0.1


//DECLARE they all are global varibles duhh
Orange [] OrangeCollection = new Orange [250];
int maxDistance;

void setup() {

  //size(displayWidth, displayHeight);
  //size(1250, 500);
  size(window.innerWidth, window.innerHeight-10);
  frameRate(20);
  
  smooth();

  //INITIALIZE
  for (int i = 0; i < OrangeCollection.length; i++) {
    OrangeCollection[i] = new Orange(random(width), random(height));
  }
  
}
 

void draw() {
  background(242, 242, 242);
  
  //CALL FUNCTIONALITY
  for (int i = 0; i < OrangeCollection.length; i++) {
  OrangeCollection[i].run();
  }
  
  
  // define maximum distance
  maxDistance = 30;
 
  // look of the lines
  strokeWeight(0.15);
  



   stroke(0);
   for (int i=0; i< OrangeCollection.length; i++) {
    // compare circle to other blueCircle
    for (int j=i+1; j< OrangeCollection.length; j++) {
      // draw line if distance is below 'maxDistance'
      if (dist(OrangeCollection[i].x, OrangeCollection[i].y, OrangeCollection[j].x, OrangeCollection[j].y) < maxDistance) {

        line(OrangeCollection[i].x, OrangeCollection[i].y, OrangeCollection[j].x, OrangeCollection[j].y);
      }
    }
  }
}


class Orange {
  // GLOBAL VARIABLES
  float x = width/2;
  float y = height/2;
  float speedX = random(-10,10);
  float speedY =  random(10,-10);
  float capacity = random(0);

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
  }
  

  void display() {
    noStroke();
    ellipse(x , y, capacity, capacity);
  }
  
  void move() {
    x = x + random(-10, 10);
    y = y + random(10, -10);
   
    // x += speedX + random(-1, 1);
    // y += speedY + random(-1, 1);
  }
}

