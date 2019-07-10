/*function Registers(name, answers, correct){
    this.name = name;
    this.answers = answers;
    this.correct = correct;
}

var n1 = new Registers('amy', ['she is good', 'she is bad', 'she is loyal'], ['0', '2'] );
var n2 = new Registers('apple', ['she is fruit', 'she is red', 'she is loyal'], ['0', '1'] );

var registers = [n1, n2];

var s = Math.floor(Math.random() * 3);

registers[s].displayMe();

Registers.prototype.displayMe = function(){
    console.log(this.name);
    for(var i = 0; i < this.answer.length; i++){
        console.log(i + ':' + this.answer[i]);
    }

}

var answers = parseInt(prompt('enter the answer')); 

registers[s].checkAnswers(answers);

Registers.prototype.checkAnswers = function(ans){
    for(var i = 0; i < this.correct.lenght; i++){
        if(ans === this.correct[i]){
            console.log('both are correct');
        }else{
            console.log('answer is wrong');
        }
    }
}
*/

function Registers(name, answers, correct) {
    this.name = name;
    this.answers = answers;
    this.correct = correct;
}




Registers.prototype.displayMe = function(){   
    console.log(this.name);
    for(var i = 0; i < this.answers.length; i++){
        console.log(i + ':' + this.answers[i]);
    }

}


Registers.prototype.checkAnswers = function(ans){
        if(ans === this.correct[0] || ans === this.correct[1] || ans === this.correct[2]){
            console.log('correct answer');
        }
        else{
            console.log('wrong answer');
        }
    }

var n1 = new Registers('amy', ['she is good', 'she is bad', 'she is loyal', 'both 0 and 2 are correct'], [0, 2, 3] );
var n2 = new Registers('apple', ['she is fruit', 'she is red', 'both 0 and 1 are correct', 'it is blue' ], [0, 1, 2]);
var n3 = new Registers('eve', ['she is tall', 'she is short', 'she is bad', 'both 0 and 2 are correct'], [3] );


var s = Math.floor(Math.random() * 3);

var registers = [n1, n2, n3];

registers[s].displayMe();

var answers = parseInt(prompt('enter the answer')); 

registers[s].checkAnswers(answers);






/*function inteviewQuestion (job){
    if(job === 'teacher'){
        return function(name){
            console.log('you are a good teacher' +name);
        }
    }
    if(job === 'designer'){
        return function(name){
            console.log('you are a good designer' +name);

        }
    }
}
var teachInt = inteviewQuestion('teacher');
console.log(teachInt('kiran'));




//game random
function guess(){
    var n = Math.floor(Math.random() * 10);
    console.log(n);
    if(n > 5){
            var i = 1;
            console.log('you get a point '+ i++);
            
    }
    else{
        console.log('oops you loose a points');
    }
}

console.log(guess());

//iife(immidietly invoked function expressions)

(function(){
    var score = Math.floor(Math.random() * 10);
    console.log(score);
    if(score >= 5){
        console.log(score);
    }else{
        console.log(score = score + 2);
}
})();
*/


//closures ...we can access the variable even if it is outside of a function

/*function retirementAge(retireAge){
    var a = 'is the age to retire';
    return function(yearBirth){
        var age = 2018 - yearBirth;
        return ((retireAge - age) + a);
    }
}

console.log(retirementAge(65)(1990));


//using closure we can just reduce the functions in iife.

function inteviewQuestion (job){
    
        return function(name){
            if(job === 'teacher'){
            console.log('you are a good teacher ' +name);
        }
    else if (job === 'designer')
        {
            console.log('you are a good designer' +name);

        }else{
            console.log('what do you do ? ' +name);
        }
    }
}
var teachInt = inteviewQuestion('teacher')('kiran');
*/

//call, apply and bind
 
/*var person = {
    name: 'mike',
    age: '22',
    job: 'student',
    present: function(matter, time){
        if(matter === 'happy'){
            console.log(' hey there, ' + time + ' my name is ' + this.name + ' i am ' + this.age + ' years old and a ' + this.job )
        }else if(matter === 'excite'){
            console.log(' hello there, '+ time +  ' my name is ' + this.name + ' i am ' + this.age + ' years old and a ' + this.job )

        }
    }

};

//person.present('happy', 'morning');

var personal = {
    name: 'kiran',
    age: '14',
    job: 'student'
}

//person.present.call(personal, 'happy', 'morning');
//person.present.call(personal, 'excite', 'morning');


var personFriend = person.present.bind(personal, 'happy');
personFriend('good morning');

*/

















