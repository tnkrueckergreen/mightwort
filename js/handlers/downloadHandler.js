import { forceDownload } from '../lib/forceDownload.js';

/**
 * Initializes a global click listener to handle file downloads.
 * It looks for clicks on elements with the `.download-btn` class.
 */
export function initDownloadHandler() {
    document.body.addEventListener('click', async (e) => {
        const downloadBtn = e.target.closest('.download-btn');
        if (!downloadBtn) return;

        e.preventDefault();
        const url = downloadBtn.dataset.url;
        const filename = downloadBtn.dataset.filename;
        
        const originalText = downloadBtn.textContent;
        downloadBtn.textContent = 'Downloading...';
        downloadBtn.disabled = true;

        try {
            await forceDownload(url, filename);
        } finally {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }
    });
}