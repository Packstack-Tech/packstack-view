import { FC } from "react";
import { Pane, Heading, Text, majorScale, useTheme } from "evergreen-ui";
import { Pack, CategoryItems } from "../types/pack";
import { getGenderName } from "../types/enums";
import { DataPoint } from "./DataPoint";

interface Props {
  pack: Pack;
}

export const Sidebar: FC<Props> = ({ pack }) => {
  const duration = pack.duration
    ? `${pack.duration} ${pack.duration_unit}`
    : undefined;

  return (
    <div>
      <Heading size={600} is="h3" marginBottom={majorScale(2)}>
        Trip Details
      </Heading>
      <DataPoint label="Season" value={pack.season} />
      <DataPoint label="Duration" value={duration} />
      <DataPoint label="Temperature Range" value={pack.temp_range} />
      <DataPoint label="Gender" value={getGenderName(pack.gender)} />
    </div>
  );
};
