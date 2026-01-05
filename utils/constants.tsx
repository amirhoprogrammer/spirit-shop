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

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)} M`;
  } else if (num >= 1000) return `${(num / 1000).toFixed(0)} K`;
  return num.toString();
};
