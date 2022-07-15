let totalScore = 0

function grade(qScore) {
    totalScore = totalScore+qScore;
}

function switcharoo(id) {
    let current = document.querySelector(".page:not(.poof)");
    let next = document.querySelector("#" + id);
    current.classList.add("poof");
    next.classList.remove("poof");
}