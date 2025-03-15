window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
document.addEventListener("DOMContentLoaded", function () {
    var videoSection = document.getElementById('video_marca');
    var videoElement = document.getElementById('videoElement');

    window.addEventListener('scroll', function () {
        var sectionTop = videoSection.offsetTop;
        var sectionHeight = videoSection.offsetHeight;
        var windowBottom = window.scrollY + window.innerHeight;

        if (windowBottom >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
            if (videoElement.paused) {
                videoElement.play();
            }
        } else {
            if (!videoElement.paused) {
                videoElement.pause();
            }
        }
    });
});
function atualizarContador() {
    const dataAlvo = new Date(new Date().getFullYear(), 3, 4, 0, 0, 0);
    const agora = new Date();

    if (agora > dataAlvo) {
        dataAlvo.setFullYear(dataAlvo.getFullYear() + 1);
    }

    const diferenca = dataAlvo - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

atualizarContador();
setInterval(atualizarContador, 1000);
