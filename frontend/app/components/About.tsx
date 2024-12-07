import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 border-t border-gray-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Nós</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold  mb-4">Quem Somos</h3>
            <p className="text-lg leading-relaxed">
              Somos uma empresa dedicada a proteger pessoas e organizações
              contra fraudes e golpes online. Nossa missão é oferecer uma
              plataforma confiável e eficiente para verificar contatos e
              identificar possíveis ameaças.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold  mb-4">Nossa História</h3>
            <p className="text-lg leading-relaxed">
              Fundada em 2021, nossa empresa nasceu para combater o aumento de
              golpes digitais. Hoje, somos referência no setor, ajudando
              milhares de usuários a tomar decisões mais seguras.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold  mb-4">
              Por que Confiar em Nós?
            </h3>
            <p className="text-lg leading-relaxed">
              Trabalhamos com tecnologia de ponta e dados confiáveis para
              oferecer as melhores ferramentas de verificação. Nossa
              credibilidade é garantida pela confiança de nossos milhares de
              usuários.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">10K+</div>
              <p>Contatos Verificados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">5K+</div>
              <p>Usuários Protegidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">4.9/5</div>
              <p>Avaliação dos Usuários</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
