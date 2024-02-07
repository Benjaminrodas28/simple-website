document.addEventListener('click',e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown =>{
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

let panel = document.getElementById('panel')

const pickr = Pickr.create({
    el: '.color-picker',
    
    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

    pickr.on('change', (...args) => {
        let color = args[0].toRGBA();
        console.log(color);
        this.panel.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`
    })