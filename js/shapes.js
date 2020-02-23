function clearCanvas(ctx,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const drawShapes = {
    "shp-3": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            group.path('M200,200H0c27.6,0,50-22.4,50-50c0-13.6-5.4-25.9-14.2-34.9c-8.1-8.3-8.1-21.8,0-30.2C44.6,75.9,50,63.6,50,50C50,22.4,27.6,0,0,0h200c-27.6,0-50,22.4-50,50c0,13.6,5.5,25.9,14.2,34.9c8.1,8.3,8.1,21.8,0,30.2c-8.8,9-14.2,21.3-14.2,34.9C150,177.6,172.4,200,200,200z');
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
                console.log(selectShape);
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, defaultWidth, defaultHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((defaultWidth/2), (defaultHeight/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    }
}

const shapeMapping = {
    "shp-1": "01-1",
    "shp-2": "02-1",
    "shp-5": "05-1",
    "shp-6": "06-1",
}

// Insert svg functions
const attach = {
    "four-balls-choice": function attachSvg(element) {
        $(element).svg({
        onLoad: function()
            {
            element.load('Red1.svg', {addTo: true,  changeSize: false});        
            },
        settings: {}}
        )
    },
    "test-balls-choice": function attachSvg() {

    }
}


// Draw canvas shape functions
const draw = {
    "triangle-choice": function drawcanvas(ctx, colour, angle) {
            //Shape0;
            ctx.rotate(angle * Math.PI / 180);
            ctx.shadowColor ="rgba(0,0,0,0)";
            ctx.strokeStyle ="rgba(0,0,0,1)";
            ctx.lineWidth = 1;
            ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
            ctx.beginPath();
            ctx.moveTo(0,92);
            ctx.lineTo(200,199);
            ctx.lineTo(0,199);
            ctx.lineTo(0,92);
            ctx.closePath();
            ctx.stroke();
            ctx.shadowOffsetX = 15;
            ctx.shadowOffsetY = 15;
            ctx.shadowBlur = 0;
            ctx.shadowColor = "rgba(0,0,0,0)";
            ctx.fillStyle = colour;
            ctx.fill();
        },
        "star-choice": function drawcanvas(ctx, colour, angle)
        {
          //Shape9;
          ctx.rotate(angle * Math.PI / 180);
          ctx.shadowColor ="rgba(0,0,0,0)";
          ctx.strokeStyle ="rgba(255,255,255,1)";
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.beginPath();
          ctx.moveTo(20,112);
          ctx.lineTo(80,92);
          ctx.lineTo(80,132);
          ctx.lineTo(20,112);
          ctx.closePath();
          ctx.stroke();
          ctx.shadowOffsetX = -15;
          ctx.shadowOffsetY = -15;
          ctx.shadowBlur = 0;
          ctx.shadowColor = "rgba(0,0,0,0)";
          ctx.fillStyle = colour;
          ctx.fill();

          //Shape7;
          ctx.shadowColor ="rgba(0,0,0,0)";
          ctx.strokeStyle ="rgba(255,255,255,1)";
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.beginPath();
          ctx.moveTo(100,32);
          ctx.lineTo(80,92);
          ctx.lineTo(120,92);
          ctx.lineTo(100,32);
          ctx.closePath();
          ctx.stroke();
          ctx.shadowOffsetX = 15;
          ctx.shadowOffsetY = 15;
          ctx.shadowBlur = 0;
          ctx.shadowColor = "rgba(0,0,0,0)";
          ctx.fillStyle = colour;
          ctx.fill();

          //Shape10;
          ctx.shadowColor ="rgba(0,0,0,0)";
          ctx.strokeStyle ="rgba(255,255,255,1)";
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.beginPath();
          ctx.moveTo(80,92);
          ctx.lineTo(120,92);
          ctx.lineTo(120,132);
          ctx.lineTo(80,132);
          ctx.lineTo(80,92);
          ctx.closePath();
          ctx.stroke();
          ctx.shadowOffsetX = 15;
          ctx.shadowOffsetY = 15;
          ctx.shadowBlur = 0;
          ctx.shadowColor = "rgba(0,0,0,0)";
          ctx.fillStyle = colour;
          ctx.fill();

          //Shape11;
          ctx.shadowColor ="rgba(0,0,0,0)";
          ctx.strokeStyle ="rgba(255,255,255,1)";
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.beginPath();
          ctx.moveTo(180,112);
          ctx.lineTo(120,132);
          ctx.lineTo(120,92);
          ctx.lineTo(180,112);
          ctx.closePath();
          ctx.stroke();
          ctx.shadowOffsetX = -15;
          ctx.shadowOffsetY = -15;
          ctx.shadowBlur = 0;
          ctx.shadowColor = "rgba(0,0,0,0)";
          ctx.fillStyle = colour;
          ctx.fill();

          //Shape12;
          ctx.shadowColor ="rgba(0,0,0,0)";
          ctx.strokeStyle ="rgba(255,255,255,1)";
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.beginPath();
          ctx.moveTo(100,192);
          ctx.lineTo(120,132);
          ctx.lineTo(80,132);
          ctx.lineTo(100,192);
          ctx.closePath();
          ctx.stroke();
          ctx.shadowOffsetX = 15;
          ctx.shadowOffsetY = 15;
          ctx.shadowBlur = 0;
          ctx.shadowColor = "rgba(0,0,0,0)";
          ctx.fillStyle = colour;
          ctx.fill();
    }
}