document.addEventListener('DOMContentLoaded', function() {
    const newsTicker = document.querySelector('.news-ticker ul');
    const newsItems = newsTicker.querySelectorAll('li');
    
    function cloneItems() {
        newsItems.forEach(item => {
            const clone = item.cloneNode(true);
            newsTicker.appendChild(clone);
        });
    }
    
    cloneItems();
});
