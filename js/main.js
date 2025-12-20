/* =============================================
   SOPHROKARE - Script Principal
   Version: 2.4 avec Révélation Téléphone Anti-Spam
   ============================================= */

   'use strict';

   // ===== VARIABLES GLOBALES =====
   let calModalBootstrap;
   let calIframeLoaded = false;
   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
   
   // ===== INITIALISATION AU CHARGEMENT =====
   document.addEventListener('DOMContentLoaded', function() {
       console.log('🌸 SophroKare - Initialisation...');
       
       // Initialisation des modules
       initCalModal();
       initSmoothScroll();
       initNavbarScroll();
       initAnimationsOnScroll();
       initBackToTop();
       initCallFloating();
       initCookieBanner();
       initExternalLinks();
       initAvailabilityBadge();
       initContactForm();
       
       // Détection mobile
       if (isMobile) {
           document.body.classList.add('is-mobile');
           console.log('📱 Mode mobile détecté');
       }
       
       console.log('✅ SophroKare - Prêt !');
   });
   
   // ===== BADGE DE DISPONIBILITÉ =====
   function isWithinBusinessHours() {
       const now = new Date();
       const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
       const hour = now.getHours();
       
       // Dimanche (0) ou Samedi (6) = hors horaires
       if (day === 0 || day === 6) return false;
       
       // Lundi-Vendredi (1-5) : 9h - 19h
       return hour >= 9 && hour < 19;
   }
   
   function initAvailabilityBadge() {
       const statusBadge = document.querySelector('.status-badge');
       if (!statusBadge) return;
       
       function updateBadge() {
        if (isWithinBusinessHours()) {
            statusBadge.classList.remove('status-away');
            statusBadge.classList.add('status-online');
            statusBadge.setAttribute('data-tooltip', 'Disponible');
            statusBadge.innerHTML = '<span class="status-dot online"></span>';
        } else {
            statusBadge.classList.remove('status-online');
            statusBadge.classList.add('status-away');
            statusBadge.setAttribute('data-tooltip', 'Réponse sous 24h');
            statusBadge.innerHTML = '<span class="status-dot away"></span>';
        }
    }
       
       // Mise à jour initiale
       updateBadge();
       
       // Mise à jour toutes les minutes (si le visiteur reste sur la page)
       setInterval(updateBadge, 60000);
       
       console.log('✅ Badge de disponibilité initialisé');
   }
   
   // ===== RÉVÉLATION TÉLÉPHONE (Anti-Spam) =====
   function revealPhone() {
       const btn = document.getElementById('showPhoneBtn');
       const phone = document.getElementById('phoneNumber');
       
       if (btn && phone) {
           btn.style.display = 'none';
           phone.style.display = 'inline-block';
           
           // Tracking Google Analytics
           if (typeof gtag !== 'undefined') {
               gtag('event', 'reveal_phone', {
                   'event_category': 'engagement',
                   'event_label': 'contact_section'
               });
           }
           
           console.log('📞 Numéro révélé (section contact)');
       }
   }
   
   function revealPhoneFooter() {
       const link = document.getElementById('showPhoneFooter');
       const phone = document.getElementById('phoneFooter');
       
       if (link && phone) {
           link.style.display = 'none';
           phone.style.display = 'inline';
           
           // Tracking Google Analytics
           if (typeof gtag !== 'undefined') {
               gtag('event', 'reveal_phone', {
                   'event_category': 'engagement',
                   'event_label': 'footer'
               });
           }
           
           console.log('📞 Numéro révélé (footer)');
       }
   }
   
   // ===== MODAL CAL.COM =====
   function initCalModal() {
       const calModalElement = document.getElementById('calModal');
       if (!calModalElement) return;
       
       calModalBootstrap = new bootstrap.Modal(calModalElement);
       
       const iframe = document.getElementById('calIframe');
       const loader = document.getElementById('calLoader');
       
       if (iframe && loader) {
           iframe.addEventListener('load', function() {
               calIframeLoaded = true;
               loader.style.display = 'none';
               console.log('✅ Calendrier Cal.com chargé');
           });
           
           setTimeout(() => {
               if (loader) loader.style.display = 'none';
           }, 5000);
       }
       
       calModalElement.addEventListener('hidden.bs.modal', function() {
           if (loader) loader.style.display = 'block';
       });
   }
   
   function openCalModal(eventType = '') {
       if (calModalBootstrap) {
           const iframe = document.getElementById('calIframe');
           
           if (iframe) {
               iframe.src = 'https://cal.com/sophrokare';
               console.log(eventType === 'appel-gratuit' ? '📞 Ouverture modal appel gratuit' : '📅 Ouverture modal réservation');
           }
           
           calModalBootstrap.show();
           
           if (typeof gtag !== 'undefined') {
               gtag('event', 'open_booking_modal', {
                   'event_category': 'engagement',
                   'event_label': eventType || 'standard',
                   'value': eventType === 'appel-gratuit' ? 15 : 60
               });
           }
       } else {
           console.error('❌ Modal Cal.com non initialisée');
       }
   }
   
   function resetCalendar() {
       const iframe = document.getElementById('calIframe');
       if (!iframe) return;
       
       iframe.src = 'https://cal.com/sophrokare?refresh=' + Date.now();
       
       const loader = document.getElementById('calLoader');
       if (loader) loader.style.display = 'block';
       
       console.log('🔄 Calendrier réinitialisé');
   }
   
   // ===== FORMULAIRE DE CONTACT =====
   function initContactForm() {
       const form = document.getElementById('contactForm');
       const confirmMessage = document.getElementById('confirmMessage');
       
       if (form && confirmMessage) {
           form.addEventListener('submit', function(e) {
               setTimeout(function() {
                   confirmMessage.style.display = 'block';
                   form.reset();
                   setTimeout(function() {
                       confirmMessage.style.display = 'none';
                   }, 5000);
               }, 1000);
           });
           
           console.log('✅ Formulaire de contact initialisé');
       }
   }
   
   // ===== SMOOTH SCROLL =====
   function initSmoothScroll() {
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
           anchor.addEventListener('click', function (e) {
               const href = this.getAttribute('href');
               if (href === '#' || href === '#!') return;
               
               e.preventDefault();
               
               const target = document.querySelector(href);
               if (!target) return;
               
               const navbarHeight = 70;
               const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
               
               window.scrollTo({ top: targetPosition, behavior: 'smooth' });
               
               const navbarCollapse = document.querySelector('.navbar-collapse');
               if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                   const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                   if (bsCollapse) bsCollapse.hide();
               }
               
               if (typeof gtag !== 'undefined') {
                   gtag('event', 'navigation', {
                       'event_category': 'engagement',
                       'event_label': 'Scroll to ' + href
                   });
               }
           });
       });
   }
   
   // ===== NAVBAR SCROLL EFFECT =====
   function initNavbarScroll() {
       const navbar = document.querySelector('.navbar');
       if (!navbar) return;
       
       const scrollThreshold = 50;
       
       window.addEventListener('scroll', function() {
           const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
           
           if (scrollTop > scrollThreshold) {
               navbar.classList.add('scrolled');
           } else {
               navbar.classList.remove('scrolled');
           }
       }, { passive: true });
   }
   
   // ===== ANIMATIONS AU SCROLL =====
   function initAnimationsOnScroll() {
       const observerOptions = {
           threshold: 0.1,
           rootMargin: '0px 0px -50px 0px'
       };
       
       const observer = new IntersectionObserver(function(entries) {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('animated');
                   observer.unobserve(entry.target);
               }
           });
       }, observerOptions);
       
       const elementsToAnimate = document.querySelectorAll('.card, .google-review-card, .timeline-card-compact, .apropos-card-horizontal');
       
       elementsToAnimate.forEach(el => {
           el.classList.add('fade-in-element');
           observer.observe(el);
       });
   }
   
   // ===== BOUTON RETOUR EN HAUT =====
   function initBackToTop() {
       const backToTopBtn = document.getElementById('backToTop');
       if (!backToTopBtn) return;
       
       window.addEventListener('scroll', function() {
           if (window.pageYOffset > 300) {
               backToTopBtn.style.display = 'block';
               setTimeout(() => backToTopBtn.classList.add('show'), 10);
           } else {
               backToTopBtn.classList.remove('show');
               setTimeout(() => {
                   if (!backToTopBtn.classList.contains('show')) {
                       backToTopBtn.style.display = 'none';
                   }
               }, 300);
           }
       }, { passive: true });
       
       backToTopBtn.addEventListener('click', function() {
           window.scrollTo({ top: 0, behavior: 'smooth' });
           
           if (typeof gtag !== 'undefined') {
               gtag('event', 'back_to_top_click', { 'event_category': 'engagement' });
           }
       });
   }
   
   // ===== BOUTON APPEL FLOTTANT =====
   function initCallFloating() {
       const callFloatingBtn = document.querySelector('.btn-call-floating');
       if (!callFloatingBtn) return;
       
       window.addEventListener('scroll', function() {
           if (window.pageYOffset > 300) {
               callFloatingBtn.style.opacity = '1';
               callFloatingBtn.style.transform = 'scale(1)';
           } else {
               callFloatingBtn.style.opacity = '0';
               callFloatingBtn.style.transform = 'scale(0)';
           }
       }, { passive: true });
       
       callFloatingBtn.addEventListener('click', function() {
           openCalModal();
           
           if (typeof gtag !== 'undefined') {
               gtag('event', 'floating_call_button_click', {
                   'event_category': 'engagement',
                   'event_label': 'mobile_floating_button'
               });
           }
       });
       
       console.log('✅ Bouton appel flottant initialisé');
   }
   
   // ===== COOKIE BANNER (RGPD) =====
   function initCookieBanner() {
       const cookieBanner = document.getElementById('cookieBanner');
       if (!cookieBanner) return;
       
       const cookieConsent = localStorage.getItem('cookieConsent');
       
       if (!cookieConsent) {
           setTimeout(() => {
               cookieBanner.style.display = 'block';
           }, 1000);
       }
   }
   
   function acceptCookies() {
       localStorage.setItem('cookieConsent', 'accepted');
       localStorage.setItem('cookieConsentDate', new Date().toISOString());
       
       const cookieBanner = document.getElementById('cookieBanner');
       if (cookieBanner) cookieBanner.style.display = 'none';
       
       if (typeof gtag !== 'undefined') {
           gtag('consent', 'update', { 'analytics_storage': 'granted' });
           gtag('event', 'cookie_consent', { 'event_category': 'consent', 'event_label': 'accepted' });
       }
       
       console.log('✅ Cookies acceptés');
   }
   
   function refuseCookies() {
       localStorage.setItem('cookieConsent', 'refused');
       localStorage.setItem('cookieConsentDate', new Date().toISOString());
       
       const cookieBanner = document.getElementById('cookieBanner');
       if (cookieBanner) cookieBanner.style.display = 'none';
       
       if (typeof gtag !== 'undefined') {
           gtag('consent', 'update', { 'analytics_storage': 'denied' });
       }
       
       console.log('❌ Cookies refusés');
   }
   
   // ===== LIENS EXTERNES =====
   function initExternalLinks() {
       document.querySelectorAll('a[href^="http"]').forEach(link => {
           if (!link.href.includes(window.location.hostname)) {
               link.setAttribute('target', '_blank');
               link.setAttribute('rel', 'noopener noreferrer');
               
               link.addEventListener('click', function() {
                   if (typeof gtag !== 'undefined') {
                       gtag('event', 'external_link_click', {
                           'event_category': 'engagement',
                           'event_label': this.href
                       });
                   }
               });
           }
       });
   }
   
   // ===== GESTION DES ERREURS =====
   window.addEventListener('error', function(e) {
       console.error('❌ Erreur détectée:', e.message, 'à', e.filename, 'ligne', e.lineno);
   });
   
   // ===== NOTIFICATIONS =====
   function showNotification(message, type = 'info') {
       const bgClass = type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'info';
       const toastHTML = `
           <div class="toast align-items-center text-white bg-${bgClass} border-0" role="alert">
               <div class="d-flex">
                   <div class="toast-body">${message}</div>
                   <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
               </div>
           </div>
       `;
       
       let toastContainer = document.querySelector('.toast-container');
       if (!toastContainer) {
           toastContainer = document.createElement('div');
           toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
           document.body.appendChild(toastContainer);
       }
       
       const toastElement = document.createElement('div');
       toastElement.innerHTML = toastHTML;
       toastContainer.appendChild(toastElement.firstElementChild);
       
       const toast = new bootstrap.Toast(toastElement.firstElementChild, { autohide: true, delay: 3000 });
       toast.show();
       
       toastElement.firstElementChild.addEventListener('hidden.bs.toast', function() {
           this.remove();
       });
   }
   
   // ===== PERFORMANCES =====
   if ('loading' in HTMLImageElement.prototype) {
       const images = document.querySelectorAll('img[loading="lazy"]');
       console.log('✅ Lazy loading natif supporté pour', images.length, 'images');
   }
   
   // ===== EASTER EGG =====
   let clickCount = 0;
   const brandElement = document.querySelector('.navbar-brand');
   if (brandElement) {
       brandElement.addEventListener('click', function(e) {
           if (e.ctrlKey || e.metaKey) {
               clickCount++;
               if (clickCount === 3) {
                   showNotification('Merci de votre confiance ! 🌸', 'success');
                   clickCount = 0;
               }
           }
       });
   }
   
   // ===== EXPOSITION GLOBALE =====
   window.openCalModal = openCalModal;
   window.resetCalendar = resetCalendar;
   window.acceptCookies = acceptCookies;
   window.refuseCookies = refuseCookies;
   window.showNotification = showNotification;
   window.revealPhone = revealPhone;
   window.revealPhoneFooter = revealPhoneFooter;
   
   // ===== DEBUG MODE =====
   if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
       console.log('🔧 Mode DEBUG activé');
       window.SophroKare = {
           version: '2.4',
           mobile: isMobile,
           isBusinessHours: isWithinBusinessHours,
           debugInfo: function() {
               console.table({
                   'Version': '2.4',
                   'Heures ouvrées': isWithinBusinessHours(),
                   'Mobile': isMobile
               });
           }
       };
   }
   
   console.log('🌸 SophroKare © 2025 - Tous droits réservés');