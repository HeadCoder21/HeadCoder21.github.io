let totalScore = 0;
let hintDeterminer = false;
let questionScore = 0;
let questionCount = 1;

let easyMode = false;
let mediumMode = false;
let hardMode = false;

let firstAnswer = false;
let secondAnswer = false;
let thirdAnswer = false;

let oneTop = false;
let oneMid = false;
let oneLow = false;
let twoTop = false;
let twoMid = false;
let twoLow = false;
let threeTop = false;
let threeMid = false;
let threeLow = false;
let fourTop = false;
let fourMid = false;
let fourLow = false;
let fiveTop = false;
let fiveMid = false;
let fiveLow = false;
let sixTop = false;
let sixMid = false;
let sixLow = false;
let sevenTop = false;
let sevenMid = false;
let sevenLow = false;
let eightTop = false;
let eightMid = false;
let eightLow = false;

let v1 = false;
let v2 = false;
let v3 = false;

function clearBox() {
    document.querySelector("textarea").value="";
}

function switcharoo(id) {
    let current = document.querySelector(".page:not(.poof)");
    let next = document.querySelector("#" + id);
    current.classList.add("poof");
    next.classList.remove("poof");
}

function specialSwitcharoo(id) {
    let current = document.querySelector(".page:not(.poof)");
    let next = document.querySelector("#" + id);
    current.remove();
    next.classList.remove("poof");
}

//highlight, select, score,

function easyActivated() {
    easyMode = true;
}

function mediumActivated() {
    mediumMode = true;
}

function hardActivated() {
    hardMode = true;
}

function hinting() {
    let current = document.querySelector(".hint");
    let clue = document.querySelector(".clue");
    current.classList.add("hidden");
    clue.classList.remove("hidden");
    hintDeterminer = true;
}
function hinting2() {
    let current = document.querySelector(".hint2");
    let clue = document.querySelector(".clue2");
    current.classList.add("hidden");
    clue.classList.remove("hidden");
    hintDeterminer = true;
}
function hinting3() {
    let current = document.querySelector(".hint3");
    let clue = document.querySelector(".clue3");
    current.classList.add("hidden");
    clue.classList.remove("hidden");
    hintDeterminer = true;
}

function getButtonTop(id) {

    let current = document.querySelector("." + id);

    if (current.classList.contains("q1")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v1 = false;
        }
        else {

            const allElements = document.querySelectorAll(".q1");

            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }

            current.classList.add("focus");
            v1 = true;
        }
    }
    
    else if (current.classList.contains("q2")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v2 = false;
        }
        else {
            
            const allElements = document.querySelectorAll(".q2");

            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }

            current.classList.add("focus");
            v2 = true;
        }
    }

    else if (current.classList.contains("q3")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v3 = false;
        }
        else {
            
            const allElements = document.querySelectorAll(".q3");

            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }

            current.classList.add("focus");
            v3 = true;
        }
    }
    
    else if (current.classList.contains("q21")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v1 = false;
        }
        else {

            const allElements = document.querySelectorAll(".q21");

            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }

            current.classList.add("focus");
            v1 = true;
        }
    }
    
    else if (current.classList.contains("q22")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v2 = false;
        }
        else {
                
            const allElements = document.querySelectorAll(".q22");
    
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }
    
            current.classList.add("focus");
            v2 = true;
        }
    }
    
    else if (current.classList.contains("q23")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v3 = false;
        }
        else {
                
            const allElements = document.querySelectorAll(".q23");
    
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }
    
             current.classList.add("focus");
            v3 = true;
        }
    }

    else if (current.classList.contains("q31")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v1 = false;
        }
        else {

            const allElements = document.querySelectorAll(".q31");

            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }

            current.classList.add("focus");
            v1 = true;
        }
    }
    
    else if (current.classList.contains("q32")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v2 = false;
        }
        else {
                
            const allElements = document.querySelectorAll(".q32");
    
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }
    
            current.classList.add("focus");
            v2 = true;
        }
    }
    
    else if (current.classList.contains("q33")) {
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            v3 = false;
        }
        else {
                
            const allElements = document.querySelectorAll(".q33");
    
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].classList.remove("focus")
            }
    
             current.classList.add("focus");
            v3 = true;
        }
    }
}

function oneyea() {
    firstAnswer = true;
}

function onenaw() {
    firstAnswer = false;
}

function twoyea() {
    secondAnswer = true;
}

function twonaw() {
    secondAnswer = false;
}

function threeyea() {
    thirdAnswer = true;
}

function threenaw() {
    thirdAnswer = false;
}

function moveOn() {
    if (v1 && v2 && v3) {
        if (firstAnswer == true) {
            questionScore++;
            if (questionCount === 1) {
                oneTop = true;
            }
            else if (questionCount === 2) {
                twoTop = true;
            }
            else if (questionCount === 3) {
                threeTop = true;
            }
            else if (questionCount === 4) {
                fourTop = true;
            }
            else if (questionCount === 5) {
                fiveTop = true;
            }
            else if (questionCount === 6) {
                sixTop = true;
            }
            else if (questionCount === 7) {
                sevenTop = true;
            }
            else if (questionCount === 8) {
                eightTop = true;
            }
        }

        if (secondAnswer == true) {
            questionScore++;
            if (questionCount === 1) {
                oneMid = true;
            }
            else if (questionCount === 2) {
                twoMid = true;
            }
            else if (questionCount === 3) {
                threeMid = true;
            }
            else if (questionCount === 4) {
                fourMid = true;
            }
            else if (questionCount === 5) {
                fiveMid = true;
            }
            else if (questionCount === 6) {
                sixMid = true;
            }
            else if (questionCount === 7) {
                sevenMid = true;
            }
            else if (questionCount === 8) {
                eightMid = true;
            }
        }
        
        if (thirdAnswer == true) {
            questionScore++;
            if (questionCount === 1) {
                oneLow = true;
            }
            else if (questionCount === 2) {
                twoLow = true;
            }
            else if (questionCount === 3) {
                threeLow = true;
            }
            else if (questionCount === 4) {
                fourLow = true;
            }
            else if (questionCount === 5) {
                fiveLow = true;
            }
            else if (questionCount === 6) {
                sixLow = true;
            }
            else if (questionCount === 7) {
                sevenLow = true;
            }
            else if (questionCount === 8) {
                eightLow = true;
            }
        }

        if (easyMode == true) {
            if (questionCount === 1) {
                specialSwitcharoo ("easyQuestion2")
            }
            else if (questionCount === 2) {
                specialSwitcharoo ("easyQuestion3")
            }
            else if (questionCount === 3) {
                specialSwitcharoo ("easyQuestion4")
            }
            else if (questionCount === 4) {
                specialSwitcharoo ("easyQuestion5")
            }
            else if (questionCount === 5) {
                specialSwitcharoo ("easyQuestion6")
            }
            else if (questionCount === 6) {
                specialSwitcharoo ("easyQuestion7")
            }
            else if (questionCount === 7) {
                specialSwitcharoo ("easyQuestion8")
            }
            else if (questionCount === 8) {
                specialSwitcharoo ("easyFinaley")
            }
        }

        else if (mediumMode == true) {
            if (questionCount === 1) {
                specialSwitcharoo ("mediumQuestion2")
            }
            else if (questionCount === 2) {
                specialSwitcharoo ("mediumQuestion3")
            }
            else if (questionCount === 3) {
                specialSwitcharoo ("mediumQuestion4")
            }
            else if (questionCount === 4) {
                specialSwitcharoo ("mediumQuestion5")
            }
            else if (questionCount === 5) {
                specialSwitcharoo ("mediumQuestion6")
            }
            else if (questionCount === 6) {
                specialSwitcharoo ("mediumQuestion7")
            }
            else if (questionCount === 7) {
                specialSwitcharoo ("mediumQuestion8")
            }
            else if (questionCount === 8) {
                specialSwitcharoo ("mediumFinaley")
            }
        }

        else if (hardMode = true) {
            if (questionCount === 1) {
                specialSwitcharoo ("hardQuestion2")
            }
            else if (questionCount === 2) {
                specialSwitcharoo ("hardQuestion3")
            }
            else if (questionCount === 3) {
                specialSwitcharoo ("hardQuestion4")
            }
            else if (questionCount === 4) {
                specialSwitcharoo ("hardQuestion5")
            }
            else if (questionCount === 5) {
                specialSwitcharoo ("hardQuestion6")
            }
            else if (questionCount === 6) {
                specialSwitcharoo ("hardQuestion7")
            }
            else if (questionCount === 7) {
                specialSwitcharoo ("hardQuestion8")
            }
            else if (questionCount === 8) {
                specialSwitcharoo ("hardFinaley")
            }
        }

        if (hintDeterminer == true) {
            questionScore=questionScore-1.5;
            if (questionScore < 0) {
                questionScore = 0;
            }
        }

        v1 = false;
        v2 = false;
        v3 = false;

        totalScore = totalScore + questionScore;
        questionScore = 0;

        firstAnswer = false;
        secondAnswer = false;
        thirdAnswer = false;
        hintDeterminer = false;
        questionCount++;
    }
}

function mark(img) {
    img.src = "Check.jpg";
    img.alt = "Correct";
}

function tallyUp() {
    let i = -1;
    if (easyMode)         i = 0;
    else if (mediumMode)  i = 1;
    else if (hardMode)    i = 2;

    let img = document.querySelectorAll(".scoreList")[i].querySelectorAll("img");
    if (oneTop)  mark(img[0]);
    if (oneMid)  mark(img[1]);
    if (oneLow)  mark(img[2]);
    if (twoTop)  mark(img[3]);
    if (twoMid)  mark(img[4]);
    if (twoLow)  mark(img[5]);
    if (threeTop)  mark(img[6]);
    if (threeMid)  mark(img[7]);
    if (threeLow)  mark(img[8]);
    if (fourTop)  mark(img[9]);
    if (fourMid)  mark(img[10]);
    if (fourLow)  mark(img[11]);
    if (fiveTop)  mark(img[12]);
    if (fiveMid)  mark(img[13]);
    if (fiveLow)  mark(img[14]);
    if (sixTop)  mark(img[15]);
    if (sixMid)  mark(img[16]);
    if (sixLow)  mark(img[17]);
    if (sevenTop)  mark(img[18]);
    if (sevenMid)  mark(img[19]);
    if (sevenLow)  mark(img[20]);
    if (eightTop)  mark(img[21]);
    if (eightMid)  mark(img[22]);
    if (eightLow)  mark(img[23]);

    let correctanswers = document.querySelectorAll(".ecorrectanswers")[i];
    let percentage = document.querySelectorAll(".epercentage")[i];
    let lettergrade = document.querySelectorAll(".elettergrade")[i];
    
    let p = 100 * totalScore / 24;
    correctanswers.innerHTML = `Your Total Score: <span class="result123">${totalScore} / 24</span>`;
    percentage.innerHTML = `Your Accuracy: <span class="result123">${Math.round(p * 1e4) / 1e4}%</span>`;
    let letter = null;

    if (p < 60) {
        letter = "F";
    }
    else if (p < 70 && p >= 60) {
        letter = "D"
    }
    else if (p < 80 && p >= 70) {
        letter = "C"
    }
    else if (p < 90 && p >= 80) {
        letter = "B"
    }
    else if (p <= 100 && p >= 90) {
        letter = "A"
    }
    lettergrade.innerHTML = `Your Final Grade: <span class="result123">${letter}</span>`;
}
