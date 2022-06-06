import img1 from '../assets/galeria2.jpg';
import img2 from '../assets/galeria1.jpg';
import img3 from '../assets/tortapersonalizada1.jpg';


const productos = [
    {
        id: 1,
        nombre: "Torta Cars",
        precio: 1900,
        imagen: img1,
        stock: 5
    },
    {
        id: 2,
        nombre: "Torta Instituto",
        precio: 1800,
        imagen: img2,
        stock: 6
    },
    {
        id: 3,
        nombre: "Torta Fernet",
        precio: 2100,
        imagen: img3,
        stock: 3
    }
]

export const getFetch = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (productos)
        },2000)
    })
}