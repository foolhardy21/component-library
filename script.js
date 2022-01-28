const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-error')
    setTimeout(() => {
        formInput.classList.remove('input-error')
    },2000)
})

