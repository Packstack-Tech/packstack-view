import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { Pane, Heading, Text, majorScale, useTheme } from "evergreen-ui";
import { Pack, CategoryItems } from "../../types/pack";
import { CategoryTable } from "../../components/CategoryTable";
import { UnitSelector } from "../../components/UnitSelector";
import { Sidebar } from "../../components/Sidebar"
import { useCategoryItems } from "../../components/useCategoryItems";
import { UnitSystem } from '../../types/enums'

function PackView(data: Pack) {
  const theme: any = useTheme();
  const [unit, setUnit] = useState<UnitSystem>(UnitSystem.METRIC);
  const categoryItems = useCategoryItems(unit, data.byCategory);

  return (
    <Pane display="flex">
      <Pane flex={1}>
        <Pane padding={majorScale(4)}>
          <Heading size={800} is="h1">{data.title}</Heading>
          <Text>{data.description}</Text>
          <Pane
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Heading size={600} paddingBottom={majorScale(3)}>
              Packing List
            </Heading>
            <UnitSelector selected={unit} onChange={(v) => setUnit(v)} />
          </Pane>
          <Pane>
            {categoryItems.map((category) => (
              <CategoryTable data={category} key={category.id} unit={unit} />
            ))}
          </Pane>
        </Pane>
      </Pane>
      <Pane
        width={majorScale(40)}
        minHeight="100vh"
        boxShadow={`-1px 0 0 ${theme.colors.gray100}`}
      >
        <Pane padding={majorScale(4)}>
          <Sidebar pack={data} />
        </Pane>
      </Pane>
    </Pane>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const slug = params?.slug;
  if (!slug || !slug[0]) {
    // catches missing path param
    return {
      notFound: true,
    };
  }

  const id = slug[0];
  try {
    const res = await fetch(`https://packstack.io/api/v1/pack/${id}`);
    const data: Pack = await res.json();

    // API needs to be refactored to clean this up
    const categories: CategoryItems[] = [];
    data.items.forEach((item) => {
      const category = categories.find((cat) => cat.id === item.categoryId);
      if (category) {
        category.items.push(item);
      } else {
        categories.push({
          id: item.categoryId,
          category: item.Category,
          items: [item],
        });
      }
    });

    data.byCategory = categories;
    return { props: data };
  } catch {
    // API request failed
    return {
      notFound: true,
    };
  }
}

export default PackView;
