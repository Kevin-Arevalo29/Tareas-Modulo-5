// Punto 1  Acceso y Modificación Básica de Datos: Dado el siguiente array de libros
console.log("PUNTO 1")

let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

//Imprime en la consola el nombre y el autor del segundo libro.
console.log(libros[1].autor)

//Actualiza el número de páginas del primer libro a 350.
libros[0].paginas=350
console.log(libros[0].paginas)

//Imprime en la consola la información completa del primer libro después de la actualización.
console.log(libros[0])

//Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor, cuando imprimas tu nuevo array debe quedar de la siguiente forma:
const actualizacion = libros.map((libro)=>({
    titulo: libro.titulo,
    autor: libro.autor
}))
console.log(actualizacion)

// Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudaintes y utilizando un bucle for:
console.log("PUNTO 2")

  const estudiantes = [
      { nombre: "Pedro", edad: 29, promedio: 7.9 },
      { nombre: "Ana", edad: 33, promedio: 8.9 },
      { nombre: "Pablo", edad: 32, promedio: 9.5 },
      { nombre: "Juan", edad: 25, promedio: 6.0 },
      { nombre: "Maria", edad: 28, promedio: 7.3 },
      { nombre: "Andres", edad: 45, promedio: 8.7 },
 ];
// Calcula la suma de las edades de todos los estudiantes en el array
const sumaEdades= estudiantes.reduce((total, estudainte)=> total + estudainte.edad,0)
    console.log("suma de edades",sumaEdades)
    
// Calcula el promedio de edad de los estudiantes.
const promedioEdades = sumaEdades / estudiantes.length;
 console.log ("Promedio de esdades",promedioEdades.toFixed(2))

//  Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos:
console.log("PUNTO 3")

 let productos = [
     { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
     { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
     { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
     { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
 ];
// Utilizando filter debes cfiltrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
const firtrado = productos.filter ((categorias)=> categorias.categoria === 'Ropa')
console.log(firtrado)
// Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
const preciosMayores= productos.filter((producto)=> producto.precio>30 )
console.log(preciosMayores)

// RETOOO
console.log("RETOOO")
const personas = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
    { nombre: "Hernesto", edad: 40, promedio: 4.9 },
    { nombre: "Alejandro", edad: 20, promedio: 1.5 },
    { nombre: "Kevin", edad: 9, promedio: 9.6 },
];
let promedioMayor= personas[0]
for (let i = 1; i < personas.length; i++) {
       if (personas[i].promedio > promedioMayor.promedio) {
        promedioMayor=personas[i]
    }
}
console.log(promedioMayor)