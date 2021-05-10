import React, { useEffect, useState } from 'react';
import { Amap, useAmapComponent } from '@amap/amap-react';
import { Spin } from 'antd';
import styles from './index.less';

import { config as AmapReactConfig } from '@amap/amap-react';

AmapReactConfig.version = '2.0'; // 默认2.0，这里可以不修改
AmapReactConfig.key = '5a46bf04d474a9eef15c64ebb7f5c77c'; // 在高德开放平台生成的key
AmapReactConfig.plugins = ['AMap.ToolBar', 'AMap.MoveAnimation'];

function loadData() {
  return new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.onload = () => {
      resolve(window.heatmapData);
    };
    tag.src = 'https://a.amap.com/jsapi_demos/static/resource/heatmapData.js';
    document.head.appendChild(tag);
  });
}

function MyHeatmap(props) {
  const heatmap = useAmapComponent(
    (AMap, map) => {
      // 初始化热力图
      const heatmap = new AMap.HeatMap(map, {
        opacity: [0, 0.8],
      });
      return heatmap;
    },
    ['AMap.HeatMap'], // 自动加载AMap.HeatMap插件
  );
  const { data, max } = props;

  useEffect(() => {
    if (!heatmap) return;
    heatmap.setDataSet({
      data,
      max,
    });
  }, [heatmap, data, max]);

  return null; // 只需要图层，不需要输出 dom
}

const Heatmap = () => {
  const [center] = useState([116.418261, 39.921984]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadData().then((data: any) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles['wrap-amap']}>
      <div className="map-container">
        <Spin tip={'Loading...'} spinning={loading}>
          <Amap
            onComplete={(map) => {
              (window as any).__map__ = map;
            }}
            zoom={11}
            center={center}
          >
            <MyHeatmap data={data} max={100} />
          </Amap>
        </Spin>
      </div>
    </div>
  );
};

export default Heatmap;
