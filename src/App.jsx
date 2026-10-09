import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Crown,
  Heart,
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  UsersRound,
  X,
} from "lucide-react";
import avatar from "../diseños/988e7ec2-dc5a-49e4-8dd4-870f1111a497.png";
import galleryImageOne from "../diseños/988e7ec2-dc5a-49e4-8dd4-870f1111a497.png";
import galleryImageTwo from "../diseños/7tRZn7t7WPD5.jpg";
import galleryImageThree from "../diseños/1001419530.jpg";
import galleryImageFour from "../diseños/juyjyuj.png";
import gabyPhoto from "../diseños/amigos/gaby.jpg";
import jokerPhoto from "../diseños/amigos/joker.jpg";
import keyPhoto from "../diseños/amigos/key.jpg";
import leonelPhoto from "../diseños/amigos/leonel.jpg";
import lexPhoto from "../diseños/amigos/lex.jpg";
import epikaPhoto from "../diseños/amigos/epika.jpg";
import songClintEastwood from "../diseños/music/Gorillaz - Clint Eastwood.mp3";
import Inicio from "./Inicio.jsx";

const profileQuote =
  "No soy perfecta y no necesito serlo. Soy una persona que aprende, crece, se equivoca y vuelve a intentarlo; y eso ya es motivo suficiente para sentirme orgullosa.";

const galleryPhotos = [
  { src: galleryImageOne, alt: "Retrato de Day con gafas", caption: "UN INSTANTE MÍO" },
  { src: galleryImageTwo, alt: "Retrato cercano de Day", caption: "DETALLES QUE AMO" },
  { src: galleryImageThree, alt: "Retrato de Day con luz suave", caption: "LUZ DE MI MUNDO" },
  { src: galleryImageFour, alt: "Retrato de Day sonriendo", caption: "RECUERDOS BONITOS" },
];

const playlist = [
  { title: "Clint Eastwood", artist: "Gorillaz", src: songClintEastwood },
];

const friends = [
  { name: "Lex", id: "200003", country: "El Salvador", code: "SV", photo: lexPhoto, phrase: "Siempre hay una buena razón para sonreír.", url: "https://xat.me/200003" },
  { name: "Key", id: "148527139", country: "Venezuela", code: "VE", photo: keyPhoto, phrase: "Las mejores historias nacen de buenos encuentros.", url: "https://xat.me/iKey" },
  { name: "Joker", id: "843870831", country: "México", code: "MX", photo: jokerPhoto, phrase: "Un poco de alegría cambia cualquier día.", url: "https://xat.me/843870831" },
  { name: "Leonel", id: "1536087746", country: "Argentina", code: "AR", photo: leonelPhoto, phrase: "Que nunca falten sueños por compartir.", url: "https://xat.me/1536087746" },
  { name: "Gaby", id: "7700077", country: "México", code: "MX", photo: gabyPhoto, phrase: "La buena energía siempre encuentra su camino.", url: "https://xat.me/Gaby" },
  { name: "Kaneh", id: "96319421", country: "Panamá", code: "PA", phrase: "Los momentos simples también son especiales.", url: "https://xat.me/96319421" },
  { name: "Epika", id: "777M", country: "Puerto Rico", code: "PR", photo: epikaPhoto, phrase: "Que cada día te encuentre brillando a tu manera.", url: "https://xat.me/Epika" },
];

const sections = [
  { id: "perfil", label: "Perfil", icon: "profile" },
  { id: "galeria", label: "Galería", icon: "gallery" },
  { id: "amigos", label: "Amigos", icon: "friends" },
];

function Icon({ name, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (name === "profile") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 19c.65-3.15 2.85-4.75 6.5-4.75s5.85 1.6 6.5 4.75" />
      </svg>
    );
  }

  if (name === "gallery") {
    return (
      <svg {...common}>
        <rect x="3.75" y="4.5" width="16.5" height="15" rx="2.25" />
        <circle cx="9" cy="9.5" r="1.5" />
        <path d="m5 17 4.7-4.6a1.1 1.1 0 0 1 1.55 0l2.05 2.05 1.55-1.55a1.1 1.1 0 0 1 1.55 0L20 15.5" />
      </svg>
    );
  }

  if (name === "friends") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="2.6" />
        <path d="M3.7 18c.5-2.65 2.25-4 5.3-4 1.55 0 2.75.35 3.65 1.05" />
        <path d="M15.5 6a2.4 2.4 0 0 1 0 4.7M15 14c2.95 0 4.7 1.3 5.3 4" />
      </svg>
    );
  }

}

function CountryFlag({ code }) {
  const common = {
    viewBox: "0 0 48 32",
    role: "img",
    "aria-label": `Bandera de ${friends.find((friend) => friend.code === code)?.country ?? code}`,
  };

  if (code === "AR") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="5" fill="#fff" />
        <path d="M5 0h38a5 5 0 0 1 5 5v5H0V5a5 5 0 0 1 5-5ZM0 22h48v5a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5v-5Z" fill="#75AADB" />
        <circle cx="24" cy="16" r="4" fill="#F6C84A" />
        <path d="m24 12 .8 3.1 2.6-1.8-1.8 2.6 3.1.8-3.1.8 1.8 2.6-2.6-1.8L24 22l-.8-3.7-2.6 1.8 1.8-2.6-3.1-.8 3.1-.8-1.8-2.6 2.6 1.8L24 12Z" fill="#E7A92B" />
      </svg>
    );
  }

  if (code === "IT") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="32" rx="5" fill="#009246" />
        <path d="M16 0h16v32H16z" fill="#fff" />
        <path d="M32 0h11a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H32z" fill="#CE2B37" />
      </svg>
    );
  }

  if (code === "ES") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="5" fill="#AA151B" />
        <path d="M0 9h48v14H0z" fill="#F1BF00" />
        <path d="M14 12h4v8h-4z" fill="#AA151B" />
        <circle cx="16" cy="14" r="1" fill="#F1BF00" />
      </svg>
    );
  }

  if (code === "SV") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="5" fill="#fff" />
        <path d="M0 0h48v10.67H0zM0 21.33h48V32H0z" fill="#0047AB" />
        <path d="M21 13h6v6h-6z" fill="#D7B56D" />
      </svg>
    );
  }

  if (code === "VE") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="5" fill="#CF142B" />
        <path d="M0 0h48v10.67H0z" fill="#F4C430" />
        <path d="M0 10.67h48v10.66H0z" fill="#0033A0" />
        <path d="m13 13.5 1.1 1.3 1.5-.3-1 1.2.8 1.4-1.5-.5-1.2 1 .1-1.5-1.3-.8 1.5-.3.5-1.5Zm6-1 .9 1.1 1.3-.2-.8 1 .7 1.2-1.3-.4-1 .8.1-1.3-1.1-.7 1.3-.3.4-1.2Zm6-.4.8 1 1.2-.2-.7.9.6 1.1-1.1-.4-.9.7.1-1.2-1-.6 1.2-.2.4-1.1Zm6 .4.8 1 1.2-.2-.7.9.6 1.1-1.1-.4-.9.7.1-1.2-1-.6 1.2-.2.4-1.1Zm5 1 .8 1 1.2-.2-.7.9.6 1.1-1.1-.4-.9.7.1-1.2-1-.6 1.2-.2.4-1.1Z" fill="#fff" />
      </svg>
    );
  }

  if (code === "PA") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="5" fill="#fff" />
        <path d="M24 0h19a5 5 0 0 1 5 5v11H24z" fill="#D21034" />
        <path d="M0 16h24v16H5a5 5 0 0 1-5-5z" fill="#005293" />
        <path d="m12 4 .9 2.7 2.9.1-2.3 1.7.9 2.8-2.4-1.7-2.4 1.7.9-2.8-2.3-1.7 2.9-.1L12 4Zm24 12 .9 2.7 2.9.1-2.3 1.7.9 2.8-2.4-1.7-2.4 1.7.9-2.8-2.3-1.7 2.9-.1L36 16Z" fill="#005293" />
      </svg>
    );
  }

  if (code === "PR") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="5" fill="#ED0000" />
        <path d="M0 6.4h48v6.4H0zm0 12.8h48v6.4H0z" fill="#fff" />
        <path d="M0 0v32l24-16z" fill="#0050A4" />
        <path d="m8 11.2 1.1 3.4h3.6l-2.9 2.1 1.1 3.4L8 18l-2.9 2.1 1.1-3.4-2.9-2.1h3.6L8 11.2Z" fill="#fff" />
      </svg>
    );
  }

  if (code === "CL") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="5" fill="#D52B1E" />
        <path d="M0 0h48v16H0z" fill="#fff" />
        <path d="M0 0h18v16H0z" fill="#0039A6" />
        <path d="m9 3 1.2 3.6 3.8.1-3 2.2 1.1 3.6L9 10.3l-3.1 2.2L7 8.9 4 6.7l3.8-.1L9 3Z" fill="#fff" />
      </svg>
    );
  }

  if (code === "MX") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="32" rx="5" fill="#006847" />
        <path d="M16 0h16v32H16z" fill="#fff" />
        <path d="M32 0h11a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H32z" fill="#CE1126" />
        <circle cx="24" cy="17" r="3" fill="#9C7A36" />
      </svg>
    );
  }

  if (code === "BR") {
    return (
    <svg {...common} xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" rx="5" fill="#009739" />
      <path d="m24 5 17 11-17 11L7 16 24 5Z" fill="#FFDF00" />
      <circle cx="24" cy="16" r="6.5" fill="#002776" />
      <path d="M18 14.5c4.5-1.1 8.5-.5 12 1.6" stroke="#fff" strokeWidth="1.2" fill="none" />
    </svg>
    );
  }

  return null;
}

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState("perfil");
  const [visibleQuoteLength, setVisibleQuoteLength] = useState(0);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [peelBurst, setPeelBurst] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favoriteTracks, setFavoriteTracks] = useState(() => new Set());
  const [playbackMessage, setPlaybackMessage] = useState("");
  const audioRef = useRef(null);
  const peelBurstTimerRef = useRef(null);
  const shouldAutoplayRef = useRef(true);
  const musicInputTypeRef = useRef("mouse");
  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => () => clearTimeout(peelBurstTimerRef.current), []);

  useEffect(() => {
    const blockContextMenu = (event) => event.preventDefault();
    const blockCopy = (event) => event.preventDefault();
    const blockDrag = (event) => event.preventDefault();
    const blockInspectionShortcuts = (event) => {
      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;
      const blockedShortcut = event.key === "F12"
        || (modifier && ["u", "s"].includes(key))
        || (modifier && event.shiftKey && ["i", "j", "c"].includes(key));

      if (blockedShortcut) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("dragstart", blockDrag);
    document.addEventListener("keydown", blockInspectionShortcuts);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("dragstart", blockDrag);
      document.removeEventListener("keydown", blockInspectionShortcuts);
    };
  }, []);

  const triggerPeelBurst = () => {
    clearTimeout(peelBurstTimerRef.current);
    setPeelBurst((burst) => burst + 1);
    peelBurstTimerRef.current = setTimeout(() => setPeelBurst(0), 720);
  };

  const changeTrack = (direction) => {
    shouldAutoplayRef.current = isPlaying;
    setPlaybackMessage("");
    setCurrentTrackIndex((index) => (
      index + direction + playlist.length
    ) % playlist.length);
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      shouldAutoplayRef.current = true;
      audio.play().then(
        () => setPlaybackMessage(""),
        (error) => {
          if (error.name === "NotAllowedError") {
            setPlaybackMessage("TOCA ▶ PARA ESCUCHAR");
          } else if (error.name !== "AbortError") {
            setPlaybackMessage("NO SE PUDO CARGAR LA CANCIÓN");
          }
        },
      );
      return;
    }

    shouldAutoplayRef.current = false;
    audio.pause();
  };

  const toggleFavorite = () => {
    setFavoriteTracks((favorites) => {
      const nextFavorites = new Set(favorites);
      if (nextFavorites.has(currentTrackIndex)) {
        nextFavorites.delete(currentTrackIndex);
      } else {
        nextFavorites.add(currentTrackIndex);
      }
      return nextFavorites;
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !shouldAutoplayRef.current) {
      return undefined;
    }

    let isCancelled = false;
    audio.play().then(
      () => {
        if (!isCancelled) {
          setPlaybackMessage("");
        }
      },
      (error) => {
        if (isCancelled) {
          return;
        }
        if (error.name === "NotAllowedError") {
          shouldAutoplayRef.current = false;
          setPlaybackMessage("TOCA ▶ PARA ESCUCHAR");
        } else if (error.name !== "AbortError") {
          setPlaybackMessage("NO SE PUDO CARGAR LA CANCIÓN");
        }
      },
    );

    return () => {
      isCancelled = true;
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (activeSection !== "perfil") {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleQuoteLength(profileQuote.length);
      return undefined;
    }

    setVisibleQuoteLength(0);
    const typingInterval = window.setInterval(() => {
      setVisibleQuoteLength((length) => {
        if (length >= profileQuote.length) {
          window.clearInterval(typingInterval);
          return length;
        }

        return length + 1;
      });
    }, 32);

    return () => window.clearInterval(typingInterval);
  }, [activeSection]);

  if (!hasEntered) {
    return <Inicio onEnter={() => setHasEntered(true)} />;
  }

  return (
    <main className="page profile-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="space" aria-label="Xatspace de Day">
        <header className="topbar">
          <a
            className="brand-mark"
            href="#inicio"
            aria-label="Ir al inicio"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo(0, 0);
              setHasEntered(false);
            }}
          >
            <span className="brand-dot" />
            <span>INICIO</span>
          </a>
          <span className="topbar-note">UN PEQUEÑO UNIVERSO</span>
        </header>

        <div className="profile-layout">
          <aside className="portrait-column" aria-label="Foto de perfil">
            <div className="portrait-wrap">
              <div className="portrait-halo" />
              <img className="portrait" src={avatar} alt="Retrato de Day" />
              <span className="portrait-sparkle sparkle-top" aria-hidden="true">
                ✦
              </span>
              <span className="portrait-sparkle sparkle-bottom" aria-hidden="true">
                ✧
              </span>
            </div>

            <h1 className="profile-name">Day</h1>
            <p className="portrait-id">ID: 116447265</p>
          </aside>

          <div className="vertical-divider" aria-hidden="true" />

          <div className="profile-content">
            <nav className="section-nav" aria-label="Apartados del perfil">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`nav-button${activeSection === section.id ? " is-active" : ""}`}
                  type="button"
                  aria-current={activeSection === section.id ? "page" : undefined}
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon name={section.icon} className="nav-icon" />
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>

            {activeSection === "perfil" ? (
              <div className="section-panel" key="perfil">
                <p className="eyebrow profile-eyebrow">
                  <span /> UN POCO SOBRE MÍ <span />
                </p>

                <div className="profile-details">
                  <article className="detail-card">
                    <span className="detail-icon flag-icon" aria-hidden="true">
                      <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="32" rx="5" fill="#F5F2EE" />
                        <path d="M5 0h38a5 5 0 0 1 5 5v5H0V5a5 5 0 0 1 5-5ZM0 22h48v5a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5v-5Z" fill="#75AADB" />
                        <circle cx="24" cy="16" r="4" fill="#F6C84A" />
                        <path d="m24 11 .8 3.6L28 13l-2.4 2.8 3.5 1.2-3.7.3.9 3.6-2.3-2.9-2.3 2.9.9-3.6-3.7-.3 3.5-1.2-2.4-2.8 3.2 1.6L24 11Z" fill="#E7A92B" />
                      </svg>
                    </span>
                    <span className="detail-copy">
                      <span className="detail-label">PAÍS</span>
                      <span className="detail-value">Argentina</span>
                    </span>
                  </article>

                  <article className="detail-card">
                    <span className="detail-icon zodiac-icon" aria-hidden="true">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 8c-6.2 3.2-9 9.2-9 16s2.8 12.8 9 16M31 8c6.2 3.2 9 9.2 9 16s-2.8 12.8-9 16M8 18h32M8 30h32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="12" cy="24" r="2.2" fill="currentColor" />
                        <circle cx="36" cy="24" r="2.2" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="detail-copy">
                      <span className="detail-label">SIGNO</span>
                      <span className="detail-value">Piscis</span>
                    </span>
                  </article>
                </div>

                <blockquote className="profile-quote" aria-label={profileQuote}>
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <p aria-hidden="true">
                    {profileQuote.slice(0, visibleQuoteLength)}
                    {visibleQuoteLength < profileQuote.length && (
                      <span className="typing-cursor" />
                    )}
                  </p>
                  <span className="quote-rule" aria-hidden="true" />
                </blockquote>

              </div>
            ) : activeSection === "galeria" ? (
              <div className="section-panel gallery-panel" key="galeria">
                <p className="eyebrow">
                  <span /> MI COLECCIÓN DE FOTOS <span />
                </p>
                <div className="gallery-stage" aria-label="Galería animada de fotos">
                  {galleryPhotos.map((photo, index) => (
                    <figure
                      className="gallery-card"
                      key={photo.src}
                      style={{ "--card-index": index }}
                    >
                      <div className="photo-frame">
                        <img src={photo.src} alt={photo.alt} />
                        <span className="photo-glint" aria-hidden="true" />
                      </div>
                      <figcaption>
                        <span className="caption-star" aria-hidden="true">✦</span>
                        {photo.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="gallery-note">PEQUEÑOS MOMENTOS, GRANDES RECUERDOS</p>
              </div>
            ) : activeSection === "amigos" ? (
              <div className="section-panel gallery-panel friends-panel" key="amigos">
                <p className="eyebrow">
                  <span /> PERSONAS ESPECIALES <span />
                </p>
                <div className="gallery-stage friends-stage" aria-label="Tarjetas animadas de amigos">
                  {friends.map((friend, index) => (
                    <article
                      className="gallery-card friend-card"
                      key={friend.id}
                      style={{ "--card-index": index }}
                    >
                      <motion.div
                        className="friend-card-content"
                        whileHover={{ scale: 1.035, y: -4 }}
                        transition={{ type: "spring", stiffness: 260, damping: 19 }}
                      >
                        <div className="friend-avatar" role="img" aria-label={`Retrato de ${friend.name}`}>
                          {friend.photo ? (
                            <img className="friend-avatar-photo" src={friend.photo} alt="" />
                          ) : (
                            <>
                              <Crown className="avatar-crown" aria-hidden="true" />
                              <UsersRound className="avatar-people" aria-hidden="true" />
                              <Heart className="avatar-heart-mark" aria-hidden="true" />
                            </>
                          )}
                          <span className="avatar-flag-badge" title={`Bandera de ${friend.country}`}>
                            <CountryFlag code={friend.code} />
                          </span>
                        </div>
                        <svg
                          className="friend-vines"
                          viewBox="0 0 220 290"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M16 269C37 236 31 197 19 169c-8-19-8-39 1-58m0 0c14 7 20 18 21 32m-21-32c-1-15 4-28 16-38m-16 38c-11-9-17-21-16-35m16 35c16 1 28 8 36 21M204 269c-21-33-15-72-3-100 8-19 8-39-1-58m0 0c-14 7-20 18-21 32m21-32c1-15-4-28-16-38m16 38c11-9 17-21 16-35m-16 35c-16 1-28 8-36 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                          <path d="M18 202c12-4 20-12 24-24m-22 2c-11-5-17-14-19-25m18-3c11-2 19-8 25-18m139 70c-12-4-20-12-24-24m22 2c11-5 17-14 19-25m-18-3c-11-2-19-8-25-18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        <div className="friend-card-body">
                          <h2>{friend.name}</h2>
                          <p className="friend-id">ID: {friend.id}</p>
                          <p className="friend-phrase">{friend.phrase}</p>
                          <a
                            className="xatme-button"
                            href={friend.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visitar xat.me de ${friend.name}`}
                          >
                            XAT.ME
                            <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                          </a>
                        </div>
                      </motion.div>
                    </article>
                  ))}
                </div>
                <p className="gallery-note">AMISTADES QUE HACEN MÁS BONITO EL CAMINO</p>
              </div>
            ) : (
              <div className="section-panel empty-panel" key={activeSection}>
                <p className="eyebrow"><span /> MI PEQUEÑO UNIVERSO</p>
                <h1>{activeSection === "galeria" ? "Galería" : "Amigos"}</h1>
                <p className="intro-copy">
                  Este espacio está preparado para agregar {activeSection === "galeria"
                    ? "mis fotos favoritas"
                    : "a las personas especiales"}.
                </p>
                <div className="coming-soon">
                  <span className="coming-soon-star" aria-hidden="true">✦</span>
                  <span>PRÓXIMAMENTE</span>
                </div>
              </div>
            )}

            <footer className="content-footer">
              <span>BY: FABRICIO DESIGN</span>
              <span className="footer-line" />
              <span aria-hidden="true">♥</span>
            </footer>
          </div>
        </div>
      </section>

      <div
        className={`music-peel${isMusicOpen ? " is-open" : ""}`}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") {
            setIsMusicOpen(false);
          }
        }}
        onFocusCapture={(event) => {
          if (
            event.target.classList.contains("music-peel-sheet")
            && musicInputTypeRef.current === "touch"
          ) {
            return;
          }
          setIsMusicOpen(true);
        }}
      >
        <svg className="music-peel-defs" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="music-peel-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 C 0.045 0.22 0.085 0.38 0.23 0.49 C 0.43 0.63 0.7 0.69 0.87 1 L 1 1 L 0 1 Z" />
            </clipPath>
          </defs>
        </svg>
        <section
          className="music-player"
          aria-label="Mini reproductor"
          aria-hidden={!isMusicOpen}
          inert={!isMusicOpen}
        >
          <div className="music-player-glow" aria-hidden="true" />
          <div className="music-player-heading">
            <Music2 size={16} strokeWidth={1.5} aria-hidden="true" />
            <span>PLAYLIST</span>
            <button
              className="music-close"
              type="button"
              aria-label="Cerrar reproductor"
              onClick={() => setIsMusicOpen(false)}
            >
              <X size={15} strokeWidth={1.7} />
            </button>
          </div>

          <div className="music-player-controls" aria-label="Controles de música">
            <button
              type="button"
              aria-label="Canción anterior"
              onClick={() => changeTrack(-1)}
            >
              <SkipBack size={17} strokeWidth={1.6} />
            </button>
            <button
              className={`music-favorite${favoriteTracks.has(currentTrackIndex) ? " is-favorite" : ""}`}
              type="button"
              aria-label={favoriteTracks.has(currentTrackIndex) ? "Quitar de favoritos" : "Marcar como favorita"}
              aria-pressed={favoriteTracks.has(currentTrackIndex)}
              onClick={toggleFavorite}
            >
              <Heart size={17} strokeWidth={1.6} fill={favoriteTracks.has(currentTrackIndex) ? "currentColor" : "none"} />
            </button>
            <button
              className="music-play"
              type="button"
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
              onClick={togglePlayback}
            >
              {isPlaying
                ? <Pause size={17} fill="currentColor" strokeWidth={1.5} />
                : <Play size={17} fill="currentColor" strokeWidth={1.5} />}
            </button>
            <button
              type="button"
              aria-label="Siguiente canción"
              onClick={() => changeTrack(1)}
            >
              <SkipForward size={17} strokeWidth={1.6} />
            </button>
          </div>

          <div className="music-current-track" aria-live="polite">
            <span className={`music-status-dot${isPlaying ? " is-playing" : ""}`} aria-hidden="true" />
            <span className="music-track-copy">
              <span className="music-track-title">{currentTrack.title}</span>
              <span className="music-track-artist">{currentTrack.artist}</span>
            </span>
          </div>
          <p className="music-playback-status" aria-live="polite">
            {playbackMessage || (isPlaying ? "REPRODUCIENDO" : "LISTA PARA SONAR")}
          </p>
        </section>

        <button
          className="music-peel-sheet"
          type="button"
          aria-label={isMusicOpen ? "Cerrar reproductor de música" : "Abrir reproductor de música"}
          aria-expanded={isMusicOpen}
          onPointerDown={(event) => {
            musicInputTypeRef.current = event.pointerType;
          }}
          onClick={(event) => {
            triggerPeelBurst();
            if (event.detail === 0 || musicInputTypeRef.current === "touch") {
              setIsMusicOpen((open) => !open);
              return;
            }
            setIsMusicOpen(true);
          }}
        >
          <svg
            className="music-peel-art"
            viewBox="0 0 150 104"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M 0 2 C 7 22 13 38 34 50 C 55 62 91 70 130 102"
              fill="none"
              stroke="rgb(255 234 239 / 78%)"
              strokeWidth="1.5"
            />
            <path
              d="M 2 9 C 10 28 17 42 37 53 C 59 65 92 73 127 100"
              fill="none"
              stroke="rgb(255 239 243 / 32%)"
              strokeWidth="1"
            />
            <path
              d="M 5 18 C 13 35 22 46 41 57 C 63 69 96 78 121 99"
              fill="none"
              stroke="rgb(255 224 197 / 42%)"
              strokeWidth="0.7"
            />
          </svg>
          <span className="music-peel-star music-peel-star-one" aria-hidden="true">✦</span>
          <span className="music-peel-star music-peel-star-two" aria-hidden="true">✧</span>
          <span className="music-peel-star music-peel-star-three" aria-hidden="true">✧</span>
          <span className="music-peel-star music-peel-star-four" aria-hidden="true">·</span>
          <span className="music-peel-heart music-peel-heart-one" aria-hidden="true">♥</span>
          {peelBurst > 0 && (
            <span key={peelBurst} className="music-peel-burst" aria-hidden="true">
              <span>✦</span>
              <span>✧</span>
              <span>♥</span>
              <span>✧</span>
              <span>✦</span>
              <span>·</span>
              <span>♥</span>
              <span>✧</span>
            </span>
          )}
          <span className="music-peel-hint">
            <Heart size={10} fill="currentColor" strokeWidth={1.2} aria-hidden="true" />
            <span>PLAYLIST</span>
          </span>
        </button>

        <audio
          ref={audioRef}
          className="music-audio"
          src={currentTrack.src}
          autoPlay
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            shouldAutoplayRef.current = true;
            setCurrentTrackIndex((index) => (index + 1) % playlist.length);
          }}
          onError={() => setPlaybackMessage("NO SE PUDO CARGAR LA CANCIÓN")}
        />
      </div>
    </main>
  );
}

export default App;
