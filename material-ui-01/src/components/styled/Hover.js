import styled from "@emotion/styled";

import { background, primary, secondary } from "../../constants/colors";

const Hover = styled.div`
  padding: 32px;
  background-color: ${props => props.background || background};
  color: ${props => props.primary || primary};
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${props => props.secondary || secondary};
  }
`;

export default Hover;
