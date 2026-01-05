import { PotionType } from "@/types/github";
import { MAGICAL_TYPES } from "./constants";

// export const getMagicalTypeIcon = (potion: PotionType) => {
export const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type) => magicalType === type.id)[0].icon;
};

export const getFilterPillColor = (id: string) => {
  return id === "fire"
    ? "from-element-fire/20 bg-element-fire/20"
    : id === "fire"
    ? "from-element-ice/20 bg-element-ice/20"
    : id === "electric"
    ? "from-element-electric/20 bg-element-electric/20"
    : "from-magic-purple/20 bg-magic-purple/20";
};
