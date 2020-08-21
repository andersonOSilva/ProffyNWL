import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-NnAPbjyLbftAA2SpHEnZuIbP6cYEomGuE8gMf=s32-c-mo" alt="Anderson"/>
                        <div>
                            <strong>Dersin rei delas</strong>
                            <span>Bruxaria</span>
                        </div>
                    </header>
                    <p>
                        ja lecionei para mestre dos magos ronalbruxo heman sherra o sindico maluco beleza e mamonas assasinas
                        <br></br>
                        queria que o layout ficasse semelhante e acabei sem texto
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 200,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
    
}
export default TeacherItem