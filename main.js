const form = document.querySelector('.notify');
const input = document.getElementById('input');
const button = document.getElementById('button');
const verified = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value == '') {
        form.classList.add('active')
    } else if (input.value.match(verified)) {
        form.classList.remove('active')
        alert('Succesfuly!')
        input.value = ''
    } else {
        form.classList.add('active')
    }
})
