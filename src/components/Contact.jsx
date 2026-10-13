import Button from './Button';
import { CONTACT } from '../data/content';

export default function Contact() {
  // TODO: brancher l'envoi (API, Formspree, n8n webhook…)
  const onSubmit = (e) => { e.preventDefault(); };
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <h2 className="h2">Deux façons d'échanger</h2>
        <div className="paths">
          <form className="path" onSubmit={onSubmit}>
            <h3 className="h3">Je préfère écrire</h3>
            <p className="path__text">Décrivez votre besoin, nous revenons vers vous rapidement.</p>
            <input className="field" name="nom" placeholder="Nom" aria-label="Nom" required />
            <input className="field" name="email" type="email" placeholder="Email" aria-label="Email" required />
            <input className="field" name="besoin" placeholder="Votre besoin en une phrase" aria-label="Votre besoin en une phrase" />
            <Button variant="solid" block type="submit">Envoyer</Button>
          </form>
          <div className="path">
            <h3 className="h3">Je préfère en parler</h3>
            <p className="path__text">Réservez un créneau, ou échangez directement avec notre équipe.</p>
            <Button href={CONTACT.booking} variant="solid" block>Prendre rendez-vous</Button>
            <Button href={CONTACT.chat} block>Échangez avec nous</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
