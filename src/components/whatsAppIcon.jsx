import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import '../styles/app.css';

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      phoneNumber='+5534996474732'
      accountName='DMBot'
      chatMessage='Olá, como posso te ajudar?'
      statusMessage=''
      placeholder='Digite a sua mensagem'
      allowClickAway={true}
      allowEsc={true}
      className="floating-whatsapp" // Adicione a classe personalizada
    />
  );
}