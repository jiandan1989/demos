import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { DualAxes } from "@ant-design/charts";

const baseYear = 1999;
const years = Array(10)
  .fill(1)
  .map((_, index) => baseYear + index);
const aData = years.map((item) => item * 1.3);
const bData = years.map((item) => Number((item * 1.2).toFixed(2)));
const cData = years.map((item) =>
  Number(Math.random() * Math.cbrt(Math.cbrt(item))).toFixed(2)
);

const oldData = {
  series: [
    {
      name: "A",
      data: aData
    },
    {
      name: "B",
      data: bData
    },
    {
      name: "C",
      data: cData
    }
  ],
  xAixs: years
};

function transformData(data) {
  const list = data.series.reduce((prev, next) => {
    const prevData = { ...prev };
    const valueType = next.name === "C" ? "count" : "value";
    prevData[next.name] = data.xAixs.map((year, index) => {
      return {
        year,
        type: next.name,
        [valueType]: next.data[index]
      };
    });
    return prevData;
  }, {});

  const left = list.A.concat(list.B);
  const right = list.C;

  return { left, right };
}

function queryListData() {
  return new Promise((resolve) => setTimeout(resolve, 2000, oldData));
}

const texts = {
  A: "孙",
  B: "难",
  C: "难"
};

const colors = {
  A: "purple",
  B: "yellow",
  C: "green"
};

const DoubleYChart: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ left: [], right: [] });

  useEffect(() => {
    const queryData = async () => {
      try {
        const response = await queryListData();
        const result = transformData(response);
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    queryData();
  }, []);

  const { left, right } = data;

  var config = {
    data: [left, right],
    xField: "year",
    yField: ["value", "count"],
    tooltip: {
      formatter: (datum) => {
        const name = texts[datum.type];
        const value =
          datum.type === "C" ? `${datum.count * 100}%` : `${datum.value}块`;
        return { name, value };
      }
    },
    legend: {
      marker: {
        // circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen
        symbol: "diamond"
        // symbol: (x, y, z) => {
        //   return x;
        // }
      }
    },
    // xAxis: {
    //   year: {
    //     min: baseYear
    //   }
    // },
    yAxis: {
      value: {
        min: 0,
        title: {
          text: "你有多少钱"
        }
      },
      count: {
        min: 0,
        title: {
          text: "老子很穷"
        },
        label: {
          formatter(v) {
            return Number((v * 100).toFixed(2));
          }
        }
      }
    },
    meta: {
      type: {
        formatter(x) {
          return texts[x];
        }
      }
    },
    // slider: {
    //   start: 0,
    //   end: 1
    // },
    geometryOptions: [
      {
        geometry: "line",
        smooth: false,
        seriesField: "type",
        color: ({ type }) => {
          return colors[type];
        }
      },
      {
        geometry: "line",
        seriesField: "type",
        color: colors.C
      }
    ]
  };

  return loading ? <Spin spinning /> : <DualAxes {...config} />;
};

export default DoubleYChart;
