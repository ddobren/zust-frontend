export type ArticleSection = {
  id: string
  heading: string
  paragraphs: string[]
  image?: {
    src: string
    alt: string
    caption?: string
  }
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
  related: RelatedPost[]
}

const defaultAuthor = {
  name: 'Projektni tim',
  role: 'ŽUSV uredništvo',
  avatar: '/assets/posts/hedy/hedy-doc-1.jpeg',
}

const posts: Record<string, Article> = {
  'grace-hopper-vizija-programiranja-blizeg-ljudima': {
    slug: 'grace-hopper-vizija-programiranja-blizeg-ljudima',
    title: 'Grace Hopper: Vizija programiranja bližeg ljudima',
    category: 'Članak',
    date: '7. Travnja 2026.',
    readingTime: '3 min čitanja',
    author: {
      name: 'Projektni tim',
      role: 'ŽUSV uredništvo',
      avatar: '/assets/posts/grace/grace-doc-1.jpeg',
    },
    heroImage: {
      src: '/assets/posts/grace/grace-thumbnail.jpg',
      alt: 'Ilustracija Grace Hopper',
    },
    intro:
      'Grace Hopper bila je jedna od najvažnijih pionirki računalstva i osoba koja je snažno doprinijela tome da programiranje postane dostupnije ljudima. U vremenu kada su računala bila razumljiva samo uskom krugu stručnjaka, Hopper je imala viziju da strojevi mogu razumjeti jezik bliži svakodnevnom govoru, a ne samo strogo tehničke naredbe.',
    sections: [
      {
        id: 'zasto-je-vazna',
        heading: 'Programiranje ne mora biti rezervirano za uski krug stručnjaka',
        paragraphs: [
          'Grace Hopper vjerovala je da programiranje ne mora biti ograničeno na matematičare i inženjere. Njezina je ideja bila da računala treba približiti ljudima i omogućiti im da rade s razumljivijim oblicima jezika.',
          'Takav pogled bio je radikalan za svoje vrijeme, ali upravo je on otvorio prostor za drukčiji razvoj softvera i širu primjenu računalnih sustava.',
        ],
        image: {
          src: '/assets/posts/grace/grace-doc-1.jpeg',
          alt: 'Portret Grace Hopper iz priloženih materijala',
          caption: 'Grace Hopper ostala je simbol ideje da programiranje treba biti čitljivo i ljudima, a ne samo strojevima.',
        },
      },
      {
        id: 'kompajler',
        heading: 'Razvoj kompajlera',
        paragraphs: [
          'Jedan od njezinih najvećih doprinosa bio je razvoj ideje kompajlera. Kompajler prevodi kod napisan na razumljivijem jeziku u strojni jezik koji računalo može izvršiti.',
          'Prije toga programeri su morali pisati kod u niskorazinskim jezicima, što je bilo zahtjevno i sklono greškama. Hopper je bila među prvima koji su pokazali da je moguće koristiti apstraktniji i čitljiviji pristup programiranju.',
        ],
        image: {
          src: '/assets/posts/grace/grace-doc-2.png',
          alt: 'Ilustrativni vizual iz priloženog dokumenta o Grace Hopper',
          caption: 'Pomak prema čitljivijem kodu bio je jedan od ključnih koraka prema modernom softveru.',
        },
        infoBox: {
          title: 'Zašto je kompajler važan',
          items: [
            'Omogućuje pisanje programa na razumljivijem jeziku.',
            'Smanjuje složenost rada s računalom na najnižoj razini.',
            'Otvara programiranje širem krugu ljudi.',
          ],
        },
      },
      {
        id: 'cobol',
        heading: 'Put prema COBOL-u',
        paragraphs: [
          'Njezin rad izravno je utjecao na razvoj COBOL-a, jednog od prvih programskih jezika dizajniranih za poslovne primjene. COBOL je bio revolucionaran jer je koristio sintaksu sličnu engleskom jeziku, pa su programe mogli razumjeti i ljudi bez dubokog tehničkog znanja.',
          'Time je ubrzana primjena računala u poslovnom svijetu, a programiranje je postalo fleksibilnije i pristupačnije.',
        ],
      },
      {
        id: 'naslijede',
        heading: 'Neizbrisiv trag u informatici',
        paragraphs: [
          'Grace Hopper nije samo razvijala tehnologiju nego je i aktivno promicala njezinu upotrebu. Bila je poznata po sposobnosti da složene koncepte objasni jednostavno, čime je inspirirala generacije programera.',
          'Njezina ideja da programiranje treba biti pristupačno svima i danas je temelj modernog razvoja softvera. Zahvaljujući njezinu radu, programiranje je postalo razumljivije, fleksibilnije i bliže ljudima.',
        ],
        image: {
          src: '/assets/posts/grace/grace-doc-3.jpeg',
          alt: 'Drugi portret Grace Hopper iz priloženih materijala',
          caption: 'Nasljeđe Grace Hopper vidi se u svakom pokušaju da tehnologija bude čitljivija, pristupačnija i korisnija ljudima.',
        },
      },
    ],
    conclusion: {
      heading: 'Zašto Grace Hopper ostaje važna',
      paragraphs: [
        'Grace Hopper važna je jer je tehnologiju promatrala kroz ljude koji je koriste. Njezin doprinos nije bio samo tehnički nego i duboko praktičan: računala je pomogla približiti stvarnom svijetu.',
        'Za učenike je njezina priča važna jer pokazuje da napredak ne dolazi samo iz novih strojeva, nego i iz boljeg načina da ih razumijemo i učinimo korisnima većem broju ljudi.',
      ],
    },
    related: [],
  },
  'radia-perlman-arhitektica-mreza-bez-petlji': {
    slug: 'radia-perlman-arhitektica-mreza-bez-petlji',
    title: 'Radia Perlman: Arhitektica mreža bez petlji',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    readingTime: '3 min čitanja',
    author: {
      name: 'Projektni tim',
      role: 'ŽUSV uredništvo',
      avatar: '/assets/posts/radia/radia-doc-1.png',
    },
    heroImage: {
      src: '/assets/posts/radia/radia-thumbnail.png',
      alt: 'Ilustracija Radie Perlman',
    },
    intro:
      'Radia Perlman, često nazivana “majkom interneta”, promijenila je način na koji današnji sustavi komuniciraju. Njezin rad nije bio samo u povezivanju računala, nego u tome da to povezivanje bude pouzdano, automatsko i otporno na pogreške.',
    sections: [
      {
        id: 'zasto-je-vazna',
        heading: 'Mreže prije i poslije Radie Perlman',
        paragraphs: [
          'Prije njezinih inovacija, širenje mreža bilo je vrlo komplicirano. Paketi podataka mogli su se “gubiti” u beskonačnim petljama, što je ugrožavalo stabilnost i rad cijelog sustava.',
          'Radia Perlman pristupila je problemu inženjerski i praktično: nije bilo dovoljno samo povezati računala, nego je trebalo osmisliti mrežu koja sama ostaje stabilna i kada se u njoj dogode kvarovi ili promjene.',
        ],
        image: {
          src: '/assets/posts/radia/radia-doc-1.png',
          alt: 'Portret Radie Perlman iz priloženih materijala',
          caption: 'Radia Perlman ostavila je dubok trag u temeljnoj logici modernih računalnih mreža.',
        },
      },
      {
        id: 'stp',
        heading: 'Spanning Tree Protocol: arhitektura bez petlji',
        paragraphs: [
          'Ranih dana Ethernet mreža inženjeri su željeli redundanciju, odnosno više fizičkih putova između uređaja kako bi mreža nastavila raditi i ako jedan kabel otkaže. Problem je bio u tome što su zatvoreni krugovi mogli izazvati umnažanje podataka i potpuni kolaps sustava.',
          'Godine 1985. Radia Perlman osmislila je Spanning Tree Protocol, odnosno STP. Njezin algoritam omogućuje switchevima da međusobno komuniciraju, otkriju moguće putove i odaberu najkraći, dok ostale privremeno blokiraju.',
          'Tako mreža i dalje ima više fizičkih putova, ali logički radi kao stablo, bez petlji. Ako jedan put zakaže, protokol automatski prepoznaje kvar i aktivira jedan od prethodno blokiranih putova, bez potrebe za ljudskom intervencijom.',
        ],
        infoBox: {
          title: 'Što STP rješava',
          items: [
            'Sprječava mrežne petlje koje mogu preplaviti sustav podacima.',
            'Omogućuje rezervne putove bez gubitka stabilnosti mreže.',
            'Automatski reagira na kvarove i održava mrežu funkcionalnom.',
          ],
        },
      },
      {
        id: 'usmjeravanje',
        heading: 'Doprinos modernom usmjeravanju',
        paragraphs: [
          'Radia Perlman utjecala je i na protokole za usmjeravanje poput IS-IS-a. Takvi protokoli omogućili su velikim mrežama i internetu da “pronađu put” kroz ogroman broj čvorova.',
          'Njezin pristup bio je usmjeren na skalabilnost i robusnost. Zahvaljujući tome mreže su mogle same prepoznavati promjene, prilagođavati se i rasti bez stalne ručne kontrole.',
          'Upravo je takav način razmišljanja omogućio internetu da preraste iz ograničenog eksperimenta u globalni sustav koji danas koristimo svaki dan.',
        ],
      },
    ],
    conclusion: {
      heading: 'Zašto je Radia Perlman temelj interneta kakav poznajemo',
      paragraphs: [
        'Radia Perlman važna je jer je rješavala probleme koje prosječni korisnik nikada ne vidi, ali bez kojih moderna mrežna infrastruktura ne bi mogla funkcionirati. Njezin rad pokazuje koliko su pouzdanost, automatizacija i dobra arhitektura ključni za tehnologiju.',
        'Za učenike je njezina priča važna i zato što otkriva da velike inovacije ne moraju uvijek biti vidljive na prvi pogled; ponekad se najveći doprinos krije upravo u sustavima koji sve ostalo drže stabilnim.',
      ],
    },
    related: [],
  },
  'ada-lovelace-vizionarka-koja-je-vidjela-buducnost-racunala': {
    slug: 'ada-lovelace-vizionarka-koja-je-vidjela-buducnost-racunala',
    title: 'Ada Lovelace: Vizionarka koja je vidjela budućnost računala',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    readingTime: '3 min čitanja',
    author: {
      name: 'Projektni tim',
      role: 'ŽUSV uredništvo',
      avatar: '/assets/posts/ada/ada-doc-1.jpeg',
    },
    heroImage: {
      src: '/assets/posts/ada/ada-thumbnail.png',
      alt: 'Ilustracija Ade Lovelace',
    },
    intro:
      'Ada Lovelace rođena je 1815. godine u Engleskoj kao kći slavnog pjesnika Georgea Gordona Byrona, ali ju je umjesto književnosti privukla matematika i znanost. U vremenu kada se od žena nije očekivalo da se bave tehnologijom, razvila je način razmišljanja koji ju je učinio jednom od najvažnijih osoba u ranoj povijesti računalstva.',
    sections: [
      {
        id: 'rani-put',
        heading: 'Matematika umjesto očekivanog puta',
        paragraphs: [
          'Iako je dolazila iz obitelji povezane s književnošću, Ada je pokazala interes za logičko razmišljanje, analizu i znanost. Upravo taj interes izdvojio ju je u vremenu kada ženama nije bilo jednostavno graditi identitet u matematici i tehnologiji.',
          'Zbog tog spoja radoznalosti i discipline danas je promatramo kao jednu od ključnih figura ranog računalnog mišljenja.',
        ],
        image: {
          src: '/assets/posts/ada/ada-doc-1.jpeg',
          alt: 'Portret Ade Lovelace iz priloženih materijala',
          caption: 'Ada Lovelace ostala je simbol spoja matematičke preciznosti i maštovitog razmišljanja.',
        },
      },
      {
        id: 'analiticki-stroj',
        heading: 'Stroj koji još nije postojao, ali ga je razumjela',
        paragraphs: [
          'Ada Lovelace najpoznatija je po radu na Analitičkom stroju, mehaničkom računalu koje je osmislio Charles Babbage. Iako taj stroj nikada nije bio potpuno izgrađen, zamišljen je kao uređaj koji može automatski izvoditi složene matematičke izračune.',
          'Ada je proučavala Babbageove ideje i napisala detaljne bilješke u kojima je objašnjavala kako bi stroj mogao raditi i na koji način bi se mogao koristiti za rješavanje različitih problema.',
        ],
      },
      {
        id: 'algoritam',
        heading: 'Algoritam za stroj koji tek dolazi',
        paragraphs: [
          'Jedan od najvažnijih dijelova njezina rada bio je opis algoritma za izračun Bernoullijevih brojeva. Taj niz preciznih uputa smatra se prvim pravim računalnim programom u povijesti, zbog čega se Ada Lovelace često naziva prvom programerkom na svijetu.',
          'Posebno je fascinantno to što je uspjela zamisliti mogućnosti tehnologije koja u njezino vrijeme još nije ni postojala. Dok su mnogi znanstvenici smatrali da bi takav stroj služio samo za matematičke izračune, Ada je uvidjela da bi se isti princip mogao koristiti i za obradu drugih vrsta podataka.',
          'U svojim bilješkama napisala je kako bi takav stroj u budućnosti mogao stvarati glazbu ili grafiku, a ne samo obrađivati brojeve. Upravo zato mnogi smatraju da je Ada Lovelace već u 19. stoljeću naslutila dolazak digitalnog doba.',
        ],
        infoBox: {
          title: 'Zašto je Ada važna',
          items: [
            'Opisala je algoritam koji se danas smatra prvim računalnim programom.',
            'Razumjela je da strojevi mogu obrađivati više od čistih brojčanih izračuna.',
            'Predvidjela je kreativne i šire primjene računala mnogo prije njihove stvarne pojave.',
          ],
        },
      },
      {
        id: 'naslijede',
        heading: 'Razmišljanje ispred svojega vremena',
        paragraphs: [
          'Ada Lovelace bila je posebna po tome što je znala spojiti matematičku preciznost i kreativno razmišljanje. Dok su mnogi njezini suvremenici strojeve promatrali samo kao alate za računanje, ona je u njima vidjela mnogo veći potencijal.',
          'Danas je Ada važan simbol ženama u STEM području. Njezin rad pokazuje kako znanost i tehnologija napreduju zahvaljujući radoznalosti, upornosti i hrabrosti da se razmišlja drugačije.',
          'Iako Analitički stroj nikada nije bio u potpunosti izgrađen za njezina života, ideje koje je zapisala postale su temelj za kasniji razvoj računalstva.',
        ],
      },
    ],
    conclusion: {
      heading: 'Zašto Ada Lovelace i dalje znači budućnost',
      paragraphs: [
        'Ada Lovelace ostaje važna jer nije samo razumjela tehničku stranu stroja, nego je vidjela njegov potencijal u svijetu koji tek dolazi. U tome je njezina stvarna snaga i razlog zbog kojeg je i danas smatramo vizionarkom.',
        'Za učenike njezina priča otvara važnu ideju: tehnologija nije samo računanje, nego i prostor za maštu, stvaranje i drukčije načine razmišljanja.',
      ],
    },
    related: [],
  },
  'eunice-newton-foote-rani-tragovi-znanosti-o-klimi': {
    slug: 'eunice-newton-foote-rani-tragovi-znanosti-o-klimi',
    title: 'Eunice Newton Foote: Rani tragovi znanosti o klimi',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    readingTime: '3 min čitanja',
    author: {
      name: 'Ana Krnetić',
      role: 'učenica 3.a',
      avatar: '/assets/posts/eunice/eunice-doc-2.jpeg',
    },
    heroImage: {
      src: '/assets/posts/eunice/eunice-thumbnail.jpg',
      alt: 'Ilustracija Eunice Newton Foote',
    },
    intro:
      'Eunice Newton Foote bila je američka znanstvenica koja je sredinom 19. stoljeća, u vremenu kada su se znanstvenim istraživanjima uglavnom bavili muškarci, došla do zaključaka daleko ispred svojega vremena. Njezin rad danas se smatra važnim doprinosom razumijevanju klimatskih promjena i utjecaja različitih plinova na Sunčevu toplinu.',
    sections: [
      {
        id: 'tko-je-bila',
        heading: 'Znanstvenica ispred svojega vremena',
        paragraphs: [
          'Eunice Newton Foote pokazala je veliku znatiželju i sposobnost u razdoblju kada ženama nije bilo jednostavno sudjelovati u znanstvenom radu. Upravo zato njezina priča nije važna samo zbog rezultata, nego i zbog konteksta u kojem je do njih došla.',
          'Iako je njezin rad dugo bio zanemaren, danas se sve jasnije vidi koliko je bio značajan za razumijevanje klime na Zemlji i za kasniji razvoj klimatske znanosti.',
        ],
        image: {
          src: '/assets/posts/eunice/eunice-doc-2.jpeg',
          alt: 'Portret Eunice Newton Foote iz priloženih materijala',
          caption: 'Eunice Newton Foote danas se sve češće vraća na zasluženo mjesto u povijesti znanosti.',
        },
      },
      {
        id: 'eksperiment',
        heading: 'Eksperiment koji je promijenio razumijevanje klime',
        paragraphs: [
          'Foote je koristila staklene cilindre napunjene različitim plinovima, uključujući ugljikov dioksid (CO2), te ih izlagala Sunčevoj svjetlosti. Primijetila je da se cilindar s CO2 zagrijava više nego oni s drugim plinovima, što je pokazalo da ovaj plin učinkovitije zadržava toplinu od zraka.',
          'Na temelju toga zaključila je da bi povećana količina CO2 u atmosferi mogla dovesti do porasta temperature Zemlje. Taj rad predstavlja jedan od prvih znanstvenih opisa učinka staklenika.',
          'Njezin pristup bio je inovativan jer je pokazao kako i jednostavni eksperimenti mogu pružiti važne uvide u složene prirodne procese. Ujedno je naglasio koliko su promatranje i pažljiva analiza podataka važni u znanstvenom radu.',
        ],
        image: {
          src: '/assets/posts/eunice/eunice-doc-1.png',
          alt: 'Mali vizual iz dokumenta o Eunice Newton Foote',
          caption: 'Jednostavan eksperimentalni pristup doveo je do zaključaka koji su danas temeljni za razgovor o klimi.',
        },
        infoBox: {
          title: 'Ključna ideja',
          items: [
            'Ugljikov dioksid zadržava toplinu učinkovitije od običnog zraka.',
            'Povećanje količine CO2 u atmosferi može utjecati na porast temperature Zemlje.',
            'Jednostavan eksperiment može otvoriti velika znanstvena pitanja.',
          ],
        },
      },
      {
        id: 'znacenje-danas',
        heading: 'Zašto je njezin rad važan danas',
        paragraphs: [
          'Iako je u prošlosti njezin rad ostao gotovo neprimijećen, danas se Eunice Newton Foote smatra važnom figurom u povijesti klimatske znanosti. Njezino istraživanje otvorilo je prostor za daljnja proučavanja globalnog zagrijavanja i utjecaja ljudskih aktivnosti na okoliš.',
          'U suvremenom svijetu, gdje su klimatske promjene jedan od najvećih izazova, njezini zaključci imaju posebno veliku važnost. Foote nas podsjeća da velika otkrića ne ovise uvijek o složenoj opremi, nego o dobrom pitanju, preciznom opažanju i upornosti.',
          'Njezina priča ističe i važnost priznavanja doprinosa žena koje su kroz povijest često bile zanemarene unatoč svojim važnim otkrićima.',
        ],
      },
    ],
    conclusion: {
      heading: 'Pouka iz priče o Eunice Newton Foote',
      paragraphs: [
        'Priča o Eunice Newton Foote pokazuje kako znanost napreduje i zahvaljujući ljudima čiji rad nije odmah prepoznat. Danas njezine ideje čitamo kao rane, ali jasne tragove moderne znanosti o klimi.',
        'Za učenike je to važan podsjetnik da znatiželja, preciznost i hrabrost u postavljanju pitanja mogu ostaviti trajan trag, čak i kada priznanje dođe kasnije.',
      ],
    },
    related: [],
  },
  'hedy-lamarr-vise-od-filmske-dive': {
    slug: 'hedy-lamarr-vise-od-filmske-dive',
    title: 'Hedy Lamarr: Više od filmske dive',
    category: 'Članak',
    date: '27. Ožujka 2026.',
    readingTime: '3 min čitanja',
    author: defaultAuthor,
    heroImage: {
      src: '/assets/posts/hedy/hedy-thumbnail.png',
      alt: 'Ilustracija Hedy Lamarr ispred sheme frekvencijskog skakanja',
    },
    intro:
      'Hedy Lamarr bila je poznata filmska zvijezda, ali i vrlo pametna žena koju je zanimala znanost. Iako su je mnogi pamtili po ljepoti i filmskim ulogama, iza te slike stajala je osoba koja je razmišljala o izumima i novim tehnologijama.',
    sections: [
      {
        id: 'tko-je-bila',
        heading: 'Filmska zvijezda s interesom za znanost',
        paragraphs: [
          'Rođena je u Beču 1914. godine, a kasnije je postala velika holivudska glumica. Popularnost joj je donijela prepoznatljivost u svijetu filma, ali ne i potpunu sliku o tome tko je bila.',
          'U slobodno vrijeme razmišljala je o izumima i tehnološkim rješenjima. Njezina priča zato ne staje na glamuru, nego pokazuje da kreativnost i znatiželja mogu ići zajedno.',
        ],
        image: {
          src: '/assets/posts/hedy/hedy-doc-1.jpeg',
          alt: 'Portret Hedy Lamarr iz priloženih materijala',
          caption: 'Hedy Lamarr ostala je upamćena po filmu, ali i po snažnoj radoznalosti prema znanosti i tehnici.',
        },
      },
      {
        id: 'izum',
        heading: 'Ideja koja se koristi i danas',
        paragraphs: [
          'Tijekom Drugog svjetskog rata Hedy je zajedno s Georgeom Antheilom osmislila sustav nazvan frekvencijsko skakanje. Ideja je bila da se signal stalno mijenja s jedne frekvencije na drugu, kako bi ga bilo teže ometati ili presresti.',
          'Njihovo rješenje tada nije odmah zaživjelo, ali je kasnije postalo vrlo važno. Danas se isti princip povezuje s tehnologijama koje svakodnevno koristimo, poput Wi-Fi-ja i Bluetootha.',
          'Njezina priča pokazuje da netko može biti uspješan u više različitih područja: i u umjetnosti i u znanosti. Upravo zato Hedy Lamarr danas smatramo važnom osobom u razvoju moderne komunikacije.',
        ],
        image: {
          src: '/assets/posts/hedy/hedy-doc-2.png',
          alt: 'Patentna shema povezana s principom frekvencijskog skakanja',
          caption: 'Vizual iz patenta podsjeća koliko je ideja frekvencijskog skakanja bila ispred svog vremena.',
        },
        infoBox: {
          title: 'Zašto je ovo važno',
          items: [
            'Signal se premješta između frekvencija kako bi komunikacija bila otpornija na smetnje.',
            'Ideja je naknadno postala važna u razvoju moderne bežične komunikacije.',
            'Hedy Lamarr danas se spominje kao primjer spoja umjetnosti, inovacije i znanstvene znatiželje.',
          ],
        },
      },
    ],
    conclusion: {
      heading: 'Zašto Hedy i danas inspirira',
      paragraphs: [
        'Hedy Lamarr važna je jer razbija jednostavne predodžbe o tome tko može biti inovator. Njezin život pokazuje da talent za umjetnost i interes za tehnologiju ne isključuju jedno drugo.',
        'Za učenike je to snažna poruka: znatiželja, kreativnost i upornost mogu dovesti do ideja koje nadžive svoje vrijeme.',
      ],
    },
    related: [],
  },
}

export const postsBySlug = posts
export const allPosts: Article[] = Object.values(posts)

export const getPostBySlug = (slug: string): Article | undefined => {
  return posts[slug]
}
