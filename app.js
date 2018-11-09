// Запросить у пользователя какую операцию он желает выполнить (add, subtract, divide, multiply),
//     далее запросить два числа для выполнения операции, выполнить операцию и вывести результат
//



var question = prompt(' Какую операцию вы желаете выполнить (add, subtract, divide, multiply)');


var numbCheck = !!Number(question);
var comp = question == 0;
var word1 = question !== 'add';
var word2 = question !== 'subtract';
var word3 = question !== 'divide';
var word4 = question !== 'multiply';
var words = word1 && word2 && word3 && word4;



var questionValid = comp || numbCheck || words;

// console.log(questionValid);
// console.log(words);



var num1 = prompt('Введите первое число');
var num2 = prompt('Введите второе число');


var numNotString1 = isNaN(num1);
var numNotString2 = isNaN(num2);

var newNotEmpty1 = !num1;
var newNotEmpty2 = !num2;


var numberCheck = numNotString1 || newNotEmpty1 || numNotString2 || newNotEmpty2;
// console.log(numberCheck);




if(!numberCheck) {

    if(!questionValid) {

        if(question == 'add') {
            alert(Number(num1) + Number(num2));
        } else if(question == 'subtract') {

            if(num1 < num2) {
                alert('Будет минусовое число');
            } else {
                alert(Number(num1) - Number(num2));
            }

        } else if(question == 'divide') {

            if(num2 == 0) {
                alert('Деление на 0 не возможно');
            } else {
                alert(Number(num1) / Number(num2));
            }
        } else if(question == 'multiply') {
            alert(Number(num1) * Number(num2));
        }
        alert('без ошибок');

    } else {
        alert('Не правильно введена операция');
    }

} else {
    alert('Введите число');
}



