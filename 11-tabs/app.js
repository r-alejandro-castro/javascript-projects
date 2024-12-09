const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('tab-btn')) {
        const id = target.dataset.id;
        articles.forEach(article => article.classList.remove('active'));
        target.classList.add('active');
        about.querySelector(`#${id}`).classList.add('active');
    }
});``