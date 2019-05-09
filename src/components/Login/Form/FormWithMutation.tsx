import React, { FC } from 'react';
import { Omit } from '@material-ui/core';

import Form, { FormProps } from './Form';
import { Mutation, MutationOpts } from 'react-apollo';
import { CreateUserToken, CreateUserTokenVariables } from '../../../graphql/types/CreateUserToken';
import createUserToken from '../../../graphql/mutations/createUserToken';
import { setUserToken } from '../../../support/auth';

export type FormWithMutationProps = Omit<FormProps, 'onSignInClicked' | 'hasError'>;

export class SignInMutation extends Mutation<CreateUserToken, CreateUserTokenVariables> {}

const onSignInCompleted: MutationOpts<CreateUserToken, CreateUserTokenVariables>['onCompleted'] = ({
  createUserToken: { token },
}) => {
  setUserToken(token);
  window.location.reload();
};

const FormWithMutation: FC<FormWithMutationProps> = props => {
  return (
    <SignInMutation mutation={createUserToken} onCompleted={onSignInCompleted}>
      {(mutate, { error }) => (
        <Form
          {...props}
          hasError={!!error}
          onSignInClicked={(username, password) => {
            mutate({
              variables: { username, password },
            });
          }}
        />
      )}
    </SignInMutation>
  );
};

export default FormWithMutation;
