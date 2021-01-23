import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Route, Switch } from "react-router-dom";
import ListCard from "./ListCard";
import ListItemCard from "./ListItemCard";
import { AnimatePresence } from "framer-motion";

type Props = {
  customListName?: string;
};

const ListCards = ({ customListName }: Props) => {
  const { lists, items } = useContext(GlobalContext);
  return (
    <Switch>
      <Route exact path="/">
        <AnimatePresence>
          {lists &&
            lists.map((list, i) => (
              <ListCard key={list._id} list={list} i={i} />
            ))}
        </AnimatePresence>
      </Route>
      <Route path="/api/:customListName">
        <AnimatePresence>
          {items &&
            items.map((item, i) => (
              <ListItemCard
                key={item._id}
                item={item}
                i={i}
                customListName={customListName}
              />
            ))}
        </AnimatePresence>
      </Route>
    </Switch>
  );
};

export default ListCards;
