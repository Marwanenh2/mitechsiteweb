from pathlib import Path
import zipfile
import textwrap

base = Path("/mnt/data/mitech_site_apple_style")
base.mkdir(parents=True, exist_ok=True)

style_css = r"""
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root{
  --bg:#f5f5f7;
  --panel:#ffffff;
  --text:#1d1d1f;
  --muted:#6e6e73;
  --line:#d2d2d7;
  --dark:#000000;
  --radius:30px;
  --shadow:0 20px 60px rgba(0,0,0,.08);
  --max:1280px;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:'Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  color:var(--text);
  background:var(--bg);
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}

.container{
  width:min(var(--max), calc(100% - 40px));
  margin:0 auto;
}

.topbar{
  position:sticky;
  top:0;
  z-index:100;
  background:rgba(255,255,255,.78);
  backdrop-filter:saturate(180%) blur(16px);
  border-bottom:1px solid rgba(0,0,0,.06);
}

.nav{
  min-height:72px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
}

.brand{
  font-size:15px;
  font-weight:800;
  letter-spacing:.16em;
  display:flex;
  align-items:center;
  gap:12px;
}
.brand-mark{
  width:34px;height:34px;border-radius:12px;
  background:#111;
  color:#fff;
  display:grid;place-items:center;
  font-size:15px;
  font-weight:800;
}

.nav-links{
  display:flex;
  gap:28px;
  align-items:center;
}
.nav-links a{
  font-size:14px;
  color:#3a3a3c;
}
.nav-links a.active,
.nav-links a:hover{
  color:#000;
}

.nav-cta{
  padding:10px 16px;
  border-radius:999px;
  background:#111;
  color:#fff;
  font-size:14px;
  font-weight:700;
}

.hero{
  padding:54px 0 26px;
}
.hero-center{
  text-align:center;
  max-width:980px;
  margin:0 auto;
}
.eyebrow{
  font-size:17px;
  font-weight:700;
  color:#0066cc;
  margin-bottom:10px;
}
h1{
  margin:0;
  font-size:clamp(46px,8vw,110px);
  line-height:.92;
  letter-spacing:-.06em;
  font-weight:800;
}
.hero-sub{
  max-width:840px;
  margin:18px auto 0;
  font-size:24px;
  line-height:1.45;
  color:var(--muted);
  letter-spacing:-.02em;
}
.hero-actions{
  display:flex;
  justify-content:center;
  gap:14px;
  flex-wrap:wrap;
  margin-top:26px;
}
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:14px 22px;
  border-radius:999px;
  font-weight:600;
  transition:.25s ease;
}
.btn-dark{
  background:#0071e3;
  color:#fff;
}
.btn-dark:hover{filter:brightness(.96)}
.btn-light{
  border:1px solid #0071e3;
  color:#0071e3;
  background:transparent;
}
.btn-light:hover{
  background:#0071e3;
  color:#fff;
}

.hero-media{
  margin-top:38px;
  border-radius:40px;
  overflow:hidden;
  background:#000;
  box-shadow:var(--shadow);
}
.hero-media img{
  width:100%;
  height:min(72vw,680px);
  object-fit:cover;
  opacity:.96;
}

.section{
  padding:34px 0;
}
.section-head{
  text-align:center;
  max-width:860px;
  margin:0 auto 26px;
}
.section-head h2{
  margin:0;
  font-size:clamp(34px,6vw,72px);
  line-height:.96;
  letter-spacing:-.05em;
}
.section-head p{
  margin:12px auto 0;
  max-width:700px;
  color:var(--muted);
  font-size:21px;
  line-height:1.5;
  letter-spacing:-.02em;
}

.panel{
  background:var(--panel);
  border-radius:36px;
  overflow:hidden;
  box-shadow:var(--shadow);
}

.feature-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:22px;
}
.feature{
  min-height:640px;
  position:relative;
  background:#fff;
  border-radius:36px;
  overflow:hidden;
  box-shadow:var(--shadow);
}
.feature.dark{
  background:#000;
  color:#fff;
}
.feature-content{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  text-align:center;
  padding:54px 34px 24px;
  z-index:2;
}
.feature h3{
  margin:0;
  font-size:clamp(30px,4.4vw,54px);
  line-height:1;
  letter-spacing:-.05em;
}
.feature p{
  margin:14px auto 0;
  max-width:520px;
  font-size:20px;
  line-height:1.5;
  color:inherit;
  opacity:.82;
  letter-spacing:-.02em;
}
.feature img{
  position:absolute;
  inset:auto 0 0 0;
  width:100%;
  height:62%;
  object-fit:cover;
}

.card-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
}
.card{
  background:#fff;
  border-radius:32px;
  padding:34px;
  box-shadow:var(--shadow);
  min-height:300px;
}
.card .kicker{
  font-size:14px;
  font-weight:700;
  color:#0066cc;
  margin-bottom:8px;
}
.card h3{
  margin:0;
  font-size:34px;
  line-height:1.05;
  letter-spacing:-.04em;
}
.card p{
  margin:14px 0 0;
  color:var(--muted);
  font-size:18px;
  line-height:1.6;
  letter-spacing:-.02em;
}

.showcase{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:22px;
  align-items:stretch;
}
.showcase-copy{
  background:#fff;
  border-radius:36px;
  padding:48px;
  box-shadow:var(--shadow);
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.showcase-copy h2{
  margin:0;
  font-size:clamp(36px,5vw,70px);
  line-height:.96;
  letter-spacing:-.05em;
}
.showcase-copy p{
  margin-top:16px;
  color:var(--muted);
  font-size:20px;
  line-height:1.65;
}
.showcase-media{
  border-radius:36px;
  overflow:hidden;
  box-shadow:var(--shadow);
}
.showcase-media img{
  width:100%;
  height:100%;
  min-height:560px;
  object-fit:cover;
}

.info-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:22px;
}
.info-panel{
  background:#fff;
  border-radius:36px;
  padding:42px;
  box-shadow:var(--shadow);
}
.info-panel h3{
  margin:0;
  font-size:42px;
  line-height:1;
  letter-spacing:-.05em;
}
.info-list{
  display:grid;
  gap:14px;
  margin-top:22px;
}
.info-item{
  padding:18px 0;
  border-top:1px solid #e5e5e7;
  font-size:18px;
  line-height:1.6;
}
.info-item strong{
  display:block;
  font-size:15px;
  color:#6e6e73;
  margin-bottom:4px;
  letter-spacing:-.01em;
}

.footer{
  text-align:center;
  color:var(--muted);
  font-size:14px;
  padding:28px 0 48px;
}

.reveal{
  opacity:0;
  transform:translateY(28px);
  transition:opacity .8s ease, transform .8s ease;
}
.reveal.visible{
  opacity:1;
  transform:translateY(0);
}

@media (max-width:980px){
  .feature-grid,
  .card-grid,
  .showcase,
  .info-grid{
    grid-template-columns:1fr;
  }
  .feature{min-height:560px}
}

@media (max-width:760px){
  .nav{
    flex-wrap:wrap;
    justify-content:center;
    padding:12px 0;
  }
  .nav-links{
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
    gap:16px;
  }
  .hero-sub{font-size:20px}
  .section-head p,
  .showcase-copy p,
  .card p,
  .feature p{
    font-size:18px;
  }
  .showcase-copy,
  .info-panel,
  .card{
    padding:28px;
  }
}
"""

script_js = r"""
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  document.querySelectorAll('[data-year]').forEach((el) => el.textContent = new Date().getFullYear());
});
"""

nav = """
<header class="topbar">
  <div class="container nav">
    <a class="brand" href="index.html">
      <div class="brand-mark">M</div>
      <span>MITECH</span>
    </a>

    <nav class="nav-links">
      <a href="index.html">Accueil</a>
      <a href="reparations.html">Réparations</a>
      <a href="achat.html">Achat / Vente</a>
      <a href="contact.html">Contact</a>
    </nav>

    <a class="nav-cta" href="contact.html">Devis</a>
  </div>
</header>
"""

footer = """
<footer class="footer">
  <div class="container">
    Mitech Rouen — Démo de site vitrine moderne • <span data-year></span>
  </div>
</footer>
"""

index_html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mitech Rouen — Accueil</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  {nav}

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-center reveal">
          <div class="eyebrow">Réparer. Acheter. Avancer.</div>
          <h1>Mitech Rouen.</h1>
          <p class="hero-sub">
            Réparation de téléphones, vente d’appareils, accessoires et accompagnement technique,
            dans une expérience plus claire, plus premium et plus moderne.
          </p>
          <div class="hero-actions">
            <a class="btn btn-dark" href="reparations.html">Découvrir</a>
            <a class="btn btn-light" href="contact.html">Nous contacter</a>
          </div>
        </div>

        <div class="hero-media reveal">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1800&q=80" alt="Smartphone premium">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <h2>Le service mobile,<br>pensé pour aujourd’hui.</h2>
          <p>
            Un site plus minimal, plus élégant et plus haut de gamme pour donner tout de suite
            une impression sérieuse et moderne.
          </p>
        </div>

        <div class="feature-grid">
          <article class="feature dark reveal">
            <div class="feature-content">
              <h3>Réparation experte</h3>
              <p>Écran, batterie, connecteur, audio, caméra et diagnostic clair.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1400&q=80" alt="Réparation smartphone">
          </article>

          <article class="feature reveal">
            <div class="feature-content">
              <h3>Achat & reprise</h3>
              <p>Téléphones neufs ou reconditionnés, avec conseil selon le budget et l’usage.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1400&q=80" alt="Achat smartphone">
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="card-grid">
          <article class="card reveal">
            <div class="kicker">Réparation</div>
            <h3>Rapide. Claire. Rassurante.</h3>
            <p>Une présentation simple des interventions les plus demandées pour inspirer confiance immédiatement.</p>
          </article>

          <article class="card reveal">
            <div class="kicker">Vente</div>
            <h3>Le bon appareil, au bon niveau.</h3>
            <p>Une page dédiée pour exposer les téléphones et mettre en avant les produits utiles en boutique.</p>
          </article>

          <article class="card reveal">
            <div class="kicker">Boutique</div>
            <h3>Des infos pratiques, sans friction.</h3>
            <p>Adresse, téléphone, horaires et contact accessibles rapidement, sur desktop comme sur mobile.</p>
          </article>
        </div>
      </div>
    </section>
  </main>

  {footer}
  <script src="script.js"></script>
</body>
</html>
"""

reparations_html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mitech Rouen — Réparations</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  {nav}

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-center reveal">
          <div class="eyebrow">Réparations</div>
          <h1>Réparer l’essentiel.</h1>
          <p class="hero-sub">
            Une page dédiée aux interventions les plus importantes, avec un rendu plus net,
            plus premium et plus crédible.
          </p>
          <div class="hero-actions">
            <a class="btn btn-dark" href="contact.html">Demander un devis</a>
            <a class="btn btn-light" href="achat.html">Voir les produits</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container showcase">
        <div class="showcase-copy reveal">
          <h2>Une panne ne devrait pas ralentir votre journée.</h2>
          <p>
            Écran cassé, batterie usée, problème de charge, caméra ou audio :
            la page réparation peut présenter clairement les services principaux et rassurer le client.
          </p>
        </div>
        <div class="showcase-media reveal">
          <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1600&q=80" alt="Technicien réparation smartphone">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container card-grid">
        <article class="card reveal">
          <div class="kicker">Écran</div>
          <h3>Remplacement écran</h3>
          <p>Pour les fissures, les dalles endommagées ou les problèmes d’affichage selon le modèle.</p>
        </article>
        <article class="card reveal">
          <div class="kicker">Batterie</div>
          <h3>Autonomie retrouvée</h3>
          <p>Remplacement batterie pour redonner de la durée de vie et un usage plus fluide au quotidien.</p>
        </article>
        <article class="card reveal">
          <div class="kicker">Diagnostic</div>
          <h3>Charge, audio, caméra</h3>
          <p>Analyse claire du problème avant intervention afin d’orienter vers la solution la plus pertinente.</p>
        </article>
      </div>
    </section>
  </main>

  {footer}
  <script src="script.js"></script>
</body>
</html>
"""

achat_html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mitech Rouen — Achat / Vente</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  {nav}

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-center reveal">
          <div class="eyebrow">Achat / Vente</div>
          <h1>Choisir mieux.</h1>
          <p class="hero-sub">
            Des téléphones neufs ou reconditionnés, des accessoires et une présentation plus élégante
            pour valoriser l’offre de la boutique.
          </p>
          <div class="hero-actions">
            <a class="btn btn-dark" href="contact.html">Demander conseil</a>
            <a class="btn btn-light" href="index.html">Retour accueil</a>
          </div>
        </div>

        <div class="hero-media reveal">
          <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1800&q=80" alt="Téléphone haut de gamme">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container card-grid">
        <article class="card reveal">
          <div class="kicker">Neuf</div>
          <h3>Des modèles actuels.</h3>
          <p>Une mise en avant simple, premium et lisible pour présenter les appareils proposés en boutique.</p>
        </article>
        <article class="card reveal">
          <div class="kicker">Reconditionné</div>
          <h3>Une option intelligente.</h3>
          <p>Parfait pour montrer une solution plus accessible, sans alourdir l’expérience utilisateur.</p>
        </article>
        <article class="card reveal">
          <div class="kicker">Accessoires</div>
          <h3>Ce qu’il faut au quotidien.</h3>
          <p>Coques, câbles, verres trempés, chargeurs et produits utiles dans une présentation plus propre.</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container feature-grid">
        <article class="feature reveal">
          <div class="feature-content">
            <h3>Présentation produits</h3>
            <p>Le bon format pour mettre ensuite les vrais modèles, les vrais prix et les vraies promotions.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1400&q=80" alt="Produits smartphones">
        </article>

        <article class="feature dark reveal">
          <div class="feature-content">
            <h3>Conseil en boutique</h3>
            <p>Un rendu plus premium qui donne envie de venir demander conseil directement en magasin.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80" alt="Conseil smartphone">
        </article>
      </div>
    </section>
  </main>

  {footer}
  <script src="script.js"></script>
</body>
</html>
"""

contact_html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mitech Rouen — Contact</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  {nav}

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-center reveal">
          <div class="eyebrow">Contact</div>
          <h1>Rester simple.</h1>
          <p class="hero-sub">
            Toutes les informations utiles, dans une page plus minimaliste,
            plus lisible et plus proche d’un vrai site premium.
          </p>
          <div class="hero-actions">
            <a class="btn btn-dark" href="tel:0987312113">Appeler</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container info-grid">
        <div class="info-panel reveal">
          <h3>Mitech Rouen</h3>
          <div class="info-list">
            <div class="info-item">
              <strong>Adresse</strong>
              156 Rue Saint-Sever, 76100 Rouen
            </div>
            <div class="info-item">
              <strong>Téléphone</strong>
              09 87 31 21 13
            </div>
            <div class="info-item">
              <strong>Horaires affichés</strong>
              Lundi à jeudi : 10h30 – 19h<br>
              Vendredi : 10h30 – 12h30 / 14h30 – 19h<br>
              Samedi : 10h30 – 19h<br>
              Dimanche : fermé
            </div>
          </div>
        </div>

        <div class="showcase-media reveal">
          <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80" alt="Univers tech premium">
        </div>
      </div>
    </section>
  </main>

  {footer}
  <script src="script.js"></script>
</body>
</html>
"""

files = {
    "index.html": index_html,
    "reparations.html": reparations_html,
    "achat.html": achat_html,
    "contact.html": contact_html,
    "style.css": style_css,
    "script.js": script_js,
}

for name, content in files.items():
    (base / name).write_text(textwrap.dedent(content).strip() + "\n", encoding="utf-8")

zip_path = Path("/mnt/data/mitech_site_apple_style.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
    for f in files:
        zf.write(base / f, arcname=f)

print("Created:")
for f in files:
    print("-", f)
print("\nZIP:", zip_path)
