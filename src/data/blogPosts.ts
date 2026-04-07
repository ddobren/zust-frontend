export type BlogPostCard = {
  image: string
  alt: string
  category: string
  date: string
  title: string
  excerpt: string
  link: string
}

export const blogPosts: BlogPostCard[] = [
  {
    image: '/assets/posts/hedy-inspiracija-thumbnail.png',
    alt: 'Naslovna ilustracija digitalne slikovnice Hedy Lamarr: Inspiracija & inovacija',
    category: 'Slikovnica',
    date: '7. Travnja 2026.',
    title: 'Hedy Lamarr: Inspiracija & inovacija',
    excerpt:
      'Predstavljamo digitalnu slikovnicu nastalu u školskom projektu: priču o Hedy Lamarr kao glumici, inovatorici i prvoj junakinji serije o znamenitim ženama u tehnologiji.',
    link: '/post/hedy-lamarr-inspiracija-inovacija',
  },
  {
    image: '/assets/posts/grace/grace-thumbnail.jpg',
    alt: 'Ilustracija Grace Hopper',
    category: 'Članak',
    date: '7. Travnja 2026.',
    title: 'Grace Hopper: Vizija programiranja bližeg ljudima',
    excerpt:
      'Novi članak donosi priču o pionirki koja je pomogla da programiranje postane čitljivije, pristupačnije i bliže stvarnom jeziku ljudi.',
    link: '/post/grace-hopper-vizija-programiranja-blizeg-ljudima',
  },
  {
    image: '/assets/posts/radia/radia-thumbnail.png',
    alt: 'Ilustracija Radie Perlman na zelenkastoj pozadini',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    title: 'Radia Perlman: Arhitektica mreža bez petlji',
    excerpt:
      'Četvrti članak prati pionirku mrežnih tehnologija čiji je Spanning Tree Protocol omogućio pouzdaniji i skalabilniji rad modernih računalnih mreža.',
    link: '/post/radia-perlman-arhitektica-mreza-bez-petlji',
  },
  {
    image: '/assets/posts/ada/ada-thumbnail.png',
    alt: 'Ilustracija Ade Lovelace na svijetloj tehnološkoj pozadini',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    title: 'Ada Lovelace: Vizionarka koja je vidjela budućnost računala',
    excerpt:
      'Treći članak donosi priču o matematičarki koja je u 19. stoljeću prepoznala da strojevi mogu obrađivati više od brojeva i tako najavila digitalno doba.',
    link: '/post/ada-lovelace-vizionarka-koja-je-vidjela-buducnost-racunala',
  },
  {
    image: '/assets/posts/eunice/eunice-thumbnail.jpg',
    alt: 'Ilustracija Eunice Newton Foote na ružičastoj pozadini',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    title: 'Eunice Newton Foote: Rani tragovi znanosti o klimi',
    excerpt:
      'Priča o znanstvenici koja je jednostavnim eksperimentom pokazala kako ugljikov dioksid zadržava toplinu i tako najavila temeljna pitanja klimatske znanosti.',
    link: '/post/eunice-newton-foote-rani-tragovi-znanosti-o-klimi',
  },
  {
    image: '/assets/posts/hedy/hedy-thumbnail.png',
    alt: 'Ilustracija Hedy Lamarr na plavoj pozadini s tehničkom skicom',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    title: 'Hedy Lamarr: Više od filmske dive',
    excerpt:
      'Od holivudske zvijezde do imena važnog za razvoj moderne komunikacije. Prvi članak donosi sažetu priču o Hedy Lamarr i principu frekvencijskog skakanja.',
    link: '/post/hedy-lamarr-vise-od-filmske-dive',
  },
]
