let userPromtValue = prompt('Яку операцію хочете зробити - add (додавання), sub(віднімання), mult(множення), div(ділення)?', '');
let userPromptValue1 = prompt('Введіть перше число', '');
let userPromptValue2 = prompt('Введіть друге число', '');

if(userPromtValue == 'add') {
    let add = +userPromptValue1 + +userPromptValue2;
    alert(`${userPromptValue1} + ${userPromptValue2} = ${add}`)
}
else if (userPromtValue == 'sub') {
    let sub = +userPromptValue1 - +userPromptValue2;
    alert(`${userPromptValue1} - ${userPromptValue2} = ${sub}`)
}
else if (userPromtValue == 'mult') {
    let mult = +userPromptValue1 * +userPromptValue2;
    alert(`${userPromptValue1} * ${userPromptValue2} = ${mult}`)
}
else if (userPromtValue == 'div') {
    let div = +userPromptValue1 / +userPromptValue2;
    alert(`${userPromptValue1} / ${userPromptValue2} = ${div}`)
};