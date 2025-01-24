import React from "react";

function WithLogging(WrappedComponent) {
  class HOC extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return HOC;
}

export default WithLogging;