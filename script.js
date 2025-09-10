let sliders = document.querySelectorAll('.slider')
let dotsContainer = document.querySelector('.dots-container')
let nextBtn = document.querySelector('.nav.next')
let prevBtn = document.querySelector('.nav.prev')

let currentIndex = 0
let autoPlayInterval

function showSlider(index) {
    // menghapus class active di komponen slider dan dots-container
    sliders.forEach((slider, i)=> {
        slider.classList.remove('active')
        if (dotsContainer.children[i]) {
            dotsContainer.children[i].classList.remove('active')
        }
    })

    //tampilkan slider
    sliders[index].classList.add('active')
    if (dotsContainer.children[index]) {
        dotsContainer.children[index].classList.add('active')
    }
}

function nextSlider() {
    currentIndex = (currentIndex + 1) % sliders.length
    showSlider(currentIndex)
}

function prevSlider() {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length
    showSlider(currentIndex) 
}

nextBtn.addEventListener('click', () => {
    nextSlider()
    resetAutoPlay()
})

prevBtn.addEventListener('click', () => {
    prevSlider()
    resetAutoPlay()
})

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlider, 5000)
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval)
    startAutoPlay()
}

function createDots() {
    sliders.forEach ((_, i) => {
        let dot = document.createElement('span')
        dot.classList.add('dot')
        dot.addEventListener('click', () => {
            currentIndex = i
            showSlider(currentIndex)
            resetAutoPlay()
        })
        dotsContainer.appendChild(dot)
    })
    showSlider(currentIndex)
}

createDots()
startAutoPlay()