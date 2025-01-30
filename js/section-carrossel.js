const slides = [
    { image: "img/step-1.png", title: "Acesse o app FGTS", text: "Baixe o app FGTS no seu celular, faça o login com o seu CPF." },
    { image: "img/step-2.png", title: "Aderir ao Saque-Aniversário", text: "Após fazer o login, clique em 'Sistemática de saque do seu FGTS'." },
    { image: "img/step-3.png", title: "Modalidade Saque-Aniversário", text: "Escolha a opção 'Modalidade Saque-Aniversário', marque os termos e clique em 'Optar pelo Saque-Aniversário'." },
    { image: "img/step-4.png", title: "Autorizar consulta FGTS", text: "Na tela inicial, clique em 'Sistemática de saque do seu FGTS', depois 'Empréstimo Saque-aniversário' e então 'Autorizar consulta de dados'." },
    { image: "img/step-6.png", title: "Adicionar instituição financeira", text: "Clique em 'Adicionar instituição', e busque por 'QI SOCIEDADE e DELCRED SOCIEDADE' e selecione." },
    { image: "img/step-7.png", title: "PARABENS AGORA LEIA:", text: "Clique no botão 'Simular antecipação FGTS' ou pelo botão do whatsapp" }
];

let currentIndex = 0;
const sliderImage = document.querySelector(".slider img");
const sliderTitle = document.querySelector(".slider .caption h2");
const sliderText = document.querySelector(".slider .caption p");
const progressBar = document.querySelector(".progress-bar");

// Cria os indicadores da barra de progressão
slides.forEach((slide, index) => {
    const step = document.createElement("div");
    step.classList.add("progress-step");
    if (index === 0) step.classList.add("active");
    progressBar.appendChild(step);
});

const progressSteps = document.querySelectorAll(".progress-step");

function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    sliderImage.style.opacity = 0;

    setTimeout(() => {
        sliderImage.src = slides[currentIndex].image;
        sliderTitle.textContent = slides[currentIndex].title;
        sliderText.textContent = slides[currentIndex].text;
        sliderImage.style.opacity = 1;

        // Atualiza a barra de progressão
        progressSteps.forEach((step, i) => {
            if (i === currentIndex) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }, 500);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}