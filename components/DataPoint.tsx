import { FC } from "react";
import { Pane, Heading, Text, majorScale, useTheme } from "evergreen-ui";

interface DataPointProps {
  label: string;
  value?: string | number;
}

export const DataPoint: FC<DataPointProps> = ({ label, value }) => {
  const theme: any = useTheme();
  if (!value) {
    return null;
  }

  return (
    <Pane
      padding={majorScale(1)}
      border={`1px solid ${theme.colors.gray100}`}
      borderRadius="2px"
      marginBottom={majorScale(1)}
      backgroundColor={theme.colors.gray50}
    >
      <Heading
        size={300}
        is="h4"
        color={theme.colors.blue900}
        fontWeight={700}
      >
        {label}
      </Heading>
      <Text color={theme.colors.gray800}>{value}</Text>
    </Pane>
  );
};
