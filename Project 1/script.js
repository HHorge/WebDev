//SVG
const svg = $(".svg").get(0);
const svgns = "http://www.w3.org/2000/svg";
//CANVAS
const canvas = $(".canvas").get(0);
const c = $(".canvas")[0].getContext('2d'); 
const pi = Math.PI;

let day = true;

canvas.width    = 500;
canvas.height   = 300;

//INTERACTION
$(".canvas").click(function () {
    animate();
});

$(".svg").click(function () {
    svgInteraction();
    day = day ? false : true;
})
$(".collapsible").click(function (){
    collapsible();
})

//SUN ANIMATION
var x = 375;
var y = 75;
var dx = 4;
var dy = 4;
var radius = 30;
var colorCounter = 0;

var colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF"
];

function animate() {
  requestAnimationFrame(animate);
  drawCanvasBackground();

  c.beginPath();
  c.arc(x, y, radius, 0, pi * 2);
  c.fillStyle = colors[colorCounter];
  c.fill();

  if (x + radius > canvas.width || x - radius < 0) {
    colorCounter = Math.floor(Math.random() * colors.length);
    dx = -dx;
  }

  if (y + radius > canvas.height || y - radius < 0) {
    colorCounter = Math.floor(Math.random() * colors.length);
    dy = -dy;
  }
  x += dx;
  y += dy;
}

//DRAWING
function drawSVG() {
  //SUN
  const sun = document.createElementNS(svgns, "circle");
  sun.setAttribute("cx", 350);
  sun.setAttribute("cy", 75);
  sun.setAttribute("r", 30);
  sun.setAttribute("fill", "#eb7070");

  svg.appendChild(sun);

  //PYRAMID
  const pyramid = document.createElementNS(svgns, "polygon");
  pyramid.setAttribute("fill", "darkgrey");
  svg.appendChild(pyramid);

  var pyramidArray = (arr = [[50, 300], [225, 50], [400, 300]]);

  for (value of pyramidArray) {
    var point = svg.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    pyramid.points.appendItem(point);
  }

  //DETAIL
  const detail = document.createElementNS(svgns, "polygon");
  detail.setAttribute("fill", "white");
  svg.appendChild(detail);

  var detailArray = (arr = [[165, 135], [285, 135], [225, 50]]);

  for (value of detailArray) {
    var point = svg.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    detail.points.appendItem(point);
  }

  //SHADE
  const shade = document.createElementNS(svgns, "polygon");
  shade.setAttribute("fill", "#808080");
  svg.appendChild(shade);

  var shadeArray = (arr = [[50, 300], [200, 300], [225, 50]]);

  for (value of shadeArray) {
    var point = svg.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    shade.points.appendItem(point);
  }

  //DETAIL SHADE
  const detailShade = document.createElementNS(svgns, "polygon");
  detailShade.setAttribute("fill", "#c7c7c7");
  svg.appendChild(detailShade);

  var detailShadeArray = (arr = [[165, 135], [217, 135], [225, 50]]);

  for (value of detailShadeArray) {
    var point = svg.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    detailShade.points.appendItem(point);
  }
}

function svgInteraction() {
  if (day) {
    const sun = document.createElementNS(svgns, "circle");
    sun.setAttribute("cx", 350);
    sun.setAttribute("cy", 75);
    sun.setAttribute("r", 30);
    sun.setAttribute("fill", "#eb7070");

    svg.appendChild(sun);
  } else {
    const moon1 = document.createElementNS(svgns, "circle");
    moon1.setAttribute("cx", 350);
    moon1.setAttribute("cy", 75);
    moon1.setAttribute("r", 30.5);
    moon1.setAttribute("fill", "white");

    const moon2 = document.createElementNS(svgns, "circle");
    moon2.setAttribute("cx", 320);
    moon2.setAttribute("cy", 75);
    moon2.setAttribute("r", 30);
    moon2.setAttribute("fill", "#a5e5f5");

    svg.appendChild(moon1);
    svg.appendChild(moon2);
  }
}
function drawCanvasSun() {
  //SUN
  c.beginPath();
  c.arc(350, 75, 30, 0, pi * 2);
  c.fillStyle = "#eb7070";
  c.fill();
  c.closePath();
}
function drawCanvasBackground() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  //PYRAMID
  c.beginPath();
  c.moveTo(50, 300);
  c.lineTo(225, 50);
  c.lineTo(400, 300);
  c.fillStyle = "darkgrey";
  c.fill();
  c.closePath();

  //DETAIL
  c.beginPath();
  c.moveTo(165, 135);
  c.lineTo(285, 135);
  c.lineTo(225, 50);
  c.fillStyle = "white";
  c.fill();
  c.closePath();

  //SHADE
  c.beginPath();
  c.moveTo(50, 300);
  c.lineTo(200, 300);
  c.lineTo(225, 50);
  c.fillStyle = "#808080";
  c.fill();
  c.closePath();

  //DETAIL SHADE
  c.beginPath();
  c.moveTo(165, 135);
  c.lineTo(217, 135);
  c.lineTo(225, 50);
  c.fillStyle = "#c7c7c7";
  c.fill();
  c.closePath();
}

function run() {
  drawSVG();
  drawCanvasBackground();
  drawCanvasSun();
}

run();

function collapsible(){
    var content = $(".content").get(0);
    
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        };

}




//COORDINATE FINDER
//  const xline = document.createElementNS(svgns, 'rect');
//  xline.setAttribute('x', 285);
//  xline.setAttribute('y', 0);

//  xline.setAttribute('height', '300');
//  xline.setAttribute('width', '1');

//  const yline = document.createElementNS(svgns, 'rect');
//  yline.setAttribute('x', 0);
//  yline.setAttribute('y', 135);

//  yline.setAttribute('height', '1');
//  yline.setAttribute('width', '500');

//  svg.appendChild(xline);
//  svg.appendChild(yline);
