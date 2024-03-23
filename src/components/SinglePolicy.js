import React from 'react';

const SinglePolicy = props => {
  return (
    <div className="pb-6">
      <h2 className="py-2 text-lg">{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.address}</p>
      <p>{props.id}</p>
    </div>
  );
};
export default SinglePolicy;
