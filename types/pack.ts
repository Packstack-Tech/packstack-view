import { DurationUnit, Gender } from "./enums";
import { PackItem } from "./item";
import { User } from "./user";
import { Category } from "./category"
import { Item } from "./item"

export interface BasePack {
  title: string;
  description?: string;
  duration?: number;
  duration_unit?: DurationUnit;
  temp_range?: string;
  season?: string;
  gender?: Gender;
  public: boolean;
}

export type CategoryItems = {
    id: number,
    category: Category,
    items: PackItem[],
    totalWeight?: number
  }

export interface Pack extends BasePack {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  items: PackItem[];
  user: Pick<User, "id" | "username">;
  byCategory: CategoryItems[]
}

export type UpdatePack = Omit<BasePack, "title"> & {
  id: number;
  title?: string;
  items?: PackItem[];
};

export interface CreatePack extends BasePack {
  items: PackItem[];
}

export type PackOverview = Omit<Pack, "items"> & {
  itemCount: number;
};

export enum PackConstants {
  title = 300,
  description = 2000,
  temp_range = 255,
  notes = 1000,
  season = 255,
}
