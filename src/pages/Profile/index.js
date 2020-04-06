import React from 'react';
import { Link } from 'react-router-dom'
//tem todos os icones md = Material Design || fa fontawesome || fi feather
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
//01:05:52
export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vind, APAD</span>

                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>kkkk</p>
                    <strong>Descrição:</strong>
                    <p>kkkk</p>
                    <strong>Valor:</strong>
                    <p>kkkk</p>
                    <button type="button">
                        <FiTrash2 size={20}  color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>kkkk</p>
                    <strong>Descrição:</strong>
                    <p>kkkk</p>
                    <strong>Valor:</strong>
                    <p>kkkk</p>
                    <button type="button">
                        <FiTrash2 size={20}  color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>kkkk</p>
                    <strong>Descrição:</strong>
                    <p>kkkk</p>
                    <strong>Valor:</strong>
                    <p>kkkk</p>
                    <button type="button">
                        <FiTrash2 size={20}  color="#a8a8b3" />
                    </button>
                </li>
               
            </ul>
        </div>
    )
}