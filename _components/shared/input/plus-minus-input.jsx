"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const PlusMinusInput = ({
  className,
  quantity,
  maxAmount,
  setQuantity,
  updateCart,
  id_product,
}) => {
  const onPlus = () => {
    setQuantity(quantity + 1);
    updateCart({
      id: id_product,
      quantity: quantity + 1,
      type: true,
    });
  };
  const onMinus = () => {
    if (quantity > 1 && quantity <= maxAmount) {
      setQuantity(quantity - 1);
      updateCart({
        id: id_product,
        quantity: quantity - 1,
        type: true,
      });
    }
  };

  useEffect(() => {
    if (quantity > maxAmount && maxAmount > 0) {
      setQuantity(maxAmount);
      updateCart({
        id: id_product,
        quantity: maxAmount,
        message: false,
      });
    }
  }, [quantity]);

  return (
    <div
      className={`${className} flex max-w-[6.25rem] items-center gap-2 rounded-md bg-[#f7f7f7] px-3`}
    >
      <span
        className={`cursor-pointer text-[0.9rem] ${className}`}
        onClick={onMinus}
      >
        -
      </span>
      <input
        type={`number`}
        className={`w-full bg-inherit !p-0 text-center ${className} border-none text-[0.9rem] font-normal focus:border-none focus:outline-none focus:ring-0 nospinner`}
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
          updateCart({
            id: id_product,
            quantity: +e.target.value,
            type: true,
          });
        }}
        min={1}
        max={maxAmount}
      />
      <span
        className={`cursor-pointer text-[0.9rem] ${className}`}
        onClick={onPlus}
      >
        +
      </span>
    </div>
  );
};
