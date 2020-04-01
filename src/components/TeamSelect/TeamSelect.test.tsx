import { useQuery } from '@apollo/react-hooks';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetTeams } from 'graphql/types/GetTeams';
import React from 'react';

import TeamSelect from './TeamSelect';

describe('TeamSelect', () => {
  let component: ShallowWrapper;

  describe('when the data is loading', () => {
    beforeEach(() => {
      (useQuery as jest.Mock).mockReturnValue({ loading: true });
      component = shallow(<TeamSelect />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the server returns an error', () => {
    beforeEach(() => {
      (useQuery as jest.Mock).mockReturnValue({ loading: false, data: {}, error: 'nope' });
      component = shallow(<TeamSelect />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the server returns data', () => {
    describe('and the user belongs to no teams', () => {
      beforeEach(() => {
        const teams: GetTeams['teams'] = [];
        (useQuery as jest.Mock).mockReturnValue({ loading: false, data: { teams }, error: undefined });

        component = shallow(<TeamSelect />);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('and the user belongs to a single team', () => {
      beforeEach(() => {
        const teams: GetTeams['teams'] = [{ name: 'Test Team', id: 1, __typename: 'Team' }];
        (useQuery as jest.Mock).mockReturnValue({ loading: false, data: { teams }, error: undefined });

        component = shallow(<TeamSelect />);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });
});
