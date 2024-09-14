document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // Construct the search URL for DuckDuckGo
        const baseUrl = 'https://duckduckgo.com/';
        const searchUrl = `${baseUrl}?q=${encodeURIComponent(query)}`;
        
        // Redirect to the DuckDuckGo search results page
        window.location.href = searchUrl;
    } else {
        alert('Please enter a search term.');
    }
});
