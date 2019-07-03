const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index].addEventListener('change', handleUpdate);
}

for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index].addEventListener('mousemove', handleUpdate);
}