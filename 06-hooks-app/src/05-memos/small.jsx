import React from 'react';

// eslint-disable-next-line react/prop-types
export const Small = React.memo(({ value }) => {
  console.log('Me volví a llamar :(');
  return <small>{value}</small>;
});

Small.displayName = 'Small';
