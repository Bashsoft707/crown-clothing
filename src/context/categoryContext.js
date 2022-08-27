import { createContext, useState } from "react";
import { SHOP_DATA } from "../shop-data";

export const CategoryContext = createContext({
  categoryMap: [],
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState(SHOP_DATA);
  const value = { categoryMap, setCategoryMap };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
