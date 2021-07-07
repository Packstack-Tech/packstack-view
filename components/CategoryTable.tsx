import { FC } from "react";
import { Table, Pill, majorScale, useTheme } from "evergreen-ui";
import { CategoryItems } from "../types/pack";
import { UnitSystem, TotalUnit } from "../types/enums";

type Props = {
  data: CategoryItems;
  unit: UnitSystem;
};

export const CategoryTable: FC<Props> = ({ data, unit }) => {
  const theme: any = useTheme();
  const { category, items } = data;

  return (
    <Table marginBottom={majorScale(2)}>
      <Table.Head
        height={majorScale(5)}
        color={theme.colors.green800}
        backgroundColor={theme.colors.green25}
      >
        <Table.TextHeaderCell>{category.name}</Table.TextHeaderCell>
        <Table.TextHeaderCell />
        <Table.TextHeaderCell />
        <Table.TextHeaderCell
          flexBasis={majorScale(10)}
          flexShrink={0}
          flexGrow={0}
          textAlign="right"
        >
          {data.totalWeight} {TotalUnit[unit]}
        </Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id} height={32}>
            <Table.TextCell>{item.name}</Table.TextCell>
            <Table.TextCell>{item.product_name}</Table.TextCell>
            <Table.TextCell textAlign="right">
              {item.packItem.worn && <Pill color="yellow">worn</Pill>}
            </Table.TextCell>
            <Table.TextCell textAlign="right">
              {item.weight} {item.weight_unit}
            </Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
