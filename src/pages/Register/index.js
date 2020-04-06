import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [city, setCity] = useState('')
  const [UF, setUF] = useState('')

  async function handleRegister(e) {
    e.preventDefault();
    try {
      console.log({ name, email, whatsApp, city, UF })
      const result = await api.post('http://localhost:3030/ongs', { name, email, whatsapp: whatsApp, city, uf: UF })
      console.log(result)
      alert(`seu ID de acesso é: ${result.data.id}`)
    } catch (error) {
      alert(`error no cadastro, tente novamento mais tarde`)
      console.log(error)
    }
  }
  return (
    <div className="register-container">
      <div className="container">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casso da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
                        Pagina inicial
                    </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)} />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <input type="text"
            placeholder="WhatsApp"
            value={whatsApp}
            onChange={e => setWhatsApp(e.target.value)} />

          <div className="input-group">
            <input
              type="text"
              placeholder="city"
              value={city}
              onChange={e => setCity(e.target.value)} />

            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={UF}
              onChange={e => setUF(e.target.value)}
            />

          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}