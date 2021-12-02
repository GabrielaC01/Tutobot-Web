import React from 'react';
import * as FAIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faBook, faHome, faHeart, faEdit, faDoorClosed, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

export const Sidebar= [
    {
        cName: 'nav-line-inicial',
    },
    {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome}/>,
        cName: 'nav-text',
        kind: ''
    },
    {
        title: 'Perfil',
        path: '/perfil',
        icon: <FontAwesomeIcon icon={faUser}/>,
        cName: 'nav-text',
        kind: ''
    },
    {
        title: 'Tutoriales',
        path: '/tutos',
        icon: <FontAwesomeIcon icon={faBook}/>,
        cName: 'nav-text',
        kind: 'alumno'
    },
    {
        title: 'Crear Tutoriales',
        path: '/creartutos',
        icon: <FontAwesomeIcon icon={faPlusCircle}/>,
        cName: 'nav-text',
        kind: 'tutor'
    },
    {
        title: 'Mis Tutoriales',
        path: '/mistutos',
        icon: <FontAwesomeIcon icon={faHeart}/>,
        cName: 'nav-text',
        kind: 'alumno'
    },
    {
        title: 'Tutoriales Creados',
        path: '/tutoscreados',
        icon: <FontAwesomeIcon icon={faEdit}/>,
        cName: 'nav-text',
        kind: 'tutor'
    },
    {
        cName: 'nav-line'
    },
    {
        title: 'Cerrar Sesión',
        path: '/iniciarSesion',
        icon: <FontAwesomeIcon icon={faDoorClosed}/>,
        cName: 'nav-text-logout',
        kind: ''
    }
]

