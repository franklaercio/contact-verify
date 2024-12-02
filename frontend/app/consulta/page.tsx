"use client";

import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ConsultaForm from './components/consultaForm';
import Resultado from './components/resultado';
import Historico from './components/historico';

const Consulta: React.FC = () => {
  const [resultado, setResultado] = useState<string | null>(null);


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start">
      <Header />

      <main className="w-full flex flex-col items-center justify-center min-h-screen" id="consulta">
        <h1 className="text-4xl font-bold mb-5">Consulte um possível golpe</h1>
        <p className="mb-6 text-center">
          Selecione o tipo e insira o dado que foi utilizado para entrar em contato
        </p>
        <ConsultaForm onSubmit={setResultado} />
        <Resultado resultado={resultado} />
      </main>

      <section id="historico" className="w-full bg-gray-800 py-16 min-h-screen flex justify-center">
        <div className="text-center text-white w-[80%] mx-auto">
          <h2 className="text-3xl font-bold mb-6">histórico de consultas</h2>
          <Historico/>
        </div>
      </section>

      <section id="quem-somos" className="w-full bg-gray-900 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
          <p className="text-lg text-gray-300">
            Somos uma equipe dedicada a ajudar a identificar e combater golpes online. Nosso objetivo é fornecer informações precisas
            e ferramentas para prevenir fraudes e proteger a privacidade de nossos usuários.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulta;
