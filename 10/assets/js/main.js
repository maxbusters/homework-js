

class cardApp {
    constructor() {
        this.currPage = 1;
        this.currRating = 3;
        this.initDomClasses();
        this.start();
    }

    initDomClasses() {
        let globCont = $('body').children();
        globCont.addClass('info');
        $('script').removeClass();

        //.info__wrapper
        $('.info').children().addClass('info__wrapper');

        //.header
        $('header').addClass('header');
        let hc = $('header').children();

        //.header__container
        hc.addClass('header__container');

        //.header__nav .nav
        $('nav').addClass('header__nav nav');
        //.nav__el .el
        $('nav').children().addClass('nav__el el');

        //.el 
        let svgs = $('.el').find('svg');
        svgs.addClass('el__ico');
        let span = $('.el').find('span');
        span.addClass('el__title');

        //main .card
        $('main').addClass('card');
        //.card__container
        $('.card').children().addClass('card__container');
        //.card__wrapper
        $('.card__container').children().addClass('card__wrapper');

        let columns = $('.card__wrapper').children();
        //.card__left .left
        columns[0].className = 'card__left left';
        //.card__right .right
        columns[1].className = 'card__right right';

        //.left children
        $('.left > img').addClass('left__img');
        $('.left > div').addClass('left__rating rating');
        $('.rating > svg').addClass('rating__el')

        //.right children
        $('.right > div:nth-child(1)').addClass('right__descr descr');
        $('.right > div:nth-child(2)').addClass('right__full full');
        $('.right > div:nth-child(3)').addClass('right__purchase purchase');

        $('.descr > div:nth-child(1)').addClass('descr__left');
        $('.descr > div:nth-child(2)').addClass('descr__right');

        $('.descr__left > h1').addClass('descr__title');
        $('.descr__left > span').addClass('descr__subtitle');

        $('.descr__right > svg').addClass('descr__score');
        $('.descr__score > text').addClass('descr__points');
        $('.descr__points').attr('x', '25');
        $('.descr__points').attr('y', '45');

        $('.full > p').addClass('full__text');

        $('.purchase > div:nth-child(1)').addClass('purchase__pricing');
        $('.purchase__pricing > span:first-child').addClass('purchase__discount')
        $('.purchase__pricing > span:last-child').addClass('purchase__price')

        $('.purchase > span').addClass('purchase__btn');
    }

    start(){
        console.log(this.currPage);
    }

    setCurrPage(){

    }

    setRating(){
        
    }

}


$(function () {
    //.info
    new cardApp();
})
