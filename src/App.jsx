import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Parcours from './components/Parcours';
import Audit from './components/Audit';
import Expertise from './components/Expertise';
import Cases from './components/Cases';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustromCursor';

export default function App() {
  // Le processus choisi (id) personnalise « Expertise » ; l'étude de cas ouverte est partagée
  const [process, setProcess] = useState(null);
  const [openCase, setOpenCase] = useState(null);
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Parcours />
        <Audit selected={process} onSelect={setProcess} />
        <Expertise process={process} onOpenCase={setOpenCase} />
        <Cases open={openCase} setOpen={setOpenCase} />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
