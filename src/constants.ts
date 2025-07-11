import type {
  Brand,
  Contact,
  Price,
  Solution,
  SuggestedProduct,
  Support,
} from "./types";

export const NAVBAR_ITEMS = [
  {
    name: "Switch Catalyst",
    url: "https://www.ds3comunicaciones.com/cisco/catalys_9200l.html",
    image: "./icons/Switch Catalyst.ico",
    alt: "",
  },
  {
    name: "Cisco Business",
    url: "https://www.ds3comunicaciones.com/cisco/bussines_sg350.html",
    image: "./icons/Cisco Business.ico",
    alt: "Cisco Business",
  },
  {
    name: "Switch Industrial",
    url: "https://www.ds3comunicaciones.com/cisco/precios_cisco_switch_industrial_b.html",
    image: "./icons/Switch Industrial.ico",
    alt: "Switch Industrial",
  },
  {
    name: "Aironet",
    url: "https://www.ds3comunicaciones.com/cisco/precios_cisco_access_point_b.html",
    image: "./icons/Aironet.ico",
    alt: "Aironet",
  },
  {
    name: "Teléfono",
    url: "https://www.ds3comunicaciones.com/cisco/precios_cisco_telefonos_b.html",
    image: "./icons/Télefono.ico",
    alt: "Teléfono",
  },
  {
    name: "Meraki",
    url: "https://ds3comunicaciones.com/cisco/precios_cisco_meraki_b.html",
    image: "./icons/mariakii.ico",
    alt: "Meraki",
  },
  {
    name: "Transceiver",
    url: "#",
    image: "./icons/Transceiver.ico",
    alt: "Transceiver",
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
];

export const PRICE_LIST: Price[] = [
  {
    label: "Lista de precios AMP",
    url: "https://www.ds3comunicaciones.com/AMP/precios_amp.html",
  },
  {
    label: "Lista de precios Amphenol",
    url: "https://www.ds3comunicaciones.com/amphenol/precios_amphenol.html",
  },
  {
    label: "Lista de precios Andrew",
    url: "https://www.ds3comunicaciones.com/andrew/precios_andrew.html",
  },
  {
    label: "Lista de precios APC",
    url: "https://www.ds3comunicaciones.com/apc/precios_apc.html",
  },
  {
    label: "Lista de precios CISCO",
    url: "https://www.ds3comunicaciones.com/cisco/precios_cisco.html",
  },
  {
    label: "Lista de precios D-Link",
    url: "https://www.ds3comunicaciones.com/dlink/precios_dlink.html",
  },
  {
    label: "Lista de precios Dixon",
    url: "https://www.ds3comunicaciones.com/dixon/precios_dixon.html",
  },
  {
    label: "Lista de precios Energit",
    url: "https://www.ds3comunicaciones.com/Energit/precios_energit.html",
  },
  {
    label: "Lista de precios Fibra",
    url: "https://www.ds3comunicaciones.com/FibreFab/precios_fibrefab.html",
  },
  {
    label: "Lista de precios HP",
    url: "https://www.ds3comunicaciones.com/hp/precios_hp.html",
  },
  {
    label: "Lista de precios Mikrotik",
    url: "https://www.ds3comunicaciones.com/mikrotik/precios_mikrotik.html",
  },
  {
    label: "Lista de precios Nexxt Solutions",
    url: "https://www.ds3comunicaciones.com/nexxt_solutions/precios_nexxt_solutions.html",
  },
  {
    label: "Lista de precios Panduit",
    url: "https://www.ds3comunicaciones.com/panduit/precios_panduit.html",
  },
  {
    label: "Lista de precios Siemon",
    url: "https://www.ds3comunicaciones.com/siemon/precios_siemon.html",
  },
  {
    label: "Lista de precios Teldor",
    url: "https://www.ds3comunicaciones.com/Teldor/precios_teldor.html",
  },
  {
    label: "Lista de precios TRENDnet",
    url: "https://www.ds3comunicaciones.com/trendnet/precios_trendnet.html",
  },
  {
    label: "Lista de precios Ubiquiti",
    url: "https://www.ds3comunicaciones.com/ubiquiti/precios_ubiquiti.html",
  },
];

export const SOLUTIONS: Solution[] = [
  {
    label: "Access Point",
    url: "https://www.ds3comunicaciones.com/l-com/AccessPoint.html",
  },
  {
    label: "Antenas MIMO",
    url: "https://www.ds3comunicaciones.com/lcom/AntenasMIMO.html",
  },
  {
    label: "Antenas de Panel",
    url: "https://www.ds3comunicaciones.com/l-com/AntenasPanel.html",
  },
  {
    label: "Antenas Sectoriales",
    url: "https://www.ds3comunicaciones.com/l-com/AntenaSectorial.html",
  },
  {
    label: "Cable Pigtail",
    url: "https://ds3comunicaciones.com/l-com/pigtail/Pigtail.html",
  },
  {
    label: "Media Converter",
    url: "https://www.ds3comunicaciones.com/trendnet/MediaConvert.html",
  },
];

export const SUPPORT: Support[] = [
  {
    label: "Soporte Técnico",
    url: "https://www.ds3comunicaciones.com/soporte.html",
  },
  {
    label: "Acerca de Nosotros",
    url: "https://ds3comunicaciones.com/us.html",
  },
];
export const CONTACTS: Contact[] = [
  {
    label: "994 428 965",
    url: "https://wa.me/994428965?text=Hola, necesito ayuda",
  },
  {
    label: "996 533 223",
    url: "https://wa.me/996533223?text=Hola, necesito ayuda",
  },
];

export const PRODUCT_RB750 = {
  title: "RouterBOARD con 5 puertos Ethernet MIKROTIK RB750",
  applications: {
    "0": "Interconecte sucursales y oficinas de empresas públicas y privadas(Wireless LAN).",
    "1": "Provee servicios de internet inalámbrico.",
    "2": "(ISP inalámbrico).",
    "3": "Sistemas WiFi.",
  },
  superiorPerformance: {
    "0": "El RouterBOARD  MIKROTIK RB750 es un pequeño router que viene con cinco puertos Ethernet, en una caja de plástico.",
    "1": "De diseño atractivo todo lo que buscan en una unidad pequeña SOHO, su precio es menor que la licencia RouterOS, es perfecto para administrar su red de cable en casa, el RB750 lo tiene todo.",
    "2": "No sólo es económico, es pequeña y fácil de usar.  Es probable que sea router MPLS más económico en el mercado.  No hay compromiso entre el precio y características el RB750 tiene ambas cosas.  Con su diseño compacto y un aspecto limpio, se ajustará perfectamente a su entorno SOHO.",
  },
  advantages: {
    "0": "Pequeño y compacto.",
    "1": "Caja de plástico blanca.",
    "2": "Cinco puertos Ethernet.",
    "3": "Increíblemente rápido.",
  },
  download: {
    "0": {
      label: "Ficha Técnica",
      url: "https://www.ds3comunicaciones.com/cisco/files/catalyst_9200.pdf",
    },
    "1": {
      label: "Manual",
      url: "https://web.netperu100.com/cisco/catalyst/files/Catalyst_9200_manual.pdf",
    },
    "2": {
      label: "Especificaciones",
      url: "https://web.netperu100.com/cisco/catalyst/files/C9200L-24T-4G-E_esp.pdf",
    },
  },
  technicalSpecifications: {
    codigoProducto: "RB750",
    monitoreoCorriente: "No",
    consumoMaximoEnergia: "2.5 Watt",
    velocidadCPU: "680 MHz",
    ram: "32 Mb",
    arquitectura: "MIPS-BE",
    puertosLAN: "5",
    gigabit: "0",
    miniPCI: "0",
    wirelessIntegrado: "0",
    usb: "0",
    tarjetaMemoria: "0",
    powerJack: "10 - 28 V",
    soporte802_3af: "No",
    poe: "10 - 28 V",
    monitorVoltaje: "No",
    temperaturaCPUmonitor: "No",
    pcbMonitorTemperatura: "Si",
    dimensiones: "214x86mm",
    rangoTemperatura: "-40° a +55° C",
    licenciaRouterOS: "Nivel 4",
  },
  PerformanceResults: [
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

export const MORE_DETAILS = {
  technicalSpecifications: {
    label: "Especificaciones Técnicas",
    content: [
      "Tipo de dispositivo: Cisco Catalyst 9200L C9200L-24T-4G-E, Switch capa L3 full (Layer 3)",
      "Conectividad: 24 puertos Gigabit 10/100/1000 + 4 puertos 1G para fibra SFP",
      "Dimensiones: 445 x 332 x 44 mm",
      "Peso: 5.4 kg",
    ],
  },

  supportedProtocols: {
    label: "Protocolos Soportados",
    content: [
      "Protocolo de direccionamiento: OSPF, IS-IS, BGP, EIGRP, DVMRP, PIM-SM, IGMPv3, GRE, PIM-SSM, enrutamiento IPv4 estático, enrutamiento IPv6 estático",
      "Protocolo de gestión remota: SNMP 1, RMON, Telnet, SNMP 3, SNMP 2c, HTTP, HTTPS, SSH",
    ],
  },

  complianceWithStandards: {
    label: "Cumplimiento de Normas",
    content: [
      "IEEE 802.3, IEEE 802.3u, IEEE 802.3z, IEEE 802.1D, IEEE 802.1Q, IEEE 802.3ab, IEEE 802.1p, IEEE 802.3af, IEEE 802.3x, IEEE 802.3ad (LACP), IEEE 802.1w, IEEE 802.1x, IEEE 802.1s, IEEE 802.3ah, IEEE 802.1ab (LLDP)",
    ],
  },

  certificationsAndEnvironment: {
    label: "Certificaciones y Ambiente",
    content: [
      "Certificaciones: CE, TUV GS, cUL, EN 60950, EN55022, NOM, VCCI Class A ITE, IEC 60950, EN55024, FCC Part 15, UL 1950 (3), CSA 22.2 No. 950 (3)",
      "Temperatura de operación: -5 – 45 °C",
    ],
  },
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
