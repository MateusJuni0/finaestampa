export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export function formatCEP(cep) {
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2')
}

export function formatCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export function formatPhone(phone) {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validateCPF(cpf) {
  cpf = cpf.replace(/\D/g, '')
  if (cpf.length !== 11) return false
  
  // Basic validation (not full CPF algorithm)
  if (/^(\d)\1{10}$/.test(cpf)) return false
  
  return true
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}
