import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="font-handwriting text-2xl text-rose-dusty animate-pulse-subtle">♡</p>
      <h1 className="mt-4 font-serif text-4xl md:text-6xl text-burgundy">
        Somewhere Between Destiny &amp; Us
      </h1>
      <p className="mt-6 max-w-xl font-editorial text-xl italic text-burgundy-light">
        Ek kahaani hai... jo shayad humne plan nahi ki thi, but somehow, it became my favourite.
      </p>
      <p className="mt-10 font-sans text-sm uppercase tracking-[0.3em] text-rose-deep">
        Our little universe is almost ready
      </p>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
