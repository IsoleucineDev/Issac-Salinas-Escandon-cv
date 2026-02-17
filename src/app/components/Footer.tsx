import { Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacta Conmigo</h3>
            <div className="flex space-x-4">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-[#725EE6] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-[#725EE6] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">{personalInfo.email}</p>
              <p className="text-sm text-gray-400">{personalInfo.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-900 text-center text-gray-400">
          <p className="text-sm">
            Desarrollado con &lt;3 por{' '}
            <a 
              href="https://github.com/IsoleucineDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D0CEFD] hover:text-[#b8b5fb] transition-colors font-semibold"
            >
              Ileana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}