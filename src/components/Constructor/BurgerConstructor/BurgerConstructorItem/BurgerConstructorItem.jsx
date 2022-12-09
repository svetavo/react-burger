import { useRef } from "react";
import constructorStyles from "../BurgerConstructor.module.css";
import { useDrop, useDrag } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientTypes } from "../../../../utils/types";

const BurgerConstructorItem = ({
  item,
  uuid,
  index,
  handleDelete,
  moveCard,
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "ingredientSort",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "ingredientSort",
    item: () => {
      return { id: uuid, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <li
      className={constructorStyles.burger__item}
      key={uuid}
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <div className={constructorStyles.burger__dragdrop}>
        <DragIcon />
      </div>
      <ConstructorElement
        index={item.index}
        type={item.type}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        alt={item.name}
        id={item.id}
        handleClose={() => handleDelete(item)}
      />
    </li>
  );
};

export default BurgerConstructorItem;

BurgerConstructorItem.propTypes = {
  item: ingredientTypes.isRequired,
  handleDelete: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
};
