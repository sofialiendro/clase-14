// let gusto1 = prompt("Decime tu gusto de helado favorito.")
// let gusto2 = prompt("Decime tu segundo gusto de helado favorito.")
// let gusto3 = prompt("Decime tu tercer gusto de helado favorito.")

// alert (`Aquí tenés tu helado de ${gusto1}, ${gusto2} y ${gusto3}.`)


let funcionDeEjemplo = () => {
    let gusto1 = prompt("Decime tu gusto de helado favorito.")
    let gusto2 = prompt("Decime tu segundo gusto de helado favorito.")
    let gusto3 = prompt("Decime tu tercer gusto de helado favorito.")
    
    alert (`Aquí tenés tu helado de ${gusto1}, ${gusto2} y ${gusto3}.`)
} 

funcionDeEjemplo()


const decirNombre = (nombreDeProvincia) => {
    alert(`Esta es una provincia del sur: ${nombreDeProvincia}.`)
}

decirNombre("Santa Cruz")
decirNombre("Chubut")
decirNombre("Tierra del Fuego")

const decirNombreCompleto = (nombre, apellido) => {
    alert(`Tu nombre completo es ${nombre} ${apellido}.`)
}

decirNombreCompleto("Britney", "Spears")
decirNombreCompleto("Jennifer", "Aniston")
decirNombreCompleto("Ryan", "Gosling")
decirNombreCompleto("Sean", "Penn")