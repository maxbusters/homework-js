let data = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

//1
class Playlist {
    constructor(playlist){
        this.playlist = playlist;
        this.list = document.createElement('ol');
        this.cont = document.getElementById('container');
        this.buildList();
    }

    buildList(){
        this.playlist.forEach(track => {
            let el = document.createElement('li');
            el.innerText = `${track.author} - ${track.song}`;
            this.list.appendChild(el);
        });
        this.cont.append(this.list);
    }
}

//2
class BuildModal{
    constructor(text){
        this.text = text;
        this.cont = document.getElementById('container');
        this.modalId = 'main_modal';
        this.buildHtml();
    }

    buildHtml(){
        let modal = document.createElement('div');
        modal.setAttribute('style', 'display: none; opasity: 0;');
        modal.setAttribute('id', this.modalId);
        modal.innerText = this.text;
        this.cont.appendChild(modal);

        let btnOpen = document.createElement('button');
        btnOpen.innerText = 'Open modal window'
        this.cont.appendChild(btnOpen);

        let btnClose = document.createElement('button');
        btnClose.innerText = 'X'
        modal.appendChild(btnClose);
        btnClose.setAttribute('class', 'close');

        btnOpen.onclick = () => this.showModal();
        btnClose.onclick = () => this.hideModal();
    }

    showModal(){
        let modal = document.getElementById(this.modalId);
        this.unfade(modal);
    }

    hideModal(){
        let modal = document.getElementById(this.modalId);
        this.fade(modal);
    }

    fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 5);
    }

    unfade(element) {
        console.log(element);
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 5);
    }
}

class trafficLights {
    constructor(){
        this.container = document.getElementById('lights');
        this.state = 0;
        this.ids = [
            'red', 'yellow', 'green'
        ]
        this.buildHtml();
        this.setState();

    }

    buildHtml(){    
        for(let i = 0; i < 3; i ++){
            let el = document.createElement('div');
            el.setAttribute('class', 'lights__el');
            
            switch(i){
                case 0: {
                    el.setAttribute('id', 'red');
                    break;
                }
                case 1: {
                    el.setAttribute('id', 'yellow');
                    break;
                } 
                case 2: {
                    el.setAttribute('id', 'green');
                    break;
                }
            }
            this.container.appendChild(el);
        }
        
        let btn = document.createElement('button');
        btn.innerText = 'Switch traffic lights';
        btn.onclick = () => {
            this.changeState();
        }
        document.body.append(btn);

    }

    setState(){
        let id = this.state;
        for(let elem of this.container.children){
            if(elem.id === this.ids[id]){
                elem.style.background = this.ids[id];
            } else {
                elem.style.background = 'black';
            }   
        }
    }

    changeState(){
        this.state ++;
        if(this.state > 2){
            this.state = 0;
        }
        this.setState();
    }
}

/* 
1) Створити сторінку, що показує нумерований список пісень: 
*/
let playlist = new Playlist(data);

/* 
2)Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
На модальном вікні повинен бути текст і кнопка "Закрити". 
Спочатку модальне вікно не відображається. 
При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає. */
let modal = new BuildModal('PERFECT MODAL');

/* 3)Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір. */
let lights = new trafficLights();