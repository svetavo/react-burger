import styles from "./orderItem.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderInfo from "../OrderInfo/OrderInfo";
import Modal from "../../Modal/Modal";
import { useState } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCurrentOrder,
  addCurrentOrder,
} from "../../../services/actions/currentIngredientActions";
import { v4 as uuidv4 } from "uuid";

const OrderItem = ({ order, path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const dispatch = useDispatch();
  const orderIngredients = order.ingredients;

  const findIngredient = orderIngredients.map(
    (id) => ingredients.filter((ingr) => ingr._id === id)[0]
  );
  const orderPrice = findIngredient
    .filter((el) => el !== undefined)
    .reduce((total, ingredient) => total + ingredient.price, 0);

  const clickHandler = (order) => {
    dispatch(addCurrentOrder(order));
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    dispatch(removeCurrentOrder());
    history.goBack();
  };

  return (
    <div className={styles.item}>
      <Link
        className={styles.link}
        to={{ pathname: path, state: { background: location } }}
        onClick={() => clickHandler(order)}
      >
        <div className={styles.item__info}>
          <p className="text text_type_digits-default">#{order.number}</p>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} />
          </p>
        </div>
        <h4
          className={`${styles.item__name} text text_type_main-default mb-6 mt-6`}
        >
          {order.name}
        </h4>
        <div className={styles.item__summary}>
          <div className={styles.pictos}>
            {findIngredient
              .filter((el) => el !== undefined)
              .map((item, index) =>
                index < 7 ? (
                  <div className={styles.imageContainer} key={uuidv4()}>
                    <img
                      src={item.image}
                      className={styles.itemImg}
                      alt={item.name}
                    />
                  </div>
                ) : null
              )}
          </div>
          <div className={styles.total}>
            {" "}
            <p className="text text_type_digits-default ml-6 mr-1">
              {orderPrice}
            </p>
            <CurrencyIcon />
          </div>
        </div>
      </Link>
      <Modal handleClose={handleCloseModal} isOpen={isOpen}>
        <OrderInfo orderPrice={orderPrice} />
      </Modal>
    </div>
  );
};

export default OrderItem;
