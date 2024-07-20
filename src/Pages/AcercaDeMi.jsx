// AcercaDeMi.jsx
import React from 'react';
import NavBar from '../Componentes/NavBar.jsx';
import { Footer } from '../Componentes/Footer.jsx';
import '../CSS/AcercaDeMI.css';

export const AcercaDeMi = () => {
  return (
    <>
      <NavBar />
      <div className="resume-container">
        <h1>Joshua Elijhab Rosselin Corzo</h1>
        <p>Fecha de Nacimiento: 29 de agosto de 2005</p>

        <section>
          <h2>Logros Educativos</h2>
          <ul>
            <li>Graduación de educación Primaria en 2018 en el Centro Escolar Mixto Santa María.</li>
            <li>Graduación de educación Básica en 2021 en el Centro Escolar Mixto Santa María.</li>
            <li>Graduación de educación Diversificado en 2024 en el Centro Educativo Técnico Laboral Kinal.</li>
          </ul>
        </section>

        <section>
          <h2>Habilidades Técnicas</h2>
          <p>Durante mi educación diversificada, adquirí una sólida formación en habilidades técnicas de programación, abarcando una amplia variedad de tecnologías. La institución también se destacó por fomentar valores fundamentales que complementan mi formación técnica.</p>
        </section>

        <section>
          <h2>Experiencia Laboral</h2>
          <p>Poseo tres meses de experiencia en el área laboral, particularmente en el ámbito del servicio al cliente. Desempeñé funciones como vacacionista en Dunkin' Donuts y también trabajé durante un periodo en Xepi, donde mejoré mis habilidades interpersonales y de atención al cliente.</p>
        </section>
      </div>
      <Footer />
    </>
  );
};
