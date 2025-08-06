const text = document.getElementById('text');
const button = document.getElementById('btn');

button.addEventListener('click', ()=> {
  text.textContent = 'ボタンがクリックされました';
});