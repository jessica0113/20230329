let points  = [[1, -3], [5, -4], [4, -3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3]]; //list資料，

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
 createCanvas(windowWidth, windowHeight);
 background(100);
 ctx = canvas.getContext('2d');
 ctx.lineWidth = 10;
 ctx.lineCap = 'round'
 //------
 gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue')
 gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange')
 gradientLine(ctx, 520, 70, 500, 440, 'lightblue', 'lime')
 
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
			
			
    }
  }
}

function draw() {
  background(255);
  // scale(50)
 
 let scaleVal = map(mouseX,0,width,0.5,2);
	scale(scaleVal)
	
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
	textSize(25)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("淡江大學教科系",-50,0)  //顯示文字
	scale(1, -1);  //上下翻轉
	
	
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
	
}


