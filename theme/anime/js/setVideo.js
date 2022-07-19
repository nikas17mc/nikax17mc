const kinopoiskWatchLink = 'https://ww1.flink.su/';

/**
 * Get id & type of current movie.
 */
function getMovieData() {
    const url = window.location.href;
    const splitted = url.split('/');
    const id = splitted[4];
    const type = splitted[3];

    return { id, type };
}

/**
 * Initialize script
 */
function init() {
    const { id, type } = getMovieData();
    if (type === 'film' || type === 'series') mountBanner(id);
}

// Init on load
window.addEventListener('load', init);

/**
 * Mount Kinopoisk Watch banner to the page.
 */
function mountBanner(id) {
    const banner = document.getElementById('russian');
    banner.id = 'watch';

    setTimeout(() => {
        banner.addEventListener('click', () => openPlayer(id));

    }, 100);


}

/**
 * Open page with Kinopoisk Watch player.
 */
function openPlayer(id) {
    const link = new URL(kinopoiskWatchLink);
    if (id) link.searchParams.set('id', id);

    document.getElementById('player').src = (link.toString());
}