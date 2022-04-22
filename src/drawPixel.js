const drawPixel = ({ pixelData, color, rowIndex, colIndex }) => {
  pixelData[rowIndex][colIndex] = color;
};

export default drawPixel;
