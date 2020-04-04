// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZAl7UzorPRSCoiAXQVHIr66irqJSniio",
    authDomain: "mural-fc495.firebaseapp.com",
    databaseURL: "https://mural-fc495.firebaseio.com",
    projectId: "mural-fc495",
    storageBucket: "mural-fc495.appspot.com",
    messagingSenderId: "405515397526",
    appId: "1:405515397526:web:d79512b68af49ff8a7d5b7",
    measurementId: "G-MWYE9XMLZT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

$(document).ready(function(){
    // init variables
    let selectCanvas; // canvas object
    let selectCanvasId; // canvas id
    let selectShape = ""; // selected svg group object
    let selectShapeId = ""; // selected shape id
    let selectColour; // hex colour
    let selectColourId = "Clear"; // colour id
    let targetToggle = "shape-colour";
    let activeCanvas; // canvas context
    let defaultColour = "#E63634"
    let canvas = $("#main-canvas");

    let canvasWidth = 600;
    let canvasHeight = 600;
    let defaultWidth = 300;
    let defaultHeight = 300;

    let shapes = [];

    console.log("main canvas colour: " + $(canvas).css("background-color"));

    let draw = SVG().addTo('#main-canvas').size(canvasWidth,canvasHeight);

    // Set colours of colour menu items
    $("#colours-menu").children(".menu-item").each(function() {
        console.log($(this).attr('colour'))
        $(this).css('background-color',$(this).attr('colour'))
    });

    $(".menu-item").click(function() {
        $("#status-message").html("");
    });

    // shape on click
    $("#shapes-menu .menu-item").click(function() {
        console.log($(this).attr("id"));
        selectShapeId = $(this).attr("id");
        console.log(shapes);
        drawShapes[selectShapeId].draw(draw, defaultColour, (defaultWidth/2), (defaultHeight/2), defaultWidth, defaultHeight);
        console.log(draw.svg());
    });

    $("#colours-menu .menu-item").click(function() {
        selectColour = $(this).attr("colour");
        selectColourId = $(this).attr("id");
        console.log("selectShape: " + selectShapeId)
        console.log("selectColour: " + selectColour);
        console.log("targetToggle: " + targetToggle);
        if(targetToggle=="shape-colour") {
            drawShapes[selectShapeId].changeColour(draw, selectColour);
        } else if(targetToggle=="bg-shape-colour") {
            $(canvas).css("background-color", selectColour);
            console.log($(canvas).css("background-color"));
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
                drawShapes[selectShapeId].relocate(draw, 0, 0, canvasWidth, canvasHeight);
                break;
            case 'location2':
                drawShapes[selectShapeId].relocate(draw, defaultWidth, 0, canvasWidth, canvasHeight);
                break;
            case 'location3':
                drawShapes[selectShapeId].relocate(draw, defaultWidth, defaultHeight, canvasWidth, canvasHeight);
                break;
            case 'location4':
                drawShapes[selectShapeId].relocate(draw, 0, defaultHeight, canvasWidth, canvasHeight);
                break;
            case 'location5':
                drawShapes[selectShapeId].relocate(draw, (defaultWidth/2), (defaultHeight/2), canvasWidth, canvasHeight);
                break;
        }
    });

    // Rotate menu on click
    $("#rotate-menu .menu-item").click(function() {
        $(this).attr("deg");
        console.log('deg to rotate:' + $(this).attr("deg"));
        drawShapes[selectShapeId].rotate(draw, parseInt($(this).attr("deg")));
    });

    // Size menu on click
    $("#size-menu .menu-item").click(function() {
        let size = $(this).attr("size");
        switch(size) {
            case 'size1':
                drawShapes[selectShapeId].resize(draw, canvasWidth, canvasHeight, 150, 150);
                break;
            case 'size2':
                drawShapes[selectShapeId].resize(draw, canvasWidth, canvasHeight, 300, 300);
                break;
            case 'size3':
                drawShapes[selectShapeId].resize(draw, canvasWidth, canvasHeight, 600, 600);
                break;
        }
    });

    // remove shape button
    $("#clear-btn").click(function() {
        drawShapes[selectShapeId].remove();
    });

    // clear all button
    $("#clear-all-btn").click(function() {
        drawShapes[selectShapeId].remove();
        $("#main-canvas svg").html("");                
        $("#main-canvas").css("background-color", "#FFFFFF");
    });

    // submit button
    $("#submit-btn").click(function() {
        let now = new Date();
        console.log(draw.svg());
        console.log("Name: " + $("#submitName").val());
        console.log("Title: " + $("#submitTitle").val());
        console.log("Date: " + now);
        if($("#main-canvas svg").html() == "" || $(canvas).css("background-color") == "rgba(0, 0, 0, 0)") {
            console.log("no svg");
            $("#status-message").html("Cannot submit blank design or white background colour");
        } else {
            console.log($("#main-canvas svg").html());
            db.collection("Submitted-Shapes").add({
                Timestamp: now,
                submitName: $("#submitName").val(),
                title: $("#submitTitle").val(),
                bgColour: $(canvas).css("background-color"),
                svg: draw.svg()
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                $("#status-message").html("Successfully submitted");
                $("#main-canvas svg").html("");                
                $("#main-canvas").css("background-color", "#FFFFFF");                
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                $("#status-message").html("Could not submit");
            });
        }
    });
});