import React from "react";

interface Contact {
  name: string;
  detail: string;
}

interface HistorySectionProps {
  safeContacts: Contact[];
  unsafeContacts: Contact[];
}

const History: React.FC<HistorySectionProps> = ({
  safeContacts,
  unsafeContacts,
}) => {
  return (
    <section
      id="history"
      className="min-h-screen py-16 px-4 border-t border-gray-500"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="flex items-center justify-center text-3xl mb-4 sm:text-4xl font-bold leading-tight">
          Principais Contatos Seguros e Inseguros
        </h1>

        <p className="flex items-center justify-center text-lg mb-20">
          Aqui estão alguns dos últimos resultados do nosso serviço de pesquisa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-4">
              {safeContacts.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-center p-4 bg-green-600 rounded-lg shadow-md"
                >
                  <div className="flex-1">
                    <p className="text-center text-lg font-medium text-white">
                      {contact.name}
                    </p>
                    <p className="text-center text-sm text-white">
                      {contact.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              {unsafeContacts.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-center p-4 bg-red-600 rounded-lg shadow-md"
                >
                  <div className="flex-1">
                    <p className="text-center text-lg font-medium text-white">
                      {contact.name}
                    </p>
                    <p className="text-center text-sm text-white">
                      {contact.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
