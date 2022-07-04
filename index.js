const form = document.getElementById('main_form');
const formCount = document.getElementById('count');
const formResult = document.getElementById('count_total');
const level = document.getElementById('level');
let depositIndex = '';
let depositLevel = '';
let countRes = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checker(formCount);
});


function checker(count) {
    if (count.value < 50) count.value = 50;
    else if (count.value >= 50 && count.value < 450) {
        depositIndex = 1;
    } else if (count.value >= 500 && count.value < 3950) {
        depositIndex = 2;
    } else if (count.value >= 4000 && count.value < 9950) {
        depositIndex = 3;
    } else if (count.value >= 10000 && count.value < 29950) {
        depositIndex = 4;
    } else if (count.value >= 30000 && count.value < 49950) {
        depositIndex = 5;
    } else if (count.value >= 50000) {
        depositIndex = 6;
    }

    depositLevel = level.value;
    calc(+count.value, +depositIndex, +depositLevel);
}


function calc(invest, count, lev) {
    if (lev === 1) {
        oneLevel(invest, count, lev);
    } else if (lev === 2) {
        secondLevel(invest, count, lev);
    } else if (lev === 3) {
        thirdLevel(invest, count, lev);
    }
}

function oneLevel(invest, depIndex, level) {
    formResult.textContent = '';
    switch (depIndex) {
        case 1:
            calcProfit(invest, 0.5, 14, level);
            break;
        case 2:
            calcProfit(invest, 0.6, 30, level);
            break;
        case 3:
            calcProfit(invest, 0.7, 65, level);
            break;
        case 4:
            calcProfit(invest, 0.8, 100, level);
            break;
        case 5:
            calcProfit(invest, 0.9, 165, level);
            break;
        case 6:
            calcProfit(invest, 1.0, 200, level);
            break;

        default:
            break;
    }
}

function secondLevel(invest, depIndex, level) {
    formResult.textContent = '';
    switch (depIndex) {
        case 1:
            calcProfit(invest, 1.0, 285, level);
            break;
        case 2:
            calcProfit(invest, 1.2, 285, level);
            break;
        case 3:
            calcProfit(invest, 1.4, 285, level);
            break;
        case 4:
            calcProfit(invest, 1.6, 285, level);
            break;
        case 5:
            calcProfit(invest, 1.8, 285, level);
            break;
        case 6:
            calcProfit(invest, 2.0, 285, level);
            break;

        default:
            break;
    }

}


function thirdLevel(invest, depIndex, level) {
    formResult.textContent = '';
    switch (depIndex) {
        case 1:
            calcProfit(invest, 1.4, 365, +level);
            break;
        case 2:
            calcProfit(invest, 1.6, 365, +level);
            break;
        case 3:
            calcProfit(invest, 1.8, 365, +level);
            break;
        case 4:
            calcProfit(invest, 2.0, 365, +level);
            break;
        case 5:
            calcProfit(invest, 2.2, 365, +level);
            break;
        case 6:
            calcProfit(invest, 2.4, 365, +level);
            break;

        default:
            break;
    }
}


function calcProfit(invest, percent, days, lv) {
    countRes;
    if (+lv === 1 || +lv === 2) {
        Math.floor(countRes = (invest * ((percent * days) / 100)) + invest);
        formResult.textContent = countRes.toFixed(2);
    } else if (+lv === 3) {
        Math.floor(countRes = (invest * ((percent * days) / 100)));
        formResult.textContent = countRes.toFixed(2);
    }
}