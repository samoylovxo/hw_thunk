import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { actions } from "../redux/slices/avatars";

const StyledAvatar = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledImages = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const StyledPrevImageList = styled(StyledImages)`
  overflow-x: auto;
`;

const StyledImage = styled.img`
  max-width: 100%;
  display: block;
  object-fit: cover;
`;

const StyledMainImage = styled(StyledImage)`
  width: 200px;
  height: 200px;
`;

const StyledPrevImage = styled(StyledImage)`
  width: 100px;
  height: 100px;

  cursor: pointer;
`;

const StyledPlaceholder = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  padding: 8px 16px;

  border-bottom: 1px solid #141452;
`;

const Avatar = () => {
  const dispatch = useDispatch();

  const { loadedAvatarLinks } = useSelector((state) => state.avatars);

  const [loadedImage, setLoadedImage] = useState("");

  const onAvatarChangeClick = (image) => setLoadedImage(image);

  const onAvatarUpload = (event) => {
    const { target } = event;

    const file = target.files && target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
      if (!event.target && !typeof event.target.result === "string") return;

      setLoadedImage(event.target.result);
      dispatch(actions.changeAvatar(event.target.result));
    });

    if (!file) return;

    reader.readAsDataURL(file);
  };

  return (
    <StyledAvatar>
      <StyledImages>
        {loadedImage ? (
          <StyledMainImage src={loadedImage} alt="avatar" />
        ) : (
          <StyledPlaceholder>
            Загрузите свой первый аватар! :)
          </StyledPlaceholder>
        )}
        <StyledPrevImageList>
          {loadedAvatarLinks.map((image) => (
            <StyledPrevImage
              src={image}
              onClick={() => onAvatarChangeClick(image)}
            />
          ))}
        </StyledPrevImageList>
      </StyledImages>

      <StyledInput
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={onAvatarUpload}
      />
    </StyledAvatar>
  );
};

export { Avatar };
