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
