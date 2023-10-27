export const spoiler = () => {
	const spoilers = document.querySelectorAll('.spoiler'); // Основиний блок, де знаходяться всі спойлери

	spoilers.forEach((spoiler) => {

	  const content = spoiler.querySelector('.spoiler-content'); // Один окремий блок з спойлером
	  // Можна добавити ще деякі константи, кнопки і т.д.
	
	  spoiler.addEventListener('click', () => {
		content.classList.toggle('active');
		if (content.classList.contains('active')) {
			// Плавна анімація потрібно добавити в css на класс active
		  content.style.maxHeight = content.scrollHeight + 'px';
		} else {
		  content.style.maxHeight = '0';
		}
	  });
	});
}