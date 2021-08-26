import { FC } from "react";
import { Select, majorScale } from "evergreen-ui";
import { UnitSystem } from "../types/enums";

interface Props {
  selected: UnitSystem;
  onChange: (unit: any) => void;
}

const unitOptions: { value: UnitSystem; label: string }[] = [
  {
    value: UnitSystem.METRIC,
    label: "Metric",
  },
  {
    value: UnitSystem.IMPERIAL,
    label: "Imperial",
  },
];

export const UnitSelector: FC<Props> = ({ selected, onChange }) => {
  return (
    <Select
      value={selected}
      onChange={(v) => onChange(v.target.value)}
      width={majorScale(16)}
      marginBottom={0}
    >
      {unitOptions.map((unit) => (
        <option
          value={unit.value}
          key={unit.value}
        >
          {unit.label}
        </option>
      ))}
    </Select>
  );
};
