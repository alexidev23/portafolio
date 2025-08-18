export interface linksNavBarProps {
  id: number;
  name: string;
  label: string;
  url: string;
}

export interface LinksSocialMediaProps {
  id: number;
  name: string;
  icon: string;
  url: string;
}

export interface ExperienciaProps {
  puesto: string;
  empresa: string;
  periodo: string;
  descripcion: string[];
}

export interface ProyectosProps {
  id: number;
  name: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[]; // Podés tipar mejor si hacés un enum de tecnologías
  repositorio: string;
  pagina: string;
}