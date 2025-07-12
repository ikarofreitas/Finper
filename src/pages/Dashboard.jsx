import { useState } from 'react'
import Chart from '../components/Chart' 
import TransactionList from '../components/TransationList'
import TransactionModal from '../components/TransactionalModel'
import SummaryCards from '../components/SummaryCards'


export default function Dashboard(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTransaction = () => {
        setIsModalOpen(true);

    };

 

    return(
        <div className="min-h-screen bg-gray-100 p-8">
            <div className='flex flex-wrap justify-between items-center mb-8'>
                <h1 className="text-3xl font-bold text-gray-900 cursor-default">Dashboard</h1>         
                <button
                    onClick={handleAddTransaction}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="hidden sm:inline font-medium">Adicionar Transação</span>
                    
                </button>
            </div>
            <SummaryCards />      
            <Chart />
            <TransactionList />
            <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}