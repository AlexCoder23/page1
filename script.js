var chs = [document.getElementById('1ch'), document.getElementById('2ch'), document.getElementById('3ch'), document.getElementById('4ch')];
var h = document.getElementById('1');
var q = document.getElementById('2');
var button = document.getElementById('3');
var anss1 = [document.getElementById('1h'), document.getElementById('2h'), document.getElementById('3h'), document.getElementById('4h')];
var divs = document.getElementsByClassName('div4');
var valid = false;

var anss2 = [
    [true, false, false, false], 
    [false, true, false, false], 
    [true, false, false, false], 
    [true, false, false, true], 
    [true, false, false, false], 
    [true, false, false, false]
];

var quests = [
    'С какой возрастной группы в учебной программе представленно содержание в образовательной области "Развiццё маўлення i культура маўленчых зносiн"?', 
    'В какой возрастной группе перед воспитанниками ставится задача: "фармiраваць уменне адрозниватць беларускае i рускае маўленне"?',
    'С какого возраста у детей появляется психологический интерес к белорусскому языку, передаче слов на белорусском языке, понимание значений некоторых наиболее употребляемых слов?',
    'Какие белорусские народные песенки и потешки рекомендованны учебные программы дошкольного образования во второй младшей группе для разыгрывания?',
    'Какое произведение белорусских авторов рекомендованно для заучиванния наизусть во второй младшей группе?',
    'Ввести в словарь детей 3-4 лет названия животных на белорусском языке поможет:'
];

var anss3 = [
    ['Группа перого раннего возраста', 'Группа второго раннего возраста', 'Первая младшая группа', 'Вторая младшая группа'], 
    ['В первой младшей', 'Во второй младшей', 'В средней', ''], 
    ['2-3 лет', '3-4 лет', '4-5 лет', '5-6 лет'], 
    ['"Iграў я на дудцы"', '"Сонейка - сонца, выглянi ў аконца"', '"Сiўка - варонка"', '"Кукарэку, певунок"'], 
    ['Т. Кляшторная "Шпак"', 'Яю Колас "На рэчцы зiмою"', 'Г. Iванова "Сонейка - сонца"', ''], 
    ['Бел. нар. казка "Зайкава хатка"', 'Бел. нар. казка "Курачка-Рабка"', '', '']
];

var col = 0;
function update() {
    h.innerText = `${col}/6`;
    if(col < 6) {
        q.innerText = quests[col];
        for(var i = 0; i < 4; i++) {
            anss1[i].innerText = anss3[col][i];
            divs[i].style.borderColor = 'dimgray';
        } 
    } else {
        q.innerText = 'Поздравляем вы ответили на все вопросы!!!'
        for(var i = 0; i < 4; i++) {
            anss1[i].innerText = '';
            divs[i].style.borderColor = 'dimgray';
        } 
    }
    
};
update();

function check() {
    if(valid) {
        col+=1;
        update();
        valid = false;
        button.innerText='Проверить ответ';
    } else {
        valid = true;
        for(var i = 0; i < 4; i++) {
            if(chs[i].checked == anss2[col][i]) {
                divs[i].style.borderColor = 'green';
            } else {
                divs[i].style.borderColor = 'red';
                valid = false;
            };
        }
        if(valid) {button.innerText='Дальше'}
    }
};
