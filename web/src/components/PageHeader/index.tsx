import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg'

import backIcon from '../../assets/images/icons/back.svg'

import './style.css'
// declaração de parametros
interface PageHeaderProps{  
    title: string;
   }
// react.FunctionalComponent
const PageHeader: React.FC <PageHeaderProps> = (props)=>{
    return (
    <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="voltar"/>
                </Link>
                <img src={logoImage} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
            {/* tras conteudo jogado dentro do component a partir da instancia */}
            {props.children}
            </div>
        </header>
        )

    
}

export default PageHeader