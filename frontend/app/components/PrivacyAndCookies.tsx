import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-16 px-4 border-t border-gray-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Política de Privacidade e Cookies
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Introdução</h3>
            <p className="text-lg leading-relaxed">
              Bem-vindo ao Contact Trust™. Sua privacidade é uma prioridade para
              nós. Este documento descreve como tratamos suas informações
              pessoais e como usamos cookies para oferecer uma experiência
              personalizada e eficiente.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">1. Coleta de Dados</h3>
            <p className="text-lg leading-relaxed">
              Coletamos informações para garantir a qualidade de nossos
              serviços:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed">
              <li>
                <strong>Dados fornecidos por você:</strong> Informações como
                nome, e-mail, endereço e dados de pagamento.
              </li>
              <li>
                <strong>Dados automáticos:</strong> Informações coletadas
                automaticamente, como endereço IP, tipo de navegador, páginas
                visitadas e tempo gasto no site.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">2. Uso de Dados</h3>
            <p className="text-lg leading-relaxed">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed">
              <li>Fornecer nossos serviços e melhorar sua experiência.</li>
              <li>Processar transações e enviar notificações relevantes.</li>
              <li>Personalizar conteúdo e exibir recomendações.</li>
              <li>
                Garantir conformidade com leis e regulamentações aplicáveis.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              3. Compartilhamento de Dados
            </h3>
            <p className="text-lg leading-relaxed">
              Respeitamos sua privacidade e não compartilhamos informações
              pessoais, exceto:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed">
              <li>
                Com parceiros que auxiliam na prestação de serviços (como
                processadores de pagamento).
              </li>
              <li>
                Quando exigido por lei ou para proteger nossos direitos legais.
              </li>
              <li>
                Com provedores de serviços que suportam nosso site e operações.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              4. Segurança dos Dados
            </h3>
            <p className="text-lg leading-relaxed">
              Implementamos práticas robustas para proteger suas informações
              contra acessos não autorizados, uso indevido ou divulgação
              indevida.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">5. Cookies</h3>
            <p className="text-lg leading-relaxed">
              Os cookies são usados para melhorar sua experiência no site:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed">
              <li>
                <strong>Cookies essenciais:</strong> Necessários para o
                funcionamento básico do site.
              </li>
              <li>
                <strong>Cookies analíticos:</strong> Para entender como você usa
                o site e melhorar nossos serviços.
              </li>
              <li>
                <strong>Cookies de marketing:</strong> Para exibir anúncios
                relevantes com base em suas preferências.
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              Você pode gerenciar cookies nas configurações do navegador. Note
              que a desativação pode impactar sua experiência.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">6. Seus Direitos</h3>
            <p className="text-lg leading-relaxed">
              Dependendo da sua localização, você pode:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed">
              <li>Solicitar acesso ou exclusão de seus dados pessoais.</li>
              <li>Optar por não receber comunicações de marketing.</li>
              <li>Configurar preferências relacionadas a cookies.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              7. Alterações na Política
            </h3>
            <p className="text-lg leading-relaxed">
              Esta política pode ser atualizada periodicamente para refletir
              mudanças em regulamentos ou nossas práticas. A data da última
              atualização será sempre indicada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
