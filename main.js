
const headerToggle = document.getElementById('headerToggle')
const header = document.querySelector('.primary-navigaiton')

headerToggle.addEventListener('click', () => {
    header.toggleAttribute('data-visible')
})