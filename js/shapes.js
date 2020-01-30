function clearCanvas(ctx,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const draw = {
    "triangle-choice": function drawcanvas(ctx, colour) {
        console.log('afd')
            //Shape0;
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
    "star-choice": function drawcanvas(ctx,colour)
    {
          //Shape9;
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