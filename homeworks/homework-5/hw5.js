let messageAge = 'Твій вік ';
let messageCity = 'Ти живеш у ';
let messageSport = 'Твій улюблений вид спорту це ';

const userValueYear = prompt('Ваш рік народження?');
if (userValueYear === null || userValueYear.trim() === "") {
    alert(`Шкода, що ви не захотіли ввести свій рік народження =(`);
} else {
    messageAge += 2024 - +userValueYear;
}

const userValueCity = prompt('В якому місті ви живете?');
if (userValueCity === null || userValueCity.trim() === "") {
   alert(`Шкода, що ви не захотіли ввести своє місто проживання =(`); 
} else {
    switch (true) {
        case userValueCity === 'Київ':
            messageCity += ` столиці України`;
            break;
        case userValueCity === 'Вашингтон':
            messageCity += ` столиці США`;
            break;
        case userValueCity === 'Лондон':
            messageCity += ` столиці Великої Британії`;
            break;
        default:
            messageCity += `місті ${userValueCity}`;
    }
}

const userValueSport = prompt('Який у вас улюблений вид спорту?');
if (userValueSport === null || userValueSport.trim() === "") {
     alert(`Шкода, що ви не захотіли ввести свій улюблений вид спорту =(`);
} else {
    switch (true) {
        case userValueSport === 'Плавання':
                messageSport += `${userValueSport}. Круто! Хочеш стати Яной Клочковой?`;
                break;
            case userValueSport === 'Боротьба':
                messageSport += `${userValueSport}. Круто! Хочеш стати Жаном Беленюком?`;
                break;
            case userValueSport === 'Бокс':
                messageSport += `${userValueSport}. Круто! Хочеш стати Володимиром Кличком?`;
                break;
            default: 
                messageSport += userValueSport;
    }
}

alert(`${messageAge}
 ${messageCity}
 ${messageSport}`);


