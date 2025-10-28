export type ArticleSection = {
  id: string
  heading: string
  paragraphs: string[]
  infoBox?: {
    title: string
    items: string[]
  }
  quote?: {
    text: string
    author: string
  }
}

export type RelatedPost = {
  href: string
  title: string
  category: string
  date: string
  image: string
}

export type Article = {
  slug: string
  title: string
  category: string
  date: string
  readingTime: string
  author: {
    name: string
    role: string
    avatar: string
  }
  heroImage: {
    src: string
    alt: string
  }
  intro: string
  sections: ArticleSection[]
  conclusion: {
    heading: string
    paragraphs: string[]
  }
  tags: string[]
  related: RelatedPost[]
}

const defaultAuthor = {
  name: 'Projektni tim',
  role: 'ŽUSV uredništvo',
  avatar: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png',
}

const posts: Record<string, Article> = {
  'hedy-featured': {
    slug: 'hedy-featured',
    title: 'Hedy Lamarr – Glumica koja je izumila temelj Bluetootha',
    category: 'Žene u tehnologiji',
    date: '7. Lipnja 2025',
    readingTime: '8 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://cdn.futura-sciences.com/sources/images/hedy-lamarr-wifi.jpeg',
      alt: 'Hedy Lamarr s ilustracijom radijskih valova',
    },
    intro:
      'Hedy Lamarr, rođena kao Hedwig Eva Maria Kiesler 1914. godine u Beču, bila je slavna holivudska glumica, ali i izumiteljica čiji je doprinos tehnologiji često ostao u sjeni. Njezin patent frekvencijskog skakanja promijenio je način na koji danas komuniciramo.',
    sections: [
      {
        id: 'biografija',
        heading: 'Put od filmskog platna do laboratorija',
        paragraphs: [
          'Nakon uspjeha u europskim filmovima, Hedy se seli u Hollywood gdje redefinira ulogu glamurozne zvijezde. Iza blještavila nalazio se analitički um fasciniran tehnologijom komunikacija.',
          'Tijekom Drugog svjetskog rata, zajedno s kompozitorom Georgeom Antheilom, razvija ideju frekvencijskog skakanja. Patent registriran 1942. godine pružao je način za zaobilaženje ometanja radio-signala, što je bilo ključno za navigaciju torpeda.',
        ],
        quote: {
          text: 'Ponekad ljudi podcijene inteligenciju žene jer je vide samo kroz prizmu izgleda. Hedy je svaki stereotip pretvorila u prednost.',
          author: 'George Antheil',
        },
      },
      {
        id: 'utjecaj',
        heading: 'Zašto je frekvencijsko skakanje bilo revolucionarno?',
        paragraphs: [
          'Umjesto stalnog emitiranja na jednoj frekvenciji, Lamarr i Antheil predložili su sinkronizirano premještanje signala kroz spektar. Time je prijenos postao otporniji na prisluškivanje i smetnje.',
          'Kasnije generacije komunikacijskih sustava koristile su isti princip. Današnji Wi-Fi, Bluetooth i GPS sustavi oslanjaju se na varijante istog koncepta – dokaz da inovacija iz ratnog vremena može postati osnova svakodnevne tehnologije.',
        ],
        infoBox: {
          title: 'Ključne činjenice',
          items: [
            'Patent br. US2292387 predan je 11. kolovoza 1942.',
            'Sustav je sinkronizirao 88 različitih frekvencija – inspirirano klavirskom tipkovnicom.',
            'Tek 1997. godine Hedy Lamarr i George Antheil službeno su priznati za doprinos bežičnim komunikacijama.',
          ],
        },
      },
      {
        id: 'naslijede',
        heading: 'Nasljeđe Hedy Lamarr u učionici',
        paragraphs: [
          'Priča o Hedy idealna je za nastavu: spaja povijest, fiziku, informatičku pismenost i građanski odgoj. Učenici se potiču da istraže stereotipe, primjene logiku i dizajniraju vlastite komunikacijske protokole.',
          'U sklopu projekta nastaju radionice, stripovi i interaktivne vremenske crte koje učenicima omogućuju da istraže kako znatiželja i kreativnost mijenjaju svijet.',
        ],
      },
    ],
    conclusion: {
      heading: 'Što učimo od Hedy Lamarr?',
      paragraphs: [
        'Inovacija ne nastaje samo u laboratorijima. Hedy je stvarala u slobodno vrijeme, vođena željom da doprinese društvu.',
        'Njezin primjer pokazuje da umjetnost i tehnologija nisu suprotstavljene discipline. Kada slavimo raznolikost talenata, dobivamo rješenja koja oblikuju budućnost.',
      ],
    },
    tags: ['Žene u IT-u', 'Tehnološka povijest', 'Inspiracija'],
    related: [
      {
        href: '/post/hedy-zivotopis',
        title: 'Hedy Lamarr: Život između glamura i inovacija',
        category: 'Životopis',
        date: '5. Svibnja 2025',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?fit=crop&w=600&q=80',
      },
      {
        href: '/post/frekvencijsko-skakanje',
        title: 'Frekvencijsko skakanje objašnjeno za 5 minuta',
        category: 'Tehnologija',
        date: '2. Ožujka 2025',
        image: 'https://www.invent.org/sites/default/files/styles/inductee_media/public/inductees/2024-07/Radia-Perlman.jpg?h=f6a3919a',
      },
      {
        href: '/post/stem-mentorice',
        title: 'Mentorice koje potiču nove Hedy',
        category: 'STEM inspiracija',
        date: '30. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?fit=crop&w=600&q=80',
      },
    ],
  },
  'hedy-zivotopis': {
    slug: 'hedy-zivotopis',
    title: 'Hedy Lamarr: Život između glamura i inovacija',
    category: 'Životopis',
    date: '5. Svibnja 2025',
    readingTime: '6 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?fit=crop&w=1200&q=80',
      alt: 'Vintage filmska klapa i celuloidna traka',
    },
    intro:
      'Hedy Lamarr često se opisuje kao najljepša žena svijeta, no njezin život donosi mnogo više od filmskog glamura. Ova biografija otkriva kako je Hedy spajala umjetnost, znanost i građansku odgovornost.',
    sections: [
      {
        id: 'rani-odgoj',
        heading: 'Odrastanje u Beču',
        paragraphs: [
          'Hedy je odrastala u židovskoj obitelji u Beču. Otac joj je bio bankar koji ju je vodio na šetnje i objašnjavao kako funkcioniraju strojevi. Taj rani razvoj logičkog razmišljanja postavio je temelje za njezinu kasniju strast prema inovacijama.',
          'Još kao tinejdžerica osvojila je filmske produkcije svojim izrazom lica i razumijevanjem kamere. Istovremeno je studirala glazbu i inženjerstvo, što je bila rijetka kombinacija za mladu ženu sredinom 20. stoljeća.',
        ],
      },
      {
        id: 'hollywood',
        heading: 'Zvijezda Hollywooda',
        paragraphs: [
          'Nakon bijega iz braka s industrijalcem Fritzom Mandlom, Hedy odlazi u London, a zatim u SAD gdje potpisuje ugovor s MGM-om. Filmovi poput "Alžira" i "Samson i Dalila" donijeli su joj status ikone.',
          'Rad u Hollywoodu davao joj je financijsku stabilnost, ali je koristila svaki slobodan trenutak za učenje o radiotehnici i elektronici. U improviziranom laboratoriju kod kuće često je eksperimentirala s idejama o sigurnoj komunikaciji.',
        ],
      },
      {
        id: 'inovacije',
        heading: 'Inovatorica s vizijom',
        paragraphs: [
          'Uz frekvencijsko skakanje, Hedy je tijekom godina prijavila više patenata – od tabletice koja karbonizira vodu do dizajna za brže zrakoplove. Iako mnoge ideje nisu komercijalizirane, pokazuju širinu njezinih interesa.',
          'Za vrijeme rata aktivno sudjeluje u prikupljanju sredstava za savezničke snage. No najviše je radila iza kulisa, vjerujući da znanje može spasiti živote.',
        ],
        infoBox: {
          title: 'Prekretnice karijere',
          items: [
            '1933. – debitira u filmu "Ekstaza".',
            '1938. – potpisuje ugovor s MGM studijem.',
            '1942. – registrira patent za frekvencijsko skakanje.',
            '1997. – prima nagradu Electronic Frontier Foundation za doprinos bežičnim tehnologijama.',
          ],
        },
      },
    ],
    conclusion: {
      heading: 'Biografija koja inspirira učionice',
      paragraphs: [
        'Učenicima Hedyin život pokazuje da identitet ne mora biti jednoslojan. Možemo istovremeno voljeti umjetnost i biti odlični u STEM području.',
        'Biografija završava otvorenim pitanjima: koje bi ideje Hedy razvila u današnjim laboratorijima, kako bismo joj danas pružili podršku i priznanje?',
      ],
    },
    tags: ['Biografije', 'Hedy Lamarr', 'Povijest'],
    related: [
      {
        href: '/post/hedy-featured',
        title: 'Hedy Lamarr – Glumica koja je izumila temelj Bluetootha',
        category: 'Žene u tehnologiji',
        date: '7. Lipnja 2025',
        image: 'https://cdn.futura-sciences.com/sources/images/hedy-lamarr-wifi.jpeg',
      },
      {
        href: '/post/hedy-timeline',
        title: 'Ključne stanice Hedyine vremenske crte',
        category: 'Vremenska crta',
        date: '18. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?fit=crop&w=600&q=80',
      },
      {
        href: '/post/stem-mentorice',
        title: 'Mentorice koje potiču nove Hedy',
        category: 'STEM inspiracija',
        date: '30. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?fit=crop&w=600&q=80',
      },
    ],
  },
  'hedy-timeline': {
    slug: 'hedy-timeline',
    title: 'Ključne stanice Hedyine vremenske crte',
    category: 'Vremenska crta',
    date: '18. Travnja 2025',
    readingTime: '5 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=1200&q=80',
      alt: 'Ilustracija vremenske crte s tehnološkim simbolima',
    },
    intro:
      'Vremenska crta pomaže učenicima vidjeti širu sliku: svaka Hedyina odluka vodi prema kombinaciji umjetnosti i znanosti. Pripremili smo pregled ključnih godina koje možete koristiti u nastavi ili interaktivnoj prezentaciji.',
    sections: [
      {
        id: '1920',
        heading: '1920-e: Tinejdžerica koja promatra strojeve',
        paragraphs: [
          'Hedy već kao djevojčica rastavlja uređaje u kući. Uz očevu podršku posjećuje tehničke sajmove i uči kako radi radio uređaj.',
          'Prvi filmski angažmani dolaze 1928. godine, ali paralelno pohađa satove glazbe i fizike, što postaje srž njezina multidisciplinarnog pristupa.',
        ],
      },
      {
        id: '1930',
        heading: '1930-e: Od Beča do Hollywooda',
        paragraphs: [
          '1933. snima kontroverzni film “Ekstaza” i odmah privlači pažnju međunarodne publike. Brak s industrijalcem Fritzom Mandlom otvara vrata vojnim krugovima gdje upoznaje tehnologije oružja.',
          '1938. godine seli se u SAD, potpisuje ugovor s MGM-om i dobiva umjetničko ime Hedy Lamarr.',
        ],
      },
      {
        id: '1940',
        heading: '1940-e: Patent koji mijenja igru',
        paragraphs: [
          'Tijekom 1941. i 1942. intenzivno radi na patentu frekvencijskog skakanja. Ideja je pružiti torpedima bolju zaštitu od ometanja.',
          'Patent se prvo ne koristi u vojne svrhe, ali 1960-ih tehnologija postaje dio sustava zaštićenih komunikacija američke mornarice.',
        ],
      },
      {
        id: '1990',
        heading: '1990-e: Kasno priznanje',
        paragraphs: [
          'Hedy i George Antheil dobivaju nagradu Electronic Frontier Foundation 1997. godine. Iste godine Hedy prima i priznanje od američkog Nacionalnog vijeća izumitelja.',
          'Njezina priča tada ulazi u udžbenike, a 2014. godine Hedy posthumno biva uvrštena u National Inventors Hall of Fame.',
        ],
      },
    ],
    conclusion: {
      heading: 'Vremenska crta kao nastavni alat',
      paragraphs: [
        'Predložene godine mogu se pretvoriti u interaktivnu vremensku traku. Svaki događaj neka učenici povežu s pitanjem: što smo naučili i kako je Hedy reagirala na izazove?',
        'Na taj način vremenska crta postaje dinamična mapa učenja, a ne samo popis datuma.',
      ],
    },
    tags: ['Vremenska crta', 'Hedy Lamarr', 'Nastavni materijali'],
    related: [
      {
        href: '/post/hedy-zivotopis',
        title: 'Hedy Lamarr: Život između glamura i inovacija',
        category: 'Životopis',
        date: '5. Svibnja 2025',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?fit=crop&w=600&q=80',
      },
      {
        href: '/post/frekvencijsko-skakanje',
        title: 'Frekvencijsko skakanje objašnjeno za 5 minuta',
        category: 'Tehnologija',
        date: '2. Ožujka 2025',
        image: 'https://www.invent.org/sites/default/files/styles/inductee_media/public/inductees/2024-07/Radia-Perlman.jpg?h=f6a3919a',
      },
      {
        href: '/post/bluetooth-wifi',
        title: 'Od frekvencijskog skakanja do Bluetootha',
        category: 'Bluetooth & Wi-Fi',
        date: '25. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=600&q=80',
      },
    ],
  },
  'frekvencijsko-skakanje': {
    slug: 'frekvencijsko-skakanje',
    title: 'Frekvencijsko skakanje objašnjeno za 5 minuta',
    category: 'Tehnologija',
    date: '2. Ožujka 2025',
    readingTime: '7 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1581091012184-7e0cdfbb6794?fit=crop&w=1200&q=80',
      alt: 'Ilustracija radio valova i spektrograma',
    },
    intro:
      'Frekvencijsko skakanje ili frequency hopping širokopojasna je tehnika koja čini bežične signale otpornima na smetnje. Učenicima je predstavljamo kroz praktične eksperimente i vizualne prikaze.',
    sections: [
      {
        id: 'osnove',
        heading: 'Kako radi frekvencijsko skakanje?',
        paragraphs: [
          'Predstavite signal kao poruku koja preskače između unaprijed dogovorenih frekvencija prema sinkroniziranom uzorku. Primatelj mora znati taj raspored kako bi poruku mogao rekonstruirati.',
          'Napadač koji ne zna raspored čuje samo raspršenu buku. Impuls za ovu tehniku Hedy je dobila promatrajući klavirske tipke – svaka frekvencija nalik je noti u melodiji.',
        ],
      },
      {
        id: 'primjena',
        heading: 'Primjene u modernim tehnologijama',
        paragraphs: [
          'Bluetooth koristi prilagodljivi FHSS (Frequency Hopping Spread Spectrum) kako bi istovremeno podržao više uređaja i izbjegao smetnje s Wi-Fi mrežama.',
          'Vojska primjenjuje slične tehnike za sigurnu komunikaciju dronova i satelita. Učenicima možete pokazati primjere iz svakodnevnog života: bežične slušalice, pametni satovi i igraće konzole.',
        ],
        infoBox: {
          title: 'Ključni pojmovi za nastavu',
          items: [
            'Pseudonasumični niz – unaprijed definiran raspored frekvencija.',
            'Širina pojasa – raspon u kojem se signal kreće.',
            'Otpornost na smetnje – razlog zašto se uređaji ne „svađaju“ u istom prostoru.',
          ],
        },
      },
      {
        id: 'aktivnost',
        heading: 'Aktivnost u učionici',
        paragraphs: [
          'Podijelite razred u timove. Svaki tim dobiva set kartica s brojevima frekvencija i tajnu šifru. Timski zadatak je poslati poruku drugom timu preskačući kartice prema dogovorenom rasporedu.',
          'Treći tim igra ulogu „ometanja“ – pokušava presresti komunikaciju bez šifre. Rezultat je diskusija o važnosti koordinacije i sigurnosnih protokola.',
        ],
      },
    ],
    conclusion: {
      heading: 'Frekvencijsko skakanje kao inspiracija',
      paragraphs: [
        'Priča o frekvencijskom skakanju dokazuje da interdisciplinarni pristup vodi inovacijama. Glazbenik i glumica zajedno su osmislili tehnološki iskorak.',
        'U nastavnim materijalima potičemo učenike da traže ideje iz različitih područja i spajaju ih u nove koncepte.',
      ],
    },
    tags: ['Tehnologija', 'STEM nastava', 'Inovacije'],
    related: [
      {
        href: '/post/bluetooth-wifi',
        title: 'Od frekvencijskog skakanja do Bluetootha',
        category: 'Bluetooth & Wi-Fi',
        date: '25. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=600&q=80',
      },
      {
        href: '/post/sigurnost-komunikacija',
        title: 'Sigurnost komunikacija u učeničkoj mreži',
        category: 'Sigurnost komunikacija',
        date: '12. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?fit=crop&w=600&q=80',
      },
      {
        href: '/post/radionica-tajna-poruka',
        title: 'Radionica: Tajna poruka po uzoru na Hedy',
        category: 'Radionice',
        date: '8. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&q=80',
      },
    ],
  },
  'bluetooth-wifi': {
    slug: 'bluetooth-wifi',
    title: 'Od frekvencijskog skakanja do Bluetootha',
    category: 'Bluetooth & Wi-Fi',
    date: '25. Ožujka 2025',
    readingTime: '6 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=1200&q=80',
      alt: 'Povezani pametni uređaji na stolu',
    },
    intro:
      'Hedyin patent nije ostao u ladici. Danas svako povezivanje slušalica, prijenos slike ili igranje na konzoli koristi principe koje je ona zamislila. Objašnjavamo kako.',
    sections: [
      {
        id: 'evolucija',
        heading: 'Evolucija izuma',
        paragraphs: [
          'Razvoj digitalnih komunikacija 1960-ih i 1970-ih ponovno otkriva Lamarrin patent. Inženjeri uvoze koncept u sustave satelitske komunikacije, a kasnije i u IEEE 802.11 standard.',
          'Bluetooth konzorcij kombinira frekvencijsko skakanje s korekcijom pogreške, stvarajući robustan protokol koji omogućuje desetke povezivanja na malim udaljenostima.',
        ],
      },
      {
        id: 'primjeri',
        heading: 'Primjeri iz prakse',
        paragraphs: [
          'Pametne škole koriste Bluetooth beacone za navigaciju učenika kroz izložbe i laboratorije. Frekvencijsko skakanje omogućuje da uređaji ostanu sinkronizirani čak i kada je prostor pun.',
          'Wi-Fi mreže u školama kombiniraju širinu pojasa i adaptivno raspoređivanje kanala kako bi se izbjegle smetnje, što je izravna evolucija Hedyine ideje.',
        ],
      },
      {
        id: 'projekti',
        heading: 'Mini projekt za učenike',
        paragraphs: [
          'Zadatak: osmisliti infografiku koja prikazuje putanje signala od Hedy Lamarr do današnjeg Bluetootha. Učenici istražuju ključne osobe, standarde i proizvode.',
          'Prezentacija završava praktičnim primjerom – povezivanje mikrokontrolera s mobilnim uređajem i slanje šifrirane poruke.',
        ],
        infoBox: {
          title: 'Materijali za projekt',
          items: [
            'Povijesna vremenska crta razvoja bežičnih standarda.',
            'Primjeri Bluetooth profila (A2DP, HID, GATT).',
            'Predlošci za infografiku i prezentaciju.',
          ],
        },
      },
    ],
    conclusion: {
      heading: 'Učenici kao nasljednici inovacije',
      paragraphs: [
        'Kada učenici shvate veze između povijesnog patenta i gadgeta u džepu, raste im osjećaj pripadnosti STEM području.',
        'Hedyin doprinos pokazuje da dobre ideje trebaju vrijeme, zajednicu i podršku kako bi promijenile svijet.',
      ],
    },
    tags: ['Bluetooth', 'Wi-Fi', 'Inovacije'],
    related: [
      {
        href: '/post/frekvencijsko-skakanje',
        title: 'Frekvencijsko skakanje objašnjeno za 5 minuta',
        category: 'Tehnologija',
        date: '2. Ožujka 2025',
        image: 'https://www.invent.org/sites/default/files/styles/inductee_media/public/inductees/2024-07/Radia-Perlman.jpg?h=f6a3919a',
      },
      {
        href: '/post/sigurnost-komunikacija',
        title: 'Sigurnost komunikacija u učeničkoj mreži',
        category: 'Sigurnost komunikacija',
        date: '12. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?fit=crop&w=600&q=80',
      },
      {
        href: '/post/hedy-featured',
        title: 'Hedy Lamarr – Glumica koja je izumila temelj Bluetootha',
        category: 'Žene u tehnologiji',
        date: '7. Lipnja 2025',
        image: 'https://cdn.futura-sciences.com/sources/images/hedy-lamarr-wifi.jpeg',
      },
    ],
  },
  'sigurnost-komunikacija': {
    slug: 'sigurnost-komunikacija',
    title: 'Sigurnost komunikacija u učeničkoj mreži',
    category: 'Sigurnost komunikacija',
    date: '12. Ožujka 2025',
    readingTime: '7 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?fit=crop&w=1200&q=80',
      alt: 'Ilustracija digitalnih bravica i mreže',
    },
    intro:
      'Lamarrin patent otvara vrata temi kibernetičke sigurnosti. U ovom članku nudimo pregled kako školsku mrežu učiniti sigurnijom za učenike, uz aktivnosti koje objašnjavaju ključne pojmove.',
    sections: [
      {
        id: 'rizici',
        heading: 'Najčešći rizici u školskim mrežama',
        paragraphs: [
          'Slabe lozinke, neažurirani uređaji i nešifrirane veze najčešći su izvori ranjivosti. Učenike učimo da svaka otvorena mreža može biti potencijalna prijetnja.',
          'Primjer iz prakse: školski tim je otkrio da se zajednička lozinka dijelila na društvenim mrežama. Rješenje je bilo uvođenje individualnih računa i edukacije.',
        ],
      },
      {
        id: 'strategije',
        heading: 'Strategije zaštite',
        paragraphs: [
          'Primjena WPA3 enkripcije i redovito ažuriranje firmware-a na pristupnim točkama prvi su korak. Uz to je važno segmentirati mrežu: posjetitelji, učenici i administracija trebaju odvojene pristupe.',
          'Učenicima možemo zadati zadatak da dizajniraju plakat s pravilima ponašanja na mreži. Tako uče o odgovornosti i digitalnoj higijeni.',
        ],
        infoBox: {
          title: 'Checklista za školu',
          items: [
            'Aktivirati dvofaktorsku autentikaciju gdje je moguće.',
            'Redovito pratiti zapise mrežnih uređaja.',
            'Uvesti politiku snažnih lozinki i edukaciju učenika.',
          ],
        },
      },
      {
        id: 'diskusija',
        heading: 'Diskusija s učenicima',
        paragraphs: [
          'Organizirajte raspravu: tko je odgovoran za sigurnost školskog Wi-Fi-ja? Učenici, nastavnici ili tehnička služba? Zajednički dolaze do zaključka da svatko ima ulogu.',
          'Kao završnu aktivnost ponudite analizu stvarnog slučaja preuzimanja podataka i pitajte: što bi Hedy učinila? Kakvu bi tehnologiju predložila?',
        ],
      },
    ],
    conclusion: {
      heading: 'Sigurnost kao kontinuirani proces',
      paragraphs: [
        'Sigurnost nije jednokratni projekt, već kultura škole. Hedy Lamarr nas podsjeća da inovacije nastaju kad kombiniramo znanje i empatiju.',
        'U našem projektu sigurnost je dio svake radionice – učenici na konkretnim primjerima uče kako zaštititi informacije.',
      ],
    },
    tags: ['Sigurnost', 'Digitalna pismenost', 'Školske mreže'],
    related: [
      {
        href: '/post/frekvencijsko-skakanje',
        title: 'Frekvencijsko skakanje objašnjeno za 5 minuta',
        category: 'Tehnologija',
        date: '2. Ožujka 2025',
        image: 'https://www.invent.org/sites/default/files/styles/inductee_media/public/inductees/2024-07/Radia-Perlman.jpg?h=f6a3919a',
      },
      {
        href: '/post/radionica-tajna-poruka',
        title: 'Radionica: Tajna poruka po uzoru na Hedy',
        category: 'Radionice',
        date: '8. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&q=80',
      },
      {
        href: '/post/materijali-nastavnike',
        title: 'Materijali za nastavnike: scenariji i listići',
        category: 'Materijali za nastavnike',
        date: '20. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=600&q=80',
      },
    ],
  },
  'radionica-tajna-poruka': {
    slug: 'radionica-tajna-poruka',
    title: 'Radionica: Tajna poruka po uzoru na Hedy',
    category: 'Radionice',
    date: '8. Travnja 2025',
    readingTime: '5 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=1200&q=80',
      alt: 'Grupa učenika radi na zajedničkom zadatku',
    },
    intro:
      'Radionica “Tajna poruka” osmišljena je za razredne sate informatike i građanskog odgoja. Kroz igru učenici upoznaju principe šifriranja i timskog rada.',
    sections: [
      {
        id: 'ciljevi',
        heading: 'Što učenici uče?',
        paragraphs: [
          'Učenici istražuju kako se poruke mogu zaštititi promjenom kanala komunikacije. Aktivnost potiče kreativnost i analitičko razmišljanje.',
          'Radionica je prilagođena manjim skupinama od 4 do 6 učenika, a traje 60 minuta.',
        ],
      },
      {
        id: 'koraci',
        heading: 'Koraci radionice',
        paragraphs: [
          'Uvod (10 min): Kratka priča o Hedy Lamarr i frekvencijskom skakanju.',
          'Glavni zadatak (35 min): Učenici u parovima izrađuju šifrirne diskove i šalju poruke koje drugi par mora dešifrirati.',
          'Refleksija (15 min): Razgovor o tome kako bi se tehnika mogla primijeniti danas.',
        ],
        infoBox: {
          title: 'Materijali',
          items: ['Kartonski diskovi ili 3D isprintani modeli', 'Markeri i škarice', 'Upute i radni listići', 'Timer'],
        },
      },
      {
        id: 'evaluacija',
        heading: 'Evaluacija uspjeha',
        paragraphs: [
          'Mentor promatra suradnju i način rješavanja problema. Tablica kriterija uključuje komunikaciju, kreativnost i primjenu koncepta.',
          'Sudionici ispunjavaju kratku anketu o tome što su naučili i kako bi unaprijedili radionicu.',
        ],
      },
    ],
    conclusion: {
      heading: 'Zašto radionica funkcionira',
      paragraphs: [
        'Priča, praktičan zadatak i refleksija čine strukturirani pristup koji aktivira različite stilove učenja.',
        'Učenici odlaze kući s jasnom vezom između Hedyinog izuma i današnje digitalne sigurnosti.',
      ],
    },
    tags: ['Radionice', 'Aktivno učenje', 'STEM'],
    related: [
      {
        href: '/post/materijali-nastavnike',
        title: 'Materijali za nastavnike: scenariji i listići',
        category: 'Materijali za nastavnike',
        date: '20. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=600&q=80',
      },
      {
        href: '/post/sigurnost-komunikacija',
        title: 'Sigurnost komunikacija u učeničkoj mreži',
        category: 'Sigurnost komunikacija',
        date: '12. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?fit=crop&w=600&q=80',
      },
      {
        href: '/post/stem-mentorice',
        title: 'Mentorice koje potiču nove Hedy',
        category: 'STEM inspiracija',
        date: '30. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?fit=crop&w=600&q=80',
      },
    ],
  },
  'materijali-nastavnike': {
    slug: 'materijali-nastavnike',
    title: 'Materijali za nastavnike: scenariji i listići',
    category: 'Materijali za nastavnike',
    date: '20. Ožujka 2025',
    readingTime: '6 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=1200&q=80',
      alt: 'Profesor priprema nastavni materijal uz laptop',
    },
    intro:
      'Svi sadržaji projekta dostupni su u obliku scenarija nastave, radnih listića i digitalnih prezentacija. Materijali su osmišljeni kako bi nastavnici lako uveli priču o Hedy Lamarr u kurikulum.',
    sections: [
      {
        id: 'scenariji',
        heading: 'Scenariji nastave',
        paragraphs: [
          'Svaki scenarij sadrži ishode učenja, vremenski okvir i popis potrebnih resursa. Učitelji mogu birati između 3 tematske cjeline: povijest tehnologije, digitalna sigurnost i kreativno programiranje.',
          'Priložen je i “plan B” s idejama za kraće sate ili online okruženje.',
        ],
      },
      {
        id: 'listici',
        heading: 'Radni listići',
        paragraphs: [
          'Listići dolaze u PDF i DOCX verziji radi prilagodbe. Zadaci uključuju kombinaciju pitanja višestrukog izbora, kratkih eseja i timskih izazova.',
          'Za učenike koji žele više tu su izazovi “Istraži dalje” s prijedlozima knjiga, podcasta i videa.',
        ],
      },
      {
        id: 'digitalni-resursi',
        heading: 'Digitalni resursi',
        paragraphs: [
          'Canva predlošci i prezentacije u Google Slides formatu olakšavaju vizualni dio sata. Uključene su ilustracije Hedy Lamarr i grafički elementi koji prate vizualni identitet projekta.',
          'Svaki materijal ima licencu Creative Commons kako bi škole mogle prilagoditi sadržaj vlastitim potrebama.',
        ],
        infoBox: {
          title: 'Kako preuzeti?',
          items: [
            'Prijavite se putem školskog računa i odaberite modul.',
            'Preuzmite ZIP paket s uputama.',
            'Podijelite materijale u učeničkoj virtualnoj učionici.',
          ],
        },
      },
    ],
    conclusion: {
      heading: 'Podrška nastavnicima i mentorima',
      paragraphs: [
        'Cilj je rasteretiti nastavnike od dugotrajne pripreme i omogućiti im da se fokusiraju na rad s učenicima.',
        'Materijali su živi dokument – zahvaljujući povratnim informacijama nastavljamo ih razvijati zajedno s mentorima.',
      ],
    },
    tags: ['Materijali', 'Nastavnici', 'Digitalni resursi'],
    related: [
      {
        href: '/post/radionica-tajna-poruka',
        title: 'Radionica: Tajna poruka po uzoru na Hedy',
        category: 'Radionice',
        date: '8. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&q=80',
      },
      {
        href: '/post/hedy-featured',
        title: 'Hedy Lamarr – Glumica koja je izumila temelj Bluetootha',
        category: 'Žene u tehnologiji',
        date: '7. Lipnja 2025',
        image: 'https://cdn.futura-sciences.com/sources/images/hedy-lamarr-wifi.jpeg',
      },
      {
        href: '/post/sigurnost-komunikacija',
        title: 'Sigurnost komunikacija u učeničkoj mreži',
        category: 'Sigurnost komunikacija',
        date: '12. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?fit=crop&w=600&q=80',
      },
    ],
  },
  'stem-mentorice': {
    slug: 'stem-mentorice',
    title: 'Mentorice koje potiču nove Hedy',
    category: 'STEM inspiracija',
    date: '30. Travnja 2025',
    readingTime: '6 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?fit=crop&w=1200&q=80',
      alt: 'Mentorica koja savjetuje tim učenica',
    },
    intro:
      'Projekt se oslanja na mrežu mentorica iz lokalne IT zajednice. Upoznajte žene koje premošćuju jaz između škole i industrije te nude podršku darovitim učenicama.',
    sections: [
      {
        id: 'mreza',
        heading: 'Mreža podrške',
        paragraphs: [
          'Mentorice dolaze iz područja programiranja, UI/UX dizajna i poduzetništva. Njihova raznolikost pokazuje da STEM karijera može izgledati vrlo različito.',
          'Svaka mentorica vodi mini ciklus savjetovanja i pomaže učenicima postaviti osobne ciljeve.',
        ],
      },
      {
        id: 'iskustva',
        heading: 'Što kažu mentorice?',
        paragraphs: [
          '“Vidjeti entuzijazam učenica koje prvi put pišu vlastiti kod podsjeća me zašto sam odabrala ovu karijeru”, kaže Ivana, front-end inženjerka.',
          '“Radimo na tome da djevojke vide sebe kao buduće osnivačice startupa”, dodaje Maja, mentorica za poduzetništvo.',
        ],
        quote: {
          text: 'Mentorstvo nije jednosmjerna ulica. I mi učimo od mladih kako tehnologiju učiniti inkluzivnijom.',
          author: 'Marija, UX mentorica',
        },
      },
      {
        id: 'ukljucivanje',
        heading: 'Kako se uključiti?',
        paragraphs: [
          'Mentorice se prijavljuju putem obrasca i prolaze kratku orijentaciju o ciljevima projekta. Aktivnosti mogu biti online ili uživo, ovisno o rasporedu.',
          'Škole koje žele surađivati mogu dogovoriti gostujuće predavanje, projektni izazov ili job-shadowing dan.',
        ],
      },
    ],
    conclusion: {
      heading: 'Mentorstvo mijenja perspektive',
      paragraphs: [
        'Mladi trebaju vidjeti realne primjere iz prakse i osjetiti da pripadaju tehnološkoj zajednici.',
        'Mentorice grade most između škole i industrije te stvaraju nove prilike za učenice koje sanjaju STEM karijeru.',
      ],
    },
    tags: ['Mentorstvo', 'STEM karijere', 'Inspiracija'],
    related: [
      {
        href: '/post/radionica-tajna-poruka',
        title: 'Radionica: Tajna poruka po uzoru na Hedy',
        category: 'Radionice',
        date: '8. Travnja 2025',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&q=80',
      },
      {
        href: '/post/materijali-nastavnike',
        title: 'Materijali za nastavnike: scenariji i listići',
        category: 'Materijali za nastavnike',
        date: '20. Ožujka 2025',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=600&q=80',
      },
      {
        href: '/post/hedy-featured',
        title: 'Hedy Lamarr – Glumica koja je izumila temelj Bluetootha',
        category: 'Žene u tehnologiji',
        date: '7. Lipnja 2025',
        image: 'https://cdn.futura-sciences.com/sources/images/hedy-lamarr-wifi.jpeg',
      },
    ],
  },
}

export const postsBySlug = posts
export const allPosts: Article[] = Object.values(posts)

export const getPostBySlug = (slug: string): Article | undefined => {
  return posts[slug]
}
