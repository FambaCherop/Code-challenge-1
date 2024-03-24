function calculateGrade(score)
{

if (score >= 80 && score <= 100) {
    return ("A");
}

else if (score >= 60 && score <= 79) {
    return ("B");
}

else if (score >= 50 && score <= 59){
    return ("C");
}

else if (score >= 40 && score <= 49){
    return ("D");
}

else if  (score >=0 && score <=39){
    return ("E");
}

else (score < 0 || score > 100) 
return ("Invalid input. Please enter valid marks between 0 and 100");


}

function GradeCounter() 
{
    let total = (calculateGrade);
    console.log("Type in your marks here: ");

    if (total = calculateGrade(60) ) {
    return (`The student's score is: ${total}`);
    }
}

    const result = GradeCounter();
    console.log(result);
