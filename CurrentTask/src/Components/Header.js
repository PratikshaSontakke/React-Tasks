import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ItemView from "./ItemView";
import Delete from "./card/Delete";
import React from "react";
import FallbackError from "../FallbackError";

const Header = (props) => {
  const [deleteIcon, setDeleteIcon] = useState(false);
  const [deleteIconForCard, setDeleteIconForCard] = useState(false);
  const { setProducts, products } = props;
  // useEffect(() => {
  //   getProducts().then((data) => setProducts(data));
  // }, []);

  const SelectAllCards = () => {
    if (deleteIconForCard === false) setDeleteIconForCard(true);
    else setDeleteIconForCard(false);
  };

  return (
    <>
      <FallbackError>
        <Switch>
          <Route path="/">
            {" "}
            <Delete cardSelect={SelectAllCards} />
            <ItemView
              deleteicon={deleteIcon}
              setDelete={setDeleteIcon}
              deleteiconforCard={deleteIconForCard}
              products={products}
              setProducts={setProducts}
            />
          </Route>
        </Switch>
      </FallbackError>
    </>
  );
};

export default Header;
