import type {
  Brand,
  Contact,
  Price,
  ProductData,
  RedirectPage,
  Solution,
  SuggestedProduct,
  Support,
} from "./types";

export const NAVBAR_ITEMS: RedirectPage[] = [
  {
    href: "https://www.ds3comunicaciones.com/mikrotik/RB1100.html",
    label: "RB1100",
  },
  {
    href: "https://www.ds3comunicaciones.com/mikrotik/RB1200.html",
    label: "RB1200",
  },
  {
    href: "https://www.ds3comunicaciones.com/mikrotik/RB2011L-IN.html",
    label: "RB2011L-IN",
  },
  {
    href: "https://www.ds3comunicaciones.com/mikrotik/RB1100AH.html",
    label: "RB1100AH",
  },
  {
    href: "https://www.ds3comunicaciones.com/mikrotik/RB1100AHx2.html",
    label: "RB1100AHx2",
  },
];

export const OUR_BRANDS: Brand[] = [
  {
    brand: "Alfa",
    logo: "http://www.ds3comunicaciones.com/belden/images/ALFA_logo1.gif",
    url: "https://www.ds3comunicaciones.com/alfa/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Airlive",
    logo: "http://www.ds3comunicaciones.com/belden/images/airlivelogo.gif",
    url: "https://www.ds3comunicaciones.com/airlive/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Andrew",
    logo: "http://www.ds3comunicaciones.com/andrew/images/logo_andrew.jpg",
    url: "https://www.ds3comunicaciones.com/andrew/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "AMP",
    logo: "http://www.ds3comunicaciones.com/belden/images/amp_logo2-91x20.jpg",
    url: "https://www.ds3comunicaciones.com/AMP/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Amphenol",
    logo: "http://www.ds3comunicaciones.com/belden/images/amphenol_logo-100x21.jpg",
    url: "https://www.ds3comunicaciones.com/amphenol/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Belden",
    logo: "http://www.ds3comunicaciones.com/belden/images/Belden-Logo-93x15.jpg",
    url: "https://www.ds3comunicaciones.com/belden/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Cisco",
    logo: "http://www.ds3comunicaciones.com/cisco/images/logo-cisco.gif",
    url: "https://www.ds3comunicaciones.com/cisco/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Dahua",
    logo: "http://www.ds3comunicaciones.com/dahua/images/dahua_logo.jpg",
    url: "https://www.ds3comunicaciones.com/dahua/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "D-Link",
    logo: "http://www.ds3comunicaciones.com/belden/images/D-Link_Logo-100x26.jpg",
    url: "https://www.ds3comunicaciones.com/dlink/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Dixon",
    logo: "http://www.ds3comunicaciones.com/belden/images/dixon_logo-100x19.jpg",
    url: "https://www.ds3comunicaciones.com/dixon/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Edimax",
    logo: "http://www.ds3comunicaciones.com/belden/images/edimax_logo2-100x28.jpg",
    url: "http://www.ds3comunicaciones.com/edimax/ew-7209APG.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Energit",
    logo: "http://www.ds3comunicaciones.com/Energit/images/energit_logo.jpeg",
    url: "http://www.ds3comunicaciones.com/Energit/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "EnGenius",
    logo: "http://www.ds3comunicaciones.com/belden/images/engenius_logo-100x30.jpg",
    url: "http://www.ds3comunicaciones.com/senao/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "FibreFab",
    logo: "http://www.ds3comunicaciones.com/FibreFab/images/logo_fibrefab.png",
    url: "https://www.ds3comunicaciones.com/FibreFab/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "LanPro",
    logo: "http://www.ds3comunicaciones.com/lanpro/images/lanpro_logo.jpg",
    url: "https://www.ds3comunicaciones.com/lanpro/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "L-Com",
    logo: "http://www.ds3comunicaciones.com/sitebuilder/images/lcom_logo-100x23.jpg",
    url: "https://www.ds3comunicaciones.com/l-com/",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Lenovo",
    logo: "http://www.ds3comunicaciones.com/belden/images/lenovo_bar-100x18.jpg",
    url: "http://www.ds3comunicaciones.com/lenovo/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "MikroTik",
    logo: "http://www.ds3comunicaciones.com/belden/images/mikrotik_logo-100x24.png",
    url: "https://www.ds3comunicaciones.com/mikrotik/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Panduit",
    logo: "http://www.ds3comunicaciones.com/panduit/images/panduit_logo.jpg",
    url: "https://www.ds3comunicaciones.com/panduit/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Satra",
    logo: "http://www.ds3comunicaciones.com/satra/images/satra.JPG",
    url: "https://www.ds3comunicaciones.com/satra/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Siemon",
    logo: "http://www.ds3comunicaciones.com/siemon/images/siemon_logo1.GIF",
    url: "https://www.ds3comunicaciones.com/siemon/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Teldor",
    logo: "http://www.ds3comunicaciones.com/Teldor/images/logo_Teldor1.jpg",
    url: "http://www.ds3comunicaciones.com/Teldor/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "TP-Link",
    logo: "http://www.ds3comunicaciones.com/belden/images/tp-link_logo-100x13.jpg",
    url: "https://www.ds3comunicaciones.com/tplink/",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Trendnet",
    logo: "http://www.ds3comunicaciones.com/belden/images/trendnet_logo-100x20.jpg",
    url: "https://www.ds3comunicaciones.com/trendnet/",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Ubiquiti",
    logo: "http://www.ds3comunicaciones.com/belden/images/ubnt_logo-100x47.png",
    url: "https://www.ds3comunicaciones.com/ubiquiti/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
  {
    brand: "Vertical",
    logo: "http://www.ds3comunicaciones.com/vertical/images/vertical_logo1.jpg",
    url: "http://www.ds3comunicaciones.com/vertical/index.html",
    twStyles: "max-w-[100px] max-h-8 w-auto h-auto object-contain",
  },
];

export const PRICE_LIST: Price[] = [
  {
    label: "Lista de precios AMP",
    href: "https://www.ds3comunicaciones.com/AMP/precios_amp.html",
  },
  {
    label: "Lista de precios Amphenol",
    href: "https://www.ds3comunicaciones.com/amphenol/precios_amphenol.html",
  },
  {
    label: "Lista de precios Andrew",
    href: "https://www.ds3comunicaciones.com/andrew/precios_andrew.html",
  },
  {
    label: "Lista de precios APC",
    href: "https://www.ds3comunicaciones.com/apc/precios_apc.html",
  },
  {
    label: "Lista de precios CISCO",
    href: "https://www.ds3comunicaciones.com/cisco/precios_cisco.html",
  },
  {
    label: "Lista de precios D-Link",
    href: "https://www.ds3comunicaciones.com/dlink/precios_dlink.html",
  },
  {
    label: "Lista de precios Dixon",
    href: "https://www.ds3comunicaciones.com/dixon/precios_dixon.html",
  },
  {
    label: "Lista de precios Energit",
    href: "https://www.ds3comunicaciones.com/Energit/precios_energit.html",
  },
  {
    label: "Lista de precios Fibra",
    href: "https://www.ds3comunicaciones.com/FibreFab/precios_fibrefab.html",
  },
  {
    label: "Lista de precios HP",
    href: "https://www.ds3comunicaciones.com/hp/precios_hp.html",
  },
  {
    label: "Lista de precios Mikrotik",
    href: "https://www.ds3comunicaciones.com/mikrotik/precios_mikrotik.html",
  },
  {
    label: "Lista de precios Nexxt Solutions",
    href: "https://www.ds3comunicaciones.com/nexxt_solutions/precios_nexxt_solutions.html",
  },
  {
    label: "Lista de precios Panduit",
    href: "https://www.ds3comunicaciones.com/panduit/precios_panduit.html",
  },
  {
    label: "Lista de precios Siemon",
    href: "https://www.ds3comunicaciones.com/siemon/precios_siemon.html",
  },
  {
    label: "Lista de precios Teldor",
    href: "https://www.ds3comunicaciones.com/Teldor/precios_teldor.html",
  },
  {
    label: "Lista de precios TRENDnet",
    href: "https://www.ds3comunicaciones.com/trendnet/precios_trendnet.html",
  },
  {
    label: "Lista de precios Ubiquiti",
    href: "https://www.ds3comunicaciones.com/ubiquiti/precios_ubiquiti.html",
  },
];

export const SOLUTIONS: Solution[] = [
  {
    label: "Access Point",
    href: "https://www.ds3comunicaciones.com/l-com/AccessPoint.html",
  },
  {
    label: "Antenas MIMO",
    href: "https://www.ds3comunicaciones.com/lcom/AntenasMIMO.html",
  },
  {
    label: "Antenas de Panel",
    href: "https://www.ds3comunicaciones.com/l-com/AntenasPanel.html",
  },
  {
    label: "Antenas Sectoriales",
    href: "https://www.ds3comunicaciones.com/l-com/AntenaSectorial.html",
  },
  {
    label: "Cable Pigtail",
    href: "https://ds3comunicaciones.com/l-com/pigtail/Pigtail.html",
  },
  {
    label: "Media Converter",
    href: "https://www.ds3comunicaciones.com/trendnet/MediaConvert.html",
  },
];

export const SUPPORT: Support[] = [
  {
    label: "Soporte Técnico",
    href: "https://www.ds3comunicaciones.com/soporte.html",
  },
  {
    label: "Acerca de Nosotros",
    href: "https://ds3comunicaciones.com/us.html",
  },
];
export const CONTACTS: Contact[] = [
  {
    label: "994 428 965",
    href: "https://wa.me/994428965?text=Hola, necesito ayuda",
  },
  {
    label: "996 533 223",
    href: "https://wa.me/996533223?text=Hola, necesito ayuda",
  },
];

export const PRODUCT_RB750: ProductData = {
  name: "RouterBOARD con 5 puertos Ethernet MIKROTIK RB750",
  price: "U$ 59.00",
  images: [
    "https://www.ds3comunicaciones.com/mikrotik/images/RB750.jpg",
    "https://www.ds3comunicaciones.com/mikrotik/images/RB750_top.jpg",
    "https://www.ds3comunicaciones.com/mikrotik/images/RB750_hand.jpg",
  ],
  applications: [
    "Interconecte sucursales y oficinas de empresas públicas y privadas(Wireless LAN).",
    "Provee servicios de internet inalámbrico.",
    "(ISP inalámbrico).",
    "Sistemas WiFi.",
  ],
  superiorPerformance: [
    "El RouterBOARD  MIKROTIK RB750 es un pequeño router que viene con cinco puertos Ethernet, en una caja de plástico.",
    "De diseño atractivo todo lo que buscan en una unidad pequeña SOHO, su precio es menor que la licencia RouterOS, es perfecto para administrar su red de cable en casa, el RB750 lo tiene todo.",
    "No sólo es económico, es pequeña y fácil de usar.  Es probable que sea router MPLS más económico en el mercado.  No hay compromiso entre el precio y características el RB750 tiene ambas cosas.  Con su diseño compacto y un aspecto limpio, se ajustará perfectamente a su entorno SOHO.",
  ],
  advantages: [
    "Pequeño y compacto.",
    "Caja de plástico blanca.",
    "Cinco puertos Ethernet.",
    "Increíblemente rápido.",
  ],
  download: [
    {
      label: "Datos Técnicos",
      href: "https://www.ds3comunicaciones.com/mikrotik/files/Ds_RB750.pdf",
    },
    {
      label: "Guía de Instalación Rápida",
      href: "https://www.ds3comunicaciones.com/mikrotik/files/QIG_RB750.pdf",
    },
    // "2": {
    //   label: "Especificaciones",
    //   url: "https://web.netperu100.com/cisco/catalyst/files/C9200L-24T-4G-E_esp.pdf",
    // },
  ],
  technicalSpecifications: [
    { label: "Codigo Producto", value: "RB750" },
    { label: "Monitoreo Corriente", value: "No" },
    { label: "Consumo Maximo Energia", value: "2.5 Watt" },
    { label: "Velocidad CPU", value: "680 MHz" },
    { label: "RAM", value: "32 Mb" },
    { label: "Arquitectura", value: "MIPS-BE" },
    { label: "Puertos LAN", value: "5" },
    { label: "Gigabit", value: "0" },
    { label: "Mini PCI", value: "0" },
    { label: "Wireless Integrado", value: "0" },
    { label: "Usb", value: "0" },
    { label: "Tarjeta Memoria", value: "0" },
    { label: "Power Jack", value: "10 - 28 V" },
    { label: "Soporte 802.3 af", value: "No" },
    { label: "PoE", value: "10 - 28 V" },
    { label: "Monitor Voltaje", value: "No" },
    { label: "Temperatura CPU monitor", value: "No" },
    { label: "PBC Monitor Temperatura", value: "Si" },
    { label: "Dimensiones", value: "214x86mm" },
    { label: "Rango Temperatura", value: "-40° a +55° C" },
    { label: "Licencia RouterOS", value: "Nivel 4" },
  ],
  performanceResults: [
    {
      ipFirewall: "off",
      conntrack: "off",
      modo: "Puente",
      mbps1: "47.1",
      fps1: "92000",
      mbps2: "358.4",
      fps2: "87500",
      mbps3: "452.97",
      fps3: "37300",
    },
    {
      ipFirewall: "on",
      conntrack: "off",
      modo: "Enrutamiento",
      mbps1: "37.68",
      fps1: "73600",
      mbps2: "294.91",
      fps2: "72000",
      mbps3: "452.97",
      fps3: "37300",
    },
    {
      ipFirewall: "on",
      conntrack: "off",
      modo: "Puente",
      mbps1: "35.48",
      fps1: "69300",
      mbps2: "230.2",
      fps2: "56200",
      mbps3: "446.9",
      fps3: "36800",
    },
    {
      ipFirewall: "on",
      conntrack: "on",
      modo: "Enrutamiento",
      mbps1: "28.42",
      fps1: "55500",
      mbps2: "222.41",
      fps2: "54300",
      mbps3: "445.68",
      fps3: "36700",
    },
    {
      ipFirewall: "on",
      conntrack: "on",
      modo: "Puente",
      mbps1: "18.94",
      fps1: "37000",
      mbps2: "149.5",
      fps2: "36500",
      mbps3: "425.04",
      fps3: "35000",
    },
  ],
};

export const SUGGESTIONS: SuggestedProduct[] = [
  {
    name: "C9200L-24P-4G-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-24P, capa L3 con 24 puertos PoE+ (370W) Gigabit, 04 puertos para fibra SFP, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-24P-4G-E",
    url: "https://web.netperu100.com/cisco/catalyst/C9200L-24P-4G-E.html",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_front.jpg",
  },
  {
    name: "C9200L-24T-4X-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-24T, capa L3 con 24 puertos Gigabit, 04 puertos 10G para fibra SFP+, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-24T-4X-E",
    url: "https://web.netperu100.com/cisco/catalyst/C9200L-24T-4X-E.html",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24T-4X-E_front.jpg",
  },
  {
    name: "C9200L-24P-4X-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-24P, capa L3 con 24 puertos PoE+ (370W) Gigabit, 04 puertos 10G para fibra SFP+, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-24P-4X-E",
    url: "https://web.netperu100.com/cisco/catalyst/C9200L-24P-4X-E.html",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4X-E_front.jpg",
  },
  {
    name: "C9200L-48T-4G-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-48T, capa L3 con 48 puertos Gigabit, 04 puertos para fibra SFP, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-48T-4G-E",
    url: "https://web.netperu100.com/cisco/catalyst/C9200L-48T-4G-E.html",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-48T-4G-E_front.jpg",
  },
  {
    name: "C9200L-48P-4G-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-48P, capa L3 con 48 puertos PoE+ (740W) Gigabit, 04 puertos para fibra SFP, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-48P-4G-E",
    url: "https://web.netperu100.com/cisco/catalyst/C9200L-48P-4G-E.html",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-48P-4G-E_front.jpg",
  },
  {
    name: "C9200L-48T-4X-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-48T, capa L3 con 48 puertos Gigabit, 04 puertos 10G para fibra SFP+, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-48T-4X-E",
    url: "https://web.netperu100.com/cisco/catalyst/C9200L-48T-4X-E.html",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-48T-4X-E_front.jpg",
  },
];
