import { useMemo } from "react";
import convert from "convert-units";
import { CategoryItems } from "../types/pack";
import { WeightUnit, UnitSystem } from "../types/enums";

function convertWeight(
  system: UnitSystem,
  weightUnit: WeightUnit,
  weight: number
) {
  if (system === UnitSystem.IMPERIAL) {
    switch (weightUnit) {
      case WeightUnit.GRAMS:
        return {
          weight_unit: WeightUnit.OUNCES,
          weight: convert(weight).from(weightUnit).to(WeightUnit.OUNCES),
        };
      case WeightUnit.KILOGRAMS:
        return {
          weight_unit: WeightUnit.POUNDS,
          weight: convert(weight).from(weightUnit).to("lb"),
        };
      default:
        return {
          weight_unit: weightUnit,
          weight,
        };
    }
  } else {
    switch (weightUnit) {
      case WeightUnit.OUNCES:
        return {
          weight_unit: WeightUnit.GRAMS,
          weight: convert(weight).from(weightUnit).to(WeightUnit.GRAMS),
        };
      case WeightUnit.POUNDS:
        return {
          weight_unit: WeightUnit.KILOGRAMS,
          weight: convert(weight).from("lb").to(WeightUnit.KILOGRAMS),
        };
      default:
        return {
          weight_unit: weightUnit,
          weight,
        };
    }
  }
}

export const useCategoryItems = (
  system: UnitSystem,
  items: CategoryItems[]
) => {
  // Items with converted weights
  const categories = useMemo(
    () =>
      items.map((category) => {
        const convertedItems = category.items.map((item) => {
          if (!item.weight_unit || !item.weight) {
            return item;
          }

          const conversion = convertWeight(
            system,
            item.weight_unit,
            item.weight
          );

          const weight = Math.round(conversion.weight * 100) / 100;

          return {
            ...item,
            weight,
            weight_unit: conversion.weight_unit,
          };
        });

        return {
          ...category,
          items: convertedItems,
        };
      }),
    [system, items]
  );

  // Categories with total weight
  return useMemo(
    () =>
      categories.map((category) => {
        const totalWeight = category.items.reduce((acc, curr) => {
          if (!curr.weight || !curr.weight_unit) {
            return acc;
          }
          if (
            system === UnitSystem.IMPERIAL &&
            curr.weight_unit === WeightUnit.OUNCES
          ) {
            return acc + convert(curr.weight).from(WeightUnit.OUNCES).to("lb");
          }
          if (
            system === UnitSystem.METRIC &&
            curr.weight_unit === WeightUnit.GRAMS
          ) {
            return (
              acc +
              convert(curr.weight)
                .from(WeightUnit.GRAMS)
                .to(WeightUnit.KILOGRAMS)
            );
          }
          return acc + curr.weight;
        }, 0);
        return {
          ...category,
          totalWeight: Math.round(totalWeight * 100) / 100,
        };
      }),
    [categories, system]
  );
};
