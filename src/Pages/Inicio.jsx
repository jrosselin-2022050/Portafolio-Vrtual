import React from 'react';
import NavBar from '../Componentes/NavBar.jsx';
import { CardTipo1 } from '../Componentes/CardTipo1.jsx';
import { Footer } from '../Componentes/Footer.jsx';
import { Yo } from '../Componentes/Yo.jsx';
import '../CSS/Inicio.css';

export const Inicio = () => {
  return (
    <>
      <NavBar />
      <div className="FondoInicio">
        <div className="containerInicio">
          <p>Hola 👋 Soy</p>
          <section className="animation2">
            <div className="first"><div>Joshua Rosselin</div></div>
            <div className="second"><div>Programador</div></div>
            <div className="third"><div>Estudiante de Informatica</div></div>
          </section>
        </div>
        <div className="containerFoto">
          <Yo className="profile-photo" />
        </div>
        <div className="containerStacks">
          <div className="cardContainer">
            <CardTipo1
              title="Lenguajes"
              description="He podido aprender muchos de los lenguajes que en la industria son muy usados y que tienen un gran futuro tanto en diseño como en mantenimiento, como serian: Java, JavaScript, Dart, etc."
              imageUrl="url_de_la_imagen_1.jpg"
            />
            <CardTipo1
              title="Metas"
              description="Mis metas incluyen graduarme, conseguir un trabajo en el área de tecnología, y continuar aprendiendo y mejorando mis habilidades."
              imageUrl="url_de_la_imagen_2.jpg"
            />
            <CardTipo1
              title="Bases de Datos"
              description="Tengo experiencia trabajando con bases de datos SQL como MySQL y bases de datos NoSQL como MongoDB."
              imageUrl="url_de_la_imagen_3.jpg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
