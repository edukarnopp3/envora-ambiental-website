# Envora Ambiental

Landing page institucional e de conversão da Envora Ambiental, com foco em consultoria e regularização ambiental para empresas em Joinville/SC.

## Tecnologias

- Next.js 16, React 19 e TypeScript
- Vercel
- CSS próprio, sem biblioteca visual externa

## Desenvolvimento local

Requisitos: Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Validação completa:

```bash
npm run lint
npm test
```

O comando `npm test` também gera o build de produção e testa o HTML servido pelo Next.js.

## Variáveis opcionais

As integrações de medição são desativadas quando estas variáveis não existem:

- `NEXT_PUBLIC_GOOGLE_TAG_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL`
- `NEXT_PUBLIC_SITE_URL` (use o domínio definitivo quando ele for conectado)

Use um arquivo `.env.local` apenas no computador ou configure as variáveis no provedor de hospedagem. Arquivos `.env*` são ignorados pelo Git e nunca devem conter credenciais versionadas.

## Publicação na Vercel

Conecte este repositório à Vercel e mantenha o preset **Next.js**, o comando `next build` e o diretório de saída automático. As políticas HTTP ficam em `next.config.ts` e são aplicadas pela própria aplicação.

## Segurança

- Não há chaves, tokens ou senhas no código-fonte.
- Métricas e Google Ads só carregam após consentimento do visitante.
- Cabeçalhos bloqueiam framing, MIME sniffing, recursos não autorizados e APIs de navegador desnecessárias.
- Qualquer funcionalidade futura que grave dados deve validar e autorizar requisições no servidor; validação no navegador não é controle de segurança.

## Estrutura principal

- `app/`: página, metadados, triagem, consentimento e política de privacidade
- `public/`: identidade visual e favicons
- `scripts/`: geração de recursos gráficos
- `tests/`: verificações do HTML final
- `docs/`: material operacional da campanha de Google Ads
