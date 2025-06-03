// Пример удаления товара из корзины
const removeButtons = document.querySelectorAll('.remove-item');
removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = this.closest('.cart-item');
        cartItem.remove();
    });
});

// Пример обработки кнопки "Перейти к оплате"
const checkoutButton = document.querySelector('.checkout-btn');
checkoutButton.addEventListener('click', function() {
    const paymentMethod = document.querySelector('#payment-method').value;
    alert(`Вы выбрали способ оплаты: ${paymentMethod}`);
});
