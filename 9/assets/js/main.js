

class TextEditor {
    constructor(text = 'Abcdefghigklmnopasdpsadpasdpasdpaspadspasdadsp') {
        this.text = text;
        this.buildHtml();
        this.isEdit = false;
        this.isSave = false;
    }

    editHandler() {
        let textCont = document.getElementById('main__text');
        let cont = document.getElementById('main');
        let textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'main__textarea');
        textarea.focus();

        textarea.cols = textCont.innerText.length;
        textarea.value = textCont.innerText;
        textCont.style.display = 'none';
        cont.append(textarea);
        return;
    }

    saveHandler() {
        let textCont = document.getElementById('main__text');
        let textarea = document.getElementById('main__textarea');

        textCont.innerText = textarea.value;
        textCont.style.display = 'block';
        textarea.parentElement.removeChild(textarea);
        return;
    }

    buildHtml() {
        let cont = document.createElement('main');
        cont.setAttribute('id', 'main');
        document.body.prepend(cont);

        let textCont = document.createElement('div');
        textCont.setAttribute('id', 'main__text');
        textCont.innerText = this.text;

        cont.appendChild(textCont);

        document.addEventListener('keydown', (e) => {
            let key = e.keyCode;
            key = String.fromCharCode(key).toLowerCase();
            if (key == 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                this.isEdit = false;
                if (!this.isSave) {
                    this.isSave = true;
                    e.preventDefault();
                    this.saveHandler();
                }
            }
            if (key == 'e' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                this.isSave = false;
                if (!this.isEdit) {
                    this.isEdit = true;
                    e.preventDefault();
                    this.editHandler();
                }
            }
        });
    }

}

class TableProvider {
    constructor() {
        this.bindListeners()
    }

    bindListeners() {
        let table = document.getElementById('tableNames');
        let headers = table.getElementsByTagName('th');

        headers[0].addEventListener('click', () => {
            this.sortById();
        });
        headers[1].addEventListener('click', () => {
            this.sortByName();
        });
        headers[2].addEventListener('click', () => {
            this.sortByLastName();
        });
    }

    buildTable(table) {
        let data = document.getElementById('tableNames').getElementsByTagName('tbody')[0];
        data.innerHTML = '';
        for (let el of table) {
            data.append(el);
        }
        console.log('finish sort')
    }

    sortById() {
        let data = document.getElementById('tableNames').getElementsByTagName('tbody')[0];


        let arr = data.getElementsByTagName('tr')
        arr = Array.from(arr).sort((rowA, rowB) => {
            return (parseInt(rowA.cells[0].innerText) > parseInt(rowB.cells[0].innerText) ? 1 : -1);

        })
        this.buildTable(arr);
    }

    sortByName() {
        let data = document.getElementById('tableNames').getElementsByTagName('tbody')[0];


        let arr = data.getElementsByTagName('tr')
        arr = Array.from(arr).sort((rowA, rowB) => {
            return (rowA.cells[1].innerText > rowB.cells[1].innerText ? 1 : -1);
        })
        this.buildTable(arr);
    }

    sortByLastName() {
        let data = document.getElementById('tableNames').getElementsByTagName('tbody')[0];


        let arr = data.getElementsByTagName('tr')
        arr = Array.from(arr).sort((rowA, rowB) => {
            return (rowA.cells[2].innerText > rowB.cells[2].innerText ? 1 : -1);
        })
        this.buildTable(arr);
    }
}

class ResizebleBlock {
    constructor() {
        this.buildHtml()
        this.isDown = false;
    }

    buildHtml() {
        let cont = document.createElement('div');
        cont.className = 'block__cont';
        let div = document.createElement('div');
        div.className = 'block__main'
        div.innerText = 'Створити HTML-сторінку з блоком тексту в рамці.Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.'
        cont.append(div);

        let btn = document.createElement('div');
        btn.className = 'block__btn'
        btn.id = 'resize'
        btn.addEventListener('mousedown', (e) => {
            e.preventDefault()
            this.isDown = true;

        })
        document.addEventListener('mouseup', (e) => {
            e.preventDefault()
            this.isDown = false;
        })

        document.addEventListener('mousemove', (e) => {
            e.preventDefault()
            if (this.isDown) {
                this.resizeBlock(e)
            }

        })
        cont.append(btn);
        document.body.append(cont);
    }

    resizeBlock(e) {
        let btn = document.getElementById('resize')
        let width = btn.parentElement.offsetWidth;
        let height = btn.parentElement.offsetHeight;

        btn.parentElement.style.width = width + e.movementX + 'px';
        btn.parentElement.style.height = height + e.movementY + 'px';


    }
}


/**
 * 1) Створити HTML-сторінку для відображення/редагування тексту. 
 * При відкритті сторінки текст відображається за допомогою тега div. 
 * При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
 * При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. 
 * Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
 */

let editor = new TextEditor();

/**
 * 2) Створити HTML-сторінку з великою таблицею. 
 * При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
 * Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
 */

let table = new TableProvider();

/**
 * Створити HTML-сторінку з блоком тексту в рамці. 
 * Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
 */

let block = new ResizebleBlock();

