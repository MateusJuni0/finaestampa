import Header from './Header'
import Footer from './Footer'
import { CartProvider } from '../utils/cartContext'

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
