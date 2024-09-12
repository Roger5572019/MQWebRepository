import mqMenu from "../../assets/images/menuMQ.png";
import mqCursos from "../../assets/images/cursosMQ.png";
import mqTemas from "../../assets/images/TemasMQ.png";

export const introductionInfo = [
  {
    title: "¿Qué es Mundo de Química?",
    info: "Mundo de Química es un paquete didáctico asistido por una computadora que apoya al aprendizaje de conceptos básicos de química. El objetivo general del proyecto es diseñar y crear un sistema de software en C#, enfocado a enseñar química de una forma más sencilla y llamativa que motive a los jóvenes que están aprendiendo o cursando química con material didáctico. Otra cosa importante es crear herramientas didácticas para ayudar a los jóvenes con sus actividades y prácticas del curso de química.",
  },
  {
    title: "¿Quiénes son los usuarios?",
    info: "El público principal de Mundo de Química son los estudiantes de secundaria y preparatoria que desean aprender o reforzar sus conocimientos en química. Sin embargo, la aplicación está diseñada para ser accesible a cualquier persona interesada en la química, ya sea que tenga poco conocimiento previo o que quiera explorar nuevos temas o repasar los ya conocidos.",
  },
  {
    title: "¿Qué problema resuelve?",
    info: "El paquete didáctico asistido por computadora resuelve los problemas de motivación y sirve de apoyo en el proceso de enseñanza y aprendizaje de la asignatura de química.",
  },
  {
    title: "Software necesario",
    info: "Mundo de Química es una aplicación desarrollada en C# utilizando el entorno de desarrollo integrado (IDE) Visual Studio 2022. Para la gestión de datos, se emplea una base de datos remota MySQL, administrada con MySQL Workbench y la aplicación se basa en la arquitectura .NET",
  },
];

export const introductionInfoGalery = [
  {
    title: "Menú MQ",
    imageUrl: mqMenu,
    descripcion:
      "En esta sección, los usuarios pueden navegar entre las diversas opciones disponibles de la aplicación, como juegos, cursos, herramientas, un laboratorio virtual, entre otras que se encuentran ubicadas en la parte superior de la interfaz.",
  },
  {
    title: "Cursos MQ",
    imageUrl: mqCursos,
    descripcion: "En esta sección, los usuarios tienen la posibilidad de agregar cursos creados por sus profesores. Cada curso incluye una imagen representativa y el perfil del docente correspondiente al curso creado.",
  },
  { 
    title: "Temas MQ",
    imageUrl: mqTemas,
    descripcion: "Cada curso está compuesto por varias clases, las cuales, a su vez, incluyen temas específicos. Cada clase puede contener una evaluación, si así lo decide el docente, junto con videos relacionados con cada tema y una lista de imágenes.",
  },
];
