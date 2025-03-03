let input, slider, button, dropdown;
let isBouncing = false;
let offsets = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 設置畫布為全螢幕
  input = createInput(); // 產生一個文字框
  input.position(10, 10); // 設置文字框位置
  input.size(300, 50); // 設置文字框大小
  input.style('font-size', '24px'); // 調整文字框內的文字大小
  input.style('width', '300px'); // 設置文字框寬度
  input.style('height', '50px'); // 設置文字框高度
  
  let label = createP('文字大小'); // 產生一個文字
  label.position(320, 10); // 設置文字位置
  label.style('color', 'white'); // 將文字顏色改成白色
  label.style('font-size', '24px'); // 將標籤文字放大到跟文字框一樣大
  label.style('margin', '0'); // 移除標籤的預設邊距
  
  slider = createSlider(28, 50, 32); // 產生一個滑桿，範圍從28到50，初始值為32
  slider.position(420, 10); // 調整滑桿位置
  
  button = createButton('跳動'); // 產生一個按鈕
  button.position(580, 10); // 設置按鈕位置
  button.style('font-size', '24px'); // 調整按鈕內的文字大小
  button.style('width', '100px'); // 設置按鈕寬度
  button.style('height', '40px'); // 設置按鈕高度
  button.mousePressed(toggleBounce); // 設置按鈕點擊事件
  
  dropdown = createSelect(); // 產生一個下拉式選單
  dropdown.position(690, 10); // 設置下拉式選單位置
  dropdown.option('第一周');
  dropdown.option('第二周');
  dropdown.option('第三周');
  dropdown.style('font-size', '24px'); // 調整選單內的文字大小
  dropdown.style('width', '100px'); // 設置選單寬度
  dropdown.style('height', '40px'); // 設置選單高度
  dropdown.changed(handleDropdownChange); // 設置下拉式選單改變事件
}

function draw() {
  background(0); // 將背景顏色改成黑色
  let txt = input.value();
  let textSizeValue = slider.value(); // 獲取滑桿的值
  if (txt) {
    textAlign(CENTER, CENTER);
    textSize(textSizeValue); // 設置文字大小
    fill(255); // 將文字顏色改成白色
    let spacedTxt = txt.split('').join(' '); // 在每個字元之間加入空格
    let y = 100; // 從文字框下方開始顯示文字
    while (y < height) { // 填滿整個螢幕
      let x = 0;
      while (x < width) {
        let offsetY = isBouncing ? sin(frameCount * 0.1 + x * 0.05) * 10 : 0;
        text(spacedTxt, x, y + offsetY);
        x += textWidth(spacedTxt);
      }
      y += textSizeValue + 8; // 每行之間的間隔
    }
  }
}

function toggleBounce() {
  isBouncing = !isBouncing;
}

function handleDropdownChange() {
  let selected = dropdown.value();
  if (selected === '第一周') {
    window.open('https://www.tku.edu.tw/', '_blank');
  } else if (selected === '第二周') {
    window.open('https://www.et.tku.edu.tw/', '_blank');
  } else if (selected === '第三周') {
    window.open('https://hackmd.io/@YNTBtVfdQV2_UOEfSoxNPg/rJ1REKMoyl', '_blank');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
}
