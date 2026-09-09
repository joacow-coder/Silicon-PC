import {
  ScanSearch,
  BatteryCharging,
  ScreenShare,
  Unlock,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const appleServices = [
  {
    icon: ScanSearch,
    title: "Diagnóstico especializado",
    description:
      "Revisión con herramientas específicas de Apple para identificar la falla exacta antes de intervenir el equipo.",
    points: ["Diagnóstico en el día", "Presupuesto sin cargo"],
  },
  {
    icon: ScreenShare,
    title: "Cambio de módulos y pantallas",
    description:
      "Reemplazo de pantallas OLED/LCD con repuestos originales o alternativos de gama alta, según lo que necesites.",
    points: ["Originales y alternativos", "Calibración True Tone"],
  },
  {
    icon: BatteryCharging,
    title: "Cambio de batería",
    description:
      "Baterías nuevas con capacidad certificada para devolverle autonomía real a tu iPhone.",
    points: ["Salud de batería al 100%", "Garantía por escrito"],
  },
  {
    icon: Unlock,
    title: "Liberaciones",
    description:
      "Liberación de equipos por operadora, con procesos seguros y seguimiento del estado en todo momento.",
    points: ["Liberación por IMEI", "Seguimiento del proceso"],
  },
  {
    icon: Wrench,
    title: "Reparación a nivel placa",
    description:
      "Microsoldadura y reparación de componentes internos para fallas de carga, audio, cámara y conectores.",
    points: ["Microsoldadura", "Repuestos seleccionados"],
  },
  {
    icon: ShieldCheck,
    title: "Garantía por escrito",
    description:
      "Todo service de Silicon Apple sale con garantía documentada y seguimiento post-reparación.",
    points: ["Garantía documentada", "Seguimiento post-service"],
  },
];
