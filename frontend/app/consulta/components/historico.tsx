import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Consulta {
  dado: string;
  data: string;
  empresa: string;
  status: string;
}

const Historico: React.FC = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const resultadosPorPagina = 10;

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get(''); 
        setConsultas(response.data);
      } catch (error) {
        console.error('Erro ao buscar histórico:', error);
      }
    };

    fetchConsultas();
  }, []);

  const indiceInicio = (paginaAtual - 1) * resultadosPorPagina;
  const indiceFim = indiceInicio + resultadosPorPagina;
  const consultasPagina = consultas.slice(indiceInicio, indiceFim);

  const totalPaginas = Math.ceil(consultas.length / resultadosPorPagina);

  const mudarPagina = (novaPagina: number) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto border-collapse w-full text-left text-white">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 border-b border-gray-600">Dado</th>
            <th className="px-4 py-2 border-b border-gray-600">Data de consulta</th>
            <th className="px-4 py-2 border-b border-gray-600">Empresa</th>
            <th className="px-4 py-2 border-b border-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {consultasPagina.map((consulta, index) => (
            <tr key={index} className={`hover:bg-gray-800 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}`}>
              <td className="px-4 py-2 border-b border-gray-600">{consulta.dado}</td>
              <td className="px-4 py-2 border-b border-gray-600">{consulta.data}</td>
              <td className="px-4 py-2 border-b border-gray-600">{consulta.empresa}</td>
              <td className="px-4 py-2 border-b border-gray-600">{consulta.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => mudarPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
          className={`px-4 py-2 rounded ${paginaAtual === 1 ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          Anterior
        </button>
        <span>
          Página {paginaAtual} de {totalPaginas}
        </span>
        <button
          onClick={() => mudarPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
          className={`px-4 py-2 rounded ${paginaAtual === totalPaginas ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Historico;
