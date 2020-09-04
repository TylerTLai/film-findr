import React from 'react';

function Page404({ location }) {
  return (
    <div>
      <h2>
        no match found for <code>{location.pathname}</code>
      </h2>
    </div>
  );
}

export default Page404;
