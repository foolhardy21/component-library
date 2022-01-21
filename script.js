const hideBadgeBtn = document.querySelector('.button-toggle-badge')
const badge = document.querySelector('.toggle-badge')

const drawerItems = document.querySelectorAll('.drawer-menu-item')

const openDialogBtn = document.querySelector('.open-dialog')
const alertDiv = document.querySelector('.dialog')
const dialogActionBtn = document.querySelectorAll('.dialog-action-btn')

const tabItems = document.querySelectorAll('.tab-item')
const leadIconItems = document.querySelectorAll('.tabitem-lead-icon')
const topIconItems = document.querySelectorAll('.tabitem-top-icon')

hideBadgeBtn.addEventListener('click', () => {
    if(badge.style.display == 'none')
    badge.style.display = 'block'
    else badge.style.display = 'none'
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

dialogActionBtn.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        alertDiv.style.display = 'none'
    })
})

tabItems.forEach(item => {
    item.addEventListener('click', () => {
        tabItems.forEach(item2 => {
            item2.classList.remove('tab-item-selected')
        })
        item.classList.add('tab-item-selected')
    })
})

// console.log(tabItems)
leadIconItems.forEach(item => {
    item.addEventListener('click', () => {
        // console.log('clicked')
        leadIconItems.forEach(item2 => {
            item2.classList.remove('tab-item-selected')
        })
        item.classList.add('tab-item-selected')
    })
})

topIconItems.forEach(item => {
    item.addEventListener('click', () => {
        // console.log('clicked')
        topIconItems.forEach(item2 => {
            item2.classList.remove('tab-item-selected')
        })
        item.classList.add('tab-item-selected')
    })
})