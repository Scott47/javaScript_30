// get elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress  = player.querySelector('.progress')
const progressBar  = player.querySelector('.progress__filled')
const toggle  = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


// build functions
// function togglePlay () {
//     if (video.paused) {
//         video.play();
//     } else { video.pause()
//     }
// }

// function togglePlay written with ternary:
function togglePlay () {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton () {
   const icon = this.paused ? '►' : '❚ ❚';
   toggle.textContent = icon;
}

function skip() {
    video.currentTime += +this.dataset.skip;
    console.log(this.dataset)
}

function handleRange () {
    video[this.name] = this.value
    console.log(this.value)
    console.log(this.name)
}

//update progressBar in real time
function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis =`${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e)
}
let mousedown = false;
// hook up event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', updateProgressBar)
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown=true)
progress.addEventListener('mouseup', () => mousedown=false)

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(slide => slide.addEventListener('change', handleRange))
ranges.forEach(slide => slide.addEventListener('mousemove', handleRange))

//challenge: do video full screen functionality