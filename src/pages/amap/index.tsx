import React from 'react';
import Heatmap from '@/components/Heatmap';
import styles from './index.less';
import { Button } from 'antd';
import { history } from 'umi';

const Mymap = () => {
  return (
    <div className={styles['wrap-mymap']}>
      <div className="header">
        <Button type="primary" onClick={() => history.push('/home')}>
          返回首页
        </Button>
        <span className={'ml-10 mr-10'}>Amap官方访问地址：</span>
        <a href="https://jimnox.gitee.io/amap-react/" target="_blank">
          Amap-React
        </a>
        <span className={'ml-10 mr-10'}>热力图展示</span>
      </div>
      <Heatmap />
    </div>
  );
};

export default Mymap;
