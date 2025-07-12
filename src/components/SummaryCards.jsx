import { useMemo } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';
import { useFinanceStore } from '../hooks/useFinanceStore';
import { formatCurrency } from '../utils/format';

export default function SummaryCards() {
  const { transactions, balance } = useFinanceStore();

  const summaryData = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const totalIncome = transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const monthlyIncome = transactions
      .filter((t) => {
        const date = new Date(t.date);
        return (
          t.type === 'income' &&
          date.getMonth() === currentMonth &&
          date.getFullYear() === currentYear
        );
      })
      .reduce((sum, t) => sum + t.amount, 0);

    const monthlyExpenses = transactions
      .filter((t) => {
        const date = new Date(t.date);
        return (
          t.type === 'expense' &&
          date.getMonth() === currentMonth &&
          date.getFullYear() === currentYear
        );
      })
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalIncome,
      totalExpenses,
      balance,
      monthlyIncome,
      monthlyExpenses,
    };
  }, [transactions, balance]);

  const cards = [
    {
      title: 'Balanço total',
      value: summaryData.balance,
      icon: DollarSign,
      color: summaryData.balance >= 0 ? 'emerald' : 'red',
      bgColor: summaryData.balance >= 0 ? 'bg-emerald-50' : 'bg-red-50',
      iconColor: summaryData.balance >= 0 ? 'text-emerald-600' : 'text-red-600',
    },
    {
      title: 'Receita do mês',
      value: summaryData.monthlyIncome,
      icon: TrendingUp,
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Gastos do mês',
      value: summaryData.monthlyExpenses,
      icon: TrendingDown,
      color: 'red',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      title: 'Esse mês',
      value: summaryData.monthlyIncome - summaryData.monthlyExpenses,
      icon: Calendar,
      color:
        summaryData.monthlyIncome - summaryData.monthlyExpenses >= 0
          ? 'emerald'
          : 'red',
      bgColor:
        summaryData.monthlyIncome - summaryData.monthlyExpenses >= 0
          ? 'bg-emerald-50'
          : 'bg-red-50',
      iconColor:
        summaryData.monthlyIncome - summaryData.monthlyExpenses >= 0
          ? 'text-emerald-600'
          : 'text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 cursor-default">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${card.bgColor}`}>
              <card.icon className={`w-6 h-6 ${card.iconColor}`} />
            </div>
          </div>

          <h3 className="text-sm font-medium text-gray-600 mb-1">{card.title}</h3>
          <p className={`text-2xl font-bold ${card.iconColor}`}>
            {formatCurrency(card.value)}
          </p>

          <div className="flex items-center mt-3">
            <div className="flex items-center space-x-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  card.color === 'emerald' ? 'bg-emerald-500' : 'bg-red-500'
                }`}
              ></div>
              <span className="text-xs text-gray-500">vs último mês</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
