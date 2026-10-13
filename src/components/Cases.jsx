import { CASES } from '../data/content';
import CaseModal from './CaseModal';

const COLS = [['Problème', 'problem'], ['Solution', 'solution'], ['Résultat', 'result']];

export default function Cases({ open, setOpen }) {
  return (
    <section id="cas" className="section">
      <div className="wrap">
        <h2 className="h2">Études de cas</h2>
        <p className="section-intro">Chaque projet part d'un problème concret, pas d'une technologie.</p>
        <div className="cases">
          {CASES.map((c) => (
            <article key={c.num} className="case">
              <span className="case__num">{c.num}</span>
              <div>
                <div className="case__grid">
                  {COLS.map(([label, key]) => (
                    <div key={key}>
                      <span className="case__label">{label}</span>
                      <p className="case__text">{c[key]}</p>
                    </div>
                  ))}
                </div>
                <button type="button" className="case__more" onClick={() => setOpen(c)}>
                  Voir l'étude de cas
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CaseModal item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
