import { FC } from "react";
import { Pane, Text, majorScale } from "evergreen-ui";
import { CategoryStat } from "../types/category";

interface Props {
  categoryStats: CategoryStat[];
}

interface RowProps {
  label: string;
  weight: number;
  unit: string;
  bold?: boolean;
  highlight?: boolean;
}

const Row: FC<RowProps> = ({ label, weight, unit, bold, highlight }) => (
  <Pane
    display="flex"
    justifyContent="space-between"
    borderBottom="1px dashed #eeeeee"
    paddingY={majorScale(1)}
    paddingX="4px"
    backgroundColor={highlight ? "#FAFBFF" : undefined}
  >
    <Text fontWeight={bold ? 700 : 400} size={300}>
      {label}
    </Text>
    <Text fontWeight={bold ? 700 : 400} size={300}>
      {weight.toFixed(2)} {unit}
    </Text>
  </Pane>
);

export const WeightBreakdown: FC<Props> = ({ categoryStats }) => {
  const unit = categoryStats[0].totalUnit;
  const totalWeight = categoryStats.reduce((acc, curr) => {
    return acc + curr.totalWeight;
  }, 0);

  const consumableWeight = categoryStats.reduce((acc, curr) => {
    return acc + (curr.consumable ? curr.totalWeight : 0);
  }, 0);

  const wornWeight = categoryStats.reduce((acc, curr) => {
    return acc + curr.wornWeight;
  }, 0);

  const baseWeight = totalWeight - (consumableWeight + wornWeight);
  const sortedByWeight = [...categoryStats].sort(
    (a, b) => b.totalWeight - a.totalWeight
  );

  return (
    <Pane>
      {sortedByWeight.map((stat) => (
        <Row
          key={stat.id}
          label={stat.name}
          weight={stat.totalWeight}
          unit={stat.totalUnit}
        />
      ))}
      <Row label="Base Weight" weight={baseWeight} unit={unit} bold highlight />
      <Row label="Worn" weight={wornWeight} unit={unit} bold />
      <Row label="Consumable" weight={consumableWeight} unit={unit} bold />
      <Row label="Total" weight={totalWeight} unit={unit} bold highlight />
    </Pane>
  );
};
