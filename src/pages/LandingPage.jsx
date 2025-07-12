import { FiArrowRight as ArrowRight, FiTrendingUp as TrendingUp, FiShield as Shield, FiSmartphone as Smartphone, FiPieChart as PieChart, FiStar as Star } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';



export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <div>
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Controle suas{' '}
              <span className="text-green-600">finanças</span>{' '}
              com facilidade
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Acompanhe entradas, saídas e veja seus gastos com clareza. 
              Transforme a forma como você gerencia seu dinheiro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
            onClick={() => navigate('/register')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer">
              <span>Comece agora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
              Ver demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 pt-8">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-green-600">10k+</div>
              <div className="text-gray-600">Usuários ativos</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-green-600">R$ 2M+</div>
              <div className="text-gray-600">Gerenciados</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-green-600">4.9★</div>
              <div className="text-gray-600">Avaliação</div>
            </div>
          </div>
        </div>

        {/* Right Content - Mockup */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Phone mockup */}
            <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Phone screen content */}
                <div className="p-6 space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900">Saldo atual</h3>
                    <div className="text-3xl font-bold text-green-600">R$ 4.850,00</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="text-sm text-gray-600">Receitas</div>
                      <div className="text-xl font-bold text-green-600">R$ 5.200</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-xl">
                      <div className="text-sm text-gray-600">Despesas</div>
                      <div className="text-xl font-bold text-red-600">R$ 2.350</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">S</span>
                        </div>
                        <div>
                          <div className="font-medium">Salário</div>
                          <div className="text-sm text-gray-500">15/01/2025</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">+R$ 3.500</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">M</span>
                        </div>
                        <div>
                          <div className="font-medium">Mercado</div>
                          <div className="text-sm text-gray-500">14/01/2025</div>
                        </div>
                      </div>
                      <div className="text-red-600 font-bold">-R$ 280</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">+12% este mês</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Recursos que fazem a diferença
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubra como nossa plataforma pode transformar sua relação com o dinheiro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <PieChart className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Saldo em tempo real
          </h3>
          <p className="text-gray-600">
            Veja seu saldo atualizado instantaneamente a cada transação
          </p>
        </div>

        {/* Feature 2 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Gráficos interativos
          </h3>
          <p className="text-gray-600">
            Visualize suas receitas e despesas com gráficos claros e intuitivos
          </p>
        </div>

        {/* Feature 3 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Segurança garantida
          </h3>
          <p className="text-gray-600">
            Seus dados protegidos com criptografia de nível bancário
          </p>
        </div>

        {/* Feature 4 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
            <Smartphone className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Totalmente responsivo
          </h3>
          <p className="text-gray-600">
            Acesse de qualquer dispositivo com interface otimizada
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          O que nossos usuários dizem
        </h2>
        <p className="text-xl text-gray-600">
          Histórias reais de pessoas que transformaram suas finanças
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-6">
            "Finalmente consegui organizar minhas finanças! O app é muito intuitivo e me ajudou a economizar R$ 500 por mês."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-900">Maria Silva</div>
              <div className="text-gray-500">Professora</div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-6">
            "Os gráficos são incríveis! Agora vejo exatamente onde estou gastando e posso planejar melhor meus investimentos."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">J</span>
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-900">João Santos</div>
              <div className="text-gray-500">Engenheiro</div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-6">
            "Recomendo para todos! É o melhor app de finanças que já usei. Simples, completo e muito seguro."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-900">Ana Costa</div>
              <div className="text-gray-500">Empresária</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        Pronto para dominar suas finanças?
      </h2>
      <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
        Junte-se a milhares de pessoas que já transformaram sua vida financeira
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        <button 
        onClick={() => navigate('/register')}
        className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer">
          Criar conta gratuita
        </button>
        <a href="/login">
        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors cursor-pointer">
          Fazer login
        </button>
        </a>
      </div>
    </div>
  </section>
  </div>
  );
} 