// get elements
const player = document.querySelector('.player')
const progress  = player.querySelector('.progress')
const progressBar  = player.querySelector('.progress__filled')
const toggle  = player.querySelector('.toggle')
const skipButtons = player.querySelector('[data-skip]')
const playerSlider = player.querySelector('.player__slider')
// build functions
// function togglePlay () {
//     if (video.paused) {
//         video.play();
//     } else { video.pause()
//     }
// }
const method = video.paused ? video.play : video.paused;
video[method]()
// hook up event listeners