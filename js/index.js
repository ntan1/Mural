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