import { useRef } from "react";
import constructorStyles from "../BurgerConstructor.module.css";
import { useDrop, useDrag, DropTargetMonitor } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {  TItem } from "../../../../utils/types/types";
import React from "react";

type TConstructorItem = {
  item: TItem;
  uuid?: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  handleDelete: (item: TItem) => void;
};

type TDropItem = TItem

export const BurgerConstructorItem: React.FC<TConstructorItem> = ({
  item,
  uuid,
  index,
  handleDelete,
  moveCard,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "ingredientSort",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover: (item: TDropItem, monitor: DropTargetMonitor) => {
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
      const hoverClientY =
        Number(monitor.getClientOffset()) - hoverBoundingRect.top;
      if (dragIndex! < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex! > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex!, hoverIndex);

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
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => handleDelete(item)}
      />
    </li>
  );
};
