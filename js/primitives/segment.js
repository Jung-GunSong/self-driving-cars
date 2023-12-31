/**
 * Class that will draw the connections between points
 * in our graph
 *
 * args: p1 as first point
 * p2 as second point
 *
 */

class Segment {
  constructor(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
  }

  /**
   * method that will create lines between points
   *
   * args: context as canvas that segment will exist
   * width as width of line
   * color as color of line
   */
  draw(context, width = 2, color = "black"){
    context.beginPath();
    context.lineWidth = width;
    context.strokeStyle = color;
    context.moveTo(this.p1.x, this.p1.y);
    context.lineTo(this.p2.x, this.p2.y);
    context.stroke();
  }
}