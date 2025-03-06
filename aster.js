// const toggleButton = document.querySelectorAll('.DropMenuButton');
// // const textBlock = document.getElementById('.drop_info');
// const parentDrop = DropMenuButton.parentNode;

// toggleButton.addEventListener('click', function() {
    
//   if (textBlock.style.display === 'none') {
//     // Если блок скрыт, показываем его
//     textBlock.style.display = 'block';
//   } else {
//     // Если блок виден, скрываем его
//     textBlock.style.display = 'none';
//   }
// });


// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//   const parentLi = dropdown.parentNode;

//   parentLi.addEventListener('click', function(event) {
//     event.preventDefault(); // Предотвращает переход по ссылке
//     dropdown.classList.toggle('show'); // Добавляет/удаляет класс 'show'
//   });
// });

// // Закрытие выпадающего списка при клике вне его
// window.addEventListener('click', function(event) {
//   if (!event.target.closest('nav')) {
//     dropdowns.forEach(dropdown => {
//       dropdown.classList.remove('show');
//     });
//   }
// });

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
// if (targetBlock.style.display === 'none') {
//   // Если блок скрыт, показываем его
//   targetBlock.style.display = 'block';
// } else {
//   // Если блок виден, скрываем его
//   targetBlock.style.display = 'none';