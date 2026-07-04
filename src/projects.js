// ============================================================
// HOW TO ADD OR EDIT A PROJECT
// ============================================================
//
// This file is the single source of truth for the portfolio.
// Every card on the home page and every project page comes
// from this list. To add a new project, copy an existing entry,
// paste it at the position you want in the list, and fill in
// the fields. To remove a project, delete its entry.
//
// FIELDS EXPLAINED:
//
//   slug        - The URL for the project page.
//                 e.g. "my-project" → the page lives at /#/my-project
//                 Use only lowercase letters, numbers, and hyphens.
//                 Set to null if this entry links to an external URL (see externalUrl).
//
//   title       - The project title shown on the home card and at the top
//                 of the project page.
//
//   cardSubtitle - (optional) A small line of text shown below the title
//                 on the home page card. Leave out or set to null if not needed.
//
//   thumbnail   - The image shown on the home page card.
//                 Can be a full URL (https://...) or a path to a file you
//                 uploaded to the public/images/ folder (e.g. "/images/my-project/cover.jpg").
//
//   thumbnailAlt - A short description of the thumbnail image for screen readers.
//                 Can be left as "" if the image is purely decorative.
//
//   credit      - Text shown at the bottom of the project page.
//                 Typically collaborators and/or the year.
//
//   externalUrl - (optional) If you set this, clicking the card opens this
//                 URL in a new tab instead of going to a project page.
//                 Use this for PDF links. Leave out or set to null otherwise.
//
//   sections    - The content of the project page, as an array of blocks.
//                 Three types of blocks are available:
//
//                 IMAGE BLOCK
//                 { type: "image", src: "https://...", alt: "description" }
//                 Add span2: true to make the image span the full grid width.
//
//                 TEXT BLOCK
//                 { type: "text", paragraphs: ["First paragraph.", "Second paragraph."] }
//                 Each string in the array becomes its own paragraph.
//                 Basic HTML works inside the strings: <i>italic</i>, <b>bold</b>
//
//                 SPACER (keeps the two-column grid aligned when you need an empty cell)
//                 { type: "empty" }
//
// ============================================================

const projects = [
  {
    slug: "bad-actor",
    title: "bad actor - moon palace",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_156aaf5211eb437aa05065c88818df81~mv2.png/v1/fill/w_253,h_253,q_90/122352_156aaf5211eb437aa05065c88818df81~mv2.webp",
    thumbnailAlt: "",
    credit:
      "with Bad Actor, Budakid, Michael Czernicki, Clarissa Walter, and Aimée G 2023",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_3dec857c6c084369b342a2d002461457~mv2.png/v1/fill/w_690,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/R1-02855-0014_TIF.png",
        alt: "Musician Bad Actor Music Video Snapshot",
      },
      {
        type: "text",
        paragraphs: [
          "The music video for Bad Actor's song \"Moon Palace\" was entirely shot on Berlin's Stalinist boulevard, Karl-Marx Allee. This 2.1-kilometer stretch is characterized by its striking and remarkably unique socialist architecture.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_5f84c1c9afe943e695956e058d76383b~mv2.png/v1/crop/x_80,y_0,w_1119,h_871/fill/w_690,h_537,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/R1-02855-0036_TIF.png",
        alt: "Musician Bad Actor Music Video Snapshot",
      },
      {
        type: "text",
        paragraphs: [
          "The architectural design's symmetry is intentionally accentuated in the music video through a central perspective. In this visual narrative, the artist Bad Actor becomes the focal point and takes center stage amidst the symmetrical surroundings.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_1bd998c0e5f24aac8cea1dd02dc22170~mv2.png/v1/fill/w_690,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/R1-02855-0026_TIF.png",
        alt: "Musician Bad Actor Music Video Snapshot",
      },
    ],
  },

  {
    slug: "master-thesis",
    title: "master thesis",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_b91ca590d090486a82b485eaf706927e~mv2.jpg/v1/fill/w_508,h_506,q_90/122352_b91ca590d090486a82b485eaf706927e~mv2.webp",
    thumbnailAlt: "",
    credit: "Dagmar Pelger Prof. Bettina Götz Prof. Florian Riegler 2021",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_90fa14dd24e148f19ca6b8d13c1bd738~mv2.gif",
        alt: "master thesis project gif",
      },
      {
        type: "text",
        paragraphs: [
          "The project is located on Lohmühlenstraße at the Landwehr Canal. The site lies in Alt-Treptow and borders the neighbouring districts of Kreuzberg and Neukölln. These two extremely densely populated districts of Berlin, stand in contrast to Alt-Treptow, a district shaped by industry and production.",
          "The city has recognized the redensification potential of Alt-Treptow and wishes to develop the site. However, the site is already populated with nature, animals, green spaces, buildings and a trailer park.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_baab8512fae3483695e4c8538f01b5e6~mv2.gif",
        alt: "master thesis project gif",
      },
      {
        type: "text",
        paragraphs: [
          "The diagrammatic maps not only show how the heterogenous and multi-levelness of the site, but also compare them to similar green spaces along the Landwehr Canal.",
          "The hand drawn map below shows a detailed spatial analysis of the site. Furthermore, it cartographically maps the different materials and uses of the space.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_56c5c14d33284ffb889798e4ad0ee06a~mv2.png/v1/crop/x_10,y_24,w_2331,h_462/fill/w_1472,h_291,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1.png",
        alt: "master thesis project blueprint",
        span2: true,
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_1605657617d04eb4a27c31c10c6d67a8~mv2.png/v1/crop/x_224,y_434,w_12867,h_4935/fill/w_1467,h_563,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/AXO_420_A0.png",
        alt: "master thesis project gif",
        span2: true,
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_68a3a3947a0443b9ba89f8a660f6ad5b~mv2.jpg/v1/crop/x_455,y_270,w_3007,h_2092/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L1013080.jpg",
        alt: "master thesis project gif",
      },
      {
        type: "text",
        paragraphs: [
          "After obtaining a deeper understanding of how the trailer park living works, the conclusion was not only to preserve the existing, but to multiply it. The goal was to reach the cities housing target - which meant to double the amount of existing flat - whilst preserving the existing.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_19f2f856ef704bffa42949b949a1a901~mv2.jpg/v1/crop/x_484,y_291,w_2948,h_2051/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L1013069.jpg",
        alt: "master thesis project gif",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_84f88f5001f6474a8693c985219a7997~mv2.jpg/v1/crop/x_378,y_225,w_2506,h_1743/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L1013072.jpg",
        alt: "master thesis project gif",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_bbe1412be86d4eb793a167866df8c0ae~mv2.jpg/v1/crop/x_380,y_226,w_2506,h_1743/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L1013084.jpg",
        alt: "master thesis project gif",
      },
      {
        type: "text",
        paragraphs: [
          "The new flats on top and the prefabricated buildings of the 1950s below work symbiotically, however, their interior functionality stand in contrast to each other. The new flats on top offer a wide shared space for a multitude of activities. It functions not only as a rue interior but a space that stands for itself - in between public and private.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_74a720e043b544b6891961c330d4d290~mv2.gif",
        alt: "master thesis project gif",
        span2: true,
      },
    ],
  },

  {
    slug: "reproductive-city",
    title: "reproductive city",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_fe52c75d29bb4d81b0f578c24a856279~mv2.png/v1/fill/w_506,h_506,fp_0.55_0.49,q_90/122352_fe52c75d29bb4d81b0f578c24a856279~mv2.webp",
    thumbnailAlt: "",
    credit:
      "with Esther Eichhorn and Leon Arasin Studio Prof. Markus Bader 2021",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_37ff47a6a04e4ec39d06a27668bc4055~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The site houses the cities own garbage company called the BSR Berliner Stadtreinigung. It is the last undeveloped piece of the Anschutz Areal located in the inner city that remained undeveloped.",
          "The hidden piece of urban jungle is surrounded by a monofunctional desert of office spaces and malls. Berlin's municipal cleaning service is being squeezed out due to rising property cost. However, the space offers a great potential for an alternative idea.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_75adaf5f51a64e22be95af5d7106d5e0~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The design should create spaces by overlapping and interlinking the usergroups.",
          "It is framed by four keywords:",
          "<i>Integrative:</i> Everyone is welcome! Seamless transition between the city and site.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_27662b25f71b4eb89ce75a2cdaf9c144~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "<i>Reproduction:</i> Adding the layer of reproductivity to the urban landscape. Mixing functions creates a larger and dense environment.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_54327ae555e1452c9fc45b92849c6138~mv2.jpg/v1/crop/x_0,y_30,w_1164,h_810/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Yoga.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "<i>Community:</i> Unprogrammed free spaces for residents. Spaces for public interaction.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_fe52c75d29bb4d81b0f578c24a856279~mv2.png/v1/crop/x_0,y_7,w_1692,h_1177/fill/w_690,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Innenraum_BSR.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "<i>Circulation:</i> Spaces that enhance the circulation of social connectivity, knowledge and resources.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_0e9396d9b44c452bbb987528a87e286b~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "Each element of the project is based on an 8x8 grid. One of the challenges was to create living spaces that could adapt to different user groups within the grid.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_644de41a0df14d6ca3b552c2948079a0~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "Through different spatial arrangements the design could incorporate single flats, shared flats, cluster flats, and even additional space for communal use.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_2cdab849805949a98055aec5276c25f8~mv2.png/v1/crop/x_855,y_112,w_1771,h_2026/fill/w_690,h_789,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Grundriss%20Plateau.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "Lifting the project up via a plateau results in a new urban level, whilst providing enough space underneath for the city cleaning service. The lifted pedestrian level is more adapted to the human scale and invites the city to a new type of urban fabric.",
          "The section really shows how intertwined the different spatial configurations are.",
          "Living, production and a public functions could work in symbiosis together and result in a re-productive city.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_67eaf08cad4f4e35a3b8251912c388e5~mv2.png/v1/crop/x_522,y_375,w_2972,h_1806/fill/w_1452,h_882,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/photoshopperspektivschnitt%20Arbeitsblatt%201%20_%20Unabh%C3%A4ngig%20(1).png",
        alt: "",
        span2: true,
      },
    ],
  },

  {
    slug: "gaia",
    title: "gaia",
    cardSubtitle: "master project",
    thumbnail:
      "https://static.wixstatic.com/media/122352_3e2206895a1d4ed0ad5778d6a755db4c~mv2.gif/v1/fill/w_506,h_506,q_90/122352_3e2206895a1d4ed0ad5778d6a755db4c~mv2.webp",
    thumbnailAlt: "",
    credit: "Studio Prof. Norbert Palz 2020",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_a0ef219dc4e2437a8cecca74f3a87189~mv2.png/v1/fill/w_690,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ENDPR%C3%84SENTATION%20(dragged).png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "Gaia is the personification of the Earth and one of the Greek primordial deities. Gaia is the ancestral mother - sometimes parthenogenic - of all life.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_c438963bd7824cd3891867a2de1cd962~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The aim of the project was to work with, for and by nature. To not only respect nature with all its living things, but also use the scientific knowledge in a symbiotic manner to create something new.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_98a693f03cf247bfa761b268e358fc7e~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The central element of the project are trees. Giant beings that reach a lifespan multiple times higher than that of a human.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_24374ed1f6fa432985f80f6fb02dda53~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The idea is to create architecture that looks at different tree growths and ages. Creating a spatial situation that makes these supposedly invisible factors tangible for the human individual to experience.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_20e37aaaa9804257bd9510adaa7838c2~mv2.gif",
        alt: "",
      },
      { type: "text", paragraphs: [] },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_a60a60adffbb4a3f82ea03049db4dcfb~mv2.gif",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_c9efc43812c24d27ba8d9df9cb32b220~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Zwischenkritik_0%20(dragged)%202.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_d44491011b3c4131805a5d8f0a488585~mv2.gif",
        alt: "",
        span2: true,
      },
    ],
  },

  {
    slug: "the-barn-rosenthaler",
    title: "the barn rosenthaler platz",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_37587cf751f44a72baf78671ebae000f~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2020-03-01-13-33-22-1.jpg",
    thumbnailAlt: "The Barn Café at Rosenthaler Platz Store Front Photo",
    credit: "with The Barn GmbH 2020",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_37587cf751f44a72baf78671ebae000f~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2020-03-01-13-33-22-1.jpg",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      {
        type: "text",
        paragraphs: [
          "The project is located in Weinbergsweg 1 overlooking Rosenthaler Platz in Berlin. The busy street offers a variety of restaurants, bars, a hostel and a bakery.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_c211c9772a84445ab19a7b31f9312c5d~mv2.png/v1/crop/x_0,y_356,w_1491,h_1160/fill/w_690,h_537,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/W1_new%20copy%20_%201_%201_%20OG.png",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      {
        type: "text",
        paragraphs: [
          "The old bookshop should be transformed into a new café with 80sqm of interior and 20sqm of exterior space. The central element: the bar, divides the room into separate spatial situations.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_b7a1b282a49842098cca19ca74355413~mv2.png/v1/fill/w_690,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/new%2520iso_edited.png",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      {
        type: "text",
        paragraphs: [
          "The possibility to sit at the bar and see closely how your coffee is brewed not only brings the consumer closer to the barista, but to the product itself.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_e613e9f7478a4fd8b5a8437614c985b6~mv2.png/v1/crop/x_334,y_84,w_944,h_655/fill/w_690,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SCHNITT%201%20Schnitt%20A-A%20_%20Unabh%C3%A4ngig.png",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      {
        type: "text",
        paragraphs: [
          "Through an archway a more private reading room with magazines and books about coffee commemorates the previous use of the shop.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_6fd648f3513b430d8421a33ebc3d8825~mv2.png/v1/crop/x_365,y_43,w_1046,h_731/fill/w_690,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SCHNITT%202%20Schnitt%20B-B%20_%20Unabh%C3%A4ngig.png",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      { type: "empty" },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_67760c7bd07b43488a68126c2303970b~mv2.gif",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      {
        type: "text",
        paragraphs: [
          "Oil finished oak wood was used for the bar as well as for all furniture, including the design of all chairs and tables.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_2f1bf85f60f24224addb06184e264849~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2020-03-01-13-33-26-1.jpg",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_8fe9160b0ab84e6e894fd07b288e6775~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2020-03-01-13-33-23-1.jpg",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_96ae087d4df240f2b805d82f4bbfd899~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2020-03-01-13-33-23.jpg",
        alt: "The Barn Café at Rosenthaler Platz Store Front Photo",
      },
    ],
  },

  {
    slug: "bachelor-thesis",
    title: "bachelor thesis",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_33eb03171e864b93b31e7c8f6244ebdb~mv2.jpg/v1/fill/w_253,h_253,fp_0.54_0.72,q_90/122352_33eb03171e864b93b31e7c8f6244ebdb~mv2.webp",
    thumbnailAlt: "",
    credit: "Studio Prof. Gabriele Schultheiß and Anne Bruschke 2019",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_31a3f3fe89434d57be699276ca067f8b~mv2.gif",
        alt: "bachelor thesis project gif",
      },
      {
        type: "text",
        paragraphs: [
          "The University of the Arts fashion faculty is in need of an extension in order to hold newer and technologically more advanced studios. The vacant lot given is located between the fire wall of the existing fashion faculty building of the 1900s and the post war modern Technological University building. The new extension should hold studios for 20 students.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_a6fc8b171dc3447ba3afd25360c7a013~mv2.gif",
        alt: "bachelor thesis project gif 2",
      },
      {
        type: "text",
        paragraphs: [
          "Keeping the plots current use as path to easily reach other buildings was crucial for the design process and lead to the building being lifted up.",
          "Double heightened cuts into the building function as interior paths. An additional exterior staircase and elevator were added.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_97caa1c883c542329e7ffc3a03c7facd~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scan%2520drawing_edited.jpg",
        alt: "bachelor thesis project gif 3",
      },
      {
        type: "text",
        paragraphs: [
          "Design in fashion is characterized by three central work steps: sewing, tailoring and mock-up. The functions that were spatially separated in the old building are now brought together in the open space. Work steps flow into each other and enable more open studying with more exchange between the students.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_f1853bdfb14644849dfcf2cb95ebc7aa~mv2.jpg/v1/crop/x_0,y_1424,w_9495,h_6606/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Axonometrie_1_200.jpg",
        alt: "bachelor thesis project gif 4",
      },
      { type: "empty" },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_56408cb03ef04e958806a61668670d92~mv2.gif",
        alt: "bachelor thesis project gif 5",
      },
      {
        type: "text",
        paragraphs: [
          "The building functions as a connector between the two existing neighbouring buildings.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_96a8da28d015404ab78049b57bcda4b7~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Schnitt%20%C3%96ffnungen.jpg",
        alt: "bachelor thesis project gif 6",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_441222b2d2e8464abbba70ed59d13448~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Schnitt%20Verbindungen.jpg",
        alt: "bachelor thesis project gif 7",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_9bd9ed2e4b2140fc8c78cc8aa8b286c0~mv2.jpeg/v1/crop/x_338,y_1299,w_2350,h_2305/fill/w_690,h_677,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2542.jpeg",
        alt: "bachelor thesis project model image",
      },
    ],
  },

  {
    slug: "the-barn-potsdamer",
    title: "the barn potsdamer platz",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_ef39dfa808fb4b78882c0bb641a8e96d~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SM6.jpg",
    thumbnailAlt: "",
    credit: "with The Barn GmbH + BFS Design 2018",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_12fc0b0a8dbe4517bebcef94c393cceb~mv2.png/v1/crop/x_0,y_910,w_2026,h_1497/fill/w_690,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Schwarzplan_P5.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          'The project is located in the historic building "Weinhaus Huth" at Alte Potsdamerstrasse 5 in Berlin. The building was completed in 1912 and was home to a wine shop with an adjoining restaurant. Due to its immediate vicinity to the Berlin Wall it remains a symbol of the destruction and division of the city in the post-war period.',
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_ef39dfa808fb4b78882c0bb641a8e96d~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SM6.jpg",
        alt: "",
      },
      { type: "empty" },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_03f2966271714c999d0e35837837a805~mv2.png/v1/fill/w_690,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Axonometrie_BIG.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The project included the design and construction of a new café on a 50sqm footprint. The goal was to bring both the identity of the building and the identity of the company together as well as to develop an efficient work environment in a contemporary design. Raw materials were used to generate a clear interior architectural layout.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_6b69993738fa42d09d938c3e1b3d7083~mv2.png/v1/crop/x_0,y_236,w_3200,h_2364/fill/w_690,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TheBarn_P5%20_%202_%20Barn%205_NEW.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The space is divided from the entrance into two spatial situations, the work area and the customer area. The work area made out of robust flame-treated granite is the direct point of contact with the customer. The customer area invites with a curved warm oak bench to linger.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_b43f7c4ebd474761b926ad83120f9b97~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0118.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The two contrasting materials are brought together by the screed floor and the gray plaster-wiped walls, and define the café's materiality.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_36d256d4712f40f6858f1b2cc2ef3a12~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0157.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_a99d3f834b4c43388863406af4074554~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0153.jpg",
        alt: "",
      },
    ],
  },

  {
    slug: "garden+house",
    title: "garden+house",
    cardSubtitle: "bachelor project",
    thumbnail:
      "https://static.wixstatic.com/media/122352_0c4c083dd8844444b557f6b50ffd10e6~mv2.png/v1/fill/w_508,h_506,fp_0.43_0.5,q_90/122352_0c4c083dd8844444b557f6b50ffd10e6~mv2.webp",
    thumbnailAlt: "",
    credit: "Studio Prof. Ricardo Carvalho 2017",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_dbc4a37d70b441a7a41ae4c16adecb05~mv2.jpg/v1/fill/w_690,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07%25201LayoutA4%2520_%2520Layout_edited.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The building site is located the non-consolidated area of Chelas, overlooking the valley towards Lisbon's lake Tejo. Each student is given one lot of many, that have been defined by a masterplan of the area. Each lot has a building dimension of 10 by 15 meters, with an additional garden space with varying size. The goal of the project is to create a valuable living space for an amount of people each student may choose on their own. I decided to design a space for one big family, five to six people.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_0c4c083dd8844444b557f6b50ffd10e6~mv2.png/v1/crop/x_956,y_1497,w_7327,h_5304/fill/w_690,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5668.png",
        alt: "",
      },
      { type: "text", paragraphs: [] },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_c85657ef221f44f6a62a14a9b1c6eacd~mv2.jpg/v1/crop/x_1283,y_631,w_3189,h_2565/fill/w_690,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_0030_JPG.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The prominent and unique part of my lot is the spacious garden. Therefore the process of the house design was always in symbiosis with the design of the garden, from the very beginning. In the process I went so far to shrink down my permitted interior space, in order to enlarge the exterior space up to 333m. This garden is divided by a large terrace connected to the interior protagonist, the living room. Three garden spaces result from this division: The vegetable garden where the family can grow their own food. The orange tree garden made up by nine dwarf orange trees, which provide shade in Portugals hot summer days. The bamboo forest, using the smallest of the exterior spaces. The result is a Garden + House.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_abe68a6d30c24993a46194763625393d~mv2.jpg/v1/crop/x_1126,y_1024,w_3002,h_2871/fill/w_690,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2%20copy.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The main room of the house itself is the double heightened living and dining room. This room connects to the garden terrace, only divided by glass doors, which can be pushed entirely into the wall. The double height connects additionally to the second floor's work space, via an interior balcony. The shared work space functions simultaneously as a corridor, connected to the private bedrooms of the children. These compact rooms have large sliding windows, to open up the room towards the shared patio.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_bac42c199b8e47ed877a1b4da7f463e0~mv2.jpg/v1/crop/x_2885,y_1704,w_3316,h_2451/fill/w_690,h_510,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "My aim was to create a communicative space that overlaps with more open and more private spaces, connected with the interior and exterior. The horizontal connection towards the garden, the diagonal connections inside the house and the vertical connection towards the sky. These three elements make up the elements of the building.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_528950d135c946948105172e6185ac8a~mv2.jpg/v1/crop/x_1316,y_574,w_4381,h_3810/fill/w_690,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "A door, a sloped roof and a chimney. Starting from this simple idea, an archetype of a house any child would draw. The first idea, the front façade, created a DNA I tried to pass on throughout my building. To evade openings on the façade outside the DNA, two patios each connecting two floors have sliding windows for ventilation and to enlarge the interior space. One can have a hot shower and feel the cold rain or read a book under the sky with the warmth of the bed.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_2b4c34edf6de4a09a4f329c4a84bec04~mv2.jpg/v1/crop/x_1080,y_692,w_4823,h_3628/fill/w_690,h_519,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The DNA results in a façade containing three elements: the door, the window, the patio. Vertical cuts are defined by the garden. Horizontal cuts are defined by the opening on a human scale, the door with a height of 2,2m.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_1585df53df374251aa30e6f5c01ffaca~mv2.jpg/v1/crop/x_538,y_840,w_2356,h_896/fill/w_690,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/timeline.jpg",
        alt: "",
      },
      { type: "text", paragraphs: [] },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_2a569d6941bd4b7c9dc435094d954939~mv2.jpg/v1/crop/x_648,y_748,w_4201,h_2922/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_0029_JPG.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_f7b469c6b0b1469294723aad21e31b5e~mv2.jpg/v1/crop/x_356,y_146,w_4201,h_3415/fill/w_690,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_0039_JPG.jpg",
        alt: "",
      },
    ],
  },

  {
    slug: "rollheimer-trailer-park",
    title: "rollheimer trailer park",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_eef2176ccd954ff1830f95c6200a4c3d~mv2.jpg/v1/fill/w_253,h_253,fp_0.58_0.55,q_90/122352_eef2176ccd954ff1830f95c6200a4c3d~mv2.webp",
    thumbnailAlt: "",
    credit: "with Patrick Hemmerden Studio Prof. Bettina Götz 2016",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_fe6e9535e3b84dfcb2a9ff4abc26fbb0~mv2.jpg/v1/crop/x_788,y_398,w_5232,h_3867/fill/w_690,h_510,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lageplan.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          'The site of the "Rollheimer" trailer park in Oderstraße, is located close to the St. Jacobi cemetery in Berlin Neukölln. Between the busy Hermannstraße and the open space of the former Tempelhof Airport, the residents have created an autonomous green village in the middle a hectic urban environment.',
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_eef2176ccd954ff1830f95c6200a4c3d~mv2.jpg/v1/fill/w_690,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/InnenansichtRollheimer.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "Within the framework of Abstract City, the use of open space and the special form of living in the Rollheimer trailer park should be re-structured. In terms of urban planning, the green space should be opened up and apartments should be planned, for the Rollheimers to be cared for in their old age without losing their place of residence.",
          "The new design should house apartments for 20 Rollheimers and 20 students+guests.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_43319d8cf24f402eb117bf356cc74d48~mv2.gif",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "In the existing community, privacy is as equally important as community. Creating spatial variation of different privacies was crucial to the design.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_36ea36275a2c4d1c95bab135ddcf8e24~mv2.jpg/v1/crop/x_0,y_1207,w_4960,h_4666/fill/w_690,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2OGRolli.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "By multiplying this spatial configuration a variety of different neighbourships can be created.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_c824b40190a14ba9ad0459b70cb2ae50~mv2.jpg/v1/crop/x_398,y_544,w_5564,h_3871/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SchnittD.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The ground floor functions as the communal grounds. Workshops, a café, and additional space can be used by the residents and local citizens equally.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_1490db44820a4976aaa30e39f375fc04~mv2.jpg/v1/crop/x_1413,y_544,w_5564,h_3871/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SchnittC.jpg",
        alt: "",
      },
      { type: "text", paragraphs: [] },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_9785e029a23e4549ad58e991e0e79657~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/InnenansichtStudenten.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The smaller building will provide rooms for 20 students and short-term guests. On the first floor is a double-height common area for students to study and eat. Over exterior kitchen and laundrettes, stairs lead to each student's private room.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_6d643daf9e5245daa29346f32592ed5c~mv2.jpg/v1/crop/x_1304,y_819,w_4378,h_3323/fill/w_690,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EGStudenten.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The rooms are connected to the common area via a circular walkway. Sliding elements allow the private rooms to be opened or closed. Short-term visitors can be accommodated on the top floor.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_29a814ba2f1a40368752a31c21c37a9b~mv2.jpg/v1/crop/x_1316,y_860,w_4381,h_3238/fill/w_690,h_510,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2OGStudenten.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "Guests access their rooms directly through a corridor via stairs located outside. Each unit has its own shower and toilet, with views into the greenery of the surrounding trees. Skylights vertically light the top floor and the student common room below.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_d929d9ef420642a299d3cf8f72664742~mv2.jpg/v1/crop/x_954,y_704,w_5105,h_3551/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SchnittA.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_e0f7c19e67b847e8b7d320c1ce7e843b~mv2.jpg/v1/crop/x_1149,y_839,w_4716,h_3280/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SchnittB.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_ca3eabbbe3344e2d81446e25a279bbbc~mv2.jpg/v1/crop/x_293,y_266,w_2725,h_1895/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8202.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_e997d78e626e4d9581170b27d27f84f4~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8227.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_090ed628dbb94cb190ddc3a6557c4cfb~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8207.jpg",
        alt: "",
      },
    ],
  },

  {
    slug: "house-for-a-musician",
    title: "house for a musician",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_e68dfbe5d4c94cf2ade412f747f57412~mv2.jpg/v1/fill/w_253,h_253,q_90/122352_e68dfbe5d4c94cf2ade412f747f57412~mv2.webp",
    thumbnailAlt: "",
    credit: "with Insa Streit Studio Prof. Florian Riegler 2015",
    sections: [
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_2efd078643dc44ecb093ecc6c95679b6~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/InsaStreit%2526SteffenSasse-Musikeratelier%2520(dragged)%25203_edited.jpg",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The house for a musician attempts to unite an artist's home and workplace. It stands on a narrow piece of land between the S-Bahn tracks and the Siegfriedstr. in Neukölln, Berlin.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_1a28ed89cccd4bca979f66f67ea0bea7~mv2.png/v1/fill/w_690,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The building, which is divided into three cubes, wraps itself around the existing trees and integrates them into the architecture through inner courtyards and forecourts. The street façade remains closed, except for the glazed stairways, in order to allow the narrow site intimacy.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_eb3a6fedfda74edb9d844cefdd554500~mv2.png/v1/crop/x_0,y_4,w_961,h_869/fill/w_690,h_624,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/CAD_HA_SteffenSasse%2525253AInsaStreit_edited_edited_edited.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "In the basement, the building faces the centrally located courtyard. The upper floor opens to the roof terraces. In the basement, there is a living room with a kitchen, a library and a studio. The rooms adjust in depth according to their topographical position. This creates a flowing floor landscape within the first floor and further defines the openly connected rooms. Two separately accessible sleeping areas are located on the upper floor. This creates a retreat for children and parents, or guests and residents.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_d5c4a4e51541463a9422cd6149085202~mv2.png/v1/crop/x_0,y_876,w_1509,h_512/fill/w_690,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%252525202021-06-03%25252520at%2525252008_edited_edited.png",
        alt: "",
      },
      {
        type: "text",
        paragraphs: [
          "The three functions to be accommodated - living room, library and studio - generate three cubes that are to be interconnected. The mobility of the individual elements makes it possible to respond strongly to the building site.",
        ],
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_e1a65c20b5ac4c2ea1bab5c51c33b7e9~mv2.png/v1/crop/x_0,y_156,w_1706,h_1336/fill/w_690,h_540,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/InsaStreit%25252526SteffenSasse-Musikeratelier%25252520(dragged)%252525202_edited_edited_edited.png",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_6f0b9efa13e649e98c23857c44f71e60~mv2.png/v1/crop/x_0,y_94,w_1443,h_1132/fill/w_690,h_542,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/InsaStreit%2525252526SteffenSasse-Musikeratelier%2525252520(dragged)%25252525202_edited_edited_edited_edit.png",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_9cf792002ee0436e82fec495b9f1860d~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1DELUXXXEWAYO.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_69d936bee3ff4905af01c03800563820~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3BOOMBOOM.jpg",
        alt: "",
      },
      {
        type: "image",
        src: "https://static.wixstatic.com/media/122352_e68dfbe5d4c94cf2ade412f747f57412~mv2.jpg/v1/fill/w_690,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2TOPGISELLE.jpg",
        alt: "",
      },
    ],
  },

  // ---- External links (PDF documents) ----
  // These entries have no project page — clicking the card opens the PDF directly.

  {
    slug: null,
    title: "são paulo 1964-1985 urban expansion",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_b923b90d8496416190566f01b8e7a193~mv2.gif/v1/fill/w_254,h_253,q_90/122352_b923b90d8496416190566f01b8e7a193~mv2.webp",
    thumbnailAlt: "",
    externalUrl:
      "https://12235230-9972-4042-b255-52adfc2ff2a7.usrfiles.com/ugd/122352_1fca369c0f0746fc8003698c88c22826.pdf",
  },

  {
    slug: null,
    title: "diagrammatic analysis on Theo Deutinger's handbook + atlas",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_0d600bf769ec4246b81110441ed412f6~mv2.jpg",
    thumbnailAlt: "",
    externalUrl:
      "https://12235230-9972-4042-b255-52adfc2ff2a7.usrfiles.com/ugd/122352_0abb61cbe5744cf2ac3641be371d0906.pdf",
  },

  {
    slug: null,
    title: "politics of mapping",
    cardSubtitle: null,
    thumbnail:
      "https://static.wixstatic.com/media/122352_43342f4da0b34c7985c58c62f39662aa~mv2.gif/v1/fill/w_253,h_253,q_90/122352_43342f4da0b34c7985c58c62f39662aa~mv2.webp",
    thumbnailAlt: "",
    externalUrl:
      "https://12235230-9972-4042-b255-52adfc2ff2a7.usrfiles.com/ugd/122352_33d76dfea18446499bc01d63c4ab6acd.pdf",
  },
];

export default projects;
