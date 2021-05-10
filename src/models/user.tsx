import type { Reducer, Effect } from 'umi';

function asyncInit() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
}

type StateType = {
  status?: 'ok' | 'error';
  count?: number;
};

type UserModelType = {
  namespace: string;
  state: StateType;
  effects: {
    add: Effect;
    minus: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
};

const Modal: UserModelType = {
  namespace: 'user', // 可省略
  state: {
    status: 'ok',
    count: 0,
  },
  effects: {
    *add(action, { call, put }) {
      let payload = yield call(asyncInit);
      yield put({ type: 'setCount', payload });
    },
    *minus(action, { call, put }) {
      let payload = yield call(asyncInit);
      yield put({ type: 'setCount', payload });
    },
  },
  reducers: {
    setCount(state: StateType) {
      return { ...state };
    },
  },
};

export default Modal;
