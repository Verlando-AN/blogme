function toggleTheme() {
            const body = document.body;
            const themeIcon = document.querySelector('.theme-toggle i');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        }
        
        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            const themeIcon = document.querySelector('.theme-toggle i');
            
            if (savedTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        });
        
        function openModal(element) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            
            const img = element.querySelector('img');
            modalImg.src = img.src;
            modalTitle.textContent = img.getAttribute('data-title');
            modalDescription.textContent = img.getAttribute('data-description');
            
            modal.style.display = 'block';
        }
        
        function closeModal() {
            document.getElementById('imageModal').style.display = 'none';
        }
        
        function downloadCV() {
            const link = document.createElement("a");
                link.href = "sertif/CV2.pdf";  
                link.download = "CV2.pdf";    
                link.click();
        }
        
        window.onclick = function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });