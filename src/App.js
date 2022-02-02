import './App.css'
import { useState } from 'react'

export default function App() {
  const [peso, setPeso]         = useState('')
  const [altura, setAltura]     = useState('')
  const [mensagem, setMensagem] = useState('')

  function calculaImc() {
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if(imc < 18.6) {
      setMensagem('Você está abaixo do peso ideal! Seu IMC é: ' + imc.toFixed(2))
    } else if(imc >= 18.6 && imc < 24.9) {
      setMensagem('Você está no peso ideal! Seu IMC é: ' + imc.toFixed(2))
    } else if(imc >= 24.9 && imc < 34.9) {
      setMensagem('Você está levemente acima do peso ideal! Seu IMC é: ' + imc.toFixed(2))
    } else if(imc > 34.9) {
      setMensagem('Cuidado! Obesidade! Seu IMC é: ' + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu Índice de Massa Corporal!</span>

      <div className="area-input">
        <input 
          type="number" 
          placeholder="Digite Seu Peso em (Kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Digite Sua Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />
        <button onClick={calculaImc}>
          Calcular
        </button>

        <h2>{mensagem}</h2>
      </div>
    </div>
  )
}