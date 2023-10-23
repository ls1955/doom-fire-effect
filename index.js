const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const Colors = [
  "#070707",
  "#1F0707",
  "#2F0707",
  "#470F07",
  "#571707",
  "#671F07",
  "#771F07",
  "#8F2707",
  "#9F2707",
  "#AF3F07",
  "#BF4707",
  "#C74707",
  "#DF4707",
  "#DF5707",
  "#DF5707",
  "#D75F07",
  "#D7670F",
  "#CF6F0F",
  "#CF770F",
  "#CF7F0F",
  "#CF8717",
  "#C78717",
  "#C78F17",
  "#C7971F",
  "#BF9F1F",
  "#BF9F1F",
  "#BFA727",
  "#BFA727",
  "#BFAF2F",
  "#B7AF2F",
  "#B7B72F",
  "#B7B737",
  "#CFCF6F",
  "#DFDF97",
  "#EFEFC7",
  "#FFFFFF",
];
const PixelWidth = 10;
const PixelHeight = 10;

const colorIndexes = [];

for (let y = 0; y * 10 < canvas.height; y++) {
  colorIndexes.push([]);

  for (let x = 0; x * 10 < canvas.width; x++) {
    colorIndexes[colorIndexes.length - 1].push(0);
  }
}
// Populate last row with white color, as they are the "fire generator"
colorIndexes.at(-1).forEach((_, x) => {
  colorIndexes[colorIndexes.length - 1][x] = Colors.length - 1;
});

colorIndexes.forEach((row, y) => {
  row.forEach((index, x) => {
    ctx.fillStyle = Colors[index];
    ctx.fillRect(
      x * PixelWidth,
      canvas.height - PixelHeight,
      PixelWidth,
      PixelHeight
    );
  });
});
