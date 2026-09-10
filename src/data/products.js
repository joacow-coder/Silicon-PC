import {
  Smartphone,
  Cpu,
  Headphones,
  BatteryCharging,
  ShieldHalf,
  Tag,
  MonitorSmartphone,
} from "lucide-react";

export const productCategories = [
  {
    icon: Smartphone,
    title: "Celulares",
    description: "Equipos nuevos y usados seleccionados, con revisión técnica previa a la venta.",
    availability: "En stock",
  },
  {
    icon: MonitorSmartphone,
    title: "Notebooks y monitores",
    description: "Notebooks nuevas y usadas, monitores y periféricos con revisión técnica previa a la venta.",
    availability: "En stock",
  },
  {
    icon: Cpu,
    title: "Componentes PC",
    description: "Placas, memorias, almacenamiento, gabinetes y fuentes para armado y upgrade.",
    availability: "Por encargo",
  },
  {
    icon: Headphones,
    title: "Audio y parlantes",
    description: "Parlantes portátiles, auriculares y equipos de audio de distintas gamas.",
    availability: "En stock",
  },
  {
    icon: BatteryCharging,
    title: "Cargadores y cables",
    description: "Cargadores originales y alternativos, cables y baterías portátiles.",
    availability: "En stock",
  },
  {
    icon: ShieldHalf,
    title: "Fundas y accesorios",
    description: "Protección y accesorios a medida para celulares, tablets y notebooks.",
    availability: "En stock",
  },
  {
    icon: Tag,
    title: "Ofertas",
    description: "Promociones activas y liquidaciones de stock seleccionado, renovadas cada semana.",
    availability: "Tiempo limitado",
  },
];
