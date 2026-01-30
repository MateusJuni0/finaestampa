# 💳 Setup Mercado Pago - Fina Estampa

## 📋 Credenciais Configuradas

Já configurei as credenciais no arquivo `.env.local` (não vai pro git):
- ✅ Access Token
- ✅ Client ID  
- ✅ Client Secret

## 🔗 Webhook URL

**URL para cadastrar no painel do Mercado Pago:**
```
https://finaestampas.com.br/api/mercadopago-webhook
```

### Como Cadastrar o Webhook:

1. Acesse: https://www.mercadopago.com.br/developers/panel/webhooks
2. Clique em **"Criar Webhook"** ou **"Adicionar URL"**
3. Cole a URL acima: `https://finaestampas.com.br/api/mercadopago-webhook`
4. Selecione os eventos:
   - ✅ **Pagamentos** (payment)
   - ✅ **Merchant Orders** (merchant_order) - opcional
5. Clique em **Salvar**

## 🚀 Endpoints Criados

### 1. `/api/create-payment` (POST)
Cria um novo pagamento PIX via Mercado Pago.

**Request:**
```json
{
  "amount": "150.00",
  "orderId": "FE12345678",
  "email": "cliente@email.com",
  "name": "João Silva"
}
```

**Response:**
```json
{
  "id": 123456789,
  "status": "pending",
  "qr_code": "00020126580014br.gov.bcb.pix...",
  "qr_code_base64": "iVBORw0KGgoAAAANSUhEUg...",
  "external_reference": "FE12345678"
}
```

### 2. `/api/check-payment` (GET)
Verifica status de um pagamento.

**Request:**
```
GET /api/check-payment?id=123456789
```

**Response:**
```json
{
  "id": 123456789,
  "status": "approved",
  "status_detail": "accredited",
  "external_reference": "FE12345678",
  "transaction_amount": 150.00
}
```

### 3. `/api/mercadopago-webhook` (POST)
Recebe notificações automáticas de mudança de status de pagamento.

O Mercado Pago envia automaticamente quando:
- Pagamento é criado
- Pagamento é aprovado
- Pagamento é recusado
- etc

## 📊 Status de Pagamento

| Status | Descrição |
|--------|-----------|
| `pending` | Aguardando pagamento |
| `approved` | Pagamento aprovado ✅ |
| `authorized` | Autorizado (precisa capturar) |
| `in_process` | Em análise |
| `in_mediation` | Em disputa |
| `rejected` | Recusado |
| `cancelled` | Cancelado |
| `refunded` | Estornado |
| `charged_back` | Chargeback |

## 🔄 Fluxo de Pagamento PIX

1. **Cliente chega no checkout** → preenche dados
2. **Cliente escolhe PIX** → clica em "Finalizar Pedido"
3. **Frontend chama** `/api/create-payment`
4. **Mercado Pago retorna** QR Code + código copiável
5. **Cliente paga** no app do banco
6. **Mercado Pago notifica** via webhook (automático)
7. **Cliente clica** "Já paguei"
8. **Frontend chama** `/api/check-payment`
9. **Se aprovado** → finaliza pedido e limpa carrinho

## 🔐 Segurança

- ✅ Credenciais em `.env.local` (não vão pro git)
- ✅ Webhook valida origem do Mercado Pago
- ✅ CORS configurado nos endpoints
- ✅ Tratamento de erros completo

## 🧪 Testar a Integração

### Criar Pagamento de Teste:
```bash
curl -X POST https://finaestampas.com.br/api/create-payment \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "10.00",
    "orderId": "TEST123",
    "email": "test@test.com",
    "name": "Teste"
  }'
```

### Verificar Status:
```bash
curl https://finaestampas.com.br/api/check-payment?id=SEU_PAYMENT_ID
```

## 📝 Próximos Passos

Após fazer deploy na Vercel:
1. ✅ Cadastrar webhook no painel MP
2. ✅ Testar pagamento PIX de verdade
3. ✅ Verificar se webhook está recebendo notificações
4. ⏳ (Opcional) Adicionar email de confirmação no webhook

## 🆘 Troubleshooting

**Problema:** Webhook não recebe notificações
- Verifique se a URL está cadastrada corretamente
- Teste manualmente: `curl -X POST https://finaestampas.com.br/api/mercadopago-webhook`
- Veja logs da Vercel: https://vercel.com/logs

**Problema:** QR Code não aparece
- Verifique as credenciais no `.env.local`
- Veja console do navegador (F12)
- Veja logs da API: `/api/create-payment`

**Problema:** Pagamento não confirma
- Pode demorar alguns segundos
- Cliente deve clicar em "Já paguei"
- Webhook pode demorar até 30s para notificar

---

✅ **Integração pronta! Agora é só cadastrar o webhook e testar.**
