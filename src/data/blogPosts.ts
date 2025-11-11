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
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?fit=crop&w=960&q=80',
    alt: 'Ada Lovelace',
    category: 'Životopis',
    date: '5. Svibnja 2025',
    title: 'Hedy Lamarr: Život između glamura i inovacija',
    excerpt:
      'Od Beča do Hollywooda i laboratorija – istraži ključne trenutke koji su oblikovali Hedyin put prema tehnološkoj povijesti.',
    link: '/post/hedy-zivotopis',
  },
  {
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?fit=crop&w=960&q=80',
    alt: 'Grace Hopper',
    category: 'Vremenska crta',
    date: '18. Travnja 2025',
    title: 'Ključne stanice Hedyine vremenske crte',
    excerpt:
      'Interaktivna vremenska crta prikazuje kako su filmski setovi i ratni laboratoriji vodili do izuma frekvencijskog skakanja.',
    link: '/post/hedy-timeline',
  },
  {
    image: 'https://www.invent.org/sites/default/files/styles/inductee_media/public/inductees/2024-07/Radia-Perlman.jpg?h=f6a3919a',
    alt: 'Radia Perlman',
    category: 'Frekvencijsko skakanje',
    date: '2. Ožujka 2025',
    title: 'Frekvencijsko skakanje objašnjeno za 5 minuta',
    excerpt:
      'Vizualni vodič otkriva kako se signal prebacuje kroz spektar i zašto je to revolucioniralo sigurnu komunikaciju.',
    link: '/post/frekvencijsko-skakanje',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=960&q=80',
    alt: 'Frekvencijsko skakanje ilustracija',
    category: 'Bluetooth & Wi-Fi',
    date: '25. Ožujka 2025',
    title: 'Od frekvencijskog skakanja do Bluetootha',
    excerpt:
      'Kako Hedyin patent živi u svakodnevnim uređajima – kratka priča o prelasku iz vojne tehnologije u civilnu uporabu.',
    link: '/post/bluetooth-wifi',
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=960&q=80',
    alt: 'Radionica sa sudionicima',
    category: 'Radionice',
    date: '8. Travnja 2025',
    title: 'Radionica: Tajna poruka po uzoru na Hedy',
    excerpt:
      'Korak-po-korak vodič za učionicu koji spaja storytelling i šifriranje, spreman za primjenu s darovitim učenicima.',
    link: '/post/radionica-tajna-poruka',
  },
  {
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?fit=crop&w=960&q=80',
    alt: 'Mentorski sastanak',
    category: 'STEM inspiracija',
    date: '30. Travnja 2025',
    title: 'Mentorice koje potiču nove Hedy',
    excerpt:
      'Predstavljamo žene iz industrije koje podržavaju projekt i nude savjete kako ostati znatiželjan i hrabar.',
    link: '/post/stem-mentorice',
  },
]
