import React, { useEffect } from 'react';
import { Button } from 'antd';
import { history } from '@@/core/history';
import { List } from '@/components/utils';

const Exercise = () => {

  useEffect(() => {
    // @ts-ignore
    let list = new List()
    for(let i = 0; i < 5; i++) {
      list.append(i)
    }
    console.log(list.search(1));

  }, [])

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
