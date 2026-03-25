// Copy to clipboard functionality
document.addEventListener('DOMContentLoaded', () => {
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const sourceElement = document.getElementById(targetId);
            
            if (sourceElement) {
                // Get the text content, keeping raw formatting
                const textToCopy = sourceElement.textContent || sourceElement.innerText;
                
                navigator.clipboard.writeText(textToCopy.trim())
                    .then(() => {
                        // Visual feedback
                        const originalHTML = btn.innerHTML;
                        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
                        btn.classList.add('copied');
                        
                        // Reset after 2 seconds
                        setTimeout(() => {
                            btn.innerHTML = originalHTML;
                            btn.classList.remove('copied');
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                        btn.innerHTML = '<i class="fa-solid fa-xmark"></i> Error';
                        
                        setTimeout(() => {
                            btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar Prompt';
                        }, 2000);
                    });
            }
        });
    });
});
