import React from "react";
import CardTuto from '../components/CardMisTutos';

function MisTutos() {
  return (
    <div className="tutoriales">
      <div className="misTutos">
        <CardTuto
          title="Cálculo de determinantes"
          text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de determinantes"
          done="50"
        />
        <CardTuto
          title="Cálculo de límites"
          text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de límites"
          done="70"
        />
        <CardTuto
          title="Biología"
          text="En este tutorial, aprenderás los conceptos básicos acerca de las ciencias biológicas"
          done="80"
        />

        <CardTuto
          title="Cálculo de probabilidades"
          text="En este tutorial, aprenderás a usar las diversas técnicas que se emplean para el cálculo de probabilidades"
          done="10"
        />
      </div>
    </div>
  );
}

export default MisTutos;
