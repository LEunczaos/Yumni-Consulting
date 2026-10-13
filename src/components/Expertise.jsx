import { DOMAINS, DEFAULT_CONTENT, PROCESSES, CASES } from '../data/content';

export default function Expertise({ process, onOpenCase }) {
  const current = PROCESSES.find((p) => p.id === process);
  const custom = current?.domains;
  const content = custom || DEFAULT_CONTENT;
  const linkedCase = current?.caseNum && CASES.find((c) => c.num === current.caseNum);
  const intro = custom
    ? `Pour « ${current.name} », voici ce que chaque domaine change concrètement.`
    : current
      ? "Votre processus est spécifique : nous le cadrons ensemble lors de l'audit gratuit."
      : 'Choisissez un processus ci-dessus pour personnaliser cette section.';
  return (
    <section id="expertise" className="section">
      <div className="wrap">
        <h2 className="h2">Trois domaines, une même logique</h2>
        <p className="section-intro">{intro}</p>
        <div className="pillars" aria-live="polite">
          {DOMAINS.map((d, i) => (
            <article key={d.mark} className="pillar">
              <span className="pillar__mark">{d.mark}</span>
              <div>
                <h3 className="h3">{d.title}</h3>
                <p className="pillar__text">{content[i]}</p>
                {!current?.tools && <p className="pillar__tools">{d.tools}</p>}
              </div>
            </article>
          ))}
        </div>
        {current?.tools && (
          <p className="process-tools"><strong>Outils mobilisés :</strong> {current.tools.join(' · ')}</p>
        )}
        {linkedCase && (
          <button type="button" className="case__more" onClick={() => onOpenCase(linkedCase)}>
            Voir l'étude de cas associée
          </button>
        )}
      </div>
    </section>
  );
}
