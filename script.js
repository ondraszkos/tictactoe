let lastSign = '0';

function cellClickHandler(event) {
    const td = event.target;
  if (td.innerHTML == ' ');
    const sign = lastSign === '0' ? 'X': '0';
    td.innerHTML = sign;
    lastSign = sign
}

function createTd () {
    const td = document.createElement('td');
    td.addEventListener('click', cellClickHandler);
    return td;
}

function createRw (count) {
    const rw = document.createElement('tr');
    for(let i = 0; i < count; i++) {
        const td = createTd();
        rw.appendChild(td);
    }
    return rw;
}

function createTable(rows, cells) {
    const table = document.createElement('table');
    for(let i = 0; i < rows; i++) {
        const rw = createRw(cells);
        table.appendChild(rw);
    }
    return table;
}

function newGameClickHandler() {
    const tds = Array.from(document.querySelectorAll('td'));
    tds.forEach(function(td) {
        td.innerHTML = '';
    });
}


function createStartButton() {
    const button = document.createElement('button');
    button.innerText = 'NOWA GRA';
    button.addEventListener('click', newGameClickHandler);
    document.body.appendChild(button);
}
const table = createTable(3, 3);

document.body.appendChild(table)