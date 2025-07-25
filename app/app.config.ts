export default defineAppConfig({
  ui: {
    colors: {
      primary: 'port-gore',
      secondary: 'yellow'
    },
    button: {
      slots: {
        base: 'font-bold'
      },
      variants: {
        color: {
          secondary: '!text-black'
        }
      }
    }
  },
  navbar: {
    logo: '/logos/lulu-bleu.png',
    links: [
      {
        label: 'La carte',
        to: '/#carte'
      },
      {
        label: 'Livraison aux entreprises',
        to: '/entreprises'
      },
      {
        label: 'Notre histoire',
        to: '/notre-histoire'
      },
      {
        label: 'Devenir franchisé',
        to: '/franchise'
      },
      {
        label: 'Contact',
        to: '/contact'
      }
    ]
  },
  footer: {
    links: [
      {
        label: 'En bref',
        children: [
          {
            label: 'Notre histoire',
            to: '/notre-histoire'
          },
          {
            label: 'Devenir franchisé',
            to: '/franchise'
          },
          {
            label: 'Nous contacter',
            to: '/contact'
          },
          {
            label: 'Allergènes',
            to: '/'
          },
          {
            label: 'RGPD',
            to: '/rgpd'
          }
        ]
      },
      {
        label: 'Nos restaurants',
        children: [
          {
            label: 'Villefranche-sur-Saône',
            to: 'https://g.co/kgs/39Jrsh8'
          },
          {
            label: `Champagne au Mont D'or / Techlid`
          },
          {
            label: 'Lyon 1 (à venir'
          }
        ]
      },
      {
        label: 'Suivez-nous',
        children: [
          {
            icon: 'i-simple-icons-instagram',
            to: 'https://www.instagram.com/lulu_et_lulu_',
            label: 'Instagram'
          },
          {
            icon: 'i-simple-icons-linkedin',
            to: 'https://www.linkedin.com/company/lulu-lulu/',
            label: 'LinkedIn'
          }
        ]
      }
    ]
    // socials: [

    // ]
  }
})
