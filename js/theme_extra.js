// 暗黑模式切换
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem('theme', 
        document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light'
    );
});

// 动态标题粒子效果
function initParticles() {
    const header = document.querySelector('.sci-fi-header');
    for(let i=0; i<50; i++) {
        const particle = document.createElement('div');
        particle.style = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #4facfe;
            border-radius: 50%;
            top: ${Math.random()*100}%;
            left: ${Math.random()*100}%;
            animation: particle ${2+Math.random()*3}s linear infinite;
        `;
        header.appendChild(particle);
    }
}

// 初始化特效
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'dark',
        securityLevel: 'loose'
    });
});
