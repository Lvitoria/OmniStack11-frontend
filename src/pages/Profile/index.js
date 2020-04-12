import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
//tem todos os icones md = Material Design || fa fontawesome || fi feather
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile() {
  const [incidents, setIncidents] = useState([])
  const history = useHistory()
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')

  useEffect(() => {
    api.get('profile',
      {
        headers: { Authorization: ongId }
      }).then(response => {
        // console.log(response.data.result)
        setIncidents(response.data.result)
      }).catch(error => {
        console.log(error);
      })
  }, [ongId])

  async function handleDeleteIncient(id) {
    try {
      await api.delete(`incident/${id}`,
        {
          headers: { Authorization: ongId }
        })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      console.log(error)
      alert("erro ao deletar")
    }

  }

  function handleLogon(){
    localStorage.clear()
    history.push('/')
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem vind, {ongName}</span>

        <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogon}>
          <FiPower size={18} color="#e02041"  />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>
            <strong>Descrição:</strong>
            <p>{incident.description}</p>
            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            <button type="button">
              <FiTrash2 onClick={() => handleDeleteIncient(incident.id)} size={20} color="#a8a8b3" />
            </button>
          </li>
        )
        )}
      </ul>
    </div>
  )
}