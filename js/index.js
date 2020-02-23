$(document).ready(function(){

    // init variables
    let selectCanvas; // canvas object
    let selectCanvasId; // canvas id
    let selectShape = ""; // shape id
    let selectColour; // hex colour
    let selectColourId = "Clear"; // colour id
    let targetToggle = "shape-colour";
    let activeCanvas; // canvas context
    let defaultColour = "#000000"
    let canvas = $("#main-canvas");

    let canvasWidth = 600;
    let canvasHeight = 600;
    let defaultWidth = 300;
    let defaultHeight = 300;

    let shapes = [];

    let draw = SVG().addTo('#main-canvas').size(canvasWidth,canvasHeight);

    // shape on click
    $("#shapes-menu .menu-item").click(function() {
        console.log($(this).attr("id"));
        selectShape = $(this).attr("id");
        console.log(shapes);
        drawShapes[selectShape].draw(draw, 'blue', (defaultWidth/2), (defaultHeight/2), defaultWidth, defaultHeight);
        // shapes.push(drawShapes[selectShape].draw(draw, 'blue', 250, 250, defaultWidth, defaultHeight));

        // selectShape = $(this).attr("id");
        // canvases[selectCanvasId].shape = selectShape;
        // console.log($(this))
        // console.log(selectShape);
        // console.log(canvases[selectCanvasId].colour);
        // if(targetToggle=="shape-colour") {
        //     $(selectCanvas).html("");
        //     $(selectCanvas).html("<img class='canvas-img' src='Resources/Shapes/PNGS/PNG_" + selectColourId + "-" + shapeMapping[selectShape] + ".png'>");
        // }
    });

    $("#colours-menu .menu-item").click(function() {
        selectColour = $(this).attr("colour");
        selectColourId = $(this).attr("id");
        console.log(selectColour);
        console.log(targetToggle);
        if(targetToggle=="shape-colour" && selectShape != "") {
            drawShapes[selectShape].changeColour(draw, selectColour)
        } else if(targetToggle=="bg-shape-colour") {
            $(canvas).css("background-color", selectColour);
        }
    });

    $(".colour-btn").click(function() {
        targetToggle = $(this).attr("id");
        console.log(targetToggle);
    });

    // Location menu on click
    $("#location-menu .menu-item").click(function() {
        let location = $(this).attr("id");
        console.log(location)
        switch(location) {
            case 'location1':
                drawShapes[selectShape].relocate(draw, 0, 0, defaultWidth, defaultHeight);
                break;
            case 'location2':
                drawShapes[selectShape].relocate(draw, defaultWidth, 0, defaultWidth, defaultHeight);
                break;
            case 'location3':
                drawShapes[selectShape].relocate(draw, defaultWidth, defaultHeight, defaultWidth, defaultHeight);
                break;
            case 'location4':
                drawShapes[selectShape].relocate(draw, 0, defaultHeight, defaultWidth, defaultHeight);
                break;
            case 'location5':
                drawShapes[selectShape].relocate(draw, (defaultWidth/2), (defaultHeight/2), defaultWidth, defaultHeight);
                break;
        }
    });

    // Rotate menu on click
    $("#rotate-menu .menu-item").click(function() {
        $(this).attr("deg");
        console.log('deg to rotate:' + $(this).attr("deg"));
        drawShapes[selectShape].rotate(draw, parseInt($(this).attr("deg")));
    });

    // let group = draw.group();
    // group.path('M200,200H0c27.6,0,50-22.4,50-50c0-13.6-5.4-25.9-14.2-34.9c-8.1-8.3-8.1-21.8,0-30.2C44.6,75.9,50,63.6,50,50C50,22.4,27.6,0,0,0h200c-27.6,0-50,22.4-50,50c0,13.6,5.5,25.9,14.2,34.9c8.1,8.3,8.1,21.8,0,30.2c-8.8,9-14.2,21.3-14.2,34.9C150,177.6,172.4,200,200,200z');
    // //let shape1 = draw.svg('<g id="colours_1"><g><path class="st23" d="M200,200H0c27.6,0,50-22.4,50-50c0-13.6-5.4-25.9-14.2-34.9c-8.1-8.3-8.1-21.8,0-30.2C44.6,75.9,50,63.6,50,50C50,22.4,27.6,0,0,0h200c-27.6,0-50,22.4-50,50c0,13.6,5.5,25.9,14.2,34.9c8.1,8.3,8.1,21.8,0,30.2c-8.8,9-14.2,21.3-14.2,34.9C150,177.6,172.4,200,200,200z"/></g></g>')
    // group.fill('blue');
    // group.cx(0).cy(0);
    // group.size(400, 400)
    // // group.transform({
    // //     rotate: 45
    // // });
    // group.click(function() {
    //     this.fill({color: 'black'});
    // });

    // let group2 = draw.group();
    // let line1 = draw.line(159.5, 40.5, 40.5, 159.5).stroke({color: 'red', width: 4});
    // let line2 = draw.line(22.2, 67.8, 177.8, 132.2).stroke({color: 'red', width: 4});
    // group2.add(line1);
    // group2.add(line2);
    // group2.transform({
    //     rotate: 45
    // });
    // group2.click(function() {
    //     let list = group2.find('line')
    //     console.log(list)
    //     list.stroke({color: 'blue', width: 4});
    // });

   // line1.stroke({color: 'red', width: 4})

    /* old code that used 4 grids
    let defaultAngle = 0;
    let rotateAngle = 5;

    let canvases = {
        "nw-canvas": {
            shape: "",
            colour: defaultColour,
            angle: defaultAngle
        },
        "ne-canvas": {
            shape: "",
            colour: defaultColour,
            angle: defaultAngle
        },
        "se-canvas": {
            shape: "",
            colour: defaultColour,
            angle: defaultAngle
        },
        "sw-canvas": {
            shape: "",
            colour: defaultColour,
            angle: defaultAngle
        },
    };
    
    // activate target canvas
    $(".canvas").click(function() {
        //selectCanvas = $(this)[0];
        selectCanvas = $(this);
        selectCanvasId = $(this).attr("id");
        //activeCanvas = document.getElementById(selectCanvasId).getContext("2d");
        //console.log(activeCanvas);
        console.log(selectCanvas);
    });

    $("#shapes-menu .menu-item").click(function() {
        selectShape = $(this).attr("id");
        canvases[selectCanvasId].shape = selectShape;
        console.log($(this))
        console.log(selectShape);
        console.log(canvases[selectCanvasId].colour);
        if(targetToggle=="shape-colour") {
            $(selectCanvas).html("");
            $(selectCanvas).html("<img class='canvas-img' src='Resources/Shapes/PNGS/PNG_" + selectColourId + "-" + shapeMapping[selectShape] + ".png'>");
        }
        //attach[selectShape](document.getElementById(selectCanvasId));
        //clearCanvas(activeCanvas,selectCanvas);
        //draw[canvases[selectCanvasId].shape](activeCanvas,canvases[selectCanvasId].colour);
    });

    $("#colours-menu .menu-item").click(function() {
        selectColour = $(this).attr("colour");
        selectColourId = $(this).attr("id");
        canvases[selectCanvasId].colour = selectColour;
        console.log(selectColour);
        console.log(canvases[selectCanvasId].colour);
        console.log(canvases[selectCanvasId].colour);
        console.log(targetToggle);
        if(targetToggle=="shape-colour" && selectShape != "") {
            $(selectCanvas).html("");
            $(selectCanvas).html("<img class='canvas-img' src='Resources/Shapes/PNGS/PNG_" + selectColourId + "-" + shapeMapping[selectShape] + ".png'>");
        } else if(targetToggle=="bg-shape-colour") {
            $(selectCanvas).css("background-color", selectColour);
        }
    });
    
    $(".colour-btn").click(function() {
        targetToggle = $(this).attr("id");
        console.log(targetToggle);
    });

    $("#shape-colour").click(function() {
        selectColourId = "Clear";
    });

    $("#clear-btn").click(function() {
        $(selectCanvas).html("");
        $(selectCanvas).css("background-color", "white");
    });
*/


   


    /*
    $("#clear-btn").click(function() {
        console.log(selectCanvas)
        clearCanvas(activeCanvas,selectCanvas);
        canvases[selectCanvasId] = {colour: defaultColour};
        console.log(canvases)
    });

    // rotate shape
    $("#rotate-cw-btn").click(function() {
        canvases[selectCanvasId].angle = (canvases[selectCanvasId].angle + rotateAngle) % 360;
        console.log(canvases[selectCanvasId].angle);
        clearCanvas(activeCanvas,selectCanvas);
        draw[canvases[selectCanvasId].shape](activeCanvas,canvases[selectCanvasId].colour,canvases[selectCanvasId].angle);
    });

    // draw selected shape
    $("#shapes-menu .menu-item").click(function() {
        selectShape = $(this).attr("id");
        canvases[selectCanvasId].shape = selectShape;
        console.log(selectShape);
        console.log(canvases[selectCanvasId].colour);
        clearCanvas(activeCanvas,selectCanvas);
        draw[canvases[selectCanvasId].shape](activeCanvas,canvases[selectCanvasId].colour);
    });

    // draw selected colour
    $("#colours-menu .menu-item").click(function() {
        selectColour = $(this).attr("colour");
        canvases[selectCanvasId].colour = selectColour;
        console.log(selectColour);
        console.log(canvases[selectCanvasId].colour);
        console.log(canvases[selectCanvasId].colour);
        clearCanvas(activeCanvas,selectCanvas);
        draw[canvases[selectCanvasId].shape](activeCanvas,canvases[selectCanvasId].colour);
    });
    */
});