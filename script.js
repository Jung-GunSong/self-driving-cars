
/**
 * adds random points to the graph
 *
 * args: none
 * return: none
 */
function addRandomPoint(){
  const success = graph.tryAddPoint(
    new Point(
      Math.random() * myCanvas.width,
      Math.random() * myCanvas.height
    )
  );
  context.clearRect(0,0, myCanvas.width, myCanvas.height);
  graph.draw(context);

  console.log(success);
}
// assigned height and width with script instead
//of using css to change the dimensions of the
//canvas only; and not the elements in it
myCanvas.height = 600;
myCanvas.width = 600;

const p1 = new Point(200, 200);
const p2 = new Point(500, 200);
const p3 = new Point(400, 400);
const p4 = new Point(100, 100);

const seg1 = new Segment(p1, p2);
const seg2 = new Segment(p1, p3);
const seg3 = new Segment(p1, p4);
const seg4 = new Segment(p2, p3);

const context = myCanvas.getContext("2d");
const graph = new Graph([p1,p2,p3,p4],[seg1,seg2,seg3,seg4]);
graph.draw(context);