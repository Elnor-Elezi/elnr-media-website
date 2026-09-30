import './globals.css';
import { ThemeProvider } from '../components/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import CanvasTrail from '../components/CanvasTrail';

export const metadata = {
  title: 'ELNR Media - B2B Marketing & Growth',
  description: 'Enterprise B2B Marketing, Paid Ads, and Content Systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased font-sans">
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-500 relative">
            <CanvasTrail />
            <Navbar />
            <main className="flex-grow relative z-10">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
