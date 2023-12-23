function myFunction() {
    alert("Feedback Saved Successfully");
}

main = document.querySelector('.main')
navlist = document.querySelector('.navlist')
navbar = document.querySelector('.navbar')


main.addEventListener('click', () => {
    navlist.classList.toggle('op');

    navbar.classList.toggle('nav-h');

})