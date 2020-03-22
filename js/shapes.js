function clearCanvas(ctx,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


let drawShapes = {
    "shp-1": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let polygon = svg.polygon("100,49.6 113.2,0 113.1,51.3 138.6,6.8 125.2,56.3 161.4,20 135.7,64.3 180,38.6 143.7,74.8 193.2,61.4 148.7,86.9 200,86.8 150.4,100 200,113.2 148.7,113.1 193.2,138.6 143.7,125.2 180,161.4 135.7,135.7 161.4,180 125.2,143.7 138.6,193.2 113.1,148.7 113.2,200 100,150.4 86.8,200 86.9,148.7 61.4,193.2 74.8,143.7 38.6,180 64.3,135.7 20,161.4 56.3,125.2 6.8,138.6 51.3,113.1 0,113.2 49.6,100 0,86.8 51.3,86.9 6.8,61.4 56.3,74.8 20,38.6 64.3,64.3 38.6,20 74.8,56.3 61.4,6.8 86.9,51.3 86.8,0");
            group.add(polygon)
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-2": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let polygon = svg.polygon("100,45.9 141.4,0 138.3,61.7 200,58.6 154.1,100 200,141.4 138.3,138.3 141.4,200 100,154.1 58.6,200 61.7,138.3 0,141.4 45.9,100 0,58.6 61.7,61.7 58.6,0");
            group.add(polygon)
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
                selectShapeId = "shp-1"
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
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
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-4": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            group.path("M44.4,199.7c-22.9-2.5-41.5-21-44.1-43.9c-1.8-15.9,3.9-30.5,13.9-40.8c8.3-8.5,8.3-21.6,0-30.1C4.2,74.7-1.5,60.1,0.3,44.2C2.9,21.3,21.6,2.8,44.4,0.3C60.2-1.4,74.7,4.3,85,14.2c8.5,8.3,21.6,8.3,30.1,0c10.3-10,24.8-15.7,40.6-13.9c22.9,2.5,41.5,21.1,44,44c1.7,15.8-3.9,30.4-13.9,40.6c-8.3,8.5-8.3,21.6,0,30.1c10,10.3,15.7,24.8,13.9,40.6c-2.5,22.9-21.1,41.5-44,44c-15.8,1.7-30.4-3.9-40.6-13.9c-8.5-8.3-21.6-8.3-30.1,0C74.7,195.7,60.2,201.4,44.4,199.7z");
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-5": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            group.path("M49.2,198c-25.8-0.6-47.5-22.1-48.2-48c-0.8-28,21.6-51,49.5-51C22.6,99,0.1,76,1,48C1.7,22.1,23.3,0.7,49.2,0c28-0.7,50.8,21.7,50.8,49.5C100,21.7,123-0.8,150.9,0c25.8,0.7,47.4,22.3,48.1,48.1c0.8,28-21.7,50.9-49.5,50.9c27.8,0,50.3,22.9,49.5,50.9c-0.7,25.8-22.3,47.4-48.1,48.1c-28,0.8-50.9-21.7-50.9-49.5C100,176.3,77.2,198.7,49.2,198z");
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-6": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            group.path("M193.1,116.7l-76.3,76.4c-9.3,9.2-24.2,9.2-33.5,0L6.9,116.7c-9.3-9.2-9.3-24.2,0-33.4L83.3,6.9c9.3-9.2,24.2-9.2,33.5,0l76.3,76.4C202.3,92.5,202.3,107.5,193.1,116.7z");
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-8": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let line1 = svg.line(159.5, 40.5, 40.5, 159.5).stroke({color: colour, width: 4});
            let line2 = svg.line(159.5, 159.5, 40.5, 40.5).stroke({color: colour, width: 4});
            let line3 = svg.line(184.2, 100, 15.8, 100).stroke({color: colour, width: 4});
            let line4 = svg.line(100, 184.2, 100, 15.8).stroke({color: colour, width: 4});
            let line5 = svg.line(22.2, 67.8, 177.8, 132.2).stroke({color: colour, width: 4});
            let line6 = svg.line(132.2, 22.2, 67.8, 177.8).stroke({color: colour, width: 4});
            let line7 = svg.line(67.8, 22.2, 132.2, 177.8).stroke({color: colour, width: 4});
            let line8 = svg.line(177.8, 67.8, 22.2, 132.2).stroke({color: colour, width: 4});
            group.add(line1);
            group.add(line2);
            group.add(line3);
            group.add(line4);
            group.add(line5);
            group.add(line6);
            group.add(line7);
            group.add(line8);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-9": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let line1 = svg.line(184.2, 100, 15.8, 100).stroke({color: colour, width: 4});
            let line2 = svg.line(100, 184.2, 100, 15.8).stroke({color: colour, width: 4});
            let line3 = svg.line(159.5, 159.5, 40.5, 40.5).stroke({color: colour, width: 4});
            let line4 = svg.line(40.5, 159.5, 159.5, 40.5).stroke({color: colour, width: 4});
            group.add(line1);
            group.add(line2);
            group.add(line3);
            group.add(line4);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-10": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let line1 = svg.line(184.2, 100, 15.8, 100).stroke({color: colour, width: 4});
            let line2 = svg.line(100, 184.2, 100, 15.8).stroke({color: colour, width: 4});
            group.add(line1);
            group.add(line2);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-10": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let line1 = svg.line(184.2, 100, 15.8, 100).stroke({color: colour, width: 4});
            let line2 = svg.line(100, 184.2, 100, 15.8).stroke({color: colour, width: 4});
            group.add(line1);
            group.add(line2);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-11": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let polygon = svg.polygon("199.03 100 149.55 117.62 125.96 126.03 117.62 149.47 100.08 199.03 100 199.03 82.38 149.47 74.04 126.03 50.53 117.62 0.97 100 50.53 82.38 74.04 73.97 82.38 50.53 100 0.97 100.08 0.97 117.62 50.53 125.96 73.97 149.55 82.38 199.03 100");
            group.add(polygon)
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-12": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let polygon = svg.polygon("0.99 0.99 100 0.99 100 100 199.01 100 199.01 199.01 0.99 199.01 0.99 0.99");
            group.add(polygon)
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-13": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            let polygon = svg.polygon("149.51 14.24 50.49 14.24 0.97 100 50.49 185.76 149.51 185.76 199.03 100 149.51 14.24");
            group.add(polygon)
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    },
    "shp-14": {
        draw: function(svg, colour, x, y, width, height) {
            let group = svg.group();
            group.path('M1,199V1A197.37,197.37,0,0,1,141,59a197.37,197.37,0,0,1,58,140Z');
            group.fill(colour);
            group.x(x).y(y);
            group.size(width, height);
            selectShape = group;
            group.click(function() {
                selectShape = group;
            });
        },
        changeColour: function(svg, colour) {
            selectShape.fill(colour);
            let list = selectShape.find('line');
            list.stroke({color: colour, width: 4});      
        },
        rotate: function(svg, deg) {
            let origDeg = selectShape.transform('rotate');
            console.log(origDeg);
            selectShape.transform({
                rotate: origDeg + deg
            });
            console.log(selectShape.transform('rotate'));
        },
        relocate: function(svg, x, y, canvasWidth, canvasHeight) { // can't use global variables defaultWidth and defaultHeight for some reason?
            // determine which quadrant x position is in
            if (x < canvasWidth/4) {
                x = (canvasWidth/2-selectShape.width())/2
            } else if (x >= canvasWidth/2) {
                x = (canvasWidth/2-selectShape.width())/2 + canvasWidth/2
            } else {
                x = (canvasWidth-selectShape.width())/2
            }
            x = canvasWidth-selectShape.width() > 0 ? x : 0

            // determine which quadrant y position is in
            if (y < canvasHeight/4) {
                y = (canvasHeight/2-selectShape.height())/2
            } else if (y >= canvasHeight/2) {
                y = (canvasHeight/2-selectShape.height())/2 + canvasHeight/2
            } else {
                y = (canvasHeight-selectShape.height())/2
            }
            y = canvasHeight-selectShape.height() > 0 ? y : 0

            let origDeg = selectShape.transform('rotate');
            // reset shape
            selectShape.move((selectShape.width()/2), (selectShape.height()/2));
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x,y);
            selectShape.transform({
                rotate: origDeg
            });
        },
        remove: function() {
            selectShape.remove()
        },
        resize: function(svg, canvasWidth, canvasHeight, width, height) {
            console.log(selectShape.x());
            console.log(selectShape.y());
            let origDeg = selectShape.transform('rotate');
            let x;
            let y;
            // determine which quadrant x position is in
            if (selectShape.x() < canvasWidth/4) {
                x = (canvasWidth/2-width)/2
            } else if (selectShape.x() >= canvasWidth/2) {
                x = (canvasWidth/2-width)/2 + canvasWidth/2
            } else {
                x = (canvasWidth-width)/2
            }
            x = canvasWidth-width > 0 ? x : 0

            // determine which quadrant y position is in
            if (selectShape.y() < canvasHeight/4) {
                y = (canvasHeight/2-height)/2
            } else if (selectShape.y() >= canvasHeight/2) {
                y = (canvasHeight/2-height)/2 + canvasHeight/2
            } else {
                y = (canvasHeight-height)/2
            }
            y = canvasHeight-height > 0 ? y : 0

            // reset shape
            selectShape.size(width, height);
            selectShape.move((canvasWidth-width)/2, (canvasHeight-height)/2);
            selectShape.transform({
                rotate: 0
            });
            // apply any rotations
            selectShape.move(x, y);
            selectShape.transform({
                rotate: origDeg
            });
        }
    }
}

