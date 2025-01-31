const postElements = document.querySelectorAll('.post');
const markButton = document.querySelector('.mark');
const numberElement = document.querySelector('.number');

function updateUnreadCount() {
    const unreadCount = document.querySelectorAll('.post.not-read-bg').length;
    numberElement.textContent = unreadCount;
}

postElements.forEach(postElement => {
    postElement.addEventListener('click', () => {
        const statusElement = postElement.querySelector('.status');
        if (statusElement) {
            statusElement.classList.remove('not-read');
        }
        postElement.classList.remove('not-read-bg');
        updateUnreadCount();
    });
});

markButton.addEventListener('click', () => {
    postElements.forEach(postElement => {
        const statusElement = postElement.querySelector('.status');
        if (statusElement) {
            statusElement.classList.remove('not-read');
        }
        postElement.classList.remove('not-read-bg');
    });
    updateUnreadCount();
});

updateUnreadCount();