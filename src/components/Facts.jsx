import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { actions } from "../redux/slices/facts";

const StyledFacts = styled.div`
  display: grid;
  gap: 24px;
`;

const StyledLabel = styled.label`
  display: grid;
  gap: 2px;

  font-size: 12px;
`;

const StyledInput = styled.input`
  padding: 8px 16px;

  border: 1px solid #ededed;
  border-radius: 4px;

  transition: border-color 0.4s;
  outline: none;

  &:hover {
    border-color: #b0a7d6;
  }
`;

const StyledFactList = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledFact = styled.div`
  padding: 4px;

  border-bottom: 1px solid #b0a7d6;

  font-size: 16px;
`;

const Facts = () => {
  const dispatch = useDispatch();

  const { factList, viewedFactList } = useSelector((state) => state.facts);

  const facts = viewedFactList.length ? viewedFactList : factList;

  const [factsCountValue, setFactsCountValue] = useState(facts.length);

  const onFactsCountChange = (event) => {
    const { value, max, min } = event.target;

    let tempValue = Number(value);
    const maxNumber = Number(max);
    const minNumber = Number(min);

    if (tempValue < minNumber) tempValue = minNumber;
    if (tempValue > maxNumber) tempValue = maxNumber;

    setFactsCountValue(value);
    dispatch(actions.changeFactsCount(tempValue));
  };

  return (
    <StyledFacts>
      <StyledLabel>
        Количество отображаемых фактов о StarWars
        <StyledInput
          type="number"
          min={1}
          max={5}
          value={factsCountValue}
          onChange={onFactsCountChange}
        />
      </StyledLabel>

      <StyledFactList>
        {facts.map((fact) => {
          const { id, name } = fact;

          return (
            <StyledFact key={id}>
              {id}. {name}
            </StyledFact>
          );
        })}
      </StyledFactList>
    </StyledFacts>
  );
};

export { Facts };
