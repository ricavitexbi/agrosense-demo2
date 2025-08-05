import React, { useState, useEffect } from 'react';
import { 
  Cloud, TrendingUp, AlertTriangle, DollarSign, Truck, BarChart3,
  Calendar, Bell, Settings, ChevronRight, Search, Filter, MapPin,
  Thermometer, Droplets, Wind, Sun, TrendingDown, CheckCircle,
  XCircle, Clock, Package, Users, FileText, ArrowUpRight, ArrowDownRight,
  Activity, Zap, Target
} from 'lucide-react';

const AgroSense = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [selectedRegion, setSelectedRegion] = useState('RS-Norte');
  const [showNotification, setShowNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Simular notificação após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Dados simulados mais realistas
  const weatherData = {
    'RS-Norte': { temp: 28, humidity: 65, wind: 12, condition: 'Parcialmente nublado' },
    'RS-Sul': { temp: 25, humidity: 70, wind: 15, condition: 'Chuva leve' },
    'RS-Oeste': { temp: 30, humidity: 55, wind: 8, condition: 'Ensolarado' }
  };

  const salesForecast = [
    { month: 'Jan', vendas: 45, forecast: 48, produto: 'Colheitadeiras' },
    { month: 'Fev', vendas: 52, forecast: 58, produto: 'Tratores' },
    { month: 'Mar', vendas: 68, forecast: 75, produto: 'Implementos' },
    { month: 'Abr', vendas: 92, forecast: 95, produto: 'Colheitadeiras' },
    { month: 'Mai', vendas: 85, forecast: 88, produto: 'Tratores' },
    { month: 'Jun', vendas: 78, forecast: 82, produto: 'Peças' }
  ];

  const alerts = [
    {
      id: 1,
      type: 'success',
      title: 'Oportunidade de Venda',
      message: 'Alta demanda por colheitadeiras prevista para Abril em Passo Fundo',
      time: '2 min atrás',
      action: 'Preparar estoque'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Alerta Climático',
      message: 'Previsão de seca pode impactar vendas de irrigação em 30 dias',
      time: '1 hora atrás',
      action: 'Revisar estratégia'
    },
    {
      id: 3,
      type: 'info',
      title: 'Crédito Rural Liberado',
      message: 'BNDES liberou R$ 50M para financiamento em sua região',
      time: '3 horas atrás',
      action: 'Notificar vendedores'
    }
  ];

  const modules = [
    { id: 'dashboard', name: 'Visão Geral', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'forecast', name: 'Previsões', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'climate', name: 'Inteligência Climática', icon: <Cloud className="w-5 h-5" /> },
    { id: 'market', name: 'Análise de Mercado', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'inventory', name: 'Gestão de Estoque', icon: <Package className="w-5 h-5" /> },
    { id: 'clients', name: 'CRM Inteligente', icon: <Users className="w-5 h-5" /> }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* KPIs Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +23%
            </span>
          </div>
          <p className="text-gray-600 text-sm">Vendas do Mês</p>
          <p className="text-2xl font-bold">R$ 3.2M</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600">Este mês</span>
          </div>
          <p className="text-gray-600 text-sm">Entregas Agendadas</p>
          <p className="text-2xl font-bold">47</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +15%
            </span>
          </div>
          <p className="text-gray-600 text-sm">Leads Qualificados</p>
          <p className="text-2xl font-bold">234</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm text-orange-600">Atenção</span>
          </div>
          <p className="text-gray-600 text-sm">Alertas Ativos</p>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Forecast Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Previsão de Vendas por Categoria</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              Ver detalhes →
            </button>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {salesForecast.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full space-y-1">
                  <div className="relative">
                    <div
                      className="bg-blue-200 rounded-t mx-auto"
                      style={{ height: `${data.vendas * 2}px`, width: '60%' }}
                    />
                    <div
                      className="bg-blue-500 rounded-t mx-auto mt-1"
                      style={{ height: `${data.forecast * 2}px`, width: '60%' }}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-200 rounded mr-2" />
              <span className="text-sm text-gray-600">Vendas Reais</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-2" />
              <span className="text-sm text-gray-600">Previsão IA</span>
            </div>
          </div>
        </div>

        {/* Real-time Alerts */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Alertas Inteligentes</h3>
            <Bell className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`mt-1 ${
                  alert.type === 'success' ? 'text-green-500' :
                  alert.type === 'warning' ? 'text-orange-500' : 'text-blue-500'
                }`}>
                  {alert.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
                   alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> :
                   <Bell className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{alert.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{alert.time}</span>
                    <button className="text-xs text-blue-600 hover:text-blue-700">
                      {alert.action} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6">Análise Regional em Tempo Real</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(weatherData).map(([region, data]) => (
            <div
              key={region}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedRegion === region ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedRegion(region)}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">{region}</h4>
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4 mr-1 text-orange-500" />
                  <span>{data.temp}°C</span>
                </div>
                <div className="flex items-center">
                  <Droplets className="w-4 h-4 mr-1 text-blue-500" />
                  <span>{data.humidity}%</span>
                </div>
                <div className="flex items-center">
                  <Wind className="w-4 h-4 mr-1 text-gray-500" />
                  <span>{data.wind} km/h</span>
                </div>
                <div className="flex items-center">
                  <Sun className="w-4 h-4 mr-1 text-yellow-500" />
                  <span className="text-xs">{data.condition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderForecast = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold mb-6">Análise Preditiva Avançada</h3>
        
        {/* Prediction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <h4 className="font-semibold text-blue-900 mb-4">Previsão de Demanda - Próximos 90 dias</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Colheitadeiras</span>
                <span className="font-bold text-blue-700">+45% ↑</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tratores</span>
                <span className="font-bold text-blue-700">+32% ↑</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Implementos</span>
                <span className="font-bold text-green-700">+18% ↑</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Peças</span>
                <span className="font-bold text-gray-700">+5% →</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              Baseado em: safra, clima, crédito rural e histórico
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <h4 className="font-semibold text-green-900 mb-4">Oportunidades Identificadas</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Região de Passo Fundo</p>
                  <p className="text-xs text-gray-600">Alta probabilidade de vendas em Abril</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Crédito PRONAF liberado</p>
                  <p className="text-xs text-gray-600">R$ 2.5M disponível para pequenos produtores</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Safra de soja promissora</p>
                  <p className="text-xs text-gray-600">Aumento de 20% na área plantada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Forecast Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Produto</th>
                <th className="text-center py-3 px-4">Vendas Atual</th>
                <th className="text-center py-3 px-4">Previsão 30d</th>
                <th className="text-center py-3 px-4">Previsão 60d</th>
                <th className="text-center py-3 px-4">Previsão 90d</th>
                <th className="text-center py-3 px-4">Confiança</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Colheitadeiras CR9090</td>
                <td className="text-center py-3 px-4">12</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">18</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">24</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">28</td>
                <td className="text-center py-3 px-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">95%</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Tratores T7.245</td>
                <td className="text-center py-3 px-4">8</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">11</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">14</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">15</td>
                <td className="text-center py-3 px-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">89%</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Plantadeiras 2130</td>
                <td className="text-center py-3 px-4">15</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">18</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">22</td>
                <td className="text-center py-3 px-4 text-green-600 font-bold">20</td>
                <td className="text-center py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">78%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderClimate = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold mb-6">Inteligência Climática e Impacto nas Vendas</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weather Impact Analysis */}
          <div className="space-y-4">
            <h4 className="font-semibold">Análise de Impacto Climático</h4>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Previsão próximos 15 dias</span>
                <Cloud className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Precipitação esperada:</span>
                  <span className="font-bold">45mm</span>
                </div>
                <div className="flex justify-between">
                  <span>Temperatura média:</span>
                  <span className="font-bold">28°C</span>
                </div>
                <div className="flex justify-between">
                  <span>Dias de sol:</span>
                  <span className="font-bold">12/15</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
              <h5 className="font-medium mb-3">Impacto nas Vendas</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <ArrowUpRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Irrigação: +40% demanda prevista</span>
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Pulverizadores: +25% demanda</span>
                </div>
                <div className="flex items-center">
                  <ArrowDownRight className="w-4 h-4 text-red-600 mr-2" />
                  <span>Colheitadeiras: -15% (atraso safra)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Weather Map Simulation */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-4">Mapa Regional - Condições Atuais</h4>
            <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg">
              {/* Simulated map points */}
              <div className="absolute top-10 left-10 bg-white p-2 rounded shadow-lg">
                <p className="text-xs font-bold">Passo Fundo</p>
                <p className="text-xs">☀️ 29°C</p>
              </div>
              <div className="absolute top-20 right-10 bg-white p-2 rounded shadow-lg">
                <p className="text-xs font-bold">Cruz Alta</p>
                <p className="text-xs">🌤️ 27°C</p>
              </div>
              <div className="absolute bottom-10 left-20 bg-white p-2 rounded shadow-lg">
                <p className="text-xs font-bold">Santa Maria</p>
                <p className="text-xs">☁️ 25°C</p>
              </div>
              <div className="absolute bottom-20 right-20 bg-white p-2 rounded shadow-lg">
                <p className="text-xs font-bold">Caxias do Sul</p>
                <p className="text-xs">🌧️ 22°C</p>
              </div>
            </div>
          </div>
        </div>

        {/* Climate-based Recommendations */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
            <div>
              <h5 className="font-semibold text-yellow-800">Recomendações Baseadas no Clima</h5>
              <ul className="mt-2 space-y-1 text-sm text-yellow-700">
                <li>• Aumentar estoque de sistemas de irrigação em 30%</li>
                <li>• Preparar campanha de pulverizadores para próximas 2 semanas</li>
                <li>• Alertar equipe de vendas sobre possível atraso na colheita</li>
                <li>• Focar em financiamento para equipamentos de manejo de água</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarket = () => (
    <div className="space-y-6">
      {/* Market Overview Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Análise Integrada de Mercado</h2>
            <p className="opacity-90">Correlação de fatores externos com oportunidades de vendas</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75">Última atualização</p>
            <p className="font-semibold">Há 5 minutos</p>
          </div>
        </div>
      </div>

      {/* External Factors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Commodities */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Preço da Soja</h3>
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-2xl font-bold">R$ 162,50</span>
            <span className="text-sm text-gray-500 ml-2">/saca</span>
          </div>
          <div className="flex items-center text-sm text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>+4.8% esta semana</span>
          </div>
          <div className="mt-3 p-3 bg-green-50 rounded-lg">
            <p className="text-xs text-green-800">
              <strong>Impacto:</strong> Produtores com maior poder de compra. 
              Aumento esperado de 15% na demanda por colheitadeiras.
            </p>
          </div>
        </div>

        {/* Exchange Rate */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Taxa de Câmbio</h3>
            <div className="p-2 bg-red-100 rounded-lg">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-2xl font-bold">R$ 4,98</span>
            <span className="text-sm text-gray-500 ml-2">/USD</span>
          </div>
          <div className="flex items-center text-sm text-red-600">
            <ArrowDownRight className="w-4 h-4 mr-1" />
            <span>-2.1% este mês</span>
          </div>
          <div className="mt-3 p-3 bg-red-50 rounded-lg">
            <p className="text-xs text-red-800">
              <strong>Impacto:</strong> Máquinas importadas 8% mais baratas. 
              Oportunidade para promoção de equipamentos premium.
            </p>
          </div>
        </div>

        {/* Rural Credit */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Crédito Rural</h3>
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-2xl font-bold">R$ 450M</span>
            <span className="text-sm text-gray-500 ml-2">disponível</span>
          </div>
          <div className="flex items-center text-sm text-blue-600">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span>PRONAF liberado</span>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-800">
              <strong>Impacto:</strong> 2.500 produtores elegíveis na região. 
              Taxa de 5.5% a.a. para máquinas agrícolas.
            </p>
          </div>
        </div>
      </div>

      {/* Competition & Political Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competition Monitor */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Monitor da Concorrência</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-sm">John Deere</p>
                  <p className="text-xs text-gray-600">Lançou campanha 0% de entrada</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">Há 2 dias</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Activity className="w-5 h-5 text-gray-600 mr-3" />
                <div>
                  <p className="font-medium text-sm">Case IH</p>
                  <p className="text-xs text-gray-600">Feirão com descontos de até 15%</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">Há 5 dias</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Package className="w-5 h-5 text-gray-600 mr-3" />
                <div>
                  <p className="font-medium text-sm">New Holland</p>
                  <p className="text-xs text-gray-600">Estoque limitado de colheitadeiras</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">Há 1 semana</span>
            </div>
          </div>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
            Ver análise completa →
          </button>
        </div>

        {/* Political/Regulatory */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Cenário Político-Regulatório</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Plano Safra 2024/25 aprovado</p>
                  <p className="text-xs text-gray-600 mt-1">
                    R$ 400 bilhões disponíveis, aumento de 12% vs ano anterior
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <FileText className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Nova regulamentação de emissões</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Máquinas Euro 5 obrigatórias a partir de 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Discussão sobre ICMS</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Possível redução de 18% para 12% em máquinas agrícolas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What-if Scenarios */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Simulador de Cenários</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
            Novo Cenário +
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Optimistic Scenario */}
          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-semibold text-green-800 mb-3">Cenário Otimista</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Soja:</span>
                <span className="font-medium">R$ 180/saca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Crédito:</span>
                <span className="font-medium">+30% liberado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Clima:</span>
                <span className="font-medium">Favorável</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-green-300">
              <p className="text-xs text-gray-600 mb-1">Impacto nas vendas:</p>
              <p className="text-xl font-bold text-green-700">+42%</p>
              <p className="text-xs text-gray-600 mt-1">R$ 4.5M adicionais/mês</p>
            </div>
          </div>

          {/* Realistic Scenario */}
          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
            <h4 className="font-semibold text-blue-800 mb-3">Cenário Realista</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Soja:</span>
                <span className="font-medium">R$ 165/saca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Crédito:</span>
                <span className="font-medium">Normal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Clima:</span>
                <span className="font-medium">Irregular</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-300">
              <p className="text-xs text-gray-600 mb-1">Impacto nas vendas:</p>
              <p className="text-xl font-bold text-blue-700">+18%</p>
              <p className="text-xs text-gray-600 mt-1">R$ 1.9M adicionais/mês</p>
            </div>
          </div>

          {/* Pessimistic Scenario */}
          <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
            <h4 className="font-semibold text-red-800 mb-3">Cenário Pessimista</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Soja:</span>
                <span className="font-medium">R$ 140/saca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Crédito:</span>
                <span className="font-medium">Restrito</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Clima:</span>
                <span className="font-medium">Seca severa</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-300">
              <p className="text-xs text-gray-600 mb-1">Impacto nas vendas:</p>
              <p className="text-xl font-bold text-red-700">-15%</p>
              <p className="text-xs text-gray-600 mt-1">-R$ 1.6M/mês</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Recommendations */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Recomendações de Ação Imediata</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Campanha de Financiamento</h4>
              <p className="text-sm opacity-90">
                Aproveitar taxa PRONAF de 5.5% a.a. Criar campanha direcionada para 2.500 produtores elegíveis.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Contra-ataque à Concorrência</h4>
              <p className="text-sm opacity-90">
                Lançar programa de trade-in com avaliação diferenciada para combater campanha John Deere.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Estoque Estratégico</h4>
              <p className="text-sm opacity-90">
                Aumentar estoque de colheitadeiras em 30% para abril devido à alta demanda prevista.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Capacitação de Vendas</h4>
              <p className="text-sm opacity-90">
                Treinar equipe sobre novas regulamentações Euro 5 para consultoria técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeModule) {
      case 'dashboard':
        return renderDashboard();
      case 'forecast':
        return renderForecast();
      case 'climate':
        return renderClimate();
      case 'market':
        return renderMarket();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h4l3-9 4 18 3-9h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-900">AgroSense</h1>
                  <p className="text-xs text-gray-500">Inteligência para o Agronegócio</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos, clientes..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="relative p-2 text-gray-600 hover:text-gray-900">
                  <Bell className="w-5 h-5" />
                  {showNotification && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  )}
                </button>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className="text-sm font-medium">João Silva</p>
                  <p className="text-xs text-gray-500">Gerente Comercial</p>
                </div>
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-1">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeModule === module.id
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {module.icon}
                <span className="font-medium">{module.name}</span>
              </button>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="p-4 mt-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 text-white">
              <h4 className="font-semibold mb-2">Precisão do Sistema</h4>
              <div className="text-3xl font-bold mb-1">94.8%</div>
              <p className="text-sm opacity-90">Acurácia nas previsões</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <span>AgroSense</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">
              {modules.find(m => m.id === activeModule)?.name}
            </span>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </main>
      </div>

      {/* Demo Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200 max-w-sm animate-slideIn">
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm">Nova oportunidade detectada!</h4>
              <p className="text-sm text-gray-600 mt-1">
                Cliente Fazenda Santa Maria interessado em colheitadeira. Probabilidade de conversão: 87%
              </p>
              <button className="text-sm text-green-600 font-medium mt-2 hover:text-green-700">
                Ver detalhes →
              </button>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AgroSense;
