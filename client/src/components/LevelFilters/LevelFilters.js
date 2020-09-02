import React from "react";
import PropTypes from "prop-types";
import ErrorButton from "../ErrorButton";
import WarningButton from "../WarningButton";
import InfoButton from "../InfoButton";
import styled from "@emotion/styled";

const Container = styled.div`
  button:not(:last-child) {
    margin-right: 1rem;
  }
`;

const LevelFilters = ({ error, warning, info }) => {
  return (
    <Container>
      <ErrorButton disabled={!error}>Error</ErrorButton>
      <WarningButton disabled={!warning}>Warning</WarningButton>
      <InfoButton disabled={!info}>Info</InfoButton>
    </Container>
  );
};

LevelFilters.propTypes = {
  error: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
};

export default LevelFilters;
