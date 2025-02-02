function calcularSaque() {
    let saldo = parseFloat(document.getElementById("saldo").value);
    let resultado = document.getElementById("resultado");
    let loading = document.getElementById("loading");

    if (isNaN(saldo) || saldo <= 0) {
        resultado.innerHTML = "Por favor, insira um saldo válido.";
        return;
    }

    // Exibe o texto "Calculando..." e a barra de progresso
    resultado.style.display = "none";
    loading.style.display = "block";

    // Simula um cálculo de 3 segundos
    setTimeout(() => {
        let percentual, adicional;

        if (saldo <= 500) {
            percentual = 0.50;
            adicional = 0;
        } else if (saldo <= 1000) {
            percentual = 0.40;
            adicional = 50;
        } else if (saldo <= 5000) {
            percentual = 0.30;
            adicional = 150;
        } else if (saldo <= 10000) {
            percentual = 0.20;
            adicional = 650;
        } else {
            percentual = 0.10;
            adicional = 1900;
        }

        let valorSaque = saldo * percentual + adicional;
        resultado.innerHTML = `Você pode sacar aproximadamente: <strong style="color:var(--laranja);">R$ ${valorSaque.toFixed(2)}</strong>`;

        // Esconde o texto "Calculando..." e a barra de progresso
        loading.style.display = "none";
        resultado.style.display = "block";
    }, 3000); // 3 segundos
}