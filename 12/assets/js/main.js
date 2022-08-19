const API_KEY = "95f2e22e3976553bcf6e703654ec62b7";
const URL = "http://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w200";
const DET_IMG_URL = "https://image.tmdb.org/t/p/w300";
let type = 'movie';
let genres = [];


async function getAllMoviesGenres() {
    const response = await fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`);
    const respJSON = await response.json();

    return respJSON;
}

async function getAllFilms(title, page = 1) {
    const response = await fetch(`${URL}/search/movie/?api_key=${API_KEY}&query=${title}&page=${page}`);
    const respJSON = await response.json();

    return respJSON;
}

async function getAllTv(title, page) {
    const response = await fetch(`${URL}/search/tv/?api_key=${API_KEY}&query=${title}&page=${page}`);
    const respJSON = await response.json();

    return respJSON;
}

async function getMovieDetails(id) {

    const response = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const respJSON = await response.json();

    return respJSON;
}

async function getTvDetails(id) {

    const response = await fetch(`${URL}/tv/${id}?api_key=${API_KEY}&language=en-US`);
    const respJSON = await response.json();

    return respJSON;
}


function showDetails(id) {
    $('#films').fadeOut();
    $('#pages').fadeOut();
    if (type === 'tv') {
        getTvDetails(id).then((tv) => {
            console.log(tv);
            $('#details').empty();
            $('#details').hide();

            let descr = $('<div class="details__descr descr"></div>');
            let genres = $('<div class="descr__genres"></div>');
            let year = (tv.first_air_date).substr(0, 4);
            let lastEp = tv.last_episode_to_air;

            if (!tv.poster_path) {
                $('#details').append($(`<div class="descr__poster poster--not-found">Image Not Found</div>`));
            } else {
                $('#details').append($(`<img class="descr__poster" src="${DET_IMG_URL + tv.poster_path}">`));
            }
            descr.append($(`<span class="descr__tagline">${tv.tagline}</span>`));

            descr.append($(`<div class="title__cont"><h2 class="descr__title">${tv.name}</h2><span class="descr__year">${year}</span></div>`));
            tv.genres.forEach((elem, i, arr) => {
                if (i !== arr.length - 1) {
                    genres.append(elem.name + " - ");
                } else {
                    genres.append(elem.name);
                }
            })

            descr.append(genres);
            let seasons = $(`<div class="descr__seasons"><b>Seasons:</b></div>`);
            /* tv.seasons.forEach((el) => {
                seasons.append($(`<p><b>${el.}</b></p>`))
            }); */

            descr.append($(`<div class="descr__last-ep">
            <span><b>Last episode date:</b> ${lastEp.air_date}</span>
            <span><b>Season ${tv.number_of_seasons} Episode ${lastEp.episode_number}:</b> ${lastEp.name}</span>
            </div>`));

            
            descr.append($(`<span class="descr__rating">${parseInt((tv.vote_average) * 10)} %</span>`));
            $('#details').append(descr);
            
            descr.append(`<div class="descr__overview"><h3>Overview</h3><p>${tv.overview}</p></div>`)
            descr.append('<div class="details__close">Close</div>');
            $('#details').fadeIn();


            $('.details__close').on('click', () => {
                $('#details').empty();
                $('#details').fadeOut();
                $('#films').fadeIn();
                $('#pages').fadeIn();
            })

        });
    } else {
        getMovieDetails(id).then((film) => {
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
}

function movieResponse(response) {
    let filmsCont = $('#films');

    let films = response.results;
    let pages = response.total_pages;
    let page = response.page;

    console.log(response);

    for (i = 1; i <= pages; i++) {

        if (page === i) {
            $('#pages').append(`<div class="pages__el pages__curr" onclick="buildFilms(${i})">${i}</div>`);
        } else {
            $('#pages').append(`<div class="pages__el" onclick="buildFilms(${i})">${i}</div>`);
        }
    }

    if (type === 'tv') {
        films.forEach(film => {
            let filmEl = $(`<div class="film__el el"></div>`);
            let details;

            details = $(`<div class="el__details" onclick="showDetails(${film.id})">Details</div>`);

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

            if (film.first_air_date) {
                filmEl.append($(`<div class="el__year">${film.first_air_date}</div>`));
            }
            else {
                filmEl.append($(`<div class="el__year">???</div>`));
            }

            filmEl.append($(`<div class="el__title">${film.name}</div>`))

            filmsCont.append(filmEl);
        });

    } else {
        films.forEach(film => {
            let filmEl = $(`<div class="film__el el"></div>`);
            let details;

            details = $(`<div class="el__details" onclick="showDetails(${film.id})">Details</div>`);

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
            }
            else {
                filmEl.append($(`<div class="el__year">???</div>`));
            }

            filmEl.append($(`<div class="el__title">${film.title}</div>`))

            filmsCont.append(filmEl);
        });
    }

   
}

function buildFilms(page) {

    $('#films').hide();
    $('#films').empty();
    $('#pages').empty();

    let title = $('#filmTitle').val();
    if ($('#filmType').val()) {
        type = $('#filmType').val();
    }

    switch (type) {
        case 'tv':
            getAllTv(title, page).then((response) => {
                movieResponse(response);
            })
            break;
        case 'movie':
        default:
            getAllFilms(title, page).then((response) => {
                movieResponse(response);
            });
            break;
    }
    $('#films').fadeIn();
}

$(function () {
    $('#form-search').on('submit', (e) => {
        e.preventDefault();
        buildFilms();
    })
})