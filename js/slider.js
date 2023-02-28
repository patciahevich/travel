const slider_items = document.querySelectorAll('.slider_item');
const slider_line = document.querySelector(".slider_content");
const slider_points = document.querySelectorAll(".red_point");
const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");
const slider = document.querySelector(".slider")
const arrows = document.querySelectorAll('.vector')

let slider_count = 0;
let sliderWidth;
let slider_line_style = window.getComputedStyle(slider_line);
let slider_style = window.getComputedStyle(slider);
let slide_frame;
let slide_gap;

// высчитываем ширину экрана и присваиваем ширину каждому слайду
function showSlide() {
    sliderWidth = document.querySelector(".slider").offsetWidth;
    slide_frame = parseInt(slider_style.marginLeft);
    slide_gap = parseInt(slider_line_style.columnGap) * (slider_items.length - 1);


    console.log(slide_frame)
    
    if (sliderWidth <= 900) {
        slider_line.style.width = sliderWidth * slider_items.length + "px"; 
        slider_items.forEach(item => item.style.width = sliderWidth + "px"); 
    } else {
        slider_line.style.width = sliderWidth * slider_items.length + slide_gap + "px"; 
        slider_items.forEach(item => item.style.width = sliderWidth/2 + slide_gap + "px");   
    }
     
    
    
    rollSlide()
}

showSlide();

// адаптивность слайдера
window.addEventListener("resize", showSlide)

//стрелочки 
function left () {
    arrow_right.classList.remove("vector_active");
    arrow_left.classList.add("vector_active")
}

function right () {
    arrow_left.classList.remove("vector_active");
    arrow_right.classList.add("vector_active")
}
// перлистывать слайд вперед
function nextSlide () {
    slider_count++
    if (slider_count >= slider_items.length) {
        slider_count = 0
        left()
    }
    right()
    rollSlide();
    thisSlide(slider_count);
}

// перлистывать слайд назад
function prevtSlide () {
    slider_count--
    if (slider_count < 0 ) {
        slider_count = slider_items.length - 1
        right()
    }
    left()
    rollSlide();
    thisSlide(slider_count);
}

// кнопки переключени яслайдов (только для мобильной версии) 

arrow_left.addEventListener("click", prevtSlide);
arrow_right.addEventListener("click", nextSlide)

// шаг перемещения слайдов 
function rollSlide () {
    if (sliderWidth <= 900) {
      slider_line.style.transform = `translateX(${-slider_count * sliderWidth}px)`  
    } else {
        slider_line.style.transform = `translateX(${-slider_count * sliderWidth/2 + slide_gap}px)`   
    }
    
}

// посвечивает активный слайд
function thisSlide (index) {
    slider_points.forEach(item => item.classList.remove('active_point')) //убирает активный класс у всех
    slider_points[index].classList.add("active_point"); //добавляет класс нужной точке
}

// клик на точку
slider_points.forEach((point, index) => {
    point.addEventListener("click", () => {
        slider_count = index;
        rollSlide();
        thisSlide(slider_count);
    })
})

// автоматическое перелистывание слайдов 
// setInterval( () => {
//     nextSlide()
// }, 3000);