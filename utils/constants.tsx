import { FlameIcon, SnowflakeIcon, SparkleIcon, ZapIcon } from "lucide-react";

export const MAGICAL_TYPES = [
  {
    id: "fire",
    value: "🔥",
    label: "Fire_type",
    icon: <FlameIcon className="text-element-fire" />,
  },
  {
    id: "ice",
    value: "❄",
    label: "ice_type",
    icon: <SnowflakeIcon className="text-element-ice" />,
  },
  {
    id: "electric",
    value: "⚡",
    label: "Electric_type",
    icon: <FlameIcon className="text-element-electric" />,
  },
  {
    id: "all",
    value: "✨",
    label: "All_type",
    icon: <SparkleIcon className="text-magic-purple" />,
  },
];
