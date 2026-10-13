import Button from './Button';
import { NAV } from '../data/content';

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#hero" className="logo">YUMNI Consulting</a>
        <nav className="nav" aria-label="Navigation principale">
          {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <Button href="#contact" variant="sm">Échangez avec nous</Button>
      </div>
    </header>
  );
}
