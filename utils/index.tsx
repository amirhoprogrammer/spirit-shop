import { PotionType } from "@/types/github";
import { MAGICAL_TYPES } from "./constants";

// export const getMagicalTypeIcon = (potion: PotionType) => {
export const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type) => magicalType === type.id)[0].icon;
};
