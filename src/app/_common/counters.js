import anime from 'animejs/lib/anime.es.js';

const numberAnimate = (render, from, to, duration, timeFx) => {
    let startTime = performance.now();
    requestAnimationFrame(function step(time) {
        let pTime = (time - startTime) / duration;
        if (pTime > 1) pTime = 1;
        render(from + (to - from) * timeFx(pTime));
        if (pTime < 1) {
        requestAnimationFrame(step);
        }
    });
}

export const CountersBarAnim = () => {
    const counters = document.querySelectorAll('.art-counter');

    // counters
    anime({
        targets: '.art-counter',
        delay: 500,
        opacity: [1, 1],
        complete: function(anim) {
            counters.forEach((item, index) => {
                var countTo = item.getAttribute('data-count');
                numberAnimate(function(newValue) {
                    item.innerText = Math.floor(newValue);
                }, 0, countTo, 3000, x => x);
            });
        }
    });
}