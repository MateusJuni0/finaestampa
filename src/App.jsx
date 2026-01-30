import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import ProdutoDetalhe from './pages/ProdutoDetalhe'
import Personalizar from './pages/Personalizar'
import Carrinho from './pages/Carrinho'
import Checkout from './pages/Checkout'
import Sobre from './pages/Sobre'
import FAQ from './pages/FAQ'
import Termos from './pages/Termos'
import Privacidade from './pages/Privacidade'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/personalizar" element={<Personalizar />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </Layout>
  )
}

export default App
