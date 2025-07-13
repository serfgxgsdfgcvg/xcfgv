import React from 'react';
import { Heart, ArrowUp, Mail, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

// Icône Behance personnalisée
const BehanceIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  const { t, theme } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/theo-blondel-6952432aa/',
      label: 'LinkedIn'
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/theoblondel.ch/',
      label: 'Instagram'
    },
    {
      icon: BehanceIcon,
      href: 'https://www.behance.net/JusteTheo',
      label: 'Behance'
    }
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Éléments d'animation subtils en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full opacity-30"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 100,
            }}
            animate={{ 
              x: [null, Math.random() * 50 - 25],
              y: [null, Math.random() * 20 - 10],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Logo et nom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              className="relative"
            >
              <img
                src={theme === 'dark' ? "/Groudp.png" : "/Mode_Isolation.png"}
                alt="Theo Blondel Logo"
                className="h-10 w-auto object-contain"
              />
            </motion.div>
            <div>
              <motion.h3 
                whileHover={{ x: 5 }}
                className="text-lg font-bold text-gray-900 dark:text-white"
              >
                THEO BLONDEL
              </motion.h3>
            </div>
          </motion.div>

          {/* Contact rapide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <motion.a
              href="mailto:hello@theoblondel.ch"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail size={16} />
              </motion.div>
              <span className="text-sm font-medium">hello@theoblondel.ch</span>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin size={16} />
              </motion.div>
              <span className="text-sm">{t('contact.locationValue')}</span>
            </motion.div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  type: "spring", 
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                title={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright et bouton retour en haut */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm">
              <span>{t('footer.madeWith')}</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.3,
                  transition: { duration: 0.3 }
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>{t('footer.inSwitzerland')}</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              title={t('footer.backToTop')}
            >
              <ArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}