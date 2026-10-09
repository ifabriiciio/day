import { useEffect, useState } from "react";
import botonInicio from "../diseños/Boton-inicio.png";
import "./Inicio.css";

const sparkles = [
  { left: "10%", top: "34%", delay: "0ms", size: "1.1rem" },
  { left: "18%", top: "67%", delay: "90ms", size: "0.8rem" },
  { left: "25%", top: "18%", delay: "180ms", size: "1.4rem" },
  { left: "31%", top: "79%", delay: "260ms", size: "0.9rem" },
  { left: "38%", top: "12%", delay: "120ms", size: "0.75rem" },
  { left: "45%", top: "89%", delay: "300ms", size: "1.2rem" },
  { left: "55%", top: "8%", delay: "60ms", size: "0.9rem" },
  { left: "62%", top: "82%", delay: "220ms", size: "1.3rem" },
  { left: "70%", top: "17%", delay: "150ms", size: "0.8rem" },
  { left: "77%", top: "73%", delay: "40ms", size: "1rem" },
  { left: "85%", top: "30%", delay: "280ms", size: "1.35rem" },
  { left: "91%", top: "62%", delay: "190ms", size: "0.85rem" },
];

function Inicio({ onEnter }) {
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isEntering) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const transitionTimer = window.setTimeout(onEnter, reducedMotion ? 150 : 1500);

    return () => window.clearTimeout(transitionTimer);
  }, [isEntering, onEnter]);

  return (
    <main className={`inicio-page${isEntering ? " is-entering" : ""}`}>
      <div className="inicio-ambient inicio-ambient-one" aria-hidden="true" />
      <div className="inicio-ambient inicio-ambient-two" aria-hidden="true" />

      <section className="inicio-card" aria-label="Bienvenida al universo de Day">
        <div className="inicio-content">
          <p className="inicio-kicker">
            <span />
            UN RINCÓN HECHO CON EL CORAZÓN
            <span />
          </p>
          <h1 className="inicio-title">Bienvenida</h1>
          <p className="inicio-subtitle">
            A mi Xatspace, mi pequeño mundo
            <span className="inicio-subtitle-heart" aria-label="con cariño">♥</span>
          </p>

          <div className="inicio-bear-stage">
            <span className="inicio-orbit inicio-orbit-one" aria-hidden="true" />
            <span className="inicio-orbit inicio-orbit-two" aria-hidden="true" />
            <button
              className="inicio-enter"
              type="button"
              aria-label="Entrar al perfil de Day"
              aria-busy={isEntering}
              disabled={isEntering}
              onClick={() => setIsEntering(true)}
            >
              <img
                className="inicio-bear"
                src={botonInicio}
                alt=""
                draggable="false"
              />
              <span className="inicio-enter-label">ENTER</span>
            </button>

            {isEntering && (
              <span className="inicio-sparkle-burst" aria-hidden="true">
                {sparkles.map((sparkle, index) => (
                  <span
                    className="inicio-burst-star"
                    key={index}
                    style={{
                      "--star-left": sparkle.left,
                      "--star-top": sparkle.top,
                      "--star-delay": sparkle.delay,
                      "--star-size": sparkle.size,
                    }}
                  >
                    {index % 3 === 0 ? "✦" : "✧"}
                  </span>
                ))}
              </span>
            )}
          </div>

          <p className="inicio-hint">
            <span aria-hidden="true">✦</span>
            TOCA EL CORAZÓN PARA DESCUBRIR
            <span aria-hidden="true">✦</span>
          </p>
        </div>

      </section>
    </main>
  );
}

export default Inicio;
