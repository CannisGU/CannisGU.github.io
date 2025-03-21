/*
 * Assign 'docutils' class to tables so styling and
 * JavaScript behavior is applied.
 *
 * https://github.com/mkdocs/mkdocs/issues/2028
 */
// 初始化主题
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
$('div.rst-content table').addClass('docutils');

// theme_extra.js

// 修改卡片悬停动画参数
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 降低旋转敏感度 (原值10→20)
    card.style.transform = `
      perspective(1000px)
      rotateX(${(y - rect.height/2) / 20}deg)  // 垂直旋转幅度减少50%
      rotateY(${-(x - rect.width/2) / 20}deg)   // 水平旋转幅度减少50%
    `;
  });

  card.addEventListener('mouseleave', () => {
    // 添加平滑复位动画
    card.style.transition = 'transform 0.5s ease-out';
    card.style.transform = 'none';
    
    // 移除临时过渡效果
    setTimeout(() => card.style.transition = '', 500);
  });
});

// 保留知识树状图初始化逻辑
document.addEventListener('DOMContentLoaded', function() {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'neutral',
    securityLevel: 'loose'
  });
});
