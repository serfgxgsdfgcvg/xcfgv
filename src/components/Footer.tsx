import React, { useState } from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin, Calendar, Star, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

// Icône Behance personnalisée
const BehanceIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const { t, theme } = useApp();
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { number: '220+', label: t('footer.projectsCompleted'), icon: Star },
    { number: '50+', label: t('footer.happyClients'), icon: Heart },
    { number: '5+', label: t('footer.yearsExperience'), icon: Calendar },
    { number: '99%', label: t('footer.satisfaction'), icon: Star }
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/theo-blondel-6952432aa/',
      label: 'LinkedIn',
      description: 'Réseau professionnel'
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/theo.blondel/',
      label: 'Instagram',
      description: 'Créations visuelles'
    },
    {
      icon: BehanceIcon,
      href: 'https://www.behance.net/theoblondel',
      label: 'Behance',
      description: 'Portfolio créatif'
    }
  ];

  const services = [
    t('footer.brandIdentity'),
    t('footer.uiuxDesign'),
    t('footer.webDevelopment'),
    t('footer.motionGraphics')
  ];

  return (
    <footer className="relative bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-200 dark:bg-gray-800 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{ 
              y: [null, -100, -200],
              opacity: [0.3, 0.6, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header Section avec Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Logo animé */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-block mb-8 cursor-pointer"
          >
            <img
              src={theme === 'dark' ? "/Groudp.png" : "/Mode_Isolation.png"}
              alt="Theo Blondel Logo"
              className="h-16 w-auto sm:h-20 object-contain mx-auto"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            THEO BLONDEL
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {t('footer.description')}
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center cursor-pointer border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
            >
              <motion.div
                animate={{ 
                  rotate: hoveredStat === index ? 360 : 0,
                  scale: hoveredStat === index ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-6 h-6" />
              </motion.div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-xl mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'hello@theoblondel.ch', href: 'mailto:hello@theoblondel.ch' },
                { icon: Phone, text: '+41 76 123 45 67', href: 'tel:+41761234567' },
                { icon: MapPin, text: t('contact.locationValue'), href: '#' }
              ].map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-5 h-5 group-hover:text-black dark:group-hover:text-white transition-colors"
                  >
                    <contact.icon className="w-5 h-5" />
                  </motion.div>
                  <span className="font-medium">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-xl mb-6">{t('footer.services')}</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer font-medium"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-xl mb-6">{t('footer.followMe')}</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all group border border-gray-100 dark:border-gray-800"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-6 h-6"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <div className="font-medium">{social.label}</div>
                    <div className="text-sm opacity-70">{social.description}</div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="ml-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-6 md:mb-0">
            <span>{t('footer.madeWith')}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.5, rotate: 15 }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span>{t('footer.inSwitzerland')}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-600 dark:text-gray-400">{t('footer.allRights')}</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}