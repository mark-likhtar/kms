import React from 'react';
import { Switch, Route } from 'react-router';
import { Redirect } from 'react-router-dom';

import Landing from 'src/modules/Landing';
import MainLayout from '../common/layouts/MainLayout';
import ContentLayout from '../common/layouts/ContentLayout';
import NotFound from '../common/NotFound';
import Main from '../modules/main/components/Main';
import Contact from '../modules/contact/components/Contact';
import Process from '../modules/process/components/Process';
import Routes from './constants';

export function Basic() {
  return (
    <MainLayout>
      <Switch>
        <Route path={Routes.NOT_FOUND} component={NotFound} />
        <Route path={Routes.LANDING} component={Landing} />
        <Route path="/" component={KnownRoutes} />
      </Switch>
    </MainLayout>
  );
}

const KnownRoutes = () => {
  return (
    <ContentLayout>
      <Switch>
        <Route component={() => <Redirect to={Routes.LANDING} />} />
        <Route path="/" exact component={Main} />
        <Route path={Routes.PORTFOLIO.BASE} component={Portfolio} />
        <Route path={Routes.CONTACT} component={Contact} />
        <Route path={Routes.PROCESS} component={Process} />
      </Switch>
    </ContentLayout>
  );
};

function Portfolio() {
  return (
    <Switch>
      <Route path={Routes.PORTFOLIO.ITEM} component={() => <div>Hi</div>} />
      <Route path={Routes.PORTFOLIO.BASE} component={() => <div>Hi2</div>} />
      <Route component={() => <Redirect to={Routes.NOT_FOUND} />} />
    </Switch>
  );
}
