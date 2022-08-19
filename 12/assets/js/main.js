const API_KEY = "95f2e22e3976553bcf6e703654ec62b7";
const URL = "http://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w200";
const DET_IMG_URL = "https://image.tmdb.org/t/p/w300";
let genres = [];


async function getAllMoviesGenres() {
    const response = await fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`);
    const respJSON = await response.json();
    console.log(respJSON);
    return respJSON;
}

async function getAllFilms(title,  type, page = 1) {
    console.log(page);
    const response = await fetch(`${URL}/search/movie/?api_key=${API_KEY}&query=${title}&page=${page}`);
    const respJSON = await response.json();

    return respJSON;
}

async function getDetails(id) {
    const response = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const respJSON = await response.json();

    return respJSON;
}


function showDetails(id) {
    console.log(id);
    $('#films').fadeOut();
    $('#pages').fadeOut();
    getDetails(id).then((film) => {
        console.log(film);
        $('#details').empty();
        $('#details').hide();
        let descr = $('<div class="details__descr descr"></div>');
        let genres = $('<div class="descr__genres"></div>');
        let year = (film.release_date).substr(0, 4);


        if (!film.poster_path) {
            $('#details').append($(`<div class="descr__poster poster--not-found">Image Not Found</div>`));
        } else {
            $('#details').append($(`<img class="descr__poster" src="${DET_IMG_URL + film.poster_path}">`));
        }

        descr.append($(`<div class="title__cont"><h2 class="descr__title">${film.title}</h2><span class="descr__year">${year}</span></div>`));

        film.genres.forEach((elem, i, arr) => {
            if (i !== arr.length - 1) {
                genres.append(elem.name + " - ");
            } else {
                genres.append(elem.name);
            }
        })

        descr.append(genres);
        descr.append($(`<span class="descr__rating">${parseInt((film.vote_average) * 10)} %</span>`));
        $('#details').append(descr);
        descr.append($(`<span class="descr__tagline">${film.tagline}</span>`));

        descr.append(`<div class="descr__overview"><h3>Overview</h3><p>${film.overview}</p></div>`)
        descr.append('<div class="details__close">Close</div>');
        $('#details').fadeIn();


        $('.details__close').on('click', () => {
            $('#details').empty();
            $('#details').fadeOut();
            $('#films').fadeIn();
            $('#pages').fadeIn();
        })
    });
}

function buildFilms(page) {
    $('#films').fadeOut();
    
    let title = $('#filmTitle').val();
    let type = $('#filmType').val();

    let filmsCont = $('#films');

    getAllFilms(title, type, page).then((response) => {
        $('#films').fadeOut();
        $('#films').empty();
        let films = response.results;
        let pages = response.total_pages;
        let page = response.page;
        $('#pages').empty();
        for(i = 1; i < pages; i++) {
            
            if(page === i) {
                $('#pages').append(`<div class="pages__el pages__curr" onclick="buildFilms(${i})">${i}</div>`); 
            } else {
                $('#pages').append(`<div class="pages__el" onclick="buildFilms(${i})">${i}</div>`);  
            }
        }
        
        films.forEach(film => {
            let filmEl = $(`<div class="film__el el"></div>`);
            let details = $(`<div class="el__details" onclick="showDetails(${film.id})">Details</div>`);
            let elImgCont = $(`<div class="el__poster-cont"></div>`);

            if (!film.poster_path) {
                elImgCont.append($(`<div class="el__poster poster--not-found">Image Not Found</div>`));
            } else {
                elImgCont.append($(`<img class="el__poster" src="${IMG_URL + film.poster_path}">`));
            }

            if (film.vote_average) {
                elImgCont.append($(`<div class="el__rating">${(film.vote_average) * 10} %</div>`));
            }
            elImgCont.append(details);
            filmEl.append(elImgCont);
            if (film.release_date) {
                filmEl.append($(`<div class="el__year">${film.release_date}</div>`));
            } else {
                filmEl.append($(`<div class="el__year">???</div>`));
            }

            filmEl.append($(`<div class="el__title">${film.title}</div>`))

            filmsCont.append(filmEl);
        });
        $('#films').fadeIn();
    });
    
}

$(function () {
    /* getAllMoviesGenres().then((response) => {
        genres = response.genres;
    }) */
    $('#form-search').on('submit', (e) => {
        e.preventDefault();
        buildFilms();
    })

})