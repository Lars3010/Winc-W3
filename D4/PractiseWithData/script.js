const mainList = document.getElementById('main-list');
const buttons = document.querySelectorAll('.menu-button');

const clearList = () => {
    mainList.innerHTML = "";
}

const sortByCountry = () => {
    const countries = randomPersonData.map((item) => {
        return item.region;
    })
    const sorted = countries.sort();
    sorted.map((item) => {
        const li = document.createElement('li');
        const textnode = document.createTextNode(item);
        li.appendChild(textnode);
        mainList.append(li);
    })
}

const getZodiacSign = (birthday) => {
    const month = birthday.getMonth() +1;
    const day = birthday.getDate();
    
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
        return "Steenbok";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Waterman";
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Vissen";
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Ram";
    } else if((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Stier";
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Tweelingen";
    } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Kreeft";
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leeuw";
    } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Maagd";
    } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Weegschaal";
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
        return "Schorpioen";
    } else if((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Boogschutter";
    }
}

const steenBokVrouwen = () => {
    const filter = randomPersonData.filter(item => {
       return item.gender === "female" && item.age > 30 && getZodiacSign(new Date(item.birthday.mdy)) === "Steenbok";
    })
    console.log(filter);
    const sorted = filter.sort((a, b) => (a.name > b.name) ? 1 : -1)
    sorted.map((item) => {
        const li = document.createElement('li');
        const textnode = document.createTextNode(`${item.name} ${item.surname}`);
        li.appendChild(textnode);
        mainList.append(li);
    })
}

const handleClickEvent = (event) => {
    switch (event.target.textContent) {
        case 'Landenlijst':
            clearList();
            sortByCountry();
            break;
        case 'Steenbokvrouwen':
            clearList();
            steenBokVrouwen();
            break;
        case 'Oude Creditcards':
            clearList();
            break;
        case 'Meeste Mensen':
            clearList();
            break;
        case 'Gemiddelde Leeftijd':
            clearList();
            break;
        case 'Matchmaking':
            clearList();
            break;
        default:
            break;
    }
    
}

const addEventHandlers = () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => handleClickEvent(event));
    })
}

addEventHandlers();