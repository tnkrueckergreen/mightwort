/**
 * Initializes the interactive search bar in the header.
 * Handles opening, closing, clearing, and submitting the search.
 * @returns {Function} A function to programmatically close the search.
 */
export function initHeaderSearch() {
    const searchIconBtn = document.getElementById('search-icon-btn');
    const searchForm = document.getElementById('header-search-form');
    const searchInput = document.getElementById('header-search-input');
    const clearBtn = document.getElementById('header-search-clear-btn');

    const openSearch = () => {
        document.body.classList.add('search-active');
        searchInput.focus();
    };
    
    const closeSearch = () => {
        document.body.classList.remove('search-active');
        searchInput.value = '';
        clearBtn.classList.remove('visible');
    };

    searchIconBtn.addEventListener('click', () => {
        if (document.body.classList.contains('search-active')) {
            closeSearch();
        } else {
            openSearch();
        }
    });

    searchInput.addEventListener('input', () => {
        clearBtn.classList.toggle('visible', searchInput.value.length > 0);
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.remove('visible');
        searchInput.focus();
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            location.hash = `#search/${encodeURIComponent(query)}`;
            closeSearch();
        }
    });

    return closeSearch; // For global 'Escape' key listener
}