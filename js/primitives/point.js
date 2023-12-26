/**
 * Class that will draw our points as circles
 *
 * args: x as x coordinate of point in canvas
 * y as y coordinate of point in canvas
 *
 */

class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  /**
   * method to create filled in circles to represent points
   *
   * args: context as canvas where points will appear
   * size as size in px of circle
   * color as color of the circle
   *
   * return: none
   */
  draw(context, size = 18, color = "black"){
    const rad = size / 2;

    context.beginPath();
    context.fillStyle = color;
    context.arc(this.x, this.y, rad, 0, Math.PI * 2);
    context.fill();
  }
}