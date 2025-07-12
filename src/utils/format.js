// Formata um número para o formato monetário BRL
export function formatCurrency(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    return '-'; // ou 'R$ 0,00' ou qualquer valor default que preferir
  }
  
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

  
  // Formata uma data para algo como: Jan 12, 2025
  export function formatDate(date) {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  
  // Retorna um ícone de categoria simples (você pode usar emoji ou componentes SVG reais)
  export function getCategoryIcon(category) {
    const icons = {
      trabalho: '💼',
      presente: '🎁',
      comida: '🛒',
      casa: '🏠',
      transporte: '🚗',
      saúde: '🩺',
      educação: '📚',
      lazer: '🎮',
      investimento: '💸',
      outros: '🔖',
    };
  
    return icons[category.toLowerCase()] || '💳';
  }
  