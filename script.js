const hideBtn = document.querySelector('.button-toggle-badge')
const toggleBadge = document.querySelector('.toggle-badge')
const drawerItems = document.querySelectorAll('.drawer-menu-item')
const openDialogBtn = document.querySelector('.open-dialog')
const alertDiv = document.querySelector('.dialog')
const dialogAction = document.querySelectorAll('.dialog-action-btn')

hideBtn.addEventListener('click', () => {
    if(toggleBadge.style.display == 'none')
    toggleBadge.style.display = 'block'
    else toggleBadge.style.display = 'none'
})

drawerItems.forEach((item) => {
    item.addEventListener('click', () => {
        drawerItems.forEach(item2 => {
            item2.classList.remove('drawer-menu-item-active')    
        })
        item.classList.add('drawer-menu-item-active')
    })  
})

openDialogBtn.addEventListener('click', () => {
    alertDiv.style.display = 'block'
})

dialogAction.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        alertDiv.style.display = 'none'
    })
})