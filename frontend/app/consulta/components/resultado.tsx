// Resultado.tsx
import React from 'react';

interface ResultadoProps {
    resultado: string | null;
}

const Resultado: React.FC<ResultadoProps> = ({ resultado }) => {
    return (
        <div className="h-[20vh] w-full max-w-4xl mx-auto bg-gray-800 border border-blue-500 rounded-2xl p-6 mt-5">
            {resultado && (
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Resultado da pesquisa:</h3>
                    <p className="mt-2">{resultado}</p>
                </div>
            )}
        </div>
    );
};

export default Resultado;
