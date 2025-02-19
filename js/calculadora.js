function calcularSaque() {
    let saldo = parseFloat(document.getElementById("saldo").value);
    let resultado = document.getElementById("resultado");
    let loading = document.getElementById("loading");

    // Verifica se o saldo é válido
    if (isNaN(saldo) || saldo <= 0) {
        resultado.innerHTML = "Por favor, insira um saldo válido.";
        return;
    }

    // Exibe o texto "Calculando..." e a barra de progresso
    resultado.style.display = "none";
    loading.style.display = "block";

    // Simula um cálculo de 3 segundos
    setTimeout(() => {
        // Calcula 80% do saldo
        let valorSaque = saldo * 0.80;

        // Exibe o resultado
        resultado.innerHTML = `Você pode sacar:<br> <strong style="color:var(--laranja);">R$ ${valorSaque.toFixed(2)}</strong>`;

        // Esconde o texto "Calculando..." e a barra de progresso
        loading.style.display = "none";
        resultado.style.display = "block";
    }, 3000); // 3 segundos
}