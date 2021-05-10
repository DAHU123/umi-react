import Mymap from './amap';
import Home from './home';
import { Route, Redirect, Switch } from 'umi';

const RoutesMap = [
  {
    path: '/amap',
    render: () => <Mymap key="/amap" />,
  },
  {
    path: '/home',
    render: () => <Home key="/home" />,
  },
];

export default function IndexPage() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {RoutesMap.map(({ path, render }) => {
          return (
            <Route path={path} exact>
              {render()}
            </Route>
          );
        })}
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}
