function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function toggleFilter() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
