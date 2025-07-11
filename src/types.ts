export type Brand = {
  brand: string;
  logo: string;
  url: string;
  twStyles: string;
};

type RedirectPage = { label: string; url: string };

export type Price = RedirectPage;
export type Solution = RedirectPage;
export type Support = RedirectPage;
export type Contact = RedirectPage;

export type ProductData = {
  title: string;
  applications: {
    [key: string]: string;
  };
  superiorPerformance: {
    [key: string]: string;
  };
  advantages: {
    [key: string]: string;
  };
  download: {
    [key: string]: { label: string; url: string };
  };
  technicalSpecifications: {
    codigoProducto: string;
    monitoreoCorriente: string;
    consumoMaximoEnergia: string;
    velocidadCPU: string;
    ram: string;
    arquitectura: string;
    puertosLAN: string;
    gigabit: string;
    miniPCI: string;
    wirelessIntegrado: string;
    usb: string;
    tarjetaMemoria: string;
    powerJack: string;
    soporte802_3af: string;
    poe: string;
    monitorVoltaje: string;
    temperaturaCPUmonitor: string;
    pcbMonitorTemperatura: string;
    dimensiones: string;
    rangoTemperatura: string;
    licenciaRouterOS: string;
  };
  PerformanceResults: Array<{
    ipFirewall: string;
    conntrack: string;
    modo: string;
    mbps1: string;
    fps1: string;
    mbps2: string;
    fps2: string;
    mbps3: string;
    fps3: string;
  }>;
};

// export type technicalSpecifications = {};

export type SuggestedProduct = {
  name: string;
  description: string;
  url: string;
  image: string;
};
