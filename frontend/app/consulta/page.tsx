"use client";

import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ConsultaForm from './components/consultaForm';
import Resultado from './components/resultado';

const Consulta: React.FC = () => {
    const [resultado, setResultado] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <Header />
            <main className="w-full flex flex-col items-center justify-center mt-12">
                <h1 className="text-4xl font-bold mb-5">Consulte um possível golpe</h1>
                <p className="mb-6 text-center">
                    Selecione o tipo e insira o dado que foi utilizado para entrar em contato
                </p>
                <ConsultaForm onSubmit={setResultado} />
                <Resultado resultado={resultado} />
            </main>
            <Footer />
        </div>
    );
};

export default Consulta;
