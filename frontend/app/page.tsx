"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MdOutlineSecurity } from "react-icons/md";
import Carousel from "./components/Carousel";
import { motion } from "framer-motion";
import Steps from "./components/Steps";
import History from "./components/History";
import About from "./components/About";
import PrivacyAndCookies from "./components/PrivacyAndCookies";
import axios from "axios";

type ResultType = boolean | null;
interface Contact {
  name: string;
  detail: string;
}

const Home: React.FC = () => {
  const [searching, setSearching] = useState<boolean>(false);
  const [result, setResult] = useState<ResultType>(null);
  const [identifier, setIdentifier] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const resultSectionRef = useRef<HTMLDivElement | null>(null);
  const [safeContacts, setSafeContacts] = useState<Contact[]>([]);
  const [unsafeContacts, setUnsafeContacts] = useState<Contact[]>([]);
  const [resetKey, setResetKey] = useState(0);

  const fraudNames = ["Fraude 123", "Golpe 456", "Spam 789", "Falso 000"];

  const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`;

  const fetchSafeContacts = async () => {
    try {
      setError(null);
      const response = await axios.get(
        `${BACKEND_URL}/api/contacts/security?securityType=SAFE`
      );

      const parsedContacts = response.data.map(
        (item: { name: string; identifier: string }) => ({
          name: item.name,
          detail: item.identifier,
        })
      );

      setSafeContacts(parsedContacts);
    } catch (err) {
      setError("Failed to fetch safe contacts.");
      console.error(err);
    }
  };

  const fetchUnsafeContacts = async () => {
    try {
      setError(null);
      const response = await axios.get(
        `${BACKEND_URL}/api/contacts/security?securityType=UNSAFE`
      );

      const parsedContacts = response.data.map(
        (item: { identifier: string }) => ({
          name: fraudNames[Math.floor(Math.random() * fraudNames.length)],
          detail: item.identifier,
        })
      );

      setUnsafeContacts(parsedContacts);
    } catch (err) {
      setError("Failed to fetch safe contacts.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSafeContacts();
    fetchUnsafeContacts();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResetKey((prev) => prev + 1);
    resultSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setSearching(true);
    setResult(null);

    setTimeout(async () => {
      try {
        await createContact();
        const res = await fetchCompany();

        if (res == 200) {
          setResult(true);
          setSearching(false);
        } else {
          setResult(false);
          setSearching(false);
        }
      } catch (error) {
        console.error("Error during search:", error);
        setResult(false);
      } finally {
        setSearching(false);
      }
    }, 8000);
  };

  const isPhoneNumber = (input: string): boolean => {
    return /^[\d\s()+-]+$/.test(input);
  };

  const isEmail = (input: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  const sanitizePhoneNumber = (phone: string): string => {
    return phone.replace(/[^0-9]/g, "");
  };

  const sanitizeEmail = (email: string): string => {
    return email.replace(/[^a-zA-Z0-9@._-]/g, "");
  };

  const detectAndSanitize = (input: string): string => {
    if (isPhoneNumber(input)) {
      return sanitizePhoneNumber(input);
    }
    if (isEmail(input)) {
      return sanitizeEmail(input);
    }
    return "";
  };

  const fetchCompany = async () => {
    try {
      setError(null);
      const response = await axios.get(
        `${BACKEND_URL}/api/companies/${detectAndSanitize(identifier)}`
      );
      return response.status;
    } catch {
      setError("Company not found or an error occurred.");
      console.log(error);
    }
  };

  const createContact = async () => {
    try {
      setError(null);
      const res = await axios.post(`${BACKEND_URL}/api/contacts`, null, {
        params: {
          identifier: detectAndSanitize(identifier),
        },
        headers: { "Content-Type": "application/json" },
      });
      setResponse(res.data);
    } catch {
      setError("Failed to add contact. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col" id="search">
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
                  onChange={(e) => setIdentifier(e.target.value)}
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
        //id="search"
        className="min-h-screen py-16 px-4 flex flex-col items-center justify-center border-t border-gray-500"
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
        ) : result !== null && !searching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Passos Finais */}
            <Steps key={resetKey} />

            <motion.div
              className={`flex flex-col items-center justify-center rounded-lg shadow-lg p-2 ${
                result && response ? "bg-green-600" : "bg-red-800"
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center justify-center w-3/6 h-3/6">
                {result && response ? (
                  <img src="safe.gif" alt="Contato Seguro" />
                ) : (
                  <img src="unsafe.gif" alt="Contato Inseguro" />
                )}
                <h2 className={`text-white text-2xl font-bold`}>
                  {result && response ? "Contato Seguro" : "Contato Não Seguro"}
                </h2>
                <p className="mt-2 text-white text-center">
                  {result && response
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
