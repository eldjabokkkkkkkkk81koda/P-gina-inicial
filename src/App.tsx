/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mascot from './components/Mascot';
import UnionBonfire from './components/UnionBonfire';
import FundraisingCTA from './components/FundraisingCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-black w-full relative selection:bg-wine/30 selection:text-gold flex flex-col overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main className="relative z-10 flex flex-col flex-1">
        <Hero />
        <About />
        <Mascot />
        <UnionBonfire />
        <FundraisingCTA />
      </main>
      <Footer />
    </div>
  );
}
