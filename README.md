# 🌸 SophroKare - Site Web Professionnel

**Version 2.0** | Dernière mise à jour : 10 octobre 2025

Site web professionnel pour cabinet de sophrologie à Paris. Design moderne, optimisé SEO et conforme RGPD.

---

## 📋 Table des matières

- [Caractéristiques](#-caractéristiques)
- [Technologies utilisées](#-technologies-utilisées)
- [Structure du projet](#-structure-du-projet)
- [Installation](#-installation)
- [Configuration](#%EF%B8%8F-configuration)
- [Déploiement](#-déploiement)
- [SEO & Analytics](#-seo--analytics)
- [Maintenance](#-maintenance)
- [Support](#-support)

---

## ✨ Caractéristiques

### Design & UX
- ✅ Design moderne et épuré avec dégradés violets/mauves
- ✅ Interface responsive (mobile, tablette, desktop)
- ✅ Animations subtiles et professionnelles
- ✅ Navigation fluide avec smooth scroll
- ✅ Accessibilité WCAG 2.1 niveau AA

### Fonctionnalités
- 📅 Réservation en ligne via Cal.com
- 📊 Google Analytics intégré
- 🍪 Bannière cookies RGPD compliant
- 📱 100% responsive
- ⚡ Chargement optimisé (< 3 secondes)
- 🔒 Sécurisé (HTTPS, headers sécurisés)

### SEO
- 🔍 Optimisé pour Google
- 🗺️ Sitemap XML
- 🤖 Robots.txt configuré
- 📱 Schema.org (LocalBusiness, Person, Service)
- 🌐 Open Graph & Twitter Cards

### Légal & Conformité
- ⚖️ Mentions légales complètes
- 🔐 Politique de confidentialité RGPD
- 📜 Conditions Générales de Vente (CGV)
- 🍪 Gestion des cookies

---

## 🛠 Technologies utilisées

### Front-end
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes (Grid, Flexbox, Animations)
- **JavaScript ES6+** - Interactivité
- **Bootstrap 5.3** - Framework CSS
- **Bootstrap Icons** - Icônes

### Services externes
- **Cal.com** - Système de réservation
- **Google Analytics** - Statistiques
- **Google Fonts** - Typographie
- **CDN Cloudflare** - Performance

### Serveur
- **Apache** - Serveur web
- **.htaccess** - Configuration serveur

---

## 📁 Structure du projet

```
sophrokare/
├── index.html                      # Page principale
├── mentions-legales.html           # Mentions légales
├── politique-confidentialite.html  # RGPD
├── cgv.html                        # Conditions de vente
├── sitemap.xml                     # Plan du site
├── robots.txt                      # Configuration robots
├── .htaccess                       # Configuration Apache
├── README.md                       # Ce fichier
│
├── css/
│   ├── styles.css                  # Styles principaux
│   └── print.css                   # Styles d'impression
│
├── js/
│   ├── main.js                     # JavaScript principal
│   └── analytics.js                # Tracking Analytics
│
└── images/
    ├── favicon-32x32.png           # Favicon
    ├── apple-touch-icon.png        # Icône iOS
    ├── photo-profil.webp           # Photo profil
    ├── khadija-circle.webp         # Photo À propos
    ├── og-image.jpg                # Image Open Graph
    └── services/
        ├── gestion-stress.webp
        ├── amelioration-sommeil.webp
        ├── confiance.webp
        ├── preparation-mentale.webp
        ├── gestion-emotion.webp
        └── accompagnement-perinatal.webp
```

---

## 🚀 Installation

### Prérequis
- Serveur web (Apache/Nginx)
- PHP 7.4+ (optionnel)
- Certificat SSL (HTTPS)
- Accès FTP/SSH

### Étape 1 : Télécharger les fichiers

```bash
# Cloner ou télécharger le projet
git clone https://github.com/votre-repo/sophrokare.git
cd sophrokare
```

### Étape 2 : Préparer les images

**IMPORTANT** : Optimisez vos images avant de les uploader !

1. **Convertir en WebP** (meilleure compression)
   - Utilisez [Squoosh.app](https://squoosh.app/)
   - Qualité recommandée : 80-85%

2. **Nommer correctement les fichiers**
   ```
   images/
   ├── photo-profil.webp           (250x250px)
   ├── khadija-circle.webp         (400x400px)
   └── services/
       ├── gestion-stress.webp     (400x220px)
       ├── amelioration-sommeil.webp
       ├── confiance.webp
       ├── preparation-mentale.webp
       ├── gestion-emotion.webp
       └── accompagnement-perinatal.webp
   ```

### Étape 3 : Upload via FTP

```bash
# Uploader tous les fichiers dans le dossier public_html/
# Via FTP (FileZilla, Cyberduck, etc.)
```

### Étape 4 : Vérifier les permissions

```bash
# Permissions recommandées
chmod 644 *.html
chmod 644 *.xml
chmod 644 *.txt
chmod 755 css/ js/ images/
```

---

## ⚙️ Configuration

### 1. Google Analytics

**Fichier : `index.html`** (ligne ~55)
```html
<!-- Remplacer G-XXXXXXXXXX par votre ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Fichier : `js/analytics.js`** (ligne ~10)
```javascript
const ANALYTICS_CONFIG = {
    trackingId: 'G-XXXXXXXXXX', // ← Votre ID ici
    ...
};
```

### 2. Cal.com

**Fichier : `index.html`** (ligne ~700+)
```html
<iframe src="https://cal.com/VOTRE-USERNAME"></iframe>
```

**Fichier : `js/main.js`** (ligne ~80)
```javascript
const baseUrl = 'https://cal.com/VOTRE-USERNAME';
```

### 3. Informations personnelles

**À compléter dans tous les fichiers HTML** :

```html
<!-- Coordonnées -->
<li>Adresse : [VOTRE ADRESSE COMPLÈTE]</li>
<li>Téléphone : [VOTRE TÉLÉPHONE]</li>
<li>Email : contact@sophrokare.fr</li>
<li>SIRET : [VOTRE SIRET]</li>
```

**Fichiers concernés :**
- `index.html`
- `mentions-legales.html`
- `politique-confidentialite.html`
- `cgv.html`

### 4. Réseaux sociaux

**Fichier : `index.html`** (footer)
```html
<a href="https://www.facebook.com/VOTRE-PAGE">Facebook</a>
<a href="https://www.instagram.com/VOTRE-COMPTE">Instagram</a>
<a href="https://www.linkedin.com/in/VOTRE-PROFIL">LinkedIn</a>
```

### 5. Domaine et URLs

**Fichier : `sitemap.xml`**
```xml
<!-- Remplacer sophrokare.fr par votre domaine -->
<loc>https://www.VOTRE-DOMAINE.fr/</loc>
```

**Fichier : `robots.txt`**
```
Sitemap: https://www.VOTRE-DOMAINE.fr/sitemap.xml
```

---

## 🌐 Déploiement

### Hébergeurs recommandés

1. **OVH** (France)
   - Prix : ~3-10€/mois
   - SSL gratuit
   - Support français

2. **O2Switch** (France)
   - Prix : ~6€/mois
   - Illimité
   - Excellent support

3. **Netlify** (Gratuit)
   - Parfait pour sites statiques
   - SSL automatique
   - CDN global

### Étapes de déploiement

#### Via FTP (OVH, O2Switch)

1. Connectez-vous à votre FTP
2. Uploadez tous les fichiers dans `public_html/`
3. Vérifiez que `.htaccess` est bien présent
4. Testez : `https://votre-domaine.fr`

#### Via Netlify (gratuit)

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

### Vérification post-déploiement

✅ **Checklist**
- [ ] Site accessible en HTTPS
- [ ] Toutes les images s'affichent
- [ ] Cal.com fonctionne
- [ ] Google Analytics actif
- [ ] Cookies banner visible
- [ ] Formulaires fonctionnels
- [ ] Responsive sur mobile

---

## 🔍 SEO & Analytics

### Google Search Console

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter votre propriété
3. Vérifier via balise HTML ou DNS
4. Soumettre le sitemap : `https://votre-domaine.fr/sitemap.xml`

### Google Analytics

1. Créer un compte sur [Google Analytics](https://analytics.google.com)
2. Créer une propriété GA4
3. Récupérer l'ID (G-XXXXXXXXXX)
4. Insérer dans `index.html` et `js/analytics.js`

### Google My Business

1. Créer une fiche sur [Google Business](https://business.google.com)
2. Remplir toutes les informations
3. Ajouter photos professionnelles
4. Lier au site web

### Mots-clés cibles

```
- sophrologie Paris
- sophrologue certifié Paris
- gestion du stress Paris
- amélioration sommeil sophrologie
- confiance en soi Paris
- préparation mentale Paris
- sophrologie périnatale
- cabinet sophrologie [votre arrondissement]
```

---

## 🔧 Maintenance

### Mises à jour régulières

**Mensuel**
- ✅ Vérifier les liens cassés
- ✅ Mettre à jour les témoignages
- ✅ Ajouter du nouveau contenu (blog)

**Trimestriel**
- ✅ Analyser Google Analytics
- ✅ Optimiser les images
- ✅ Vérifier la vitesse (PageSpeed Insights)

**Annuel**
- ✅ Renouveler le SSL
- ✅ Mettre à jour les CGV
- ✅ Sauvegarder le site

### Sauvegardes

```bash
# Sauvegarder via FTP tous les mois
# Créer une archive ZIP :
sophrokare-backup-2025-10.zip
```

### Performance

**Outils de test**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Objectifs**
- Score PageSpeed : > 90/100
- Temps de chargement : < 3 secondes
- Poids total : < 2 MB

---

## 📞 Support

### Contact développeur
- **Email** : dev@example.com
- **Documentation** : ce README.md

### Ressources utiles
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Cal.com Documentation](https://docs.cal.com/)
- [Google Analytics](https://support.google.com/analytics)
- [MDN Web Docs](https://developer.mozilla.org/)

### Problèmes courants

#### Le site ne s'affiche pas
1. Vérifier que tous les fichiers sont uploadés
2. Vérifier les permissions (chmod 644/755)
3. Vérifier le `.htaccess`

#### Les images ne s'affichent pas
1. Vérifier les chemins (`images/photo-profil.webp`)
2. Vérifier les permissions
3. Vérifier le format (WebP supporté)

#### Cal.com ne fonctionne pas
1. Vérifier l'URL dans `index.html`
2. Vérifier que le calendrier Cal.com est public
3. Tester l'iframe directement

#### Google Analytics ne fonctionne pas
1. Vérifier l'ID de tracking (G-XXXXXXXXXX)
2. Attendre 24-48h pour les premières données
3. Vérifier les cookies acceptés

---

## 📄 Licence

© 2025 SophroKare - Tous droits réservés

Ce projet est la propriété exclusive de Khadija BAKESSOU. Toute reproduction, distribution ou utilisation sans autorisation expresse est interdite.

---

## 🎉 Crédits

- **Développement** : [Votre nom/agence]
- **Design** : SophroKare
- **Photos** : [Photographe]
- **Icônes** : Bootstrap Icons
- **Polices** : Google Fonts

---

## 📌 Changelog

### Version 2.0 (10/10/2025)
- ✅ Refonte complète du design
- ✅ Ajout Cal.com
- ✅ Optimisation SEO
- ✅ Conformité RGPD
- ✅ Analytics intégré

### Version 1.0 (Date initiale)
- 🎉 Lancement initial

---

**Fait avec ❤️ pour SophroKare**