import React, { useState, useEffect } from "react";
import styles from "./styles.css";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { PROMOTION_ID } from "./config/const";
import getPromotionData from "./api/getPromotionData";
import { FREIGHT_BAR_SCHEMA } from "./config/schema";

interface IPromotionData {
  totalValueFloor?: number;
}
interface IProps {
  promotionId: String;
}

function FreightBar({ promotionId }: IProps) {
  const ID = promotionId ? promotionId : PROMOTION_ID;
  const { orderForm } = useOrderForm();
  const totalizerItems: number[] = orderForm.totalizers.map((items: any) =>
    items.id != "Shipping" ? items.value : 0
  );
  const value =
    totalizerItems.length > 0
      ? totalizerItems.reduce((total, value) => (total += value))
      : 0;

  //useState
  const [promotionDataPromisse, setPromotionDataPromisse] =
    useState<Promise<{}>>();
  const [loading, setLoading] = useState(true);
  const [promotionData, setPromotionData] = useState<IPromotionData>({});
  const [FREIGHT_VALUE, setFreightValue] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  //useEffect
  useEffect(() => {
    setPromotionDataPromisse(getPromotionData(ID));
  }, []);
  useEffect(() => {
    if (promotionDataPromisse) {
      promotionDataPromisse.then((data) => {
        setPromotionData(data);
      });
    }
  }, [promotionDataPromisse]);
  useEffect(() => {
    let freightValue = null;

    if (promotionData.totalValueFloor) {
      freightValue = promotionData.totalValueFloor;
      setLoading(false);
    }

    setFreightValue(freightValue);
  }, [promotionData]);
  useEffect(() => {
    if (FREIGHT_VALUE) {
      const progress = value / FREIGHT_VALUE;
      setProgress(progress);
    }
  }, [value, FREIGHT_VALUE]);

  //
  const progressClassName = () => {
    if (progress < 60) return styles["progress-low"];
    else if (progress < 100) return styles["progress-medium"];
    else return styles["progress-high"];
  };

  return (
    <>
      {loading ? (
        <div />
      ) : (
        <div className={styles.shippingContent}>
          <span className={styles.shippingContentTitle}>
            Compra mínima de ${FREIGHT_VALUE} para envío gratis.
          </span>
          <div className={styles.progressBar}>
            <div
              className={` ${styles.progress} ${progressClassName()} `}
              style={{ width: `${progress}%` }}
            >
              ${(value / 100).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

FreightBar.schema = FREIGHT_BAR_SCHEMA;

export default FreightBar;
