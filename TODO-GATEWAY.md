# 📋 TODO - Integração Gateway de Pagamento

**Data:** 2026-01-30  
**Status:** Aguardando integração Mercado Pago

---

## 🔴 Pontos que PRECISAM ser corrigidos após gateway:

### 1. Verificação de Pagamento PIX
**Arquivo:** `src/components/PIXPayment.jsx`  
**Problema:** Verificação está simulada (linha ~47)
```javascript
const paid = Math.random() > 0.3 // 70% chance de "detectar" pagamento
```
**Solução:** Substituir por chamada real à API do Mercado Pago para verificar status do pagamento

---

### 2. Processamento de Cartão
**Arquivo:** `src/pages/Checkout.jsx`  
**Problema:** Pagamento com cartão está mockado (linha ~68)
```javascript
await new Promise(resolve => setTimeout(resolve, 2000))
```
**Solução:** Integrar SDK do Mercado Pago para processar cartão de crédito

---

### 3. Cálculo de Frete
**Arquivo:** `src/pages/Checkout.jsx`  
**Problema:** Frete fixo em R$ 25,90 (linha ~44)
```javascript
setShipping({ price: 25.90, days: 5 })
```
**Solução:** Integrar API dos Correios ou Melhor Envio para cálculo dinâmico

---

### 4. Geração de QR Code PIX
**Arquivo:** `src/components/PIXPayment.jsx`  
**Problema:** QR Code está sendo gerado manualmente (payload EMV)
**Solução:** Usar API do Mercado Pago para gerar QR Code dinâmico com webhook de confirmação automática

---

### 5. Webhook de Confirmação
**Arquivo:** NÃO EXISTE  
**Problema:** Não há endpoint backend para receber webhooks do Mercado Pago
**Solução:** Criar endpoint `/api/webhooks/mercadopago` para processar:
- Pagamento aprovado
- Pagamento rejeitado
- Atualizar status do pedido no banco

---

### 6. Backend / Banco de Dados
**Arquivo:** NÃO EXISTE  
**Problema:** Pedidos só existem no localStorage do navegador
**Solução:** Criar backend (Node.js + Express?) com:
- Tabela de pedidos
- Tabela de clientes
- Armazenamento de customizações
- Histórico de pagamentos

---

### 7. Email de Confirmação Real
**Arquivo:** `src/pages/Checkout.jsx` (linha ~80)  
**Status:** ✅ IMPLEMENTADO com SMTP (aguardando senha do email)
**Próximo:** Testar após configurar senha de app do Gmail

---

### 8. Notificação para Admin
**Arquivo:** NÃO EXISTE  
**Problema:** Renata não recebe notificação de novos pedidos
**Solução:** Enviar email/WhatsApp para admin quando:
- Novo pedido chega
- Pagamento confirmado
- Cliente envia mensagem

---

### 9. Painel Admin
**Arquivo:** NÃO EXISTE  
**Problema:** Não há como gerenciar pedidos
**Solução:** Criar painel em `/admin` para:
- Ver pedidos
- Atualizar status (em produção, enviado, entregue)
- Gerenciar produtos
- Ver customizações dos clientes

---

### 10. Integração com WhatsApp Business
**Sugestão:** Enviar mensagem automática no WhatsApp quando:
- Pedido confirmado
- Produto saiu para entrega
- Produto entregue

---

## 📦 Ferramentas Recomendadas:

- **Gateway:** Mercado Pago (melhor para Brasil, aceita PIX + Cartão)
- **Frete:** Melhor Envio (mais barato que Correios)
- **Backend:** Vercel Serverless Functions ou Firebase
- **Banco:** Supabase (PostgreSQL grátis) ou Firebase
- **Email:** ✅ SMTP Gmail (implementado)
- **WhatsApp:** Twilio ou Evolution API

---

## 🚀 Ordem de Implementação Sugerida:

1. ✅ Frontend completo
2. ✅ PIX mockado
3. ✅ Email SMTP
4. ⏳ Backend básico (DB + API)
5. ⏳ Mercado Pago (PIX + Cartão)
6. ⏳ Webhooks
7. ⏳ Painel Admin
8. ⏳ Frete real
9. ⏳ WhatsApp automático

---

**Próximos passos imediatos:**
1. Configurar senha de app do Gmail para envio de emails
2. Decidir backend (Vercel Functions, Firebase, ou servidor próprio)
3. Criar conta no Mercado Pago e pegar credenciais
