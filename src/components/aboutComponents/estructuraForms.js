export class Curso {
  constructor(nombreCurso, descripcion, clave) {
    this.nombreCurso = nombreCurso;
    this.descripcion = descripcion;
    this.clave = clave;
  }
}

export class Clase {
  constructor(nombreClase, temas) {
    this.nombreClase = nombreClase;
    this.temas = temas;
  }
}

export class Tema {
  constructor(nombreTema) {
    this.tema = nombreTema;
  }
}
