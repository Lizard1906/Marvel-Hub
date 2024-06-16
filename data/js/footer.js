document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem('musicNexus'));
    const footer = document.getElementById('footer');

    let activeTab = window.location.pathname;

    footer.innerHTML = `
        <div class="footer">
            <section class="footer-top">
                <div class="container footer-header">
                    <div class="row">
                        <div class="col-lg-4 col-12 p-3 pt-2 pb-2">
                            <a href="movies.html" style="text-decoration: none;">
                                <div class="footer-image-link" id="movies-link" style="background-image: url(../Images/Footer/movies.png);">
                                    Movies
                                </div>
                            </a>
                        </div>

                        <div class="col-lg-4 col-12 p-3 pt-2 pb-2">
                            <a href="home.html" style="text-decoration: none;">
                                <div class="footer-image-link" id="home-link" style="background-image: url(../Images/Footer/hub.png);">
                                    Home
                                </div>
                            </a>
                        </div>

                        <div class="col-lg-4 col-12 p-3 pt-2 pb-2">
                            <a href="characters.html" style="text-decoration: none;">
                                <div class="footer-image-link" id="characters-link" style="background-image: url(../Images/Footer/characters.png);">
                                    Characters
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <a href="../../index.html" class="footer-logo-div">
                                <img src="../Images/Footer/logo.png" class="footer-logo-link">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;

    // Add the active class to the appropriate link
    if (activeTab.includes('movies.html')) {
        document.getElementById('movies-link').classList.add('active');
    } else if (activeTab.includes('home.html')) {
        document.getElementById('home-link').classList.add('active');
    } else if (activeTab.includes('characters.html')) {
        document.getElementById('characters-link').classList.add('active');
    }
});
