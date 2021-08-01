import React from 'react';

class Pure extends React.PureComponent {
  render() {
    console.log('>>>>>>>>.pure');
    return <div>1</div>;
  }
}

export default Pure;
