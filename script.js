const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')
const listItems = document.querySelectorAll('.list-itm')
const starIcons = document.querySelectorAll('#star-icon')
const openDialogBtn = document.querySelector('.open-modal')
const modalDiv = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const dialogActionBtn = document.querySelectorAll('.dialog-action-btn')


starIcons.forEach(starIcon => {
    starIcon.addEventListener('click', (e) => {
        const maxRating = e.target.dataset.value
        starIcons.forEach(star => {
            if(star.dataset.value <= maxRating) {
                star.style.color = 'var(--c-yellow)' 
            } else {
                star.style.color = 'var(--c-gray)' 
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
    modalContainer.classList.remove('no-display')
    modalContainer.classList.add('pos-fixed')
    modalContainer.classList.add('top-left-0')
    modalContainer.classList.add('z-1')
})

dialogActionBtn.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        modalContainer.classList.add('no-display')
        modalContainer.classList.remove('pos-fixed')
        modalContainer.classList.remove('top-left-0')
        modalContainer.classList.remove('z-1')
    })
})

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-err')
    setTimeout(() => {
        formInput.classList.remove('input-err')
    },3000)
})

