/** class 类创建方式 请指出以下代码中的错误 */
import React, { Component } from 'react';
import { Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface IState {
  count: number;
}

interface IProps {}

class ClassMethod extends Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  add = () => {
    this.state = { count: this.state.count + 1 };
  };

  minus() {
    this.setState({
      count: this.state.count - 1,
    });

    this.setState({
      count: this.state.count - 1,
    });

    this.setState({
      count: this.state.count - 1,
    });

    // setTimeout(() => {
    //   this.setState((prevState) => ({
    //     count: prevState.count - 1,
    //   }));
    // }, 100);
  }

  multiply() {
    this.setState((prevState) => ({
      count: prevState.count * prevState.count,
    }));
  }

  render() {
    /** 调用 minus 之后 render 几次  */
    // console.log('>>>>>>>>>');
    return (
      <Space>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <Button onClick={this.add}>
          <PlusOutlined />
        </Button>
        <Button onClick={this.minus.bind(this)}>-</Button>
        <Button onClick={this.multiply}>X</Button>
      </Space>
    );
  }
}

export default ClassMethod;
