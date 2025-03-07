

const toggleButtons = document.querySelectorAll('.DropMenuButton');

toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.dataset.target; // Получаем ID целевого блока из data-атрибута
    const targetBlock = document.getElementById(targetId); // Находим целевой блок по ID

      if (targetBlock.style.display === 'none') {
        // Если блок скрыт, показываем его
        targetBlock.style.display = 'block';
      } else {
        // Если блок виден, скрываем его
        targetBlock.style.display = 'none';
    }
  });
});
