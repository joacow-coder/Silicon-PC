import {
  ScanSearch,
  Smartphone,
  Laptop,
  Apple,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export const services = [
  {
    icon: ScanSearch,
    title: "Diagnóstico avanzado",
    description:
      "Evaluación técnica con equipamiento profesional para detectar la falla real antes de presupuestar. Sin vueltas, sin sorpresas.",
    points: ["Diagnóstico en el día", "Presupuesto sin cargo"],
  },
  {
    icon: Smartphone,
    title: "Reparación de smartphones",
    description:
      "Cambio de módulos y pantallas, baterías, placas, conectores de carga y cámaras en los principales fabricantes del mercado.",
    points: ["Módulos y baterías", "Reparación de placa"],
  },
  {
    icon: Apple,
    title: "Silicon Apple",
    description:
      "Atención dedicada al ecosistema Apple: iPhone, iPad y Mac, con repuestos seleccionados y procedimientos específicos de marca.",
    points: ["iPhone / iPad / Mac", "Repuestos seleccionados"],
  },
  {
    icon: Laptop,
    title: "Notebooks y PC",
    description:
      "Mantenimiento, upgrades de hardware, formateo profesional y solución de fallas de software para equipos hogareños y de oficina.",
    points: ["Upgrades de hardware", "Formateo profesional"],
  },
  {
    icon: Cpu,
    title: "Electrónica general",
    description:
      "Reparación y mantenimiento de audio, cargadores y dispositivos electrónicos varios, con revisión de componentes a nivel placa.",
    points: ["Revisión a nivel placa", "Repuestos originales y alternativos"],
  },
  {
    icon: ShieldCheck,
    title: "Garantía por escrito",
    description:
      "Todo trabajo de service sale de nuestro local con garantía documentada y seguimiento post-reparación.",
    points: ["Garantía documentada", "Seguimiento post-service"],
  },
];
