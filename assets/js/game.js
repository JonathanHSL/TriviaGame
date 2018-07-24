
$(document).ready(function() {
  

    $("h2").click(function(){
    
        $("h1").hide(); 
        $("h2").hide(); 

        triviaQuestions();
        gameTimer();

   
    }); 
    $("body").on("click", ".answer", function(event){
        
        
        userAnswer = $(this).text();
        //conditional, if/else 
        userAnswer === correctAnswers[numQuestion] ?(
            //alert("HEY NOW YOUR A ROCKSTAR,GET YOUR GAME ON !!**CORRECT**");
            clearInterval(gameTime),
            addWin()) :
            //else
            (//alert("wrong answer!");
            clearInterval(gameTime),
            minusLoss()
        )
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        
        resetGame();
    });




})


function timeOver() {
    numSkip++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[numQuestion] + "</p>" + "<img class='center-block img-wrong' src='/assets/images/x.gif'>";
    $("#textArea").html(gameHTML);
    setTimeout(wait, 2500);  
}

function addWin() {
    numCorrect++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>HEY NOW YOUR ARE A ROCKSTAR!!CORRECT!! The answer is: " + correctAnswers[numQuestion] + "</p>" + imageArray[numQuestion];
    $("#textArea").html(gameHTML);
    
    setTimeout(wait, 2500); 
}

function minusLoss() {
    numWrong++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>DOHHHH,Incorrect!! The correct answer is: "+ correctAnswers[numQuestion] + "</p>" + "<img class='center-block img-wrong' src='/assets/images/x.gif'>";
    $("#textArea").html(gameHTML);
    setTimeout(wait, 2500); 
}
function triviaQuestions() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[numQuestion] + "</p><p class='first-answer answer'>A. " + choicesArray[numQuestion][0] + "</p><p class='answer'>B. "+ choicesArray[numQuestion][1]+"</p><p class='answer'>C. "+choicesArray[numQuestion][2]+"</p><p class='answer'>D. "+choicesArray[numQuestion][3]+"</p>";
    $("#textArea").html(gameHTML);
};

function wait() {
    //ternary operator replacing if/else for generate more questions
numQuestion < 7 ? 
    (numQuestion++,
    triviaQuestions(),
    counter = 30,
    gameTimer() ):
    
   (resultsPage())
};

function gameTimer() {
    gameTime = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(gameTime);
            timeOver();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
} 
function resultsPage() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + numCorrect + "</p>" + "<p>Wrong Answers: " + numWrong + "</p>" + "<p>Unanswered: " + numSkip + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='index.html' role='button'>Reset The Quiz!</a></p>";
    $("#textArea").html(gameHTML);
}

function resetGame() {
    numQuestion = 0;
    numCorrect = 0;
    numWrong = 0;
    numSkip = 0;
    counter = 30;
    triviaQuestions();
    gameTimer();    
}    
var openScreen;
var gameHTML;
var counter = 30;
var questionArray = 
[ "Which of these tv shows has the most seasons?", 
"Where was the location of 'C-I-T-Y GUYS'?", 
"In the show 'Friends' what is Emma's first word.'?", 
"In the show 'Saved by the Bell' What is Slater's first initials?", 
"Name the actor who played Steve Urkel in 'Family Matters'?", 
"What is Homer's occupation?", 
"In 'Boy Meet's World' what is Cory's last name?", 
"What is the iconic bridge that appears in 'The Full House' theme song?" ];

var choicesArray = [
    ["Seinfield", "Fraiser", "Friends", "King of Queens"], 
    ["Chicago","Los Angeles","New York","Seattle"], 
    ["dinosaur", "Gleeba", "Rachel", "Ross"], 
    ["D.D.", "A.C.", "D.C.", "J.J."], 
    ["Will Smith", "Jaleel White", "Carlton Banks", "Nas"], 
    ["Burger Joint Owner","Scientist","Nuclear Safety Inspector","Toy Inspector"], 
    ["Stevens","Lawrence", "Matthews", "Smith"], 
    ["Golden Gate Bridge","London Bridge","Brooklyn Bridge","Famous Bridge"], ];

var imageArray = new Array(); //creates a new array to  assign values(images).
imageArray[0] = "<img class='center-block' src='/assets/images/budweiser.jpg'>";
imageArray[1] = "<img class='center-block' src='/assets/images/heineken.jpeg'>"; 
imageArray[2] = "<img class='center-block' src='/assets/images/milwaukee.jpg'>"; 
imageArray[3] = "<img class='center-block' src='/assets/images/heineken.jpeg'>";  
imageArray[4] = "<img class='center-block' src='/assets/images/pbr.gif'>"; 
imageArray[5] = "<img class='center-block' src='/assets/images/carlsburg.jpg'>"; 
imageArray[6] = "<img class='center-block' src='/assets/images/trappist.jpeg'>"; 
imageArray[7] = "<img class='center-block' src='/assets/images/miller.jpg'>"; 

var correctAnswers = 
[ "C. Friends", 
"C. New York", 
"B. Gleeba", 
"B. A.C", 
"B. Jaleel White", 
"C. Nuclear Safety Inspector", 
"C. Matthews", 
"A. Golden Gate Bridge"];

var numQuestion = 0;
var userAnswer;
var gameTime;
var numCorrect = 0;
var numWrong = 0;
var numSkip = 0;