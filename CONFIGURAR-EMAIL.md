# 📧 Como Configurar o Envio de Email

## ⚠️ IMPORTANTE: Leia antes de fazer deploy!

O site agora envia emails automáticos quando um pedido é feito. Para funcionar, você precisa configurar a senha de app do Gmail.

---

## 🔐 Passo 1: Gerar Senha de App do Gmail

### 1.1. Ativar Verificação em 2 Etapas

1. Acesse: https://myaccount.google.com/security
2. Clique em "Verificação em duas etapas"
3. Siga os passos para ativar (se ainda não tiver)

### 1.2. Gerar Senha de App

1. Acesse: https://myaccount.google.com/apppasswords
2. Faça login com **Renatatramontim91@gmail.com**
3. No campo "Selecione o app", escolha **Email**
4. No campo "Selecione o dispositivo", escolha **Outro (nome personalizado)**
5. Digite: **Fina Estampa Site**
6. Clique em **Gerar**
7. O Google vai mostrar uma senha de 16 caracteres (algo como `abcd efgh ijkl mnop`)
8. **COPIE ESSA SENHA** (sem os espaços)

⚠️ **NUNCA** use a senha normal da conta! Só funciona com senha de app.

---

## 🚀 Passo 2: Configurar no Vercel

### 2.1. Acessar Configurações de Ambiente

1. Acesse: https://vercel.com
2. Entre no projeto **finaestampa**
3. Vá em **Settings** → **Environment Variables**

### 2.2. Adicionar Variáveis

Adicione essas 3 variáveis:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `EMAIL_USER` | `Renatatramontim91@gmail.com` | Production, Preview, Development |
| `EMAIL_PASSWORD` | `[senha de app de 16 caracteres]` | Production, Preview, Development |
| `EMAIL_ADMIN` | `Renatatramontim91@gmail.com` | Production, Preview, Development |

**Exemplo da senha:**
- ❌ ERRADO: `abcd efgh ijkl mnop` (com espaços)
- ✅ CERTO: `abcdefghijklmnop` (sem espaços, tudo junto)

### 2.3. Fazer Redeploy

Depois de adicionar as variáveis:
1. Vá em **Deployments**
2. Clique nos 3 pontinhos do último deploy
3. Clique em **Redeploy**

---

## ✅ Passo 3: Testar

1. Acesse o site em produção
2. Faça um pedido de teste
3. Você deve receber 2 emails:
   - ✉️ Email bonito para o cliente (HTML)
   - 🔔 Notificação simples para Renatatramontim91@gmail.com

---

## 🐛 Solução de Problemas

### Email não chega

**Problema 1: Senha errada**
- ❌ Sintoma: Erro 535 "Authentication failed"
- ✅ Solução: Gere nova senha de app e configure de novo

**Problema 2: Variáveis não configuradas**
- ❌ Sintoma: Erro 500 no console do Vercel
- ✅ Solução: Verifique se todas as 3 variáveis estão configuradas

**Problema 3: Email vai para spam**
- ❌ Sintoma: Email não aparece na caixa de entrada
- ✅ Solução: Procure na pasta de spam. Marque como "não é spam" para futuros emails chegarem direto

---

## 📋 Checklist Rápido

- [ ] Verificação em 2 etapas ativada no Gmail
- [ ] Senha de app gerada
- [ ] 3 variáveis configuradas no Vercel
- [ ] Redeploy feito
- [ ] Pedido de teste realizado
- [ ] Email recebido ✅

---

## 📝 O que o Email Contém

### Para o cliente:
- ✅ Confirmação do pedido
- 📦 Lista de produtos
- 💰 Valor total
- 📍 Endereço de entrega
- 📞 Informações de contato
- 💬 Botão para WhatsApp

### Para a admin (Renata):
- 🔔 Alerta de novo pedido
- 👤 Dados do cliente
- 📦 Itens comprados
- 💬 Link direto pro WhatsApp do cliente

---

## 🔒 Segurança

- ✅ Senha de app pode ser revogada a qualquer momento
- ✅ Não dá acesso à conta completa do Gmail
- ✅ Variáveis de ambiente são criptografadas no Vercel
- ✅ Nunca commitamos senhas no git

---

**Dúvidas?** Chame o Jarvis! ⚡
