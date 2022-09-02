import { DirectoryItem } from "./directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";
import { useSelector } from "react-redux/es/exports";
import {
  selectCategory,
  selectIsCategoryLoading,
} from "../../store/category/category-select";
import { Spinner } from "../spinner/spinner.component";

export const Directory = () => {
  const categories = useSelector(selectCategory);
  const isLoading = useSelector(selectIsCategoryLoading);

  return (
    <DirectoryContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        categories.map((category, index) => (
          <DirectoryItem
            key={index}
            title={category.title}
            category={category.items[0]}
          />
        ))
      )}
    </DirectoryContainer>
  );
};
