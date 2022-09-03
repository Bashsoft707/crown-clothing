import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory.styles";

export const DirectoryItem = ({ category, title }) => {
  const { imageUrl } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`/shop/${title.toLowerCase()}`);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
