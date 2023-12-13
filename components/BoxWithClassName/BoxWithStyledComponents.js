import { ST } from "next/dist/shared/lib/utils";
import styled from "styled-components";

export default function BoxWithStyledComponents({ $isBlack }) {
  const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${$isBlack ? "black" : "green"};
    margin: 2rem;

    &:hover {
      background-color: red;
    }
  `;

  return <StyledBox />;
}
