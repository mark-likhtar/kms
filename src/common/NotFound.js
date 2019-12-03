import React from 'react';

import ContentLayout from './layouts/ContentLayout';

const NotFound = () => {
  return (
    <ContentLayout isHeader={false}>
      <div className="notFound">
        <span className="errorNumber">404</span>
        <div className="errorText-group">
          <span className="errorText-main">Страница не найдена</span>
          <span className="errorText-description">Проверьте введенный вами адрес</span>
        </div>
      </div>
    </ContentLayout>
  );
};

export default NotFound;
