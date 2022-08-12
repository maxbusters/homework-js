

class cardApp {
    constructor() {
        this.NAV_HOVER = 'el--hover';
        this.RAT_HOVER = 'rating__el--hover';
        this.currPage = 0;
        this.currRating = 0;
        this.isBuy = false;
        this.initDomClasses();
        this.initListeners();
        this.initPage();
        this.setCurrPage(0);
        this.setRating();
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
        $('.purchase__btn ~ div').addClass('purchase__msg')
        console.log($('.purchase__btn ~ div'));
    }

    setCurrPage(elNum){
        $('.nav__el').each((i, navEl) => {
            if(i === this.currPage){
                $(navEl).removeClass(this.NAV_HOVER);
            }

            if(i === elNum) {
                $(navEl).addClass(this.NAV_HOVER);
            }
        })
        this.currPage = elNum;
        this.initPage();
    }

    setRating(rating = false, hover = false){
        if(hover === true){
            this.unsetRating();
        }
        
        if(!hover && rating > 0 || rating === 0){
            this.currRating = rating;
        }
        if(!hover && !rating){
            this.unsetRating();
            rating = this.currRating;
        }

       
        $('.rating__el').each((i, el) => {
            if(i <= rating){
                $(el).addClass(this.RAT_HOVER);
            }
        });

    }

    unsetRating(){
        $('.rating__el').each((i, el) => {
            $(el).removeClass(this.RAT_HOVER);
        });
    }

    initListeners(){
        $('.nav__el').each((i, el) => {
            
           el.addEventListener('click', (e) => {
                this.setCurrPage(i);
            })
        });

        $('.rating').mouseleave(() => {
            this.setRating();
        });

        $('.rating__el').each((i, el) => {
            
            el.addEventListener('mouseover', (e) =>{
                this.setRating(i, true);
            })
            el.addEventListener('click', () => {
                this.setRating(i, false);
            })
        })

        $('.purchase__btn').on('click', () => {
            let msg = $('<span></span>');
            
            $(msg).addClass('card__msg');
            if(this.isBuy === false){
                $(msg).text('Added to cart');
                $(msg).css('background-color', 'green')
                this.isBuy = true;
            } else {
                $(msg).text('Already added');
                $(msg).css('background-color', 'deeppink')
            }
            $('.card').append(msg);
            $(msg).fadeIn();
            setTimeout(() => {
                
                $('.card__msg').fadeOut();
            }, 2000)
        })
    }

    initPage(){
        if(this.currPage !== 0){
            $('.card__container').css({opacity: '0'});
        } else {
            $('.card__container').css({opacity: '1'});
        }
    }

}


$(function () {
    //.info
    new cardApp();
})
