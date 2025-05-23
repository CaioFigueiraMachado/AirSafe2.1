// Certifique-se de que o SweetAlert2 está incluído no HTML:
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

document.addEventListener('DOMContentLoaded', function() {
    // SweetAlert para o botão "Finalizar compra"
    const btnPurchase = document.querySelectorAll('.btn-purchase');
    btnPurchase.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                icon: 'success',
                title: 'Compra finalizada!',
                text: 'Obrigado por adquirir o AirShield. Você será redirecionado para a página inicial.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#ffd580'
            }).then(() => {
                window.location.href = '#';
            });
        });
    });

    // SweetAlert para o botão "Enviar" do formulário
    const form = document.querySelector('.purchase-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            Swal.fire({
                icon: 'info',
                title: 'Informações enviadas!',
                html: 'Verifique o seu e-mail e depois clique em <b>Finalizar compra</b>.<br><br>Agradecemos desde já!',
                confirmButtonText: 'OK',
                confirmButtonColor: '#ffd580'
            });
        });
    }

    // Hamburguer menu responsivo
    window.toggleMenu = function(el) {
        var nav = el.parentElement;
        nav.classList.toggle('active');
    };
});
document.addEventListener('DOMContentLoaded', function() {
    // SweetAlert para o botão "Finalizar compra"
    const btnPurchase = document.querySelectorAll('.btn-purchase');
    btnPurchase.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                icon: 'success',
                title: 'Compra finalizada!',
                text: 'Obrigado por adquirir o AirShield. Você será redirecionado para a página inicial.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#ffd580'
            }).then(() => {
                window.location.href = 'index.html';
            });
        });
    });

    // SweetAlert para o botão "Enviar" do formulário
    const form = document.querySelector('.purchase-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            Swal.fire({
                icon: 'info',
                title: 'Informações enviadas!',
                html: 'Verifique o seu e-mail e depois clique em <b>Finalizar compra</b>.<br><br>Agradecemos desde já!',
                confirmButtonText: 'OK',
                confirmButtonColor: '#ffd580'
            });
        });

        // Mostrar campos do cartão de crédito se selecionado
        const radioCartao = form.querySelector('input[type="radio"][value="cartao"]');
        const cardFields = form.querySelector('.card-fields');
        const radios = form.querySelectorAll('input[type="radio"][name="pagamento"]');
        radios.forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (radioCartao.checked) {
                    cardFields.style.display = 'block';
                    // Torna os campos obrigatórios apenas se cartão for selecionado
                    cardFields.querySelectorAll('input').forEach(input => input.required = true);
                } else {
                    cardFields.style.display = 'none';
                    cardFields.querySelectorAll('input').forEach(input => input.required = false);
                }
            });
        });
    }

    // Hamburguer menu responsivo
    window.toggleMenu = function(el) {
        var nav = el.parentElement;
        nav.classList.toggle('active');
    };
});
function toggleMenu(el) {
    var nav = el.parentElement;
    nav.classList.toggle('active');
}

// SweetAlert2 ao clicar em Finalizar compra
document.addEventListener('DOMContentLoaded', function() {
    var btnPurchase = document.querySelector('.btn-purchase');
    if (btnPurchase) {
        btnPurchase.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                icon: 'success',
                title: 'Compra finalizada!',
                text: 'Seu pedido foi realizado com sucesso. Você receberá um e-mail com os detalhes em breve.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#004a6e'
            });
        });
    }
});