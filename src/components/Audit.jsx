import { PROCESSES } from '../data/content';

export default function Audit({ selected, onSelect }) {
  const current = PROCESSES.find((p) => p.id === selected);
  return (
    <section id="audit" className="section">
      <div className="wrap">
        <h2 className="h2">Quel processus vous prend le plus de temps ?</h2>
        <p className="section-intro" style={{ fontSize: '1rem' }}>
          Identifiez votre principal point de friction et découvrez la solution adaptée.
        </p>
        <p className="audit-note">Le choix du processus personnalise automatiquement les 3 domaines d'intervention ci-dessous.</p>
        <div className="pills" role="group" aria-label="Processus à améliorer">
          {PROCESSES.map((p) => (
            <button key={p.id} type="button" className="pill" aria-pressed={selected === p.id}
              onClick={() => onSelect(selected === p.id ? null : p.id)}>
              {p.name}
            </button>
          ))}
        </div>
        {current && (
          <div className="audit-detail" aria-live="polite">
            {current.description && <p>{current.description}</p>}
            {current.example && <p className="muted-line"><strong>Exemple concret :</strong> {current.example}</p>}
            <a className="audit-next" href="#expertise">Voir ce que nous proposerions</a>
          </div>
        )}
      </div>
    </section>
  );
}
