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
   * Adds a new point to the graph
   *
   * args: point as new point to be added
   *
   */
  addPoint(point){
    this.points.push(point);
  }

  /**
   * method to that will add a point to
   * this graph if it doesn't already exist and return true;
   * else will return false
   *
   * args: point as Point obj
   *
   * return: true or false
   */
  tryAddPoint(point){
    if (!this.containsPoint(point)){
      this.addPoint(point);
      return true;
    }else {
      return false
    }

  }

  /**
   * method to determine if a point already exists
   * as a point in the graph
   *
   * args: point as Point obj
   *
   * return: true or false
   */
  containsPoint(point){
    return this.points.find((p) => p.equals(point));
  }

  /**
   * method that will draw the points and segments
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