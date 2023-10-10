# Proyecto: Dispensador de Comida para Mascotas - Web App  
[Visitar mi proyecto Entregable 3 Vera](https://gona79.github.io/entregableXVera/)  

## Descripción  

Este proyecto es una aplicación web para controlar un dispensador de comida para mascotas. Permite programar horarios de alimentación, gestionar la cantidad de comida, y más.  
**Página web:** https://gona79.github.io/entregableXVera/  
  
## Preentregables  
[Preentregable 1](#preentregable-1)  
[Preentregable 2](#preentregable-2)  
[Preentregable 3](#preentregable-3)  

---

## <a name="preentregable-1"></a>Requisitos del Preentregable 1 

### Algoritmos  
- Condicional: Utilizado para elegir el tipo de mascota y sugerir una cantidad de comida apropiada.
- Ciclo: Utilizado para listar los horarios de alimentación programados.

### Alcance  
La web app permitirá programar horarios de alimentación y cantidad de comida. También proporcionará un cálculo estimado de la cantidad de comida necesaria según el tipo, tamaño y nivel de actividad de la mascota.

### Ejemplo de Funcionalidades  
- Calcular el costo total de productos y/o servicios seleccionados por el usuario.
- Calcular pagos en cuotas sobre un monto determinado.

---

## <a name="preentregable-2"></a>Requisitos del Preentregable 2

### Objetivos Generales
- Codificar la funcionalidad inicial del simulador.
- Identificar el flujo de trabajo del script en términos de captura de entradas, procesamiento y notificación de resultados.

### Objetivos Específicos
- Capturar entradas mediante `prompt()`.
- Declarar variables y objetos necesarios.
- Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, etc).
- Efectuar una salida mediante `alert()` o `console.log()`.

### Elementos Técnicos
- Variables y objetos de JavaScript
- Funciones esenciales
- Objetos de JavaScript
- Arrays
- Métodos de búsqueda y filtrado sobre el Array

### Alcance  
Además de las funcionalidades del Preentregable 1, se implementarán entradas y salidas a través de `prompt()` y `alert()` o `console.log()` para interactuar con el usuario y procesar la información.

---

## Tecnologías Utilizadas  
- HTML5
- SCSS
- JavaScript  

## Instalación  

### Clonar el repositorio
git clone https://github.com/Gona79/entregableXVera.git  

### Navegar hasta el directorio del proyecto
cd entregableXVera

### Abrir el archivo index.html en un navegador web 

**Uso**  

Abre la aplicación en tu navegador web.
Utiliza el menú de navegación para ir a la sección que desees.
Programa horarios y cantidad de comida como desees.  

### Contribución  

Si quieres contribuir a este proyecto, por favor abre un Issue o un Pull Request.

# Resultado de la etapa 2 del preentregable  

### Correccion del tutor  
¡Hola Cristian!

Espero que te encuentres muy bien. Respecto a tu trabajo, no puedo tener en cuenta lo que hiciste con el DOM, ya que eso se evaluará en la próxima entrega. Espero que lo comprendas.

En cuanto a tu entrega actual, falta un elemento muy importante: no estás utilizando métodos de filtrado o búsqueda de arrays, y tampoco estás trabajando con objetos como los vimos en clase. Te animo a realizar una re entrega aplicando estos conceptos, ya que son fundamentales en esta fase del curso.

Si necesitas orientación o tienes alguna pregunta, no dudes en contactarme. ¡Estoy aquí para ayudarte!

Un saludo. 

### Aplicación de Correcciones:  
  
Se corrigió el código según las sugerencias, reorganizando el código dentro de un objeto, utilizando un array de objetos para los datos de las mascotas y aplicando métodos de filtrado/búsqueda de arrays.

**Uso de Objetos y Métodos de Array:**  

El uso de un array de objetos permite una búsqueda más eficiente y estructurada de los datos de las mascotas.
Se utiliza el método find de array para buscar la coincidencia del tipo y tamaño de mascota en la propiedad pets del objeto petFoodCalculator.  

**Código más Organizado y Estructurado:**  

Al encapsular los datos y métodos relacionados con el cálculo de alimentos dentro de un objeto, el código resulta más limpio, mantenible y comprensible.  

**Lógica de Cálculo Separada:**  

Se ha extraído la lógica de cálculo del multiplicador de actividad a su propio método, lo que permite una mayor modularidad y reusabilidad del código.  

**Mejora en la Precisión del Cálculo:**  

Al separar las responsabilidades y utilizar métodos de array y lógica condicional mejorada, el código proporciona resultados más precisos basados en los inputs proporcionados.

## Descripción del Código:  
  
Descripcion de la aplicacion solicitada, sin embargo el main tambien contiene tratamiento del dom asociado al menu hamburguesa y al menu de navegacion. Por favor desestimar estos. El codigo propiamente al que hare referencia ahora es sobre el objeto petFoodCalculator y sus metodos: 

Este código proporciona un cálculo específico para determinar la cantidad adecuada de alimentos que una mascota necesita, basándose en su tipo (perro o gato), tamaño (pequeño, mediano o grande), y nivel de actividad (bajo, moderado o alto).  

**Objeto petFoodCalculator:**  
Este objeto sirve como el núcleo del calculador de alimentos para mascotas, encapsulando los datos y los métodos relacionados con los cálculos de la cantidad de comida.

**Propiedad pets:**  
Es un array que contiene objetos, cada uno representando un tipo y tamaño específico de mascota, junto con la cantidad base de alimentos que necesitan.

```
pets: [
    { type: 'dog', size: 'small', baseFood: 200 }, //...etc
]  
```

**Método calculateFood:**  

Este método realiza el cálculo principal de la cantidad de alimentos necesarios para la mascota basándose en su tipo, tamaño y nivel de actividad.

1. **Parámetros:**

petType (string): El tipo de mascota ('dog' o 'cat').
petSize (string): El tamaño de la mascota ('small', 'medium', 'large').
petActivity (string): El nivel de actividad de la mascota ('low', 'moderate', 'high').  

2. **Funcionamiento:**  

Busca en el array pets un objeto que coincida con el petType y petSize proporcionados.
Si no encuentra una coincidencia, retorna 0.
Calcula un multiplicador de actividad llamando al método getActivityMultiplier.
Multiplica la cantidad base de alimentos por el multiplicador de actividad y retorna este valor.  

```	
calculateFood: function (petType, petSize, petActivity) { //... }
```	  
  

**Método getActivityMultiplier:**  

Este método calcula un multiplicador basado en el nivel de actividad proporcionado.

1. **Parámetro:**  

activityLevel (string): El nivel de actividad de la mascota ('low', 'moderate', 'high').  

2. **Funcionamiento:**  

Itera sobre un array de niveles de actividad y aumenta el multiplicador por cada nivel, hasta llegar al nivel de actividad proporcionado y retorna el multiplicador calculado.  
  

```
getActivityMultiplier: function (activityLevel) { //... }
```	
  

Evento click del botón "calculate-button":  

Al hacer click en el botón "calculate-button", se obtienen los valores de los elementos del formulario correspondientes al tipo, tamaño, y nivel de actividad de la mascota. Luego, se llama al método calculateFood del objeto petFoodCalculator con estos valores, y se muestra el resultado en el elemento "calculation-result".

```	
document.getElementById("calculate-button").addEventListener("click", function () { //... });
```  

## <a name="preentregable-3"></a> Requisitos del Preentregable 3  

### Requisitos Generales:  

- [ ] Implementación de JSON y Storage.  
- [ ] Manejo de DOM y eventos del usuario. 
   

**Objetivos Generales:**  

Codificar funciones de procesos esenciales y notificación de resultados por HTML para añadir interacción al simulador.  
Ampliar y refinar el flujo de trabajo del script para manejar eventos, procesar datos y modificar el DOM para presentar los resultados.  

**Objetivos Específicos:**  

Definir eventos a manejar y su función de respuesta:  
Identificar los eventos del usuario a manejar y establecer las funciones de respuesta adecuadas.  

**Modificar el DOM:**  

Alterar elementos del DOM al cargar la página o en respuesta a acciones del usuario.
Almacenar y Recuperar Datos:
Utilizar Storage para guardar y recuperar datos en formato clave-valor.  

**Entregables:**  

Código fuente en JavaScript y página HTML.
Archivo comprimido identificado por “Idea+Apellido”.  

**Sugerencias:**  

Focalizar en programar el código esencial para garantizar dinamismo en el HTML con JavaScript.
Transicionar de usar alert() y prompt() a modificar el DOM para salidas y capturar eventos del usuario para entradas.  

**Formato de Entrega:**  
Los archivos deben ser comprimidos en un archivo que contenga el apellido del alumno/a en el nombre, precedido por “Idea”.


# Resultado de la etapa 3 del preentregable  

### Correccion del tutor  

¡Buenas Cristian!  

Tengo un par de observaciones y recomendaciones para ti:  

Si tienes planeado tener varias páginas en tu proyecto, sería una buena práctica tener al menos la estructura HTML básica realizada para cada una de ellas en esta etapa.
En lo que respecta al localStorage, la idea es que los datos se carguen cuando la página se recarga. Te recomiendo investigar sobre el evento "DOMContentLoaded" para aplicar la función de llamado al localStorage y asegurarte de que la configuración se cargue automáticamente al inicio de la página. Sin esta funcionalidad, guardar en el localStorage carece de sentido.
En cuanto al simulador, hasta ahora parece un poco limitado. Para la entrega final, sería genial si pudieras ampliar su funcionalidad, especialmente en lo que respecta a simular horarios y permitir cálculos más complejos.  

Espero que puedas hacer una reentrega, al menos aplicando la mejora en el manejo del localStorage, y trabajar en los otros aspectos mencionados de cara a la entrega final.  

¡Un saludo!  
  

# Correcciones y Mejoras Implementadas en la reentrega del Preentregable 3  

### 1. Estructura HTML para Múltiples Páginas  

**Correcciones:**  

Se ha implementado la estructura básica de HTML para las distintas páginas planeadas en el proyecto.  

Modificaciones:  
Cada página ha sido estructurada para alinearla con el flujo de usuario esperado y para asegurar que las funcionalidades de JavaScript y el estilo SCSS se aplican correctamente en todas las páginas.  

### 2. Manejo de localStorage y Evento "DOMContentLoaded"  

**Correcciones:**  

Se ha implementado el uso del evento "DOMContentLoaded" para garantizar que los datos del localStorage se carguen automáticamente al inicio de la página.  

Modificaciones:
Los datos relevantes del usuario se cargan desde el localStorage apenas la página es completamente cargada, mejorando la experiencia del usuario al mantener sus configuraciones y preferencias entre sesiones de navegación.  

### 3. Funcionalidad y Complejidad del Simulador  

**Correcciones:**  

Se ha reconocido la preocupación respecto a la funcionalidad limitada del simulador en su estado actual.  

Modificaciones y Aclaraciones:  
A pesar de que la funcionalidad del simulador puede percibirse como básica en esta etapa, el proyecto está planeado para evolucionar y expandirse en etapas futuras, especialmente con la implementación de una API que permitirá una interacción más compleja y significativa.  

## Nota Aclaratoria:  

A pesar de la percepción de que la fase actual del proyecto sea inicial, se está llevando a cabo una construcción estratégica y progresiva que abarca múltiples niveles de desarrollo técnico. La implementación de una API desarrollada con Node.js y Express, gestionada a través de MongoDB y adherida a la arquitectura REST, será alojada en un servidor Nginx en una Raspberry Pi operando con Ubuntu Server, buscando un rendimiento óptimo y una interfaz efectiva entre las diversas tecnologías y componentes del sistema.

En el aspecto físico, la integración del alimentador de mascotas (“pet feeder”) y el dispositivo wearable está siendo facilitada mediante el uso de ESP32 WROOM y ESP32 CAM. Estos módulos no solo permiten la manipulación y monitorización de los dispositivos físicos involucrados, sino también la captura y transmisión de datos de video, proporcionando una interfaz interactiva y dinámica para los usuarios finales. Aunque el proyecto está en sus etapas iniciales, la infraestructura tecnológica que se está estableciendo está diseñada para ser robusta, escalable y capaz de albergar funcionalidades más complejas y amplias en las fases subsiguientes de desarrollo.