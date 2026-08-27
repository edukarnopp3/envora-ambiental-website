import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Envora Ambiental",
  description: "Política de privacidade e uso de dados da Envora Consultoria Ambiental.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header>
        <Link href="/" aria-label="Voltar ao site da Envora"><img src="/envora-logo-horizontal.svg" alt="Envora Ambiental" /></Link>
        <Link href="/">Voltar ao site</Link>
      </header>
      <article>
        <p className="eyebrow">Privacidade e dados</p>
        <h1>Política de Privacidade</h1>
        <p className="privacy-updated">Última atualização: 24 de agosto de 2026.</p>

        <h2>1. Quem trata os dados</h2>
        <p>A Envora Consultoria Ambiental, representada por Eduardo Karnopp, é responsável pelo tratamento dos dados descritos nesta política. Solicitações relacionadas à privacidade podem ser enviadas para <a href="mailto:envoraambiental@gmail.com">envoraambiental@gmail.com</a>.</p>

        <h2>2. Dados informados pelo usuário</h2>
        <p>Podemos tratar nome, telefone, empresa ou atividade, cidade e as informações que você decidir compartilhar durante a triagem. O formulário do site prepara uma mensagem e abre o WhatsApp; o site não mantém uma base própria com o conteúdo preenchido nesse formulário.</p>

        <h2>3. Finalidades</h2>
        <p>Os dados são utilizados para responder ao contato, compreender a demanda, realizar a triagem inicial, elaborar proposta quando solicitada, executar serviços contratados e cumprir obrigações aplicáveis.</p>

        <h2>4. Cookies e medição</h2>
        <p>Com sua autorização, o site pode carregar ferramentas do Google para medir visitas, cliques e conversões. Se você recusar, essas ferramentas opcionais não serão carregadas. A escolha fica armazenada no seu navegador e pode ser apagada ao remover os dados locais do site.</p>

        <h2>5. Serviços de terceiros</h2>
        <p>Ao utilizar WhatsApp, e-mail, Google ou outros serviços externos, o tratamento também segue as políticas desses fornecedores. A hospedagem do site é realizada pela Cloudflare. Esses fornecedores podem operar infraestrutura fora do Brasil.</p>

        <h2>6. Compartilhamento e conservação</h2>
        <p>A Envora não comercializa dados pessoais. As informações podem ser compartilhadas com fornecedores necessários ao atendimento ou quando houver obrigação legal. Os dados são mantidos somente pelo período necessário às finalidades informadas, à prestação do serviço e ao cumprimento de obrigações aplicáveis.</p>

        <h2>7. Direitos do titular</h2>
        <p>Você pode solicitar informações, correção, atualização ou eliminação de dados, conforme os limites e requisitos aplicáveis. Para isso, entre em contato pelo e-mail indicado nesta política.</p>

        <h2>8. Alterações</h2>
        <p>Esta política pode ser atualizada para refletir mudanças no site, nos serviços ou nas ferramentas utilizadas. A versão vigente permanecerá disponível nesta página.</p>
      </article>
    </main>
  );
}
