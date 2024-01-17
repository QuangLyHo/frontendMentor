const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    const root = document.documentElement
    root.classList.toggle('dark')
})