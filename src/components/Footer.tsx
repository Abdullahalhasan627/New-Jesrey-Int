import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.company')}</h3>
            <p className="mb-4 text-gray-300">
              PO Box 64564, Al-Saj'a area, <br />
              Sharjah, U.A.E.
            </p>
            <p className="text-gray-300">
              &copy; {currentYear} {t('footer.company')}. <br />
              {t('footer.rights')}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+971 52 796 7775</p>
                  <p className="text-gray-300">+971 50 397 0730</p>
                  <p className="text-gray-300">+971 56 213 2777</p>
                  <p className="text-gray-300">+971 6 55 673 36</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">alhasan979@hotmail.com</p>
                  <p className="text-gray-300">alhasan9799@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-300">Al-Saj'a area, Sharjah, UAE</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.social')}</h3>
            <div className="flex space-x-4">
              <a
                id='Whatsapp'
                href="https://www.facebook.com/share/1Gs7bCdPZ4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/mhmdlhsn8537?igsh=ZHZ0Nmd4Y245dnBt&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://t.me/alhasan979"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://wa.me/971527967775"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300">www.newgersyintl.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;