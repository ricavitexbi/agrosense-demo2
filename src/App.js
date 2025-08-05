import React, { useState, useEffect } from 'react';
import { 
  Cloud, TrendingUp, AlertTriangle, DollarSign, Truck, BarChart3,
  Calendar, Bell, Settings, ChevronRight, Search, Filter, MapPin,
  Thermometer, Droplets, Wind, Sun, TrendingDown, CheckCircle,
  XCircle, Clock, Package, Users, FileText, ArrowUpRight, ArrowDownRight,
  Activity, Zap, Target, Sparkles, Bot, MessageSquare, Wand2, Brain, Send
} from 'lucide-react';

const AgroSense = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [selectedRegion, setSelectedRegion] = useState('RS-Norte');
  const [showNotification, setShowNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      message: 'Olá! Sou o Assistente IA da VitexBI para o AgroSense. Como posso ajudar você hoje? Posso analisar dados, criar estratégias, prever tendências ou responder qualquer dúvida sobre o agronegócio.',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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
    { id: 'ai-assistant', name: 'IA Generativa - Assistente AGRO', icon: <Sparkles className="w-5 h-5" /> }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      type: 'user',
      message: newMessage,
      timestamp: new Date()
    };
    setChatMessages([...chatMessages, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = {
        'previsão': `📊 **Análise Preditiva Personalizada**

Com base na análise integrada de dados, posso fornecer as seguintes previsões:

**Próximos 30 dias:**
- Colheitadeiras: +45% de demanda (alta correlação com preço da soja)
- Tratores: +32% de demanda esperada
- Implementos: +18% de crescimento

**Fatores-chave identificados:**
1. Preço da soja em alta (+4.8%)
2. R$ 450M em crédito PRONAF disponível
3. Condições climáticas favoráveis

**Recomendação:** Aumente o estoque de colheitadeiras CR9090 em 40% imediatamente.`,
        
        'estratégia': `🎯 **Estratégia Comercial Otimizada**

Analisei 15 variáveis de mercado e identifico 3 ações prioritárias:

**1. Campanha Relâmpago (Próximas 48h)**
- Foco: 850 produtores com área > 500 hectares
- Canal: WhatsApp Business + Visitas
- Mensagem: "Financiamento PRONAF 5.5% a.a. - Últimas unidades"

**2. Contra-ataque John Deere**
- Oferta: Trade-in com avaliação 20% acima da tabela
- Diferencial: Entrega imediata + Manutenção grátis 1 ano

**3. Parceria Estratégica**
- Cooperativas locais: Palestras sobre Euro 5
- ROI esperado: 285% em 60 dias

Deseja que eu detalhe alguma estratégia específica?`,
        
        'default': `💡 **Análise Inteligente Gerada**

Processsei sua solicitação e aqui está minha análise:

**Insights Principais:**
- O mercado está em momento favorável para expansão
- A combinação de fatores externos cria janela única de oportunidade
- Ação rápida é essencial para capturar o momento

**Dados Relevantes:**
- 2.500 produtores elegíveis para crédito na região
- Concorrência com estoque limitado
- Previsão climática favorável próximos 15 dias

**Próximos Passos:**
1. Mobilizar equipe de vendas imediatamente
2. Preparar material sobre financiamento PRONAF
3. Agendar visitas aos top 100 clientes

Posso ajudar com análises mais específicas ou criar um plano de ação detalhado!`
      };

      const response = newMessage.toLowerCase().includes('previsão') || newMessage.toLowerCase().includes('previsao') 
        ? aiResponses['previsão']
        : newMessage.toLowerCase().includes('estratégia') || newMessage.toLowerCase().includes('estrategia')
        ? aiResponses['estratégia']
        : aiResponses['default'];

      const aiMessage = {
        id: chatMessages.length + 2,
        type: 'assistant',
        message: response,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* KPIs Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-sm text-green-400 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +23%
            </span>
          </div>
          <p className="text-slate-400 text-sm">Vendas do Mês</p>
          <p className="text-2xl font-bold text-white">R$ 3.2M</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Truck className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-sm text-blue-400">Este mês</span>
          </div>
          <p className="text-slate-400 text-sm">Entregas Agendadas</p>
          <p className="text-2xl font-bold text-white">47</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm text-green-400 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +15%
            </span>
          </div>
          <p className="text-slate-400 text-sm">Leads Qualificados</p>
          <p className="text-2xl font-bold text-white">234</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-sm text-orange-400">Atenção</span>
          </div>
          <p className="text-slate-400 text-sm">Alertas Ativos</p>
          <p className="text-2xl font-bold text-white">8</p>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Forecast Chart - CORRIGIDO */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Previsão de Vendas por Categoria</h3>
            <button className="text-sm text-blue-400 hover:text-blue-300">
              Ver detalhes →
            </button>
          </div>
          <div className="h-64 relative overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-between gap-2 px-2">
              {salesForecast.map((data, index) => {
                const maxValue = Math.max(...salesForecast.map(d => Math.max(d.vendas, d.forecast)));
                const vendasHeight = (data.vendas / maxValue) * 240;
                const forecastHeight = (data.forecast / maxValue) * 240;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end h-full relative">
                    <div className="w-full flex items-end justify-center gap-1 h-full pb-6">
                      <div
                        className="w-1/3 bg-blue-600/50 rounded-t transition-all duration-300 hover:bg-blue-600/70"
                        style={{ 
                          height: `${vendasHeight}px`,
                          maxHeight: '240px'
                        }}
                        title={`Vendas: ${data.vendas}`}
                      />
                      <div
                        className="w-1/3 bg-blue-400 rounded-t transition-all duration-300 hover:bg-blue-300"
                        style={{ 
                          height: `${forecastHeight}px`,
                          maxHeight: '240px'
                        }}
                        title={`Previsão: ${data.forecast}`}
                      />
                    </div>
                    <span className="text-xs text-slate-400 absolute bottom-0">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600/50 rounded mr-2" />
              <span className="text-sm text-slate-400">Vendas Reais</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded mr-2" />
              <span className="text-sm text-slate-400">Previsão IA</span>
            </div>
          </div>
        </div>

        {/* Real-time Alerts */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Alertas Inteligentes</h3>
            <Bell className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className={`mt-1 flex-shrink-0 ${
                  alert.type === 'success' ? 'text-green-400' :
                  alert.type === 'warning' ? 'text-orange-400' : 'text-blue-400'
                }`}>
                  {alert.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
                   alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> :
                   <Bell className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-white">{alert.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{alert.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-500">{alert.time}</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300">
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
      <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
        <h3 className="text-lg font-semibold mb-6 text-white">Análise Regional em Tempo Real</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(weatherData).map(([region, data]) => (
            <div
              key={region}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedRegion === region ? 'border-blue-500 bg-slate-700' : 'border-slate-600 hover:border-slate-500'
              }`}
              onClick={() => setSelectedRegion(region)}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white">{region}</h4>
                <MapPin className="w-4 h-4 text-slate-400" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center text-slate-300">
                  <Thermometer className="w-4 h-4 mr-1 text-orange-400" />
                  <span>{data.temp}°C</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Droplets className="w-4 h-4 mr-1 text-blue-400" />
                  <span>{data.humidity}%</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Wind className="w-4 h-4 mr-1 text-slate-400" />
                  <span>{data.wind} km/h</span>
                </div>
                <div className="flex items-center col-span-2 text-slate-300">
                  <Sun className="w-4 h-4 mr-1 text-yellow-400" />
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
      <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
        <h3 className="text-2xl font-bold mb-6 text-white">Análise Preditiva Avançada</h3>
        
        {/* Prediction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-xl border border-blue-700/50">
            <h4 className="font-semibold text-blue-300 mb-4">Previsão de Demanda - Próximos 90 dias</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">Colheitadeiras</span>
                <span className="font-bold text-blue-300">+45% ↑</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">Tratores</span>
                <span className="font-bold text-blue-300">+32% ↑</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">Implementos</span>
                <span className="font-bold text-green-400">+18% ↑</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">Peças</span>
                <span className="font-bold text-slate-400">+5% →</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Baseado em: safra, clima, crédito rural e histórico
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-xl border border-green-700/50">
            <h4 className="font-semibold text-green-300 mb-4">Oportunidades Identificadas</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Região de Passo Fundo</p>
                  <p className="text-xs text-slate-400">Alta probabilidade de vendas em Abril</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Crédito PRONAF liberado</p>
                  <p className="text-xs text-slate-400">R$ 2.5M disponível para pequenos produtores</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Safra de soja promissora</p>
                  <p className="text-xs text-slate-400">Aumento de 20% na área plantada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Forecast Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-300">Produto</th>
                <th className="text-center py-3 px-4 text-slate-300">Vendas Atual</th>
                <th className="text-center py-3 px-4 text-slate-300">Previsão 30d</th>
                <th className="text-center py-3 px-4 text-slate-300">Previsão 60d</th>
                <th className="text-center py-3 px-4 text-slate-300">Previsão 90d</th>
                <th className="text-center py-3 px-4 text-slate-300">Confiança</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700 hover:bg-slate-700/50">
                <td className="py-3 px-4 font-medium text-slate-200">Colheitadeiras CR9090</td>
                <td className="text-center py-3 px-4 text-slate-300">12</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">18</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">24</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">28</td>
                <td className="text-center py-3 px-4">
                  <span className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-sm">95%</span>
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700/50">
                <td className="py-3 px-4 font-medium text-slate-200">Tratores T7.245</td>
                <td className="text-center py-3 px-4 text-slate-300">8</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">11</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">14</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">15</td>
                <td className="text-center py-3 px-4">
                  <span className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-sm">89%</span>
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700/50">
                <td className="py-3 px-4 font-medium text-slate-200">Plantadeiras 2130</td>
                <td className="text-center py-3 px-4 text-slate-300">15</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">18</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">22</td>
                <td className="text-center py-3 px-4 text-green-400 font-bold">20</td>
                <td className="text-center py-3 px-4">
                  <span className="bg-yellow-900/50 text-yellow-400 px-2 py-1 rounded text-sm">78%</span>
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
      <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
        <h3 className="text-2xl font-bold mb-6 text-white">Inteligência Climática e Impacto nas Vendas</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weather Impact Analysis */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Análise de Impacto Climático</h4>
            <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-4 rounded-lg border border-blue-700/50">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-slate-200">Previsão próximos 15 dias</span>
                <Cloud className="w-5 h-5 text-blue-400" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Precipitação esperada:</span>
                  <span className="font-bold text-white">45mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Temperatura média:</span>
                  <span className="font-bold text-white">28°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Dias de sol:</span>
                  <span className="font-bold text-white">12/15</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 p-4 rounded-lg border border-orange-700/50">
              <h5 className="font-medium mb-3 text-orange-300">Impacto nas Vendas</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <ArrowUpRight className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-slate-300">Irrigação: +40% demanda prevista</span>
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-slate-300">Pulverizadores: +25% demanda</span>
                </div>
                <div className="flex items-center">
                  <ArrowDownRight className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-slate-300">Colheitadeiras: -15% (atraso safra)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Weather Map Simulation */}
          <div className="bg-slate-700 rounded-lg p-4">
            <h4 className="font-semibold mb-4 text-white">Mapa Regional - Condições Atuais</h4>
            <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
              {/* Simulated map points */}
              <div className="absolute top-10 left-10 bg-slate-800 border border-slate-600 p-2 rounded shadow-lg">
                <p className="text-xs font-bold text-white">Passo Fundo</p>
                <p className="text-xs text-slate-300">☀️ 29°C</p>
              </div>
              <div className="absolute top-20 right-10 bg-slate-800 border border-slate-600 p-2 rounded shadow-lg">
                <p className="text-xs font-bold text-white">Cruz Alta</p>
                <p className="text-xs text-slate-300">🌤️ 27°C</p>
              </div>
              <div className="absolute bottom-10 left-20 bg-slate-800 border border-slate-600 p-2 rounded shadow-lg">
                <p className="text-xs font-bold text-white">Santa Maria</p>
                <p className="text-xs text-slate-300">☁️ 25°C</p>
              </div>
              <div className="absolute bottom-20 right-20 bg-slate-800 border border-slate-600 p-2 rounded shadow-lg">
                <p className="text-xs font-bold text-white">Caxias do Sul</p>
                <p className="text-xs text-slate-300">🌧️ 22°C</p>
              </div>
            </div>
          </div>
        </div>

        {/* Climate-based Recommendations */}
        <div className="mt-6 bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-yellow-300">Recomendações Baseadas no Clima</h5>
              <ul className="mt-2 space-y-1 text-sm text-yellow-200">
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
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-6 text-white">
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
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Preço da Soja</h3>
            <div className="p-2 bg-green-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-2xl font-bold text-white">R$ 162,50</span>
            <span className="text-sm text-slate-400 ml-2">/saca</span>
          </div>
          <div className="flex items-center text-sm text-green-400">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>+4.8% esta semana</span>
          </div>
          <div className="mt-3 p-3 bg-green-900/30 rounded-lg border border-green-700/50">
            <p className="text-xs text-green-300">
              <strong>Impacto:</strong> Produtores com maior poder de compra. 
              Aumento esperado de 15% na demanda por colheitadeiras.
            </p>
          </div>
        </div>

        {/* Exchange Rate */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Taxa de Câmbio</h3>
            <div className="p-2 bg-red-500/20 rounded-lg">
              <TrendingDown className="w-5 h-5 text-red-400" />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-2xl font-bold text-white">R$ 4,98</span>
            <span className="text-sm text-slate-400 ml-2">/USD</span>
          </div>
          <div className="flex items-center text-sm text-red-400">
            <ArrowDownRight className="w-4 h-4 mr-1" />
            <span>-2.1% este mês</span>
          </div>
          <div className="mt-3 p-3 bg-red-900/30 rounded-lg border border-red-700/50">
            <p className="text-xs text-red-300">
              <strong>Impacto:</strong> Máquinas importadas 8% mais baratas. 
              Oportunidade para promoção de equipamentos premium.
            </p>
          </div>
        </div>

        {/* Rural Credit */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Crédito Rural</h3>
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-2xl font-bold text-white">R$ 450M</span>
            <span className="text-sm text-slate-400 ml-2">disponível</span>
          </div>
          <div className="flex items-center text-sm text-blue-400">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span>PRONAF liberado</span>
          </div>
          <div className="mt-3 p-3 bg-blue-900/30 rounded-lg border border-blue-700/50">
            <p className="text-xs text-blue-300">
              <strong>Impacto:</strong> 2.500 produtores elegíveis na região. 
              Taxa de 5.5% a.a. para máquinas agrícolas.
            </p>
          </div>
        </div>
      </div>

      {/* Competition & Political Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competition Monitor */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Monitor da Concorrência</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-900/30 rounded-lg border border-orange-700/50">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm text-white">John Deere</p>
                  <p className="text-xs text-slate-400">Lançou campanha 0% de entrada</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 flex-shrink-0">Há 2 dias</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <div className="flex items-center">
                <Activity className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm text-white">Case IH</p>
                  <p className="text-xs text-slate-400">Feirão com descontos de até 15%</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 flex-shrink-0">Há 5 dias</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <div className="flex items-center">
                <Package className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm text-white">New Holland</p>
                  <p className="text-xs text-slate-400">Estoque limitado de colheitadeiras</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 flex-shrink-0">Há 1 semana</span>
            </div>
          </div>
          <button className="mt-4 text-sm text-blue-400 hover:text-blue-300 font-medium">
            Ver análise completa →
          </button>
        </div>

        {/* Political/Regulatory */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Cenário Político-Regulatório</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-900/30 rounded-lg border border-green-700/50">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-white">Plano Safra 2024/25 aprovado</p>
                  <p className="text-xs text-slate-400 mt-1">
                    R$ 400 bilhões disponíveis, aumento de 12% vs ano anterior
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-900/30 rounded-lg border border-blue-700/50">
              <div className="flex items-start">
                <FileText className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-white">Nova regulamentação de emissões</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Máquinas Euro 5 obrigatórias a partir de 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-yellow-900/30 rounded-lg border border-yellow-700/50">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-white">Discussão sobre ICMS</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Possível redução de 18% para 12% em máquinas agrícolas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What-if Scenarios */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Simulador de Cenários</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
            Novo Cenário +
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Optimistic Scenario */}
          <div className="border-2 border-green-700 rounded-lg p-4 bg-green-900/20">
            <h4 className="font-semibold text-green-300 mb-3">Cenário Otimista</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Soja:</span>
                <span className="font-medium text-white">R$ 180/saca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Crédito:</span>
                <span className="font-medium text-white">+30% liberado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Clima:</span>
                <span className="font-medium text-white">Favorável</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-green-700">
              <p className="text-xs text-slate-400 mb-1">Impacto nas vendas:</p>
              <p className="text-xl font-bold text-green-400">+42%</p>
              <p className="text-xs text-slate-400 mt-1">R$ 4.5M adicionais/mês</p>
            </div>
          </div>

          {/* Realistic Scenario */}
          <div className="border-2 border-blue-700 rounded-lg p-4 bg-blue-900/20">
            <h4 className="font-semibold text-blue-300 mb-3">Cenário Realista</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Soja:</span>
                <span className="font-medium text-white">R$ 165/saca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Crédito:</span>
                <span className="font-medium text-white">Normal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Clima:</span>
                <span className="font-medium text-white">Irregular</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-700">
              <p className="text-xs text-slate-400 mb-1">Impacto nas vendas:</p>
              <p className="text-xl font-bold text-blue-400">+18%</p>
              <p className="text-xs text-slate-400 mt-1">R$ 1.9M adicionais/mês</p>
            </div>
          </div>

          {/* Pessimistic Scenario */}
          <div className="border-2 border-red-700 rounded-lg p-4 bg-red-900/20">
            <h4 className="font-semibold text-red-300 mb-3">Cenário Pessimista</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Soja:</span>
                <span className="font-medium text-white">R$ 140/saca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Crédito:</span>
                <span className="font-medium text-white">Restrito</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Clima:</span>
                <span className="font-medium text-white">Seca severa</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-700">
              <p className="text-xs text-slate-400 mb-1">Impacto nas vendas:</p>
              <p className="text-xl font-bold text-red-400">-15%</p>
              <p className="text-xs text-slate-400 mt-1">-R$ 1.6M/mês</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Recommendations */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Recomendações de Ação Imediata</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-lg mr-3 flex-shrink-0">
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
            <div className="bg-white/20 p-2 rounded-lg mr-3 flex-shrink-0">
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
            <div className="bg-white/20 p-2 rounded-lg mr-3 flex-shrink-0">
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
            <div className="bg-white/20 p-2 rounded-lg mr-3 flex-shrink-0">
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

  const renderAIAssistant = () => (
    <div className="h-full">
      <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 h-full flex flex-col" style={{ minHeight: 'calc(100vh - 250px)' }}>
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-700 p-6 rounded-t-xl text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Assistente IA Generativa AGRO</h2>
                <p className="opacity-90">Powered by VitexBI - Análise inteligente em tempo real</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <Brain className="w-5 h-5" />
              <span className="text-sm font-medium">IA Ativa</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-900">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3xl ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className="flex items-start space-x-3">
                  {msg.type === 'assistant' && (
                    <div className="bg-purple-500/20 p-2 rounded-full flex-shrink-0">
                      <Bot className="w-5 h-5 text-purple-400" />
                    </div>
                  )}
                  <div className={`rounded-lg p-4 ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                    <p className={`text-xs mt-2 ${
                      msg.type === 'user' ? 'text-blue-200' : 'text-slate-400'
                    }`}>
                      {msg.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {msg.type === 'user' && (
                    <div className="bg-slate-700 p-2 rounded-full flex-shrink-0">
                      <Users className="w-5 h-5 text-slate-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-purple-400" />
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-slate-700 p-4 bg-slate-800">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua pergunta... Ex: 'Crie uma estratégia para abril' ou 'Faça uma previsão de vendas'"
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-slate-400"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button 
              onClick={() => setNewMessage('Faça uma previsão de vendas para os próximos 30 dias')}
              className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full hover:bg-purple-900/70 border border-purple-700"
            >
              📊 Previsão de vendas
            </button>
            <button 
              onClick={() => setNewMessage('Crie uma estratégia para combater a concorrência')}
              className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full hover:bg-purple-900/70 border border-purple-700"
            >
              🎯 Estratégia competitiva
            </button>
            <button 
              onClick={() => setNewMessage('Analise o impacto do clima nas vendas')}
              className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full hover:bg-purple-900/70 border border-purple-700"
            >
              ☁️ Análise climática
            </button>
            <button 
              onClick={() => setNewMessage('Identifique oportunidades com base no crédito rural')}
              className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full hover:bg-purple-900/70 border border-purple-700"
            >
              💰 Oportunidades de crédito
            </button>
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
      case 'ai-assistant':
        return renderAIAssistant();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 relative z-20">
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
                  <h1 className="text-xl font-bold text-white">AgroSense</h1>
                  <p className="text-xs text-slate-400">Inteligência para o Agronegócio</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos, clientes..."
                  className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="relative p-2 text-slate-400 hover:text-white">
                  <Bell className="w-5 h-5" />
                  {showNotification && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  )}
                </button>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">João Silva</p>
                  <p className="text-xs text-slate-400">Gerente Comercial</p>
                </div>
                <div className="w-10 h-10 bg-slate-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 border-r border-slate-700 min-h-screen relative z-10">
          <nav className="p-4 space-y-1">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeModule === module.id
                    ? module.id === 'ai-assistant' 
                      ? 'bg-purple-900/50 text-purple-300 border border-purple-700'
                      : 'bg-green-900/50 text-green-300 border border-green-700'
                    : 'text-slate-400 hover:bg-slate-700'
                }`}
              >
                {module.icon}
                <span className="font-medium">{module.name}</span>
              </button>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="p-4 mt-8">
            <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-lg p-4 text-white">
              <h4 className="font-semibold mb-2">Precisão do Sistema</h4>
              <div className="text-3xl font-bold mb-1">94.8%</div>
              <p className="text-sm opacity-90">Acurácia nas previsões</p>
            </div>
          </div>

          {/* VitexBI Logo */}
          <div className="p-4 mt-auto">
            <div className="border-t border-slate-700 pt-4">
              <p className="text-xs text-slate-500 mb-2">Powered by</p>
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <svg width="40" height="40" viewBox="0 0 100 100" className="text-blue-400">
                    <path d="M20 60 L40 40 L60 50 L80 30" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path d="M20 70 L40 50 L60 60 L80 40" stroke="currentColor" strokeWidth="4" fill="none"/>
                  </svg>
                  <div className="ml-2">
                    <div className="text-sm font-bold text-white">VitexBI</div>
                    <div className="text-xs text-slate-400">Business Intelligence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 relative z-0 overflow-x-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-slate-400 mb-6">
            <span>AgroSense</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">
              {modules.find(m => m.id === activeModule)?.name}
            </span>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </main>
      </div>

      {/* Demo Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-slate-800 rounded-lg shadow-lg p-4 border border-slate-700 max-w-sm animate-slideIn z-30">
          <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Sparkles className="w-3 h-3 mr-1" />
            IA Generativa
          </div>
          <div className="flex items-start">
            <div className="bg-green-500/20 p-2 rounded-full mr-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm text-white">Nova oportunidade detectada!</h4>
              <p className="text-sm text-slate-400 mt-1">
                Cliente Fazenda Santa Maria interessado em colheitadeira. Probabilidade de conversão: 87%
              </p>
              <p className="text-xs text-purple-400 mt-2 italic">
                "IA analisou: histórico + safra + crédito + 320 clientes similares"
              </p>
              <button className="text-sm text-green-400 font-medium mt-2 hover:text-green-300">
                Ver detalhes →
              </button>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-slate-400 hover:text-white"
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
