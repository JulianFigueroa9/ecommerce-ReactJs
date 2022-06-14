import img1 from '../assets/galeria2.jpg';
import img2 from '../assets/galeria1.jpg';
import img3 from '../assets/tortapersonalizada1.jpg';
import img4 from '../assets/galeria6.jpg';
import img5 from '../assets/galeria9.jpg';
import img6 from '../assets/galeria13.jpg';
import img7 from '../assets/galeria5.jpg';
import img8 from '../assets/galeria3.jpg';
import img9 from '../assets/especialidad1.jpg';
import img10 from '../assets/especialidad2.jpg';
import img11 from '../assets/especialidadpopcake.jpg';
import img12 from '../assets/especialidadpopcake2.jpg';
import img13 from '../assets/box1.jpg';
import img14 from '../assets/boxboca.jpg';
import img15 from '../assets/boxcumpleanios.jpg';
import img16 from '../assets/boxminicakes.jpg';
import img17 from '../assets/boxninio.jpg';




const productos = [
    {
        id: "1",
        nombre: "Torta Cars",
        categoria: "TortasPersonalizadas",
        precio: 1900,
        imagen: img1,
        stock: 5
    },
    {
        id: "2",
        nombre: "Torta Instituto",
        categoria: "TortasPersonalizadas",
        precio: 1800,
        imagen: img2,
        stock: 6
    },
    {
        id: "3",
        nombre: "Torta Fernet",
        categoria: "TortasPersonalizadas",
        precio: 2100,
        imagen: img3,
        stock: 3
    },
    {
        id: "4",
        nombre: "Torta Dripcake",
        categoria: "TortasPersonalizadas",
        precio: 2000,
        imagen: img4,
        stock: 4
    },
    {
        id: "5",
        nombre: "Torta Letra",
        categoria: "TortasPersonalizadas",
        precio: 1900,
        imagen: img5,
        stock: 3
    },
    {
        id: "6",
        nombre: "Torta BMW",
        categoria: "TortasPersonalizadas",
        precio: 2300,
        imagen: img6,
        stock: 3
    },
    {
        id: "7",
        nombre: "Torta Among Us",
        categoria: "TortasPersonalizadas",
        precio: 2500,
        imagen: img7,
        stock: 3
    },
    {
        id: "8",
        nombre: "Torta Gatito",
        categoria: "TortasPersonalizadas",
        precio: 1700,
        imagen: img8,
        stock: 3
    },
    {
        id: "9",
        nombre: "Cupcake",
        categoria: "Especialidades",
        precio: 150,
        imagen: img9,
        stock: 3
    },
    {
        id: "10",
        nombre: "Budín",
        categoria: "Especialidades",
        precio: 250,
        imagen: img10,
        stock: 3
    },
    {
        id: "11",
        nombre: "Pop Cake",
        categoria: "Especialidades",
        precio: 120,
        imagen: img11,
        stock: 3
    },
    {
        id: "12",
        nombre: "Ice Pop Cake",
        categoria: "Especialidades",
        precio: 200,
        imagen: img12,
        stock: 3
    },
    {
        id: "13",
        nombre: "Box Dripcake",
        categoria: "Boxes",
        precio: 2500,
        imagen: img13,
        stock: 3
    },
    {
        id: "14",
        nombre: "Box Fútbol",
        categoria: "Boxes",
        precio: 2300,
        imagen: img14,
        stock: 3
    },
    {
        id: "15",
        nombre: "Box Cumpleaños",
        categoria: "Boxes",
        precio: 2200,
        imagen: img15,
        stock: 3
    },
    {
        id: "16",
        nombre: "Box Minicakes",
        categoria: "Boxes",
        precio: 2000,
        imagen: img16,
        stock: 3
    },
    {
        id: "17",
        nombre: "Box Niño",
        categoria: "Boxes",
        precio: 2150,
        imagen: img17,
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

export const getItem = (id) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve (productos.find(prod => prod.id === id))
            } else{
                resolve(productos)
            }
        },2000)
    })
}