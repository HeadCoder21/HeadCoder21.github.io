let totalScore = 0;
let letter = "";
let questionCount = 1;
let theQuestion = "";

function clearBox() {
    document.querySelector("textarea").value="";
}

function grade(qScore) {
    totalScore = totalScore+qScore;
    questionCount++;
}

function switcharoo(id) {
    let current = document.querySelector(".page:not(.poof)");
    let next = document.querySelector("#" + id);
    current.classList.add("poof");
    next.classList.remove("poof");

    if (id === "results")
        finaley();
}
function specialSwitcharoo(theQuestion) {
    if (questionCount === 1) {
        theQuestion = "question1";
    }
    else if (questionCount === 2) {
        theQuestion = "question2";
    }
    else if (questionCount === 3) {
        theQuestion = "question3";
    }
    else if (questionCount === 4) {
        theQuestion = "question4";
    }
    else if (questionCount === 5) {
        theQuestion = "question5";
    }
    else if (questionCount === 6) {
        theQuestion = "question6";
    }
    else if (questionCount === 7) {
        theQuestion = "question7";
    }
    else if (questionCount === 8) {
        theQuestion = "question8";
    }
    let current = document.querySelector(".page:not(.poof)");
    let next = document.querySelector("#" + theQuestion);
    current.classList.add("poof");
    next.classList.remove("poof");
}
function questionDeterminer() {
    
}

function finaley() {
    let x = document.querySelector("#x");
    let mat = document.querySelector("#match");
    let desp = document.querySelector("#despre");

    let correctanswers = document.querySelector("#ecorrectanswers");
    let percentage = document.querySelector("#epercentage");
    let lettergrade = document.querySelector("#elettergrade");
    let gpa = document.querySelector("#egpa");

    correctanswers.innerText = "Correct Answers/Number of Answers: "+totalScore+"/8";
    percentage.innerText = "Percentage of Correct Answers: "+100*totalScore/8+"%";
    if (totalScore <= 4) {
        letter = "F-";
    }
    else if (totalScore === 5) {
        letter = "D";
    }
    else if (totalScore === 6) {
        letter = "C";
    }
    else if (totalScore === 7) {
        letter = "B+";
    }
    else if (totalScore === 8) {
        letter = "A+";
    }
    lettergrade.innerText = "Letter Quiz Grade: "+letter;
    gpa.innerText = "Grade Point Average: "+totalScore/2;

    if (totalScore <= 2) {
        x.src = "Warhol.jpg";
        mat.innerHTML = "<p>Match: Andy Warhol </p>";
        desp.innerHTML = "<p>Andy Warhol was a modern artist in the mid-1900s. He was one of the most notable American artists, creating works as an important figure in the pop art visual art movement. Originally planning to be a commercial illustrator, he soon became a celebrity after art galleries in the 1950s. He soon set up an art studio in New York and brought up a group of 'superstars' that he featured in his artwork.</p><p>He also created several notable pieces of artwork including the Marilyn Diptych, Campbell's Soup Cans, and Kellog's Cornflakes Box. Warhol auctioned of his artwork, including his Eight Elvises (100 million dollars), Silver Car Crash (105 million dollars), and Shot Sage Blue Marilyn (195 million dollars). Warhol also used a silk screen printmaking process to create his artwork, an incredibly unique technique.</p>";
    }
    else if (totalScore <= 4) {
        x.src = "VanGogh.png";
        mat.innerHTML = "<p>Match: Vincent Van Gogh </p>";
        desp.innerHTML = "<p>Vincent Van Gogh was a Dutch painter in the late 1800s and was part of the post-impressionist art movement that later paved the way for modern art. He created over 2,100 pieces of art in his life, 860 of them being oil paintings. Van Gogh specialized in brushwork and created several self-portraits, portraits of others, still-lifes, and (most notably) landscapes. In 1888, he finally implemented a unique painting style with vivid colors while he was on a trip at Arles, a city in the south of France.</p><p>After discovering his style of art, he turned to draw a series of landscapes including sunflowers, wheat fields, and olive trees. In 1889, he created his most famous work, the Starry Night, estimated to be worth over 100 million dolars. If you want to see it, is now displayed in the Museum of Modern Art in New York City.</p>";
    }
    else if (totalScore <= 6) {
        x.src = "Rembrandt-small-01.jpg";
        mat.innerHTML = "<p>Match: Rembrandt Harmenszoon van Rijn</p>";
        desp.innerHTML = "<p>Rembrandt was a Dutch Golden Age painter in the 1600s. Generally, he is considered to be one of the greatest Dutch painters, having painted many pieces of artwork including historical scenes, landscapes, portraits, biblical scenes, and animals. Remembrandt painted in accordance with the Baroque style of art, a European trend that lasted from the early 17th century to the mid 18th century.</p><p>Rembrandt set up his own art studio in Leiden somwhere around 1625, and after a couple of years, he began to teach students his technique of art. A few years later, he set up an art deal with Prince Frederik Hendrik, which made Rembrandt quite affluent. Some of his paintings include the Storm on the Sea of Galilee (displayed in the Isabella Stewart Gardner Museum) and his most famous, the Night Watch (displayed in the Rijksmuseum).</p>";
    }
    else if (totalScore <= 8) {
        x.src = "Leonardo.png";
        mat.innerHTML = "<p>Match: Leonardo da Vinci</p>";
        desp.innerHTML = "<p>Leonardo da Vinci was a painter (along with a bunch of other things) during the 15th and 16th century. He is credited to be the starter of the High Renaissance and the greatest painter in the history of art. Leonardo was educated in Florence and began his artistic career in the city. Not just being a painter, he also made discoveries in engineering, anatomy, geology, optics, hydrodynamics, and sketched out his ideas.</p><p>Despite several works being lost over the centuries, Leonardo's art is still around today including the Last Supper (displayed at the Santa Maria delle Grazie, valued over 450 million), the Salvator Mundi (privately owned, auctioned for 450 million), the Ginevra de' Benci (displayed at the National Gallery of Art, valued 350 million), and the Mona Lisa (displayed at the Louvre, valued over 900 million).</p>";
    }

    // wipe
    totalScore = 0;
    letter = "";
    questionCount = 1;
}

