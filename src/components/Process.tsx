import React from 'react';
import { MessageCircle, Search, PenTool, Palette, RotateCcw, Package, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import FakeChat from './FakeChat';

export default function Process() {
  const { t } = useApp();

  const processSteps = [
    {
      id: 1,
      icon: MessageCircle,
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      id: 2,
      icon: Search,
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      id: 3,
      icon: PenTool,
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      color: 'from-green-500 to-green-600',
      delay: 0.3
    },
    {
      id: 4,
      icon: Palette,
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
      color: 'from-orange-500 to-orange-600',
      delay: 0.4
    },
    {
      id: 5,
      icon: RotateCcw,
      title: t('process.step5.title'),
      description: t('process.step5.desc'),
      color: 'from-pink-500 to-pink-600',
      delay: 0.5
    },
    {
      id: 6,
      icon: Package,
      title: t('process.step6.title'),
      description: t('process.step6.desc'),
      color: 'from-teal-500 to-teal-600',
      delay: 0.6
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white"
            />
            <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-sm">
              {t('process.subtitle')}
            </span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white mb-6"
          >
            <span className="text-balance">{t('process.title')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance"
          >
            Une méthode simple et sur-mesure. Chaque projet est unique, mais ma méthode reste solide pour donner vie à tes idées.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: step.delay, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer"
              >
                <motion.div className="text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: step.delay + 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4"
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>
                  
                  <motion.h3
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg font-bold text-black dark:text-white mb-3"
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm text-balance">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
        </div>

        {/* NOIRBRUME Example Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-32 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white"
            />
            <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-sm">
              Exemple Concret
            </span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white"
            />
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 text-balance"
          >
            Exemple Concret
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 text-balance"
          >
            Découvrez comment je transforme une idée en réalisation concrète.
          </motion.p>
        </motion.div>
      </div>

      {/* Integrated Fake Chat Component */}
      <div className="relative">
        <FakeChat />
      </div>

      {/* Final Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-lg"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 text-balance"
            >
              Prêt à démarrer ?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-gray-600 dark:text-gray-300 mb-6 text-base max-w-xl mx-auto text-balance"
            >
              Parlons de ton projet et donnons vie à tes idées ensemble.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg group text-sm"
              >
                Démarrer un projet
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#work"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group text-sm"
              >
                Voir mes projets
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}