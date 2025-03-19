import React from "react";
import "./about.css";

export function About () {
    return (
        <div className="content-container">
            <h1>Sobre DOU</h1>
            <p>
                DOU es una plataforma de aprendizaje diseñada para enseñar fundamentos de Java y programación competitiva.
                Permite a los estudiantes mejorar sus habilidades a través de material educativo y mini competencias programadas.
            </p>

            <h2>Autores</h2>
            <p>
                Este proyecto fue desarrollado por estudiantes de ingeniería de sistemas con el objetivo de proporcionar
                una herramienta accesible y efectiva para el aprendizaje de la programación.
            </p>

            <h2>¿Cómo acceder?</h2>
            <p>
                La plataforma está disponible únicamente para miembros de la institución. Para obtener acceso, es necesario 
                solicitar un usuario a la administración de la universidad.
            </p>

            <h2>¿Cómo usar DOU?</h2>
            <ul>
                <li>Inicia sesión con el usuario proporcionado.</li>
                <li>Accede a los cursos de aprendizaje de Java.</li>
                <li>Resuelve ejercicios de programación competitiva y mejora tu clasificación.</li>
                <li>Participa en mini competencias para poner a prueba tus habilidades.</li>
            </ul>
        </div>
    );
}