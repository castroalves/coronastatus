import config from '../config';

export type Locale =
  | 'no'
  | 'nl'
  | 'en'
  | 'en-US'
  | 'en-AU'
  | 'es-MX'
  | 'sk'
  | 'br'
  | 'it'
  | 'tr'
  | 'dk'
  | 'ua'
  | 'es-CO'
  | 'fr-FR'
  | 'es-ES'
  | 'ca'
  | 'en-SG';

type Urls = {
  [locale in Locale]: {
    submitReport: string;
    profile: string;
    privacyPolicy: string;
    map: string;
    contributors: string;
    api: string;
    apiDocs: string;
    statistics: string;
  };
};

const localeAwareUrls: Urls = {
  no: {
    submitReport: '/',
    profile: '/helsetilstand',
    privacyPolicy: '/personvern',
    map: '/kart',
    contributors: '/frivillige',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistikk'
  },
  nl: {
    submitReport: '/',
    profile: '/melding',
    privacyPolicy: '/privacy-policy',
    map: '/kaart',
    contributors: '/bijdragers',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistieken'
  },
  en: {
    submitReport: '/',
    profile: '/healthcondition',
    privacyPolicy: '/privacy-statement',
    map: '/map',
    contributors: '/contributors',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistics'
  },
  'en-US': {
    submitReport: '/',
    profile: '/healthcondition',
    privacyPolicy: '/privacy-statement',
    map: '/map',
    contributors: '/contributors',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistics'
  },
  'en-AU': {
    submitReport: '/',
    profile: '/healthcondition',
    privacyPolicy: '/privacy-statement',
    map: '/map',
    contributors: '/contributors',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistics'
  },
  'es-MX': {
    submitReport: '/',
    profile: '/estadosalud',
    privacyPolicy: '/aviso-privacidad',
    map: '/mapa',
    contributors: '/colaboradores',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/estadisticas'
  },
  sk: {
    submitReport: '/',
    profile: '/zdravotny-stav',
    privacyPolicy: '/ochrana-sukromia',
    map: '/mapa',
    contributors: '/prispievatelia',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistiky'
  },
  br: {
    submitReport: '/',
    profile: '/condicaosaude',
    privacyPolicy: '/declaracao-privacidade',
    map: '/mapa',
    contributors: '/contribuidores',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/estatisticas'
  },
  it: {
    submitReport: '/',
    profile: '/profilo',
    privacyPolicy: '/privacy',
    map: '/mappa',
    contributors: '/contributori',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistiche'
  },
  tr: {
    submitReport: '/',
    profile: '/profil',
    privacyPolicy: '/gizlilik-bildirimi',
    map: '/harita',
    contributors: '/katkida-bulunanlar',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/istatistikler'
  },
  dk: {
    submitReport: '/',
    profile: '/helbredstilstand',
    privacyPolicy: '/privat-politik',
    map: '/kort',
    contributors: '/frivillige',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistikker'
  },
  ua: {
    submitReport: '/',
    profile: '/healthcondition',
    privacyPolicy: '/privacy-statement',
    map: '/map',
    contributors: '/contributors',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistics'
  },
  'es-CO': {
    submitReport: '/',
    profile: '/estadosalud',
    privacyPolicy: '/aviso-privacidad',
    map: '/mapa',
    contributors: '/colaboradores',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/estadisticas'
  },
  'fr-FR': {
    submitReport: '/',
    profile: '/profil',
    privacyPolicy: '/politique-de-confidentialite',
    map: '/carte',
    contributors: '/contributeurs',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistiques'
  },
  'es-ES': {
    submitReport: '/',
    profile: '/estadosalud',
    privacyPolicy: '/aviso-privacidad',
    map: '/mapa',
    contributors: '/colaboradores',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/estadisticas'
  },
  ca: {
    submitReport: '/',
    profile: '/healthcondition',
    privacyPolicy: '/privacy-statement',
    map: '/map',
    contributors: '/contributors',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistics'
  },
  'en-SG': {
    submitReport: '/',
    profile: '/healthcondition',
    privacyPolicy: '/privacy-statement',
    map: '/map',
    contributors: '/contributors',
    api: '/api',
    apiDocs: '/api-docs',
    statistics: '/statistics'
  }
};

export const urls = localeAwareUrls[config.LANGUAGE as Locale];
