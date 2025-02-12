document.querySelectorAll('ul li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`${item.innerText} clicked!`);
    });
});