import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import styles from "./orderInfo.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  wsConnectionInit,
  wsConnectionClose,
} from "../../../services/actions/ws_connection_actions";

const OrderInfo = () => {
  const dispatch = useDispatch();
  const orderCurrent = useSelector((store) => store.current.currentOrder);

  const { ingredients } = useSelector((store) => store.ingredients);
  const orders = useSelector((store) => store.orders.orders.orders);
  const { id } = useParams();

  const orderFind = orders.find((i) => i._id === id);

  const order = orderCurrent ? orderCurrent : orderFind;

  const orderIngredients = order.ingredients;

  const findIngredient = orderIngredients.map(
    (id) => ingredients.filter((ingr) => ingr._id === id)[0]
  );

  const counter = orderIngredients.filter(
    (item) => item._id === findIngredient._id
  ).length;

  const styleStatus = {
    color: order.status === "done" ? "#00CCCC" : "white",
  };

  const orderPrice = findIngredient.reduce(
    (total, ingredient) => total + ingredient.price,
    0
  );

  useEffect(() => {
    dispatch(wsConnectionInit());
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  // findIngredient.map((ingr) => {
  //   const sortedOrderIngredients = [];
  //   const isLocated =
  //     sortedOrderIngredients.filter((el) => el.item._id === ingr._id).length !== 0 ? true : false;

  //   if (!isLocated) {
  //     sortedOrderIngredients.push({
  //       item: ingr,
  //       count: orderIngredients.filter((item) => item._id === ingr._id).length,
  //     });
  //   }
  // });

  return (
    <div className={styles.orderInfo__section}>
      <p
        className={`${styles.orderInfo__number} text text_type_digits-default`}
      >
        #{order.number}
      </p>
      <h3
        className={`${styles.orderInfo__name} text text_type_main-default mb-3`}
      >
        {order.name}
      </h3>
      <p
        className={`${styles.orderInfo__status} text text_type_main-small mb-15`}
        style={styleStatus}
      >
        {order.status === "done" ? "Выполнен" : "Готовится"}
      </p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <div className={styles.orderInfo__ingredients}>
        {findIngredient.map((ingredient) => (
          <div className={styles.orderInfo__ingredient}>
            <div className={styles.orderInfo__ingredientName}>
              <img
                className={`${styles.orderInfo__ingredientImg} mr-4`}
                src={ingredient.image}
                alt={ingredient.name}
              />
              <h4 className="text text_type_main-default">{ingredient.name}</h4>
            </div>
            <div className={styles.orderInfo__quantity}>
              <p className="text text_type_digits-default mr-3">
                {` x ${ingredient.price}`}
              </p>
              <CurrencyIcon />
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.orderInfo__info} mt-10`}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
        <div className={styles.orderInfo__quantity}>
          <p className="text text_type_digits-default mr-2">{orderPrice}</p>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
