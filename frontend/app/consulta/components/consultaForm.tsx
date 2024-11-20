// ConsultaForm.tsx
import React, { useState } from 'react';

interface ConsultaFormProps {
    onSubmit: (resultado: string) => void;
}

const ConsultaForm: React.FC<ConsultaFormProps> = ({ onSubmit }) => {
    const [tipo, setTipo] = useState<string>('');
    const [numero, setNumero] = useState<string>('');
    const [resultado, setResultado] = useState<string | null>(null);

    const consultar = (event: React.FormEvent) => {
        event.preventDefault();
        setResultado('Exemplo de resultado da pesquisa');
        onSubmit('Exemplo de resultado da pesquisa');
    };

    const isInputValid = () => {
        if (tipo === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(numero);
        } else if (tipo === 'telefone') {
            const phoneRegex = /^(?:\(?\d{2}\)?\s?)?(?:9\d{4}-?\d{4}|\d{4}-?\d{4})$/;
            return phoneRegex.test(numero);
        }
        return false;
    };

    const isButtonDisabled =
        tipo === '' ||
        numero === '' ||
        !isInputValid();

    return (
        <form className="p-6 w-full max-w-md flex flex-col items-center" onSubmit={consultar}>
            <div className="mb-4 w-full">
                <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                >
                    <option value="">Selecione o tipo</option>
                    <option value="email">Email</option>
                    <option value="telefone">Telefone</option>
                </select>
            </div>
            <div className="mb-4 w-full">
                <input
                    type="text"
                    placeholder="Insira o número ou email"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                />
                {numero && !isInputValid() && (
                    <p className="text-red-500 text-sm mt-2">
                        {tipo === 'email'
                            ? 'Por favor, insira um email válido.'
                            : 'Por favor, insira um número de telefone válido.'}
                    </p>
                )}
            </div>
            <button
                type="submit"
                disabled={isButtonDisabled}
                className={`w-1/4 py-2 font-bold rounded-md transition ${isButtonDisabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
                Consultar
            </button>
        </form>
    );
};

export default ConsultaForm;
