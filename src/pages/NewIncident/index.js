import React, {useState} from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

export default function NewIncident(){
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    async function handleNewIncident(e){
        e.preventDefault();
        try {
            const  {statusCode}  = (await api.post('incident', 
            {
                title,
                description,
                value
            },{
                headers:{
                    Authorization: ongId
                }
            })).data
        
            if(statusCode == 201) {
                alert("inserido com sucesso")
                history.push('/profile')
             }

        } catch (error) {
            console.log(error)
            alert("erro ao inserer um novo incidente")
        }
    }
    return (
        <div className="new-incident-container">
        <div className="container">
            <section>
                <img src={logoImg} alt="Be the Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Pagina inicial
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                type="text" 
                placeholder="Titulo do caso" 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}} />

                <textarea
                 placeholder="Descrição"
                 value={description}
                 onChange={(e)=>{setDescription(e.target.value)}} />

                <input 
                type="text" 
                placeholder="valor em reais" 
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}/>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}