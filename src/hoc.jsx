// src/hoc.jsx
import React from "react";

// Higher-Order Component that wraps a component with additional props or functionality
const SectionWrapper = (WrappedComponent, sectionId) => {
  return (props) => {
    return (
      <section id={sectionId} className="relative w-full">
        <WrappedComponent {...props} />
      </section>
    );
  };
};

export default SectionWrapper;
