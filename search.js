document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const inputField = document.querySelector(".search-input")
    const img_down = document.querySelector(".img_down")
    // const img_up = document.querySelector(".img_up")
    img_down.src = "arrow-up.png";

    if (dropdown.contains(event.target)) {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }

    if (event.target.classList.contains('dropdown-item')) {
        img_down.src = "down-arrow.png";
        dropdownToggle.textContent = event.target.textContent;
        dropdownToggle.style.width = "max-content";
        dropdownToggle.appendChild(img_down);
        console.log(" event.target.textContent "+ event.target.textContent);
        inputField.placeholder ="Search "+ event.target.textContent;
        dropdownMenu.style.display = 'none';
    }
});
