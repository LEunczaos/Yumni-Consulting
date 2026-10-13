import { SEO_LINKS, CONTACT } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="seo-links">
          {SEO_LINKS.map((t) => <a key={t} href="#hero">{t}</a>)}
        </div>
        <div className="foot-meta">
          <span>YUMNI Consulting — Libreville, Gabon</span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
    </footer>
  );
}
