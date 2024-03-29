import React from 'react'
// import './fool.css'
import { getTarotCards } from './../airtableData.js'
import { createRoot } from 'react-dom/client'
import M_FortuneTellingReading from '../components/M_FortuneTellingReading/M_FortuneTellingReading.jsx'
import O_ThreeCards from '../components/O_ThreeCards/O_ThreeCards.jsx'
import A_Button from '../components/A_Button/A_Button.jsx'
document.addEventListener('DOMContentLoaded', () => {
    const telling = 'сессия всегда сопряжена с трудностями. здесь ты можешь получить своё экспресс-гадание. просто нажми на кнопку и получи расклад с кратким описанием. помни, что главное — чтобы расклад тебе откликался. сессия всегда сопряжена с трудностями. здесь ты можешь получить своё экспресс-гадание. просто нажми на кнопку и получи расклад с кратким описанием. помни, что главное — чтобы расклад тебе откликался. сессия всегда сопряжена с трудностями. здесь ты можешь получить своё экспресс-гадание. просто нажми на кнопку и получи расклад с кратким описанием. помни, что главное — чтобы расклад тебе откликался'
    const root = createRoot(document.querySelector('.W_FortuneTellingResult'))
    root.render(<M_FortuneTellingReading telling={telling}/>)})

let tarotCards
let N = 3;
document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCards = data
      const root = createRoot(document.querySelector('.W_ContentTarotReading'))
      const requiredCards = [];

    let tarotCards = data.slice(); // Make a copy of the original array

    for (let i = 0; i < N; i++) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const randomCard = tarotCards[randomIndex];
      requiredCards.push(randomCard);
      tarotCards.splice(randomIndex, 1); // Remove the selected card
    }

    root.render(
        <div>
        <O_ThreeCards data={requiredCards} />
        </div>)
      })  
}) 
// document.addEventListener('DOMContentLoaded', () => {
//     const root = createRoot(document.querySelector('.W_Button'))
//   root.render(
//     <div>
//     <A_Button/>
//     </div>)
// })