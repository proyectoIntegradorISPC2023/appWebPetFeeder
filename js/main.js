// Seleccionar elementos relevantes
const nav = document.getElementById("myNav");
const toggle = document.querySelector(".nav-toggle");
const mainContent = document.querySelector('.content');

// Evento para el botón del menú de hamburguesa
toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    adjustContentMargin();
});

// Ajustar el margen del contenido principal según si el menú está abierto o cerrado
function adjustContentMargin() {
    if (nav.classList.contains("open")) {
        mainContent.style.marginTop = nav.offsetHeight + 'px';
    } else {
        mainContent.style.marginTop = '0';
    }
}

// Eventos para los botones de los elementos desplegables
const dropdownBtns = nav.getElementsByClassName("dropbtn");
for (let i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function (e) {
        const dropdown = this.parentElement;
        dropdown.classList.toggle("open");
        e.stopPropagation();
    });
}

// Evento para cerrar todos los menús desplegables si se hace clic fuera de ellos
document.addEventListener('click', function () {
    const dropdowns = document.getElementsByClassName('dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('open');
    }
});

// Objeto para calcular la comida de las mascotas
const petFoodCalculator = {
    pets: [
        { type: 'dog', size: 'small', baseFood: 200 },
        { type: 'dog', size: 'medium', baseFood: 400 },
        { type: 'dog', size: 'large', baseFood: 600 },
        { type: 'cat', size: 'small', baseFood: 50 },
        { type: 'cat', size: 'medium', baseFood: 75 },
        { type: 'cat', size: 'large', baseFood: 100 }
    ],

    calculateFood: function (petType, petSize, petActivity) {
        const pet = this.pets.find(p => p.type === petType && p.size === petSize);
        if (!pet) return 0;
        
        let foodAmount = pet.baseFood;
        const activityMultiplier = this.getActivityMultiplier(petActivity);
        foodAmount *= activityMultiplier;
        
        return foodAmount.toFixed(2);
    },

    getActivityMultiplier: function (activityLevel) {
        const levels = ['low', 'moderate', 'high'];
        let multiplier = 1;
        for (const level of levels) {
            if (activityLevel === level) break;
            multiplier += 0.1;
        }
        return multiplier;
    }
};

// Evento para el botón de cálculo
document.getElementById("calculate-button").addEventListener("click", function () {
    const petType = document.getElementById("petType").value;
    const petSize = document.getElementById("petSize").value;
    const petActivity = document.getElementById("petActivity").value;

    const foodAmount = petFoodCalculator.calculateFood(petType, petSize, petActivity);
    document.getElementById("calculation-result").innerText = `Tu mascota necesita ${foodAmount} gramos de comida al día.`;

    storeUserConfig(petType, petSize, petActivity);
});

// Funciones para almacenar y recuperar la configuración del usuario
function storeUserConfig(petType, petSize, petActivity) {
    const userConfig = { petType, petSize, petActivity };
    localStorage.setItem('userConfig', JSON.stringify(userConfig));
}

function getUserConfig() {
    const userConfigJSON = localStorage.getItem('userConfig');
    return userConfigJSON ? JSON.parse(userConfigJSON) : null;
}

// Recuperar la configuración del usuario y establecer las opciones seleccionadas cuando la página carga
document.addEventListener('DOMContentLoaded', function () {
    const userConfig = getUserConfig();
    if (userConfig) {
        document.getElementById("petType").value = userConfig.petType;
        document.getElementById("petSize").value = userConfig.petSize;
        document.getElementById("petActivity").value = userConfig.petActivity;
    }
    adjustContentMargin(); // Ajustar el margen del contenido principal cuando la página carga
});
