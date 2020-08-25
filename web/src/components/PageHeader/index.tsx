import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg'

import backIcon from '../../assets/images/icons/back.svg'

import './style.css'
// declaração de parametros
interface PageHeaderProps{  
    title: string,
    description?:string
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
            {/* ternario para ver se existe uma description */}
            {/* { props.description ? <p>{props.description}</p> : null} */}
            {/* como nesse caso nao temos uma ação a ser tomada no else, é só uma validação de existe podemos usar o && sem colocar um else */}
            { props.description && <p>{props.description}</p>}
            {props.children}
            </div>
        </header>
        )

    
}

export default PageHeader