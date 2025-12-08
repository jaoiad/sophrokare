/* =============================================
   SOPHROKARE - Analytics & Tracking
   Version: 2.0
   ============================================= */

   'use strict';

   // ===== CONFIGURATION =====
   const ANALYTICS_CONFIG = {
       trackingId: 'G-XXXXXXXXXX', // À REMPLACER par votre ID Google Analytics
       enableDebug: window.location.hostname === 'localhost',
       cookieDomain: 'auto',
       anonymizeIp: true
   };
   
   // ===== VÉRIFICATION CONSENTEMENT =====
   function hasAnalyticsConsent() {
       const consent = localStorage.getItem('cookieConsent');
       return consent === 'accepted';
   }
   
   // ===== INITIALISATION GOOGLE ANALYTICS =====
   function initAnalytics() {
       if (!hasAnalyticsConsent()) {
           console.log('📊 Analytics désactivé - Consentement non donné');
           return;
       }
       
       // Configurer le consentement
       if (typeof gtag !== 'undefined') {
           gtag('consent', 'default', {
               'analytics_storage': 'granted',
               'ad_storage': 'denied',
               'wait_for_update': 500
           });
           
           gtag('config', ANALYTICS_CONFIG.trackingId, {
               'anonymize_ip': ANALYTICS_CONFIG.anonymizeIp,
               'cookie_domain': ANALYTICS_CONFIG.cookieDomain,
               'cookie_flags': 'SameSite=None;Secure'
           });
           
           console.log('✅ Google Analytics initialisé');
       }
   }
   
   // ===== TRACKING DES ÉVÉNEMENTS =====
   
   // Tracking des clics sur les CTA
   function trackCTAClicks() {
       const ctaButtons = document.querySelectorAll('.btn-primary-custom, .btn-appointment, .btn-cta-tarif');
       
       ctaButtons.forEach(button => {
           button.addEventListener('click', function() {
               const buttonText = this.textContent.trim();
               
               if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                   gtag('event', 'cta_click', {
                       'event_category': 'engagement',
                       'event_label': buttonText,
                       'value': 1
                   });
               }
               
               console.log('📊 CTA Click:', buttonText);
           });
       });
   }
   
   // Tracking du scroll
   function trackScrollDepth() {
       let scrollDepths = [25, 50, 75, 100];
       let triggeredDepths = new Set();
       
       window.addEventListener('scroll', debounce(function() {
           const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
           
           scrollDepths.forEach(depth => {
               if (scrollPercent >= depth && !triggeredDepths.has(depth)) {
                   triggeredDepths.add(depth);
                   
                   if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                       gtag('event', 'scroll_depth', {
                           'event_category': 'engagement',
                           'event_label': depth + '%',
                           'value': depth
                       });
                   }
                   
                   console.log('📊 Scroll Depth:', depth + '%');
               }
           });
       }, 500), { passive: true });
   }
   
   // Tracking du temps passé sur la page
   function trackTimeOnPage() {
       let startTime = Date.now();
       let timeTracked = false;
       
       // Tracker à 30 secondes
       setTimeout(() => {
           if (!timeTracked && hasAnalyticsConsent()) {
               const timeSpent = Math.round((Date.now() - startTime) / 1000);
               
               if (typeof gtag !== 'undefined') {
                   gtag('event', 'time_on_page', {
                       'event_category': 'engagement',
                       'event_label': '30_seconds',
                       'value': timeSpent
                   });
               }
               
               timeTracked = true;
               console.log('📊 Temps sur la page: 30s');
           }
       }, 30000);
       
       // Tracker au moment de quitter
       window.addEventListener('beforeunload', function() {
           if (hasAnalyticsConsent()) {
               const timeSpent = Math.round((Date.now() - startTime) / 1000);
               
               if (typeof gtag !== 'undefined') {
                   gtag('event', 'page_exit', {
                       'event_category': 'engagement',
                       'event_label': 'time_spent',
                       'value': timeSpent
                   });
               }
               
               console.log('📊 Temps total sur la page:', timeSpent, 's');
           }
       });
   }
   
   // Tracking des téléchargements de fichiers
   function trackDownloads() {
       const downloadLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".zip"]');
       
       downloadLinks.forEach(link => {
           link.addEventListener('click', function() {
               const fileName = this.href.split('/').pop();
               
               if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                   gtag('event', 'file_download', {
                       'event_category': 'engagement',
                       'event_label': fileName
                   });
               }
               
               console.log('📊 Téléchargement:', fileName);
           });
       });
   }
   
   // Tracking des clics sur les liens sociaux
   function trackSocialClicks() {
       const socialLinks = document.querySelectorAll('a[href*="facebook.com"], a[href*="instagram.com"], a[href*="linkedin.com"]');
       
       socialLinks.forEach(link => {
           link.addEventListener('click', function() {
               let platform = 'unknown';
               
               if (this.href.includes('facebook')) platform = 'Facebook';
               else if (this.href.includes('instagram')) platform = 'Instagram';
               else if (this.href.includes('linkedin')) platform = 'LinkedIn';
               
               if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                   gtag('event', 'social_click', {
                       'event_category': 'engagement',
                       'event_label': platform
                   });
               }
               
               console.log('📊 Réseau social:', platform);
           });
       });
   }
   
   // Tracking des erreurs 404 (si applicable)
   function trackPageErrors() {
       window.addEventListener('error', function(e) {
           if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
               gtag('event', 'exception', {
                   'description': e.message,
                   'fatal': false
               });
           }
       });
   }
   
   // Tracking des interactions avec la FAQ
   function trackFAQInteractions() {
       const faqButtons = document.querySelectorAll('#faqAccordion .accordion-button');
       
       faqButtons.forEach(button => {
           button.addEventListener('click', function() {
               const questionText = this.textContent.trim().substring(0, 50); // Première partie de la question
               
               if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                   gtag('event', 'faq_interaction', {
                       'event_category': 'engagement',
                       'event_label': questionText
                   });
               }
               
               console.log('📊 FAQ ouvert:', questionText);
           });
       });
   }
   
   // Tracking des clics sur les services
   function trackServiceClicks() {
       const serviceCards = document.querySelectorAll('#services .card');
       
       serviceCards.forEach(card => {
           card.addEventListener('click', function() {
               const serviceName = this.querySelector('.card-title')?.textContent.trim();
               
               if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                   gtag('event', 'service_view', {
                       'event_category': 'engagement',
                       'event_label': serviceName
                   });
               }
               
               console.log('📊 Service consulté:', serviceName);
           });
       });
   }
   
   // Tracking de la fermeture du modal Cal.com
   function trackModalInteractions() {
       const calModal = document.getElementById('calModal');
       
       if (calModal) {
           calModal.addEventListener('shown.bs.modal', function() {
               if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                   gtag('event', 'modal_open', {
                       'event_category': 'booking',
                       'event_label': 'cal_modal'
                   });
               }
           });
           
           calModal.addEventListener('hidden.bs.modal', function() {
               if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
                   gtag('event', 'modal_close', {
                       'event_category': 'booking',
                       'event_label': 'cal_modal'
                   });
               }
           });
       }
   }
   
   // ===== UTILITAIRES =====
   function debounce(func, wait) {
       let timeout;
       return function executedFunction(...args) {
           const later = () => {
               clearTimeout(timeout);
               func(...args);
           };
           clearTimeout(timeout);
           timeout = setTimeout(later, wait);
       };
   }
   
   // ===== INITIALISATION =====
   document.addEventListener('DOMContentLoaded', function() {
       // Attendre le consentement des cookies
       const checkConsent = setInterval(() => {
           if (hasAnalyticsConsent()) {
               clearInterval(checkConsent);
               
               initAnalytics();
               trackCTAClicks();
               trackScrollDepth();
               trackTimeOnPage();
               trackDownloads();
               trackSocialClicks();
               trackPageErrors();
               trackFAQInteractions();
               trackServiceClicks();
               trackModalInteractions();
               
               console.log('✅ Analytics tracking initialisé');
           }
       }, 500);
       
       // Arrêter la vérification après 10 secondes
       setTimeout(() => {
           clearInterval(checkConsent);
       }, 10000);
   });
   
   // ===== ENHANCED ECOMMERCE (Optionnel) =====
   // Pour tracker les étapes de réservation
   function trackBookingStep(step, option) {
       if (typeof gtag !== 'undefined' && hasAnalyticsConsent()) {
           gtag('event', 'checkout_progress', {
               'event_category': 'booking',
               'checkout_step': step,
               'checkout_option': option
           });
       }
       
       console.log('📊 Étape de réservation:', step, option);
   }
   
   // ===== EXPOSITION GLOBALE =====
   window.trackBookingStep = trackBookingStep;
   
   // ===== DEBUG =====
   if (ANALYTICS_CONFIG.enableDebug) {
       console.log('🔍 Analytics Debug Mode activé');
       console.log('Tracking ID:', ANALYTICS_CONFIG.trackingId);
       console.log('Consentement:', hasAnalyticsConsent());
   }