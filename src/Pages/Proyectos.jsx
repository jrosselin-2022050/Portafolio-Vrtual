import React from 'react';
import NavBar from '../Componentes/NavBar.jsx';
import { Footer } from '../Componentes/Footer.jsx';
import { Titulo2 } from '../Componentes/Titulo2.jsx';
import { Titulo3 } from '../Componentes/Titulo3.jsx';
import { CardTipo3 } from '../Componentes/CardTipo3.jsx';
import { CardTipo4 } from '../Componentes/CardTipo4.jsx';
import '../CSS/Proyectos.css';

const skills = [
    { title: 'HTML', percentage: '90%' },
    { title: 'CSS', percentage: '85%' },
    { title: 'JavaScript', percentage: '70%' },
    { title: 'Java', percentage: '77.5%' },
    { title: 'React', percentage: '80.5%' },
    { title: 'Flutter', percentage: '50%' },
    { title: 'Dart', percentage: '40%' },
    { title: 'Godot', percentage: '25%' },
  
];

export const Proyectos = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Titulo2 />
                <div className="ProyectoLista">
                    <CardTipo3
                        img="https://raw.githubusercontent.com/jrosselin-2022050/IMG_PAWSUP/main/LogoApp.png"
                        name="PawsUp"
                        description="Es una aplicacion movil que su funcion pricipal es el poder encontrar a animales perdidos pero no solo eso tambien tiene una de red social que podemos disfrutar de publicaciones no un tanto tristes. Fue un trabajo en grupo con la metodologia Scrum."
                        githubUrl="https://github.com/omonterroso-2022141/PawsUp.git"
                    />
                    <CardTipo3
                        img="https://github.com/jrosselin-2022050/IMG_PAWSUP/blob/main/TravelTrob.png?raw=true"
                        name="TravelTrob"
                        description="Es un gestor de Hoteles que permite agregar y modificar hoteles segun el proveedor, pero que tambien esta la parte del usuario que puede visualizar los hoteles, las habitaciones, y podemos solicitar o reservar unna habitacion en un hotel. Fue un trabajo en grupo con la metodologia Scrum."
                        githubUrl="https://github.com/omonterroso-2022141/Hoteles.git"
                    />
                    <CardTipo3
                        img="https://github.com/jrosselin-2022050/IMG_PAWSUP/blob/main/MovieShop.png?raw=true"
                        name="MovieShop"
                        description="Es una paguina web que busca dar un servicio de alquiler de peliculas, y tambien tiene la parte de administracion  que alli es donde se agregan las peliculas y demas funciones como el carrito, la compra etc. Tambien fue unn trabajo en grupo con la metodologia Scrum."
                        githubUrl="https://github.com/fsilvestre-2022163/MovieShop.git"
                    />
                </div>
            </div>
            <div className="Skills">
                <Titulo3 />
                <div className="Skills">
                    <CardTipo4 skills={skills} />
                </div>
            </div>
            <Footer />
        </>
    );
};
