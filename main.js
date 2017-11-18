(function(){
  var canvas = document.getElementById("canvas");
  var context  = canvas.getContext("2d");
  var radius = 5;
  var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  canvas.width = 400;
  canvas.height = 300;
  canvas.addEventListener('click',createPoint , false);  
  //mass of points that were created
  var points = [];  
  //get point center
  function createPoint(e){
    var x;
    var y;
    var currentColor = colors[Math.floor(Math.random() * (colors.length + 1))];   
    if(e.pageX || e.pageY) { 
      x = e.pageX;
      y = e.pageY;
    }
    else { 
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop; 
    points.push({X: x, Y: y});     
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = currentColor;   
    context.fill();  
    createLine(points, currentColor);  
  };

  function createLine(points, color){   
    if(points.length === 1 ) return;
    else if(points.length === 2 ) createTwoPoints(points, color);	
    else   createThreePoints(points, color);
  };
 
  function createTwoPoints(points, color){
    context.beginPath();
    context.lineWidth = 2;    
    context.moveTo(points[points.length - 2].X, points[points.length - 2].Y); 
    context.strokeStyle = color;
    context.lineTo(points[points.length - 1].X, points[points.length - 1].Y); 
    context.stroke();
 };

 function createThreePoints(points, color){
   context.beginPath();
   context.lineWidth = 2; 
   console.log(points[0]);
   context.moveTo(points[points.length - 3].X, points[points.length - 3].Y); 
   context.strokeStyle = color;
   context.lineTo(points[points.length - 1].X, points[points.length - 1].Y); 
   context.lineTo(points[points.length - 2].X, points[points.length - 2].Y);   
   context.stroke();
 };
})();

