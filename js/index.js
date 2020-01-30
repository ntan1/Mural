$(document).ready(function(){

    // init variables
    let selectCanvas; // canvas object
    let selectCanvasId; // canvas id
    let selectShape; // shape id
    let selectColour; // colour id
    let activeCanvas; // canvas context

    let canvases = {
        "nw-canvas": {
            shape: "",
            colour: "#000000"            
        },
        "ne-canvas": {
            shape: "",
            colour: "#000000"
        },
        "se-canvas": {
            shape: "",
            colour: "#000000"
        },
        "sw-canvas": {
            shape: "",
            colour: "#000000"
        },
    };

    $("#clear-btn").click(function() {
        console.log(selectCanvas)
        clearCanvas(activeCanvas,selectCanvas);
        canvases[selectCanvasId] = {};
    });

    // activate target canvas
    $(".canvas").click(function() {
        selectCanvas = $(this)[0];
        selectCanvasId = $(this).attr("id");
        activeCanvas = document.getElementById(selectCanvasId).getContext("2d");
        console.log(activeCanvas);
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
});