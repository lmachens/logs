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

const LevelFilters = ({ filters = [], onChange }) => {
  const handleChange = (name) => () => {
    const oldFilters = [...filters];
    const index = oldFilters.indexOf(name);
    if (index > -1) {
      oldFilters.splice(index, 1);
      onChange(oldFilters);
    } else {
      onChange([...oldFilters, name]);
    }
  };
  return (
    <Container>
      <ErrorButton
        onClick={handleChange("error")}
        inactive={!filters.includes("error")}
      >
        Error
      </ErrorButton>
      <WarningButton
        onClick={handleChange("warning")}
        inactive={!filters.includes("warning")}
      >
        Warning
      </WarningButton>
      <InfoButton
        onClick={handleChange("info")}
        inactive={!filters.includes("info")}
      >
        Info
      </InfoButton>
    </Container>
  );
};

LevelFilters.propTypes = {
  filters: PropTypes.array,
  onChange: PropTypes.func,
};

export default LevelFilters;
