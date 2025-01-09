document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('open_pop');
    const closePopupButton = document.getElementById('closePopup');
    const popup = document.getElementById('popup');
    
    const logButton = document.getElementById('log');
    const popuplog = document.getElementById('popup-log');
    const closePopuplogButton = document.getElementById('closePopuplog');

    // Открытие основного поп-апа
    openPopupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    // Закрытие основного поп-апа
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Закрытие при клике вне основного поп-апа
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Открытие второго поп-апа
    logButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Закрыть первый поп-ап
        popuplog.style.display = 'flex'; // Открыть второй поп-ап
    });

    // Закрытие второго поп-апа
    closePopuplogButton.addEventListener('click', () => {
        popuplog.style.display = 'none';
    });

    // Закрытие при клике вне второго поп-апа
    popuplog.addEventListener('click', (e) => {
        if (e.target === popupGit) {
            popuplog.style.display = 'none';
        }
    });
});
