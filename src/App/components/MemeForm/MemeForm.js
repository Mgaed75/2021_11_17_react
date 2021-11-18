import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialState = {};

function MemeForm(props) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // didMount + didUpdate
    return () => {
      // will Unmount
    };
  }, [state]);

  return <div data-testId="MemeForm">memeForm</div>;
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
