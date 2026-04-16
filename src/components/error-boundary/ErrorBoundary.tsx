import React from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Something went wrong.</h2>
            <p>Try refreshing the page.</p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
