/**
 * 错误处理
 */
import React, { Component, ReactNode } from 'react';
import { Result } from 'antd';

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorBoundaryProps {
  title?: ReactNode;
  subTitle?: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps: ErrorBoundaryProps;

  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /** 包含有错误堆栈 */
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title={this.props.title}
          subTitle={this.props.subTitle}
        />
      );
    }

    return this.props.children;
  }
}

/** 使用高阶的方式 */
export const errorCatch = (Target: any) => {
  return class Wrapper extends Component {
    render() {
      return (
        <ErrorBoundary title="加载失败">
          <Target {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};

ErrorBoundary.defaultProps = {
  title: '加载失败!',
  subTitle: '请重新尝试',
};

export default ErrorBoundary;
