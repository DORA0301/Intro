const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});


// 閃爍按鈕

// 捕捉"hobbies"的連結元素
const hobbiesLink = document.querySelector('a[href="#hobbies"]');

// 捕捉"My Hobbies"標題元素
const myHobbiesSection = document.getElementById('hobbies');

// 設置點選事件
hobbiesLink.addEventListener('click', function (event) {
  event.preventDefault(); // 阻止預設的連結行為

  // 取得My Hobbies標題元素的位置
  const myHobbiesSectionTop = myHobbiesSection.getBoundingClientRect().top;

  // 計算頁面捲動的位移值，使My Hobbies出現在畫面的上方（可以自行調整位移值）
  const scrollOffset = myHobbiesSectionTop -100;

  // 使用window.scrollTo()函式將頁面滾動到指定位置
  window.scrollTo({
    top: scrollOffset,
    behavior: 'smooth', // 使用平滑的捲動效果
  });
});

// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function removeDots() {
  for (var i = 0; i < imageSlides.length; i++) {
    circles[i].classList.remove('dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
  var currentImage = imageSlides[counter];
  var currentDot = circles[counter];
  currentImage.classList.add('visible');
  removeDots();
  currentDot.classList.add('dot');
  counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
  var target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == 1) {
      counter = (imageSlides.length - 1);
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 50000);
    } else {
      counter--;
      counter--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 50000);
    }
  } 
  else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == imageSlides.length) {
      counter = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 50000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 50000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
  if (counter < imageSlides.length) {
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 10000);