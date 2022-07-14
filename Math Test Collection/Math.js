let score = 0;
let placement = 0;
let questioncount = 0;
let honor = false;
let course = "";
function switcharoo(id) {
    let current = document.querySelector("div:not(.poof)");
    let next = document.querySelector("#" + id);
    current.classList.add("poof");
    next.classList.remove("poof");
}

function formSubmitted(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let input = form.querySelector("input[type=text]");
    questioncount++;
    if (form.dataset.answer === input.value) {
        score++;
        placement += questioncount;
    }
    
    if (form.dataset.next)
        switcharoo(form.dataset.next);
    else
        alert ("Done!");
}

function setHonors(isHonors) {
    honor = isHonors;
    console.log(placement);

    let desp = document.querySelector("#despre");
    let x = document.querySelector ("#x")
    
    if (placement <= 1) {
        course = "Connected Math 1";
        desp.innerText = "In Connected Math 1, the course reviews complex addition, subtraction, multiplication, and division. Sometimes, students learn how to plot coordinates and learn the numbering of the four quadrants. Grade range for Connected Math 1 would be 4th grade, 5th grade, and 6th grade.";
        x.src = "Signs.png";
    }
    else if (placement <=3) {
        course = "Connected Math 2";
        desp.innerText = "In Connected Math 2, students review addition, subtraction, multiplication, and divison with decimals and fractions. Some teachers talk about the golden rectangle and introduce linear equations early on. Grade range for Connected Math 2 would be 5th grade, 6th grade, and 7th grade.";
        x.src = "Spiral.png"
    }
    else if (placement <=6) {
        course = "Pre-Algebra";
        desp.innerText = "In Pre-Algebra, students learn functions, formats of expressions and equations, and sometimes algebraic equations depending on the teacher. Students also learn about types of numbers and learn how to plot data. Grade range would be 6th grade, 7th grade, and 8th grade.";
        x.src = "Graph.jpg"
    }
    else if (placement <=10) {
        course = "Algebra";
        desp.innerText = "In Algebra, students review normal algebraic equations and then proceed on to systems of equations. Averages and medians are sometimes brought up. At the end of the year, students learn about quadratic and cubic equations. Grade range would be 7th grade, 8th grade, and 9th grade.";
        x.src = "Parabola.png";
    }
    else if (placement <=15) {
        if (honor) {
            course = "Honors Geometry";
            desp.innerText = "In Honors Geometry, students go through an accelerated course of geometry where they learn types of angles and lists of theorems, postulates, properties, and definitions. Students also learn proofs, congruence, similiarity, and trignometry, though trigonometry is at the end of the year. Grade range would be 8th grade, 9th grade, and 10th grade.";
            x.src = "Mandala.png";
        }
        else {
            course = "Geometry";
            desp.innerText = "In Geometry, students learn extensively about angle bisectors and segment bisectors. Students also review congruence, similiarity, and proofs, though giving reasoning for proofs is not required. There is some trigonometry at the end of the year, but students do not learn the Law of Sines or Cosines. Grade range is 8th grade, 9th grade, and 10th grade.";
            x.src = "Objects.png";
        }
    }
    else if (placement <=21) {
        if (honor) {
            course = "Honors Algebra II/Trigonometry";
            desp.innerText = "In Honors Algebra II/Trigonometry, students review at the beginning of the year finding the angles and sides of triangles using the Law of Cosines and the Law of Sines. Students learn about complex functions and their behaviors, graphs, and families at a fast pace. Students also learn statistics at the end of the year. Grade range is 9th grade, 10th grade, and 11th grade.";
            x.src = "Complex Arc.jpg";
        }
        else {
            course = "Algebra II/Trigonometry";
            desp.innerText = "In Algebra II/Trigonometry, students review at the beginning of the year finding the angle and sides of right triangles. After that, students learn about the Law of Sines and Law of Cosines. Students then move onto algebraic functions and the to probability. Grade range for Algebra II/trigonometry would be 9th grade, 10th grade, and 11th grade.";
            x.src = "Triangle.jpg";
        }
    }
    
    let scorecorrectness = document.querySelector("#escorecorrectness");
    let scoreperecent = document.querySelector("#escorepercent");
    let placeanswer = document.querySelector("#eplaceanswer");
    let placecorrectness = document.querySelector("#eplacecorrectness");
    scorecorrectness.innerText = "Correct Answers/Number of Answers : "+score+"/6";
    scoreperecent.innerText = "Percentage of Correct Answers : "+100*score/6+"%";
    placeanswer.innerText = course;
    placecorrectness.innerText = placement+"/21";

    switcharoo('end');
}

let forms = document.querySelectorAll("div main form");
for(let form of forms){
    form.addEventListener("submit", formSubmitted);
}
