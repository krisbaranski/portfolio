import React from 'react';

const SingleImpressum = props => {
  return (
    <div className="py-4">
      <h2 className="text-lg pb-4">{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.id}</p>
    </div>
  );
};
export default SingleImpressum;
