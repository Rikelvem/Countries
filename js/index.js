const $html = document.querySelector('html')
const $button = document.querySelector('#switch')

$button.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})