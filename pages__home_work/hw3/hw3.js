let userPromptValue1 = prompt('Введіть перше число', '');
let userPromptValue2 = prompt('Введіть друге число', '');
let add = +userPromptValue1 + +userPromptValue2;
let sub = +userPromptValue1 - +userPromptValue2;
let mult = +userPromptValue1 * +userPromptValue2;
let div = +userPromptValue1 / +userPromptValue2;
alert(`Користувач ввів ${userPromptValue1} і ${userPromptValue2} : 
${userPromptValue1} + ${userPromptValue2} = ${add}
${userPromptValue1} - ${userPromptValue2} = ${sub}
${userPromptValue1} * ${userPromptValue2} = ${mult}
${userPromptValue1} / ${userPromptValue2} = ${div}`);