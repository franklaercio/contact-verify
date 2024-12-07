"use client";

import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MdOutlineSecurity } from "react-icons/md";
import Carousel from "./components/Carousel";
import { motion } from "framer-motion";
import Steps from "./components/Steps";
import History from "./components/History";
import About from "./components/About";
import PrivacyAndCookies from "./components/PrivacyAndCookies";

type ResultType = boolean | null;

const Home: React.FC = () => {
  const [searching, setSearching] = useState<boolean>(false);
  const [result, setResult] = useState<ResultType>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);

  const [resetKey, setResetKey] = useState(0);

  const safeContacts = [
    { name: "João Silva", detail: "(11) 98765-4321 - São Paulo, SP" },
    { name: "Maria Oliveira", detail: "(21) 91234-5678 - Rio de Janeiro, RJ" },
    { name: "Carlos Santos", detail: "(31) 99876-5432 - Belo Horizonte, MG" },
    { name: "Ana Pereira", detail: "(41) 91234-8765 - Curitiba, PR" },
    { name: "Paulo Costa", detail: "(51) 93210-9876 - Porto Alegre, RS" },
  ];

  const unsafeContacts = [
    { name: "Fraude 123", detail: "(11) 12345-6789 - Local desconhecido" },
    { name: "Golpista XYZ", detail: "(21) 98765-4321 - Local desconhecido" },
    {
      name: "Falso Atendimento",
      detail: "(31) 99876-5432 - Local desconhecido",
    },
    { name: "Spam ABC", detail: "(41) 91234-5678 - Local desconhecido" },
    { name: "Desconhecido", detail: "(51) 98765-4321 - Local desconhecido" },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    setResetKey((prev) => prev + 1);

    e.preventDefault();

    resultSectionRef.current?.scrollIntoView({ behavior: "smooth" });

    setSearching(true);
    setResult(null);

    setTimeout(() => {
      setResult(Math.random() > 0.5);
      setSearching(false);
    }, 8000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <main
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            id="consulta"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Pesquise com <span className="text-green-600">Segurança</span>
              </h1>
              <p className="text-base sm:text-lg mt-4 max-w-lg">
                Procure quase qualquer número de telefone ou e-mail para revelar
                o seu proprietário. Descubra o nome completo, endereço, perfis
                nas redes sociais e endereço de e-mail.
              </p>
            </div>

            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row sm:space-x-4 items-center w-full max-w-lg"
            >
              <div className="flex items-center border rounded-md overflow-hidden w-full">
                <span className="px-4 py-2 border-r text-gray-500">
                  <MdOutlineSecurity />
                </span>
                <input
                  type="text"
                  placeholder="Telefone ou e-mail"
                  className="bg-inherit px-4 py-2 w-full focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition mt-4 sm:mt-0"
              >
                Pesquisar
              </button>
            </form>
          </main>

          <div className="hidden md:block">
            <img
              src="bg.png"
              alt="Ilustração de pesquisa telefônica"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="w-full py-8">
          <Carousel />
        </div>
      </div>

      <section
        ref={resultSectionRef}
        id="search"
        className="min-h-screen py-16 px-4 flex flex-col items-center justify-center"
      >
        <h1 className="align-baseline text-3xl mb-20 sm:text-4xl font-bold leading-tight">
          Estamos Cuidando com Segurança de{" "}
          <span className="text-green-600">Você</span>
        </h1>

        {searching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Steps key={resetKey} />

            <motion.div
              className="flex items-center justify-center rounded-lg shadow-lg bg-current p-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center justify-center w-4/6 h-4/6">
                <img src="map.gif" alt="Carregando" />
              </div>
            </motion.div>
          </div>
        ) : result !== null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Passos Finais */}
            <Steps key={resetKey} />

            <motion.div
              className={`flex flex-col items-center justify-center rounded-lg shadow-lg p-2 ${
                result ? "bg-green-600" : "bg-red-800"
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center justify-center w-3/6 h-3/6">
                {result ? (
                  <img src="safe.gif" alt="Contato Seguro" />
                ) : (
                  <img src="unsafe.gif" alt="Contato Inseguro" />
                )}
                <h2 className={`text-white text-2xl font-bold`}>
                  {result ? "Contato Seguro" : "Contato Não Seguro"}
                </h2>
                <p className="mt-2 text-white text-center">
                  {result
                    ? "Este contato passou em todas as verificações e é confiável."
                    : "Este contato falhou em algumas verificações. Recomendamos cautela."}
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          <p className="text-lg">Digite um número ou e-mail para verificar.</p>
        )}
      </section>

      <About />

      <History safeContacts={safeContacts} unsafeContacts={unsafeContacts} />

      <PrivacyAndCookies />

      <Footer />
    </div>
  );
};

export default Home;
