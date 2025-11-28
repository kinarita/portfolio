import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Services } from './components/Sections/Services';
import { Portfolio } from './components/Sections/Portfolio';
import { Contact } from './components/Sections/Contact';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Services />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
