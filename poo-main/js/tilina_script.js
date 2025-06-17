// Cambia el color del navbar cuando se hace scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Definimos una clase llamada AnimacionFlotante
class AnimacionFlotante {
  // El constructor recibe el ID del elemento HTML que queremos animar
  constructor(elementId) {
    // Guardamos el elemento en una propiedad para usarlo después
    this.element = document.getElementById(elementId);

    // Empezamos en la posición vertical 0 (sin desplazamiento)
    this.posicion = 0;

    // La dirección indica si va hacia arriba (1) o hacia abajo (-1)
    this.direccion = -1;

    // Llamamos al método que hace la animación
    this.iniciar();
  }

  // Método que se encarga de hacer que la imagen se mueva
  iniciar() {
    // Usamos setInterval para repetir esta función cada 30 milisegundos
    setInterval(() => {
      // Cambiamos la posición sumando o restando 1, según la dirección
      this.posicion += this.direccion;

      // Si la posición supera los 15 píxeles o baja de -15, cambiamos de dirección
      if (this.posicion > 15 || this.posicion < -15) {
        this.direccion *= -1; // Invierte la dirección
      }

      // Usamos CSS transform para mover la imagen hacia arriba o abajo
      this.element.style.transform = `translateY(${this.posicion}px)`;
    }, 60); // Esto se repite cada 70 milisegundos
  }
}

// Creamos una instancia de la clase para iniciar la animación en la imagen con ID "imagenFlotante"
new AnimacionFlotante("imagenFlotante");
