import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const TEST_MUTATION = gql`
  mutation {
    testMutation
  }
`;

export default () => {
  let input;
  const [testMutation, { data }] = useMutation(TEST_MUTATION);

  useEffect(() => console.log(data), [data]);

  return (
    <div>
      {data?.testMutation ? 'true' : 'false'}
      <form
        onSubmit={e => {
          e.preventDefault();
          testMutation();
          input.value = '';
        }}
      >
        <input
          ref={node => {
            console.log(node);
            input = node;
          }}
        />
        <button type="submit">테스트</button>
      </form>
    </div>
  );
};
