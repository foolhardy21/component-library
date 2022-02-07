const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')
const drawerItems = document.querySelectorAll('.list-menu-item')

drawerItems.forEach((item) => {
    item.addEventListener('click', () => {
        drawerItems.forEach(item2 => {
            item2.classList.remove('list-menu-item-active')    
        })
        item.classList.add('list-menu-item-active')
    })  
})

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-error')
    setTimeout(() => {
        formInput.classList.remove('input-error')
    },2000)
})

