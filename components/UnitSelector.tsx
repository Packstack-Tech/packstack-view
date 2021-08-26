import { FC } from "react";
import { SelectField, majorScale } from "evergreen-ui";
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
    <SelectField
      hint="Unit system"
      value={selected}
      onChange={(v) => onChange(v.target.value)}
      width={majorScale(16)}
    >
      {unitOptions.map((unit) => (
        <option
          value={unit.value}
          // selected={unit.value === selected}
          key={unit.value}
        >
          {unit.label}
        </option>
      ))}
    </SelectField>
  );
};
