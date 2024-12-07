import { useState, useEffect } from "react";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";

const Steps: React.FC = () => {
  const steps = [
    "Procurando registros na nossa base de dados...",
    "Validando a integridade das informações...",
    "Identificando órgãos relacionados...",
    "Localizando os contatos vinculados...",
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
      {/* Coluna de Passos */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-700">
          Estamos verificando o contato...
        </h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center p-4 border rounded-lg shadow-md ${
                index === currentStep
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  index === currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <div className="ml-4 flex-1">
                <p
                  className={`text-lg font-medium ${
                    index <= currentStep ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
              <div>
                {index < currentStep ? (
                  <FaCheckCircle className="text-green-500" />
                ) : index === currentStep ? (
                  <FaSpinner className="text-green-500 animate-spin" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
