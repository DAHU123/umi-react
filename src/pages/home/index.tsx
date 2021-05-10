import React from 'react';
import { Link } from 'umi';
import { Button } from 'antd';
import styles from '@/pages/index.less';
import Parent from '@/components/Practice/MyHooks';
import Study from '@/components/Practice/Study';
import List from '@/components/Practice/A';
import { history } from '@@/core/history';

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/amap">到地图页面</Link>
      </div>
      <div style={{ marginBottom: 10 }}>
        antd相关的组件：
        <Button type="primary" onClick={() => history.push('/amap')}>
          到地图页面
        </Button>
        <span style={{ marginLeft: 10 }}></span>
        <Button type="primary" onClick={() => history.push('/exercise')}>
          到练习页面
        </Button>
      </div>
      <h1 className={styles.title}>这里是Home首页！欢迎！</h1>
      <Parent />
      <Study />
      <List />
    </div>
  );
};

export default Home;
