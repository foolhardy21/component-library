const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')
const listItems = document.querySelectorAll('.list-itm')
const starIcons = document.querySelectorAll('#star-icon')
const openDialogBtn = document.querySelector('.open-modal')
const modalDiv = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const dialogActionBtn = document.querySelectorAll('.dialog-action-btn')
const hamBtn = document.querySelector('#btn-ham')
const navSmall = document.querySelector('#nav-small')
const smallNavCloseBtn = document.querySelector('#btn-close-small')


hamBtn.addEventListener('click', () => {
    navSmall.style.display = 'flex'
})

smallNavCloseBtn.addEventListener('click', () => {
    navSmall.style.display = 'none'
})

starIcons.forEach(starIcon => {
    starIcon.addEventListener('click', (e) => {
        const maxRating = e.target.dataset.value
        starIcons.forEach(star => {
            if (star.dataset.value <= maxRating) {
                star.classList.add('txt-warn')
            } else {
                star.classList.remove('txt-warn')
                star.classList.add('txt-off-secondary')
            }
        })
    })
})

listItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.cursor = 'pointer'
    })
    item.addEventListener('click', () => {
        listItems.forEach(item2 => {
            item2.classList.remove('txt-600')
            item2.classList.remove('bg-off-primary')
        })
        item.classList.add('txt-600')
        item.classList.add('bg-off-primary')
    })
})


openDialogBtn.addEventListener('click', () => {
    modalContainer.classList.remove('dis-hidden')
    modalContainer.classList.add('pos-fixed')
    modalContainer.classList.add('tl-0')
    modalContainer.classList.add('z-5')
})

dialogActionBtn.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        modalContainer.classList.add('dis-hidden')
        modalContainer.classList.remove('pos-fixed')
        modalContainer.classList.remove('tl-0')
        modalContainer.classList.remove('z-5')
    })
})

formSubmit.addEventListener('click', () => {
    formInput.value = ''
    formInput.classList.add('input-err')
    setTimeout(() => {
        formInput.classList.remove('input-err')
    }, 3000)
})
