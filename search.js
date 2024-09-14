   document.getElementById('search-button').addEventListener('click', function() {
            const query = document.getElementById('search-input').value;
            if (query) {
                // Construct the search URL for Startpage
                const baseUrl = 'https://www.startpage.com/sp/search';
                const searchUrl = `${baseUrl}?query=${encodeURIComponent(query)}`;
                
                // Redirect to the Startpage search results page
                window.location.href = searchUrl;
            } else {
                alert('Please enter a search term.');
            }
        });
