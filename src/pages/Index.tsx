import { Header } from '@/components/Header';
import { ThemeCard } from '@/components/ThemeCard';
import { Footer } from '@/components/Footer';
import { portfolioThemes } from '@/data/portfolioData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Grid */}
      <main className="flex-1 px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioThemes.map((theme, index) => (
              <ThemeCard key={theme.id} theme={theme} index={index} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
