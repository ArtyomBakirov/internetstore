document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const steamRubInput = document.getElementById("steam-rub");
    const steamLoginInput = document.getElementById("steam-login");
    const buyButton = document.querySelector(".btn");
  
    // Функция для обновления суммы STEAM RUB на основе введенной суммы
    const updateSteamRub = () => {
      const amount = parseFloat(amountInput.value);
      if (!isNaN(amount)) {
        // Предполагаем, что комиссия 9%, поэтому получаем 91% от суммы
        const steamRub = (amount * 0.91).toFixed(2);
        steamRubInput.value = steamRub;
      } else {
        steamRubInput.value = "";
      }
    };
  
    // Обработчик события для кнопки "Купить"
    buyButton.addEventListener("click", () => {
      const amount = parseFloat(amountInput.value);
      const steamLogin = steamLoginInput.value.trim();
  
      if (!isNaN(amount) && amount > 0 && steamLogin) {
        alert(`Вы купили ${steamRubInput.value} STEAM RUB за ${amount} ₽. Ваш логин: ${steamLogin}`);
        // Здесь можно добавить логику для отправки данных на сервер
      } else {
        alert("Пожалуйста, убедитесь, что все поля заполнены корректно.");
      }
    });
  
    // Обновляем STEAM RUB при изменении суммы
    amountInput.addEventListener("input", updateSteamRub);
  });