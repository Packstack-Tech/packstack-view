import { CatLevel } from "./enums";
import { Item, PackItem } from "./item";

export interface Category {
  id: number;
  name: string;
  level: CatLevel;
  exclude_weight: boolean;
}

export interface CategoryItems extends Category {
  items: (Item | PackItem)[];
}

export interface CategoryStat {
  id: number;
  name: string;
  consumable: boolean;
  wornWeight: number
  totalWeight: number
  totalUnit: string
}