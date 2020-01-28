function drawTriangle(ctx, colour) {
    function drawcanvas(ctx)
         {

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
               ctx.fillStyle = "rgba(242,15,15,1)";
               ctx.fill();
         }
}