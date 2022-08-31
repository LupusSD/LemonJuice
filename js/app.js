// Testimonials Slider
let prev = document.querySelector(".test_left");
let next = document.querySelector(".test_right");
let dot1 = document.querySelector(".test_dot1");
let dot2 = document.querySelector(".test_dot2");
let dot3 = document.querySelector(".test_dot3");
let slide1 = document.querySelector(".test1");
let slide2 = document.querySelector(".test2");
let slide3 = document.querySelector(".test3");

next.onclick = function () {
    let curentSlide = document.querySelector(".test_active");
    curentSlide.classList.remove("test_active");
    curentSlide.classList.add("test_not");

    let nextSlide = curentSlide.nextElementSibling;
    if (nextSlide) {
        nextSlide.classList.remove("test_not");
        nextSlide.classList.add("test_active")
    } else {
        nextSlide = document.querySelector(".test_block article");
        nextSlide.classList.remove("test_not");
        nextSlide.classList.add("test_active")
    }

    let curentDot = document.querySelector(".test_dot_yellow");
    curentDot.classList.remove("test_dot_yellow");
    curentDot.classList.add("test_dot_gray");

    let nextDot = curentDot.nextElementSibling;
    if (nextDot) {
        nextDot.classList.remove("test_dot_gray");
        nextDot.classList.add("test_dot_yellow")
    } else {
        nextDot = document.querySelector(".test_dots div");
        nextDot.classList.remove("test_dot_gray");
        nextDot.classList.add("test_dot_yellow")
    }

}

prev.onclick = function () {
    let curentSlide = document.querySelector(".test_active")
    curentSlide.classList.remove("test_active");
    curentSlide.classList.add("test_not");

    let prevSlide = curentSlide.previousElementSibling;
    if (prevSlide) {
        prevSlide.classList.remove("test_not");
        prevSlide.classList.add("test_active")
    } else {
        prevSlide = document.querySelector(".test_block article:last-child");
        prevSlide.classList.remove("test_not");
        prevSlide.classList.add("test_active")
    }

    let curentDot = document.querySelector(".test_dot_yellow");
    curentDot.classList.remove("test_dot_yellow");
    curentDot.classList.add("test_dot_gray");

    let prevDot = curentDot.previousElementSibling;
    if (prevDot) {
        prevDot.classList.remove("test_dot_gray");
        prevDot.classList.add("test_dot_yellow")
    } else {
        prevDot = document.querySelector(".test_dots div:last-child");
        prevDot.classList.remove("test_dot_gray");
        prevDot.classList.add("test_dot_yellow")
    }
}

dot1.onclick = function () {
    dot1.classList.remove("test_dot_gray");
    dot1.classList.add("test_dot_yellow");
    dot2.classList.remove("test_dot_yellow");
    dot2.classList.add("test_dot_gray");
    dot3.classList.remove("test_dot_yellow");
    dot3.classList.add("test_dot_gray");
    slide1.classList.remove("test_not");
    slide1.classList.add("test_active");
    slide2.classList.remove("test_active");
    slide2.classList.add("test_not");
    slide3.classList.remove("test_active");
    slide3.classList.add("test_not");
}

dot2.onclick = function () {
    dot2.classList.remove("test_dot_gray");
    dot2.classList.add("test_dot_yellow");
    dot1.classList.remove("test_dot_yellow");
    dot1.classList.add("test_dot_gray");
    dot3.classList.remove("test_dot_yellow");
    dot3.classList.add("test_dot_gray");
    slide2.classList.remove("test_not");
    slide2.classList.add("test_active");
    slide1.classList.remove("test_active");
    slide1.classList.add("test_not");
    slide3.classList.remove("test_active");
    slide3.classList.add("test_not");
}

dot3.onclick = function () {
    dot3.classList.remove("test_dot_gray");
    dot3.classList.add("test_dot_yellow");
    dot2.classList.remove("test_dot_yellow");
    dot2.classList.add("test_dot_gray");
    dot1.classList.remove("test_dot_yellow");
    dot1.classList.add("test_dot_gray");
    slide3.classList.remove("test_not");
    slide3.classList.add("test_active");
    slide2.classList.remove("test_active");
    slide2.classList.add("test_not");
    slide1.classList.remove("test_active");
    slide1.classList.add("test_not");
}

// Questions Acardion

let question1 = document.querySelector(".question1_n");
let answer1 = document.querySelector(".answer1");

question1.onclick = function () {
    question2.classList.remove("question2_y");
    question2.classList.add("question2_n");
    answer2.style.display = "none";
    question3.classList.remove("question3_y");
    question3.classList.add("question3_n");
    answer3.style.display = "none";
    question4.classList.remove("question4_y");
    question4.classList.add("question4_n");
    answer4.style.display = "none";

    if (question1.classList == "question1_n") {
        question1.classList.remove("question1_n");
        question1.classList.add("question1_y");
        answer1.style.display = "block"
    } else {
        question1.classList.remove("question1_y");
        question1.classList.add("question1_n");
        answer1.style.display = "none"
    }
}

let question2 = document.querySelector(".question2_n");
let answer2 = document.querySelector(".answer2");

question2.onclick = function () {
    question1.classList.remove("question1_y");
    question1.classList.add("question1_n");
    answer1.style.display = "none";
    question3.classList.remove("question3_y");
    question3.classList.add("question3_n");
    answer3.style.display = "none";
    question4.classList.remove("question4_y");
    question4.classList.add("question4_n");
    answer4.style.display = "none";

    if (question2.classList == "question2_n") {
        question2.classList.remove("question2_n");
        question2.classList.add("question2_y");
        answer2.style.display = "block"
    } else {
        question2.classList.remove("question2_y");
        question2.classList.add("question2_n");
        answer2.style.display = "none"
    }
}

let question3 = document.querySelector(".question3_n");
let answer3 = document.querySelector(".answer3");

question3.onclick = function () {
    question1.classList.remove("question1_y");
    question1.classList.add("question1_n");
    answer1.style.display = "none";
    question2.classList.remove("question2_y");
    question2.classList.add("question2_n");
    answer2.style.display = "none";
    question4.classList.remove("question4_y");
    question4.classList.add("question4_n");
    answer4.style.display = "none"


    if (question3.classList == "question3_n") {
        question3.classList.remove("question3_n");
        question3.classList.add("question3_y");
        answer3.style.display = "block"
    } else {
        question3.classList.remove("question3_y");
        question3.classList.add("question3_n");
        answer3.style.display = "none"
    }
}

let question4 = document.querySelector(".question4_n");
let answer4 = document.querySelector(".answer4");

question4.onclick = function () {
    question1.classList.remove("question1_y");
    question1.classList.add("question1_n");
    answer1.style.display = "none";
    question2.classList.remove("question2_y");
    question2.classList.add("question2_n");
    answer2.style.display = "none";
    question3.classList.remove("question3_y");
    question3.classList.add("question3_n");
    answer3.style.display = "none";

    if (question4.classList == "question4_n") {
        question4.classList.remove("question4_n");
        question4.classList.add("question4_y");
        answer4.style.display = "block"
    } else {
        question4.classList.remove("question4_y");
        question4.classList.add("question4_n");
        answer4.style.display = "none"
    }
}