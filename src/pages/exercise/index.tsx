import React from 'react';
import { Button } from 'antd';
import { history } from '@@/core/history';

const Exercise = () => {
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <Button type="primary" onClick={() => history.push('/home')}>
          返回首页
        </Button>
      </div>
      Exercise
    </>
  );
};

export default Exercise;
