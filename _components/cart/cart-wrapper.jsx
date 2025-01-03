import { cart_template } from "@/_components/cart/templates/template";

export const CartWrapper = ({
  children,
  verifyCaptcha = () => {},
  data,
  cartCost,
}) => {
  //kljuc kao sto je "template_one" moze i sa api-ja da se dobije
  return cart_template?.template_one({
    children,
    cartCost,
    data,
    verifyCaptcha: verifyCaptcha,
  });
};
