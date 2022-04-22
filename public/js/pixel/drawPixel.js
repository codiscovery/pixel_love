const drawPixel = ({
  ctx,
  pixelData,
  pixelSize,
  canvasWidth,
  canvasHeight,
}) => {
  const colMax = canvasWidth / pixelSize;
  const rowMax = canvasHeight / pixelSize;

  for (let rowIndex = 0; rowIndex < rowMax; rowIndex++) {
    for (let colIndex = 0; colIndex < colMax; colIndex++) {
      if (pixelData[rowIndex][colIndex] !== null) {
        ctx.fillStyle = pixelData[rowIndex][colIndex];
        ctx.fillRect(
          colIndex * pixelSize,
          rowIndex * pixelSize,
          pixelSize,
          pixelSize
        );
      }
    }
  }
};

export default drawPixel;
