import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Send } from 'lucide-react';

import PageHeader from '../components/common/PageHeader';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xgegpjol"); // Replace with your formspree form ID

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} - {t('meta.title')}</title>
      </Helmet>
      
      <PageHeader 
        title={t('contact.title')}
        subtitle={t('contact.intro')}
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-elevation-2 p-8">
                <h3 className="text-2xl font-bold text-primary-700 mb-6">{t('contact.form.name')}</h3>
                
                {state.succeeded ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                    {t('contact.form.success')}
                  </div>
                ) : (
                  <form className="space-y-6" action="https://formspree.io/f/xyzwekzj" method="POST">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-control">
                        <label htmlFor="name" className="form-label">{t('contact.form.name')}</label>
                        <input
                          id="name"
                          type="text" 
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>
                      
                      <div className="form-control">
                        <label htmlFor="phone" className="form-label">{t('contact.form.phone')}</label>
                        <input
                          id="phone"
                          type="tel" 
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <label htmlFor="email" className="form-label">{t('contact.form.email')}</label>
                      <input
                        id="email"
                        type="email" 
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    
                    <div className="form-control">
                      <label htmlFor="service" className="form-label">{t('contact.form.service')}</label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">{t('contact.form.service')}</option>
                        <option value="elevator">{t('contact.form.services.elevator')}</option>
                        <option value="crane">{t('contact.form.services.crane')}</option>
                        <option value="parts">{t('contact.form.services.parts')}</option>
                        <option value="maintenance">{t('contact.form.services.maintenance')}</option>
                        <option value="other">{t('contact.form.services.other')}</option>
                      </select>
                      <ValidationError prefix="Service" field="service" errors={state.errors} />
                    </div>
                    
                    <div className="form-control">
                      <label htmlFor="message" className="form-label">{t('contact.form.message')}</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn btn-primary w-full flex items-center justify-center"
                      >
                        <Send size={18} className="mr-2" />
                        {t('buttons.send')}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="bg-white rounded-lg shadow-elevation-2 p-8">
                <h3 className="text-2xl font-bold text-primary-700 mb-6">{t('contact.info.title')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-accent-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-secondary-700 mb-1">{t('contact.info.address')}</h4>
                      <p className="text-secondary-600">{t('contact.info.address_value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-accent-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-secondary-700 mb-1">{t('contact.info.phone')}</h4>
                      <p className="text-secondary-600">+971 52 796 7775</p>
                      <p className="text-secondary-600">+971 50 397 0730</p>
                      <p className="text-secondary-600">+971 56 213 2777</p>
                      <p className="text-secondary-600">+971 6 55 673 36</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-accent-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-secondary-700 mb-1">{t('contact.info.email')}</h4>
                      <p className="text-secondary-600">alhasan979@hotmail.com</p>
                      <p className="text-secondary-600">alhasan9799@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-semibold text-lg text-secondary-700 mb-4">{t('contact.social.title')}</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/1Gs7bCdPZ4/?mibextid=wwXIfr"
                      id='Whatsapp'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} className="text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/mhmdlhsn8537?igsh=ZHZ0Nmd4Y245dnBt&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} className="text-white" />
                    </a>
                    <a
                      href="https://t.me/alhasan979"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
                      aria-label="Telegram"
                    >
                      <MessageCircle size={20} className="text-white" />
                    </a>
                    <a
                      href="https://wa.me/971527967775"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <Phone size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-6">{t('contact.map.title')}</h3>
            <div className="bg-white rounded-lg shadow-elevation-2 p-2 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d581.6166809138682!2d55.65092986851878!3d25.34093371985825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sae!4v1746715749930!5m2!1sar!2sae"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="New Jersey Int. Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;