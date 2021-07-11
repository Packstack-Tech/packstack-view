import { FC } from "react";
import { Table, Badge, Pill, Pane, majorScale, useTheme } from "evergreen-ui";
import { CategoryItems } from "../types/pack";
import { UnitSystem } from "../types/enums";

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
        paddingRight={0}
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
          {data.totalWeight} {data.totalUnit}
        </Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id} height={32}>
            <Table.TextCell>
              <Pane display="inline-flex" alignItems="center">
                <Pill color="blue" marginRight={majorScale(1)}>
                  {parseFloat(item.packItem.quantity.toString())}
                </Pill>
                {` `}
                {item.name}
              </Pane>
            </Table.TextCell>
            <Table.TextCell>{item.product_name}</Table.TextCell>
            <Table.TextCell textAlign="right">
              {item.packItem.worn && <Badge color="yellow">worn</Badge>}
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
