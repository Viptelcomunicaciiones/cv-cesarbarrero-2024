document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Calcular el offset correcto considerando el header fijo y el nav container
        const navContainer = document.querySelector('header');
        const navHeight = navContainer ? navContainer.offsetHeight : 0;
        
        window.scrollTo({
            top: targetSection.offsetTop - navHeight, // Usa altura total del nav container
            behavior: 'smooth'
        });
    });
});

const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot-container');
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatbotBody = document.getElementById('chatbot-body');
    
chatbotButton.addEventListener('click', () => {
chatbotContainer.style.display = chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '' ? 'flex' : 'none';
});
    
const respuestas = {
"hola": "¡Hola! ¿En que te ayudo?",
"direccion": "Nuestra dirección es Vereda #123, Cañon del combeima.",
"servicios": "Ofrecemos habitaciones cómodas, gimnasio y restaurante gourmet.",
"precio": "Los precios varían según la habitación.",
"adios": "¡Hasta luego! Si necesitas algo más, aquí estaré."
};
    
sendButton.addEventListener('click', () => {
const pregunta = userInput.value.toLowerCase();
chatbotBody.innerHTML += `<p><strong>Tú:</strong> ${pregunta}</p>`;
userInput.value = '';
    
const respuesta = respuestas[pregunta] || "Lo siento, no entiendo esa pregunta.";
chatbotBody.innerHTML += `<p><strong>ChatBot:</strong> ${respuesta}</p>`;
});