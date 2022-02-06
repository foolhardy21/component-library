const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')

const openDialogBtn = document.querySelector('.open-modal')
const modalDiv = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const dialogActionBtn = document.querySelectorAll('.dialog-action-btn')

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
    formInput.classList.add('input-error')
    setTimeout(() => {
        formInput.classList.remove('input-error')
    },2000)
})

