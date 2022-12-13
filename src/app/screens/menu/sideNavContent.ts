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
                label: 'Registrar perros',
                url: 'registrar-perros',
                icon: '../../../assets/icons/folder-2.png'
            },
            // {
            //     label: 'Solicitudes de perreras',
            //     url: 'solicitudes-de-perreras',
            //     icon: '../../../assets/icons/folder-2.png'
            // },
            {
                label: 'Solicitudes de adopcion',
                url: 'solicitudes-adopcion',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Reportes de perros',
                url: 'reportes-de-perros',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Usuarios',
                url: 'usuarios',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Archivo de perros',
                url: 'archivo-de-perros',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'Cambiar Info',
                url: 'cambiar-info',
                icon: '../../../assets/icons/folder-2.png'
            },
            {
                label: 'cerrar sesion',
                url: '',
                icon: '../../../assets/icons/folder-2.png'
            },
            
        ]

    }
]