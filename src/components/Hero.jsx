import Button from './Button';
import { FLOW } from '../data/content';

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="wrap">
        <h1 className="h1">Automatiser vos processus. Transformer vos données en décisions.</h1>
        <p className="hero__lede">
          Automatisation, IA et Business Intelligence au service des entreprises et institutions au Gabon — sans dépendance à une boîte noire.
        </p>
        <div className="hero__cta">
          <Button href="#audit" variant="solid">Faire mon audit gratuit</Button>
          <Button href="#cas">Voir les résultats clients</Button>
        </div>
        <div className="flow" aria-label="Problème, automatisation, donnée, décision">
          {FLOW.map((label, i) => (
            <div key={label} style={{ display: 'contents' }}>
              {i > 0 && <span className="flow__line" aria-hidden="true" />}
              <div className="flow__node">
                <span className="flow__dot" />
                <span className="flow__label">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
