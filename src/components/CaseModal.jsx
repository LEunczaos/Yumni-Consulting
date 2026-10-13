import { useEffect, useRef } from 'react';

// Accepte une URL YouTube complète (watch, youtu.be, embed) ou un identifiant seul
const ytId = (v) => (v.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/) || [, v])[1];

export default function CaseModal({ item, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (item && d && !d.open) d.showModal();
    if (!item && d?.open) d.close();
  }, [item]);
  return (
    <dialog ref={ref} className="modal" onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}>
      {item && (
        <div className="modal__body">
          <button type="button" className="modal__close" onClick={onClose} aria-label="Fermer">×</button>
          <span className="case__label">Étude de cas {item.num} · {item.sector}</span>
          <h3 className="h3">{item.solution}</h3>
          <h4 className="modal__h">Objectif</h4>
          <p>{item.objectif}</p>
          <h4 className="modal__h">Problème à résoudre</h4>
          <p>{item.probleme}</p>
          <h4 className="modal__h">Technologies mises en place</h4>
          <ul>{item.techs.map((t) => <li key={t}>{t}</li>)}</ul>
          <h4 className="modal__h">Résultat</h4>
          <p>{item.result}</p>
          {item.gabon && (
            <>
              <h4 className="modal__h">Chez Yumni, au Gabon</h4>
              <p>{item.gabon}</p>
            </>
          )}
          {item.videos?.length > 0 && (
            <>
              <h4 className="modal__h">Pour voir la technique en action</h4>
              <p className="modal__note">Vidéos externes : elles illustrent la méthode, pas un projet Yumni.</p>
              {item.videos.map((v) => {
                const id = ytId(v.url);
                return (
                  <figure key={id} className="modal__fig">
                    <div className="modal__video">
                      <iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={v.title} loading="lazy"
                        allow="encrypted-media; picture-in-picture" allowFullScreen />
                    </div>
                    <figcaption>
                      {v.title}{v.channel && ` — ${v.channel}`} ·{' '}
                      <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer">Ouvrir sur YouTube</a>
                    </figcaption>
                  </figure>
                );
              })}
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
