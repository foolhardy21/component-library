const hideBtn = document.querySelector('.button-toggle-badge')
const toggleBadge = document.querySelector('.toggle-badge')

hideBtn.addEventListener('click', () => {
    if(toggleBadge.style.display == 'none')
    toggleBadge.style.display = 'block'
    else toggleBadge.style.display = 'none'
})
