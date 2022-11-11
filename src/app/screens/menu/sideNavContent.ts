export interface SideNavContent {
    label: string;
    url: string;
    children?: SubRoute[];
}
export interface SubRoute {
    label: string;
    url: string;
    icon?: string;
}

export const SideNavContent: SideNavContent[] = [
    {
        label: 'Menu',
        url: '/menu',
        children:[
            {
                label: 'Inicio',
                url: 'home',
                icon: '../../../assets/icons/home-2.png'
            },
            {
                label: 'Registrar perros',
                url: 'registrar-perros',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Solicitudes de adopcion',
                url: 'solicitudes-adopcion',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Reportes de perros',
                url: 'reportes-perros',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Usuarios',
                url: 'usuarios',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Archivo de perros',
                url: 'archivo-perros',
                icon: '../../../assets/icons/folder-2.png'
            },
            
        ]

    }
]