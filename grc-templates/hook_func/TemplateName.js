import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialState = {};

function TemplateName(props) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // didMount + didUpdate
    return () => {
      // will Unmount
    };
  }, [state]);

  return <div data-testId="TemplateName">templateName</div>;
}

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
