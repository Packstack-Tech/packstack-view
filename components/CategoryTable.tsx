import { FC } from "react";
import { CategoryItems } from "../types/pack";
import styles from "./CategoryTable.module.scss";

type Props = {
  data: CategoryItems;
  compact: boolean;
};

export const CategoryTable: FC<Props> = ({ data, compact }) => {
  const { category, items } = data;
  
  return (
    <div className={styles.CategoryTable}>
      <div className={styles.CategoryHeader}>
        <h4>{category.name}</h4>
        <div className={styles.totalWeight}>
          {data.totalWeight} {data.totalUnit}
        </div>
      </div>
      <div className={styles.ItemsTable}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.ItemContainer} ${compact && styles.compact}`}
          >
            <div className={styles.ItemRow}>
              <div className={styles.ItemQuantity}>
                <div className={styles.Quantity}>
                  {parseFloat(item.packItem.quantity.toString())}
                </div>
              </div>
              <div className={styles.ItemName}>
                {item.product_url ? (
                  <a href={item.product_url} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </div>
              <div className={styles.ItemManufacturer}>{item.manufacturer}</div>
              <div className={styles.ItemDescription}>{item.product_name}</div>
              <div className={styles.ItemPrice}>
                {item.price &&
                  item.price !== "0.00" &&
                  `$${parseFloat(item.price).toLocaleString()}`}
              </div>
              <div className={styles.ItemWorn}>
                {item.packItem.worn && <div className={styles.Badge}>WORN</div>}
              </div>
              <div className={styles.ItemWeight}>
                {item.weight} {item.weight_unit}
              </div>
            </div>
            {!!item.packItem.notes && <p>{item.packItem.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
