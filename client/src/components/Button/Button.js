import styled from "@emotion/styled";

const Button = styled.button`
  border: 1px solid currentColor;
  border-radius: 15px;
  background: none;
  padding: 0.3rem 0.6rem;
  filter: ${(props) => (props.inactive ? "grayscale(1)" : "none")};
`;

export default Button;
