// Centrální konfigurace webu — kontaktní údaje, navigace, sociální sítě.
// Po nasazení TinaCMS lze tyto hodnoty spravovat i přes administraci.

export const site = {
  name: 'VAMOS 66',
  legalName: 'Spolek VAMOS 66, z. s.',
  slogan: 'Společně zvládneme vše',
  description:
    'Spolek pomáhá legendám z oblasti sportu a kultury, organizuje výlety, sportovní a kulturní akce, setkání a besedy, autogramiády.',
  url: 'https://www.vamos66.cz',
  contact: {
    address: 'Hodkovská 2558, Újezd nad Lesy, 190 16',
    phone: '+420 608 340 777',
    phoneHref: '+420608340777',
    email: 'info@vamos66.cz',
    ico: '26661381',
    dataSchranka: '7z66cr',
    spisovaZnacka: 'L 14663 vedený u Městského soudu v Praze',
    ucet: '2100926627/2010',
    transparentniUcet: '2301970819/2010',
    transparentniUcetUrl: 'https://ib.fio.cz/ib/transparent?a=2301970819',
  },
  social: {
    facebook: 'https://www.facebook.com/groups/518057908373230',
  },
  donate: 'https://www.darujme.cz/projekt/1210364',
};

export const nav = [
  { label: 'Úvod', href: '/' },
  { label: 'O nás', href: '/o-nas/' },
  { label: 'Projekty', href: '/projekty/' },
  { label: 'Aktuality', href: '/aktuality/' },
  { label: 'Partneři', href: '/partneri/' },
  { label: 'Kontakt', href: '/kontakt/' },
];
