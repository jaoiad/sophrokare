# ✅ CHECKLIST DÉPLOIEMENT - SOPHROKARE

Liste de vérification complète avant et après le lancement du site.

---

## 📋 AVANT LE DÉPLOIEMENT

### 1. Contenu & Personnalisation

- [ ] **Informations personnelles complétées**
  - [ ] Nom complet : Khadija BAKESSOU
  - [ ] Adresse complète du cabinet
  - [ ] Numéro de téléphone
  - [ ] Email : contact@sophrokare.fr
  - [ ] SIRET

- [ ] **Coordonnées réseaux sociaux**
  - [ ] Facebook (URL complète)
  - [ ] Instagram (URL complète)
  - [ ] LinkedIn (URL complète)

- [ ] **Assurance professionnelle**
  - [ ] Nom de la compagnie
  - [ ] Numéro de contrat
  - [ ] Garantie territoriale

- [ ] **Formation & Certification**
  - [ ] École de sophrologie
  - [ ] Date de certification
  - [ ] Numéro RNCP

### 2. Images & Médias

- [ ] **Toutes les images présentes**
  - [ ] `photo-profil.webp` (250x250px)
  - [ ] `khadija-circle.webp` (400x400px)
  - [ ] `gestion-stress.webp` (400x220px)
  - [ ] `amelioration-sommeil.webp`
  - [ ] `confiance.webp`
  - [ ] `preparation-mentale.webp`
  - [ ] `gestion-emotion.webp`
  - [ ] `accompagnement-perinatal.webp`

- [ ] **Images optimisées**
  - [ ] Format WebP
  - [ ] Compression 80-85%
  - [ ] Poids total < 500 KB

- [ ] **Favicon**
  - [ ] favicon-32x32.png
  - [ ] favicon-16x16.png
  - [ ] apple-touch-icon.png

### 3. Configuration Services

- [ ] **Google Analytics**
  - [ ] Compte créé
  - [ ] Propriété GA4 configurée
  - [ ] ID de tracking récupéré (G-XXXXXXXXXX)
  - [ ] ID inséré dans `index.html` (ligne ~55)
  - [ ] ID inséré dans `js/analytics.js` (ligne ~10)

- [ ] **Cal.com**
  - [ ] Compte créé sur Cal.com
  - [ ] Calendrier configuré
  - [ ] Types d'événements créés
  - [ ] URL publique récupérée
  - [ ] URL insérée dans `index.html` (modal)
  - [ ] URL insérée dans `js/main.js`

- [ ] **Domaine**
  - [ ] Domaine acheté
  - [ ] DNS configuré
  - [ ] Pointage vers l'hébergeur
  - [ ] Propagation terminée (24-48h)

### 4. Hébergement

- [ ] **Compte hébergeur**
  - [ ] Hébergeur choisi (OVH, O2Switch, etc.)
  - [ ] Plan souscrit
  - [ ] Accès FTP récupérés
  - [ ] Accès panneau de contrôle

- [ ] **SSL/HTTPS**
  - [ ] Certificat SSL activé
  - [ ] HTTPS fonctionnel
  - [ ] Redirection HTTP → HTTPS active

### 5. Fichiers Légaux

- [ ] **Mentions Légales**
  - [ ] Informations complétées
  - [ ] SIRET indiqué
  - [ ] Hébergeur mentionné

- [ ] **Politique de Confidentialité**
  - [ ] Données collectées listées
  - [ ] Durées de conservation indiquées
  - [ ] Contact CNIL ajouté

- [ ] **CGV**
  - [ ] Tarifs à jour
  - [ ] Conditions d'annulation claires
  - [ ] Médiateur de la consommation indiqué

---

## 🚀 DÉPLOIEMENT

### 1. Upload des fichiers

- [ ] **Fichiers HTML**
  - [ ] index.html
  - [ ] mentions-legales.html
  - [ ] politique-confidentialite.html
  - [ ] cgv.html

- [ ] **Fichiers CSS**
  - [ ] css/styles.css
  - [ ] css/print.css

- [ ] **Fichiers JavaScript**
  - [ ] js/main.js
  - [ ] js/analytics.js

- [ ] **Fichiers configuration**
  - [ ] .htaccess
  - [ ] robots.txt
  - [ ] sitemap.xml

- [ ] **Dossier images/**
  - [ ] Toutes les images uploadées
  - [ ] Structure respectée

### 2. Permissions

- [ ] **Permissions fichiers**
  - [ ] HTML : 644
  - [ ] CSS : 644
  - [ ] JS : 644
  - [ ] .htaccess : 644
  - [ ] Dossiers : 755

---

## ✔️ APRÈS LE DÉPLOIEMENT

### 1. Tests fonctionnels

- [ ] **Navigation**
  - [ ] Menu fonctionne sur desktop
  - [ ] Menu burger fonctionne sur mobile
  - [ ] Smooth scroll actif
  - [ ] Tous les liens fonctionnent

- [ ] **Formulaires & CTAs**
  - [ ] Modal Cal.com s'ouvre
  - [ ] Calendrier se charge
  - [ ] Réservation possible
  - [ ] Tous les boutons CTA fonctionnent

- [ ] **Images**
  - [ ] Toutes les images s'affichent
  - [ ] Pas d'images cassées (404)
  - [ ] Images responsive
  - [ ] Lazy loading fonctionne

- [ ] **Cookies & RGPD**
  - [ ] Bannière cookies s'affiche
  - [ ] Accepter fonctionne
  - [ ] Refuser fonctionne
  - [ ] Choix mémorisé

### 2. Tests responsive

- [ ] **Mobile (320-480px)**
  - [ ] Affichage correct
  - [ ] Pas de débordement horizontal
  - [ ] Texte lisible
  - [ ] Boutons cliquables

- [ ] **Tablette (481-768px)**
  - [ ] Layout adapté
  - [ ] Images proportionnées

- [ ] **Desktop (769px+)**
  - [ ] Design optimal
  - [ ] Espacement correct

### 3. Tests navigateurs

- [ ] **Chrome** (Desktop & Mobile)
- [ ] **Firefox**
- [ ] **Safari** (Desktop & iOS)
- [ ] **Edge**

### 4. Performance

- [ ] **PageSpeed Insights**
  - [ ] Mobile score > 80
  - [ ] Desktop score > 90
  - [ ] Suggestions appliquées

- [ ] **Vitesse de chargement**
  - [ ] Temps < 3 secondes
  - [ ] First Contentful Paint < 1.5s
  - [ ] Largest Contentful Paint < 2.5s

### 5. SEO

- [ ] **Google Search Console**
  - [ ] Propriété ajoutée
  - [ ] Vérification validée
  - [ ] Sitemap soumis
  - [ ] Aucune erreur d'exploration

- [ ] **Balises meta**
  - [ ] Title unique sur chaque page
  - [ ] Meta description présente
  - [ ] Open Graph configuré
  - [ ] Twitter Cards configuré

- [ ] **Schema.org**
  - [ ] LocalBusiness
  - [ ] Person
  - [ ] Service
  - [ ] Validation sur [Schema.org Validator](https://validator.schema.org/)

### 6. Analytics

- [ ] **Google Analytics**
  - [ ] Tracking actif
  - [ ] Événements trackés
  - [ ] Données reçues (attendre 24-48h)
  - [ ] Objectifs configurés

### 7. Sécurité

- [ ] **HTTPS**
  - [ ] Certificat valide
  - [ ] Cadenas vert affiché
  - [ ] Pas d'avertissements

- [ ] **Headers HTTP**
  - [ ] X-Frame-Options activé
  - [ ] X-Content-Type-Options activé
  - [ ] Content-Security-Policy activé
  - [ ] Vérifier sur [SecurityHeaders.com](https://securityheaders.com/)

- [ ] **Fichiers sensibles**
  - [ ] .env non accessible
  - [ ] .git non accessible
  - [ ] Logs non accessibles

### 8. Accessibilité

- [ ] **WCAG 2.1**
  - [ ] Contraste suffisant (4.5:1)
  - [ ] Navigation au clavier possible
  - [ ] Attributs ALT sur images
  - [ ] Labels sur formulaires
  - [ ] Tester sur [WAVE](https://wave.webaim.org/)

### 9. Contenus

- [ ] **Orthographe & grammaire**
  - [ ] Tous les textes relus
  - [ ] Pas de fautes
  - [ ] Ton professionnel

- [ ] **Témoignages**
  - [ ] Au moins 3 témoignages
  - [ ] Authentiques
  - [ ] Avec prénoms + initiales

### 10. Intégrations externes

- [ ] **Google My Business**
  - [ ] Fiche créée
  - [ ] Informations complètes
  - [ ] Photos ajoutées
  - [ ] Lien vers le site

- [ ] **Réseaux sociaux**
  - [ ] Publications d'annonce
  - [ ] Liens dans bio
  - [ ] Preview correct (Open Graph)

---

## 📊 SUIVI POST-LANCEMENT

### Semaine 1

- [ ] **Jour 1-2**
  - [ ] Vérifier Analytics
  - [ ] Surveiller erreurs Search Console
  - [ ] Tester formulaires réels

- [ ] **Jour 3-7**
  - [ ] Analyser premières réservations
  - [ ] Corriger bugs éventuels
  - [ ] Répondre aux premiers messages

### Mois 1

- [ ] **Analyses**
  - [ ] Rapport Analytics
  - [ ] Pages les plus visitées
  - [ ] Taux de rebond
  - [ ] Sources de trafic

- [ ] **Optimisations**
  - [ ] Ajuster mots-clés
  - [ ] Améliorer contenu faible
  - [ ] Ajouter témoignages

### Mois 3

- [ ] **SEO**
  - [ ] Position sur mots-clés cibles
  - [ ] Backlinks obtenus
  - [ ] Contenu supplémentaire (blog ?)

- [ ] **Conversion**
  - [ ] Taux de conversion
  - [ ] A/B testing CTAs
  - [ ] Optimisation UX

---

## 🆘 EN CAS DE PROBLÈME

### Site inaccessible
1. Vérifier DNS (nslookup votre-domaine.fr)
2. Vérifier hébergeur (panneau de contrôle)
3. Contacter support hébergeur

### Erreur 500
1. Vérifier .htaccess
2. Consulter error_log
3. Vérifier permissions fichiers

### Images ne s'affichent pas
1. Vérifier chemins (F12 > Console)
2. Vérifier permissions (755 dossiers)
3. Vérifier format (WebP supporté ?)

### Cal.com ne fonctionne pas
1. Vérifier URL iframe
2. Tester URL directement
3. Vérifier calendrier public

### Analytics sans données
1. Vérifier ID de tracking
2. Attendre 24-48h
3. Vérifier cookies acceptés
4. Tester en navigation privée

---

## 📞 CONTACTS UTILES

- **Hébergeur** : [support@hébergeur.com]
- **Registrar domaine** : [support@registrar.com]
- **Google Support** : [support.google.com](https://support.google.com)
- **Cal.com Support** : [help@cal.com](mailto:help@cal.com)

---

## ✅ VALIDATION FINALE

- [ ] **Toutes les checkboxes cochées**
- [ ] **Site accessible publiquement**
- [ ] **Aucune erreur critique**
- [ ] **Performance optimale**
- [ ] **SEO configuré**
- [ ] **Analytics actif**

**Date de lancement** : _______________

**Signature** : _______________

---

🎉 **FÉLICITATIONS ! Votre site SophroKare est en ligne !**