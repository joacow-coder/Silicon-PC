import {
  ScanSearch,
  Smartphone,
  Laptop,
  ShieldCheck,
  Cpu,
  Wrench,
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
    icon: Wrench,
    title: "Armado de PCs a medida",
    description:
      "Asesoramiento y armado de equipos según presupuesto y uso: gaming, oficina o diseño, con componentes seleccionados y garantía.",
    points: ["Asesoramiento personalizado", "Componentes con garantía"],
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
