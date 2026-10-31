import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-container">
      <main className="main-content">
        <h1>
          O seu próximo <span className="highlight">destino</span> pode estar aqui...
        </h1>
        <p className="subtitle">
          Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
        </p>
        <p className="description">
          No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais 
          que incluem passagens aéreas, hotéis, café da manhã e até seguro viagem com <strong>preços arrasadores!</strong>
        </p>
        <p className="call-to-action">
          Se você ainda não tem um destino definido, confira nossa seção de ofertas.
        </p>
      </main>

      <Footer />
    </div>
  );
}