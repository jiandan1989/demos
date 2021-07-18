import React, { useEffect, useRef, useState } from 'react';
// import { Spin } from 'antd';
import BpmnJS from 'bpmn-js';
// import xmlData from './test';

interface IProps {
  loading?: boolean;
  width?: number | string;
  height?: number | string;
  onLoaded?(instance: BpmnJS): void;
  toSvg?(): SVGAElement;
  toXml?(): XMLDocument;
}

const BmpnChart = React.forwardRef<any, IProps>((props, ref) => {
  const { loading, width, height, onLoaded } = props;

  const bpmnRef = useRef<HTMLDivElement | null>(null);
  const [viewer, setViewer] = useState<BpmnJS | null>(null);

  useEffect(() => {
    if (bpmnRef.current) {
      const instance = new BpmnJS({ container: bpmnRef.current });

      if (onLoaded) {
        onLoaded(instance);
      }

      // instance.importXML(xmlData);
      /** 事件绑定 */
      setViewer(instance);

      // instance.get('canvas').zoom('fit-viewport');
      console.log(instance.get('canvas'));

      async function toSvg() {
        const data = await instance.saveSVG();
        console.log(data, '>>>>>>>>>>');
      }
      toSvg();
    }
  }, []);

  return (
    // <Spin spinning={loading} style={{ width, height }}>
    <div style={{ width, height }} ref={bpmnRef} />
    // </Spin>
  );
});

BmpnChart.defaultProps = {
  loading: false,
  width: 400,
  height: 500,
  // width: '100%',
  // height: '100%',
};

export default BmpnChart;
