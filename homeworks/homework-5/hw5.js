const userValueYear = prompt('Ваш рік народження?');
switch (true) {
    case userValueYear === null:
        alert(`Шкода, що ви не захотіли ввести свій рік народження =(`);
        break;
    case userValueYear.trim() === "":
        alert(`Ви нічого не написали`);
        break;
    default:
        alert(`Твій вік ${2024 - +userValueYear}`);
}

const userValueCity = prompt('В якому місті ви живете?');
switch (true) {
    case userValueCity ==='Київ':
         alert(`Ти живеш у столиці України`);
        break;
    case userValueCity === 'Вашингтон':
         alert(`Ти живеш у столиці США`);
        break;
    case userValueCity === 'Лондон':
         alert(`Ти живеш у столиці Великої Британії`);
        break;
    case userValueCity === null:
         alert(`Шкода, що ви не захотіли ввести своє місто проживання =(`);
        break;
    case userValueCity.trim() === "":
         alert(`Ви нічого не написали`);
        break;    
    default:
        alert(`Ти живеш у місті ${userValueCity}`);     
}

const userValueSport = prompt('Який у вас улюблений вид спорту?');
switch (true) {
    case userValueSport === 'Плавання':
        alert(`Круто! Хочеш стати Яной Клочковой?`);
        break;
    case userValueSport === 'Боротьба':
        alert(`Круто! Хочеш стати Жаном Беленюком?`);
        break;
    case userValueSport === 'Бокс':
        alert(`Круто! Хочеш стати Володимиром Кличком?`);
        break;
    case userValueSport === null:
        alert(`Шкода, що ви не захотіли ввести свій улюблений вид спорту =(`);
        break;
    case userValueSport.trim() === "":
        alert(`Ви нічого не написали`);
        break;  
    default:
        alert(`Твій улюблений вид спорту це ${userValueSport}`);
}
