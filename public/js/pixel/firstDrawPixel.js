import drawPixel from "./drawPixel.js";
const firstDrawPixel = ({
  canvasEl,
  ctx,
  pixelData,
  pixelSize,
  canvasWidth,
  canvasHeight,
}) => {
  canvasEl.width = canvasWidth;
  canvasEl.height = canvasHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  drawPixel({
    ctx,
    pixelData,
    pixelSize,
    canvasWidth,
    canvasHeight,
  });
};

export default firstDrawPixel;
