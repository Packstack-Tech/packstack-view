import { FC, useState } from "react";
import { Pane, Heading, Dialog, Button, majorScale } from "evergreen-ui";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pack } from "../types/pack";
import { CategoryStat } from "../types/category";
import { getGenderName, UnitSystem, TotalUnit } from "../types/enums";
import { DataPoint } from "./DataPoint";
import { WeightBreakdown } from "./WeightBreakdown";

interface Props {
  pack: Pack;
  systemUnit: UnitSystem;
  categoryStats: CategoryStat[];
}

export const Sidebar: FC<Props> = ({ pack, categoryStats, systemUnit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const duration = pack.duration
    ? `${pack.duration} ${pack.duration_unit}`
    : undefined;

  const chartLabels = categoryStats.map(({ name }) => name);
  const chartData = categoryStats.map(({ totalWeight }) => totalWeight);
  const chartBgColors = categoryStats.map(({ color }) => color);

  return (
    <>
      <Pane marginBottom={majorScale(2)}>
        <Heading size={600} is="h3" marginBottom={majorScale(2)}>
          Trip Details
        </Heading>
        <DataPoint label="Season" value={pack.season} />
        <DataPoint label="Duration" value={duration} />
        <DataPoint label="Temperature Range" value={pack.temp_range} />
        <DataPoint label="Gender" value={getGenderName(pack.gender)} />
      </Pane>
      <Pane>
        <Pane display="flex" justifyContent="space-between">
          <Heading size={600} is="h3" marginBottom={majorScale(2)}>
            Breakdown
          </Heading>
          <Button size="small" onClick={() => setModalOpen(true)}>
            View Chart
          </Button>
        </Pane>
        <WeightBreakdown categoryStats={categoryStats} />
      </Pane>
      <Dialog
        isShown={modalOpen}
        onCloseComplete={() => setModalOpen(false)}
        title="Category Breakdown"
        hasFooter={false}
      >
        <Doughnut
          type="doughnut"
          plugins={[ChartDataLabels]}
          data={{
            labels: chartLabels,
            datasets: [
              {
                label: "Weight breakdown",
                data: chartData,
                backgroundColor: chartBgColors,
              },
            ],
          }}
          options={{
            cutout: "33%",
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                color: "#FFFFFF",
                backgroundColor: "rgba(0,0,0,.5)",
                padding: {
                  top: 2,
                  right: 4,
                  bottom: 2,
                  left: 4,
                },
                borderRadius: 2,
                formatter: (value, context) =>
                  context.chart.data.labels[context.dataIndex],
              },
              tooltip: {
                yAlign: "bottom",
                callbacks: {
                  label: (context) =>
                    ` ${context.formattedValue} ${TotalUnit[systemUnit]}`,
                },
              },
            },
          }}
        />
      </Dialog>
    </>
  );
};
