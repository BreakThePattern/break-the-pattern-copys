// Particle effect background
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();
        
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        // Create 100 particles
        for(let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for(let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];
            
            // Move
            p.x += p.speedX;
            p.y -= p.speedY; // Float upwards mostly
            
            // Re-spawn if out of bounds
            if (p.x < 0 || p.x > this.canvas.width || p.y < 0) {
                p.x = Math.random() * this.canvas.width;
                p.y = this.canvas.height;
            }
            if (p.y > this.canvas.height) {
                p.y = 0;
            }
            
            // Draw
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            // Neon green color
            this.ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity})`;
            this.ctx.fill();
        }
    }
}

// Start when document is ready
document.addEventListener('DOMContentLoaded', () => {
    new ParticleBackground();
});
