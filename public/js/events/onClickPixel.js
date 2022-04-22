const onClickPixel = ({ canvasEl, pixelSize, callback }) => {
  canvasEl.addEventListener("click", (evt) => {
    // console.log("evt", evt);
    const x = evt.offsetX;
    const y = evt.offsetY;

    // console.log("x", x);

    const colIndex = Math.floor(x / pixelSize);
    const rowIndex = Math.floor(y / pixelSize);

    // console.log("colIndex", colIndex);
    if (typeof callback === "function") {
      callback({
        rowIndex,
        colIndex,
      });
    }
  });
};

export default onClickPixel;
