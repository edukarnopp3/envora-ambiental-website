# Envora Ambiental

Landing page institucional e de conversão da Envora Ambiental, com foco em consultoria e regularização ambiental para empresas em Joinville/SC.

## Tecnologias

- React 19 e TypeScript
- vinext/Vite
- Cloudflare Pages
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

O comando `npm test` também gera o pacote de produção em `dist-pages/` e testa o HTML renderizado.

## Variáveis opcionais

As integrações de medição são desativadas quando estas variáveis não existem:

- `NEXT_PUBLIC_GOOGLE_TAG_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL`

Use um arquivo `.env.local` apenas no computador ou configure as variáveis no provedor de hospedagem. Arquivos `.env*` são ignorados pelo Git e nunca devem conter credenciais versionadas.

## Publicação no Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist-pages --project-name envora-consultoria-ambiental
```

O arquivo `public/_headers` configura políticas de segurança e cache aplicadas pelo Cloudflare Pages. O diretório de build, logs locais do Wrangler, pacotes compactados e arquivos de ambiente não são versionados.

## Segurança

- Não há chaves, tokens ou senhas no código-fonte.
- Métricas e Google Ads só carregam após consentimento do visitante.
- Cabeçalhos bloqueiam framing, MIME sniffing, recursos não autorizados e APIs de navegador desnecessárias.
- Qualquer funcionalidade futura que grave dados deve validar e autorizar requisições no servidor; validação no navegador não é controle de segurança.

## Estrutura principal

- `app/`: página, metadados, triagem, consentimento e política de privacidade
- `public/`: identidade visual, favicons e cabeçalhos do Cloudflare Pages
- `scripts/`: build e geração de recursos gráficos
- `tests/`: verificações do HTML final
- `docs/`: material operacional da campanha de Google Ads
