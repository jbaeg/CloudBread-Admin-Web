import React from 'react';

import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from 'layouts/App';
import InspectorLayout from 'layouts/InspectorLayout';
import HomePage from 'containers/HomePage';
import ContentPage from 'containers/ContentPage';
import ResourceFindPage from 'containers/ResourceFindPage';
import ResourceEditPage from 'containers/ResourceEditPage';
import AnalystPage from 'containers/AnalystPage';

import AuthRoute from 'routes/AuthRoute';

const routeContainer = (
  <Route component={App}>
    <Route path="/" component={InspectorLayout}>
      <IndexRoute component={HomePage} />
      <Route path="finder/:resourceId" component={ResourceFindPage} />
      <Route path="editor/:resourceId" component={ResourceEditPage} />
      <Route path="editor/:resourceId/:identifier" component={ResourceEditPage} />
      <Route path="page/:pageId" component={ContentPage} />
      <Route path="analyst" component={AnalystPage} />
    </Route>
    {AuthRoute}
  </Route>
);

export default routeContainer;
