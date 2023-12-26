/**
 * Class that will draw our points and segments
 * to complete a graph that will become our roads
 *
 * args: points as an array of Point objects
 * segments as an array of Segment objects
 *
 * return: none
 */

class Graph {
  constructor(points = [], segments = []){
    this.points = points;
    this.segments = segments;
  }

  /**
   * method that will draw the points and segements
   * that are defined as args for the class
   *
   * args: context as the canvas where the graph is
   * will be rendered
   *
   * return: none
   */
  draw(context){
    for (let seg of this.segments){
      seg.draw(context);
    }

    for (let point of this.points){
      point.draw(context);
    }

  }
}