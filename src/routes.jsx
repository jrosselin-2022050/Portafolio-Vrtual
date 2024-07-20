import { Contacto } from "./Pages/Contacto";
import { AcercaDeMi } from "./Pages/AcercaDeMi";
import { Proyectos } from "./Pages/Proyectos";
import { Inicio } from "./Pages/Inicio";

export const routes = [
    {path:  '/*', element: <Inicio/>},
    {path: '/Inicio', element: <Inicio />},
    {path: '/Proyectos', element: <Proyectos />},
    {path: '/Acerca-De-Mi', element: <AcercaDeMi/>},
    {path: '/Contacto', element : <Contacto/>}

]