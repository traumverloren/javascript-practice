var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

for ( i = 1; i <= 10; i += 1 ) {
  red = randomRGB();
  green = randomRGB();
  blue = randomRGB();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
