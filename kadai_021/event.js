const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setInterval(() => {
  text.textContent = 'ボタンがクリックされました';
},2000);
});