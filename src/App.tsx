import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Fra usynlig til uunnværlig.",
    "Toppen av Google – der du hører hjemme.",
    "En nettside som føles lynrask.",
    "Flere klikk. Flere kunder. Mer vekst.",
    "Synlighet er fremtidens valuta."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phrases]);

  const opacity = Math.min(scrollY / 500, 0.7);

  return (
    <div className="relative min-h-[200vh] overflow-x-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
        style={{
          backgroundImage: 'url(/background.jpg.png)',
          filter: 'brightness(0.7)'
        }}
      />

      <div
        className="fixed inset-0 bg-black/40 transition-opacity duration-300"
        style={{ opacity: opacity * 0.2 }}
      />

      <div className="relative z-10">
        <div className="fixed top-8 left-8 z-50">
          <div className="text-3xl font-bold">
            <span className="text-orange-500">Kraft</span><span className="text-white">AI</span>
          </div>
        </div>

        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 h-20 flex items-center justify-center">
              {currentText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          <div className="w-full max-w-3xl relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 rounded-full blur-xl opacity-75"></div>

            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
              <input
                type="text"
                placeholder="Skriv inn Url-en her."
                className="flex-1 bg-transparent text-white placeholder-gray-300 px-8 py-5 rounded-l-full outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-full hover:scale-105 transition-transform duration-200 flex items-center gap-2 mr-1">
                <Search size={24} />
                <span className="font-semibold">Søk</span>
              </button>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Hvorfor velge oss?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Økt synlighet</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi plasserer nettsiden din på toppen av søkeresultatene, slik at potensielle kunder finner deg først.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Raskere nettside</h3>
                <p className="text-gray-300 leading-relaxed">
                  Optimaliser hastigheten på siden din. Raskere lasting gir bedre brukeropplevelse og høyere ranking.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mer omsetning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Flere besøkende betyr flere kunder. Vi hjelper deg å konvertere trafikk til inntekter.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Målrettet trafikk</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tiltrekk de riktige kundene med presise søkeord og optimalisert innhold.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Målbare resultater</h3>
                <p className="text-gray-300 leading-relaxed">
                  Følg fremgangen din med detaljerte rapporter og se hvordan synligheten din vokser.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Langsiktig vekst</h3>
                <p className="text-gray-300 leading-relaxed">
                  SEO er en investering som gir resultater over tid. Vi bygger en solid base for fremtidig suksess.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
