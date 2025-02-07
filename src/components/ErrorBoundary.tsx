// src/components/ErrorBoundary.tsx
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error  };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("💥 Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-red-500 p-4">
          <h2>Something went wrong. Please try again later.</h2>
          <p>{this.state.error?.message}</p> {/* ✅ Show error message */}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// ✅ Now, when an error occurs, it will show the actual error message on the UI.
// 📌 Restart your app and see what error appears below "Something went wrong."
// example new error
// Something went wrong. Please try again later.
// No QueryClient set, use QueryClientProvider to set one
