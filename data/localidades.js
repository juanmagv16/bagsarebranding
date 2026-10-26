// Datos del mapa. Fuente: sitio oficial bagsa.com.ar (listado de oficinas por región).
// Para activar el mapa dinámico de Google, pegá acá la API key (Maps JavaScript API + Geocoding API).
window.BAGSA_MAPS_KEY = "";
window.BAGSA_DATA = {
  sede: { name: "Sede central BAGSA", address: "Calle 48 N°536 (entre 5 y 6), La Plata (1900)", query: "Calle 48 536, La Plata, Buenos Aires, Argentina" },
  regiones: [
    { nombre: "Magdalena", localidades: ["Magdalena","Bavio","Vieytes","Atalaya","Pipinas","Verónica","Álvarez Jonte"] },
    { nombre: "La Plata", localidades: ["Norberto de la Riestra","Arturo Seguí","Pla","Comodoro Py","Del Carril","Polvaredas","Máximo Paz","Patricios","Bosquecitos","El Rodeo","Gómez","Reserva","Victoria","Salvador María","Carboni","Pedernales"] },
    { nombre: "Centro Oeste", localidades: ["Dudignac","Laguna Alsina","Guaminí","Quenuma","Roberts","Pasteur","Moquehua","Bunge","Piedritas","Germania","Granada","Mones Cazón","Salazar","Pirovano","Casbas","Blaquier"] },
    { nombre: "Norte", localidades: ["General Arenales","Ferré","Agustín Roca","Todd","Pueblo Doyle","O'Brien","Campo Salles","Carabelas","Rafael Obligado","Tres Sargentos","Bayauca","Portela","Rawson","Río Tala","Fontezuela","San Nicolás","La Luisa","Inés Indart","Santa Lucía","Cucullu","Pearson"] },
    { nombre: "Sur", localidades: ["San Manuel","Bahía San Blas","Copetonas","Cascallares","Claromecó","Orense","Bellocq","Villa Ventana","Mechongue","Tres Arroyos","Oriente","El Perdido","Claraz","Villanueva","Napaleofú","La Colina","Gardey"] },
    { nombre: "Villa Gesell", localidades: ["Villa Gesell","Mar de las Pampas","Mar Azul Las Gaviotas"] }
  ]
};
