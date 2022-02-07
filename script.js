const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')
const drawerItems = document.querySelectorAll('.list-menu-item')
const starIcons = document.querySelectorAll('#star-icon')

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

