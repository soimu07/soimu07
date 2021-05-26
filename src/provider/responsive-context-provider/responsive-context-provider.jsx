import React from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import ResponsiveContext from "../../context/responsive.context";

const ResponsiveContextProvider = ({ children }) => {
  const isAtLeastTablet = useMediaQuery({ query: "(min-width: 900px)" });
  const isAtLeastDesktop = useMediaQuery({ query: "(min-width: 1200px)" });

  return (
    <ResponsiveContext.Provider
      value={{
        isAtLeastTablet,
        isAtLeastDesktop,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

ResponsiveContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ResponsiveContextProvider.defaultProps = {
  children: null,
};

export default ResponsiveContextProvider;
