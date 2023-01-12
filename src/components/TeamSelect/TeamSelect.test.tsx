import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import getTeamsQuery from '../../graphql/queries/getTeams';

import TeamSelect from './TeamSelect';

describe('TeamSelect', () => {
  describe('when the data is loading', () => {
    const mocks = [
      {
        request: { query: getTeamsQuery },
        result: {
          data: {
            teams: [],
          },
        },
      },
    ];

    beforeEach(() => {
      render(
        <MockedProvider mocks={mocks}>
          <TeamSelect />
        </MockedProvider>
      );
    });

    it('renders a progressbar', () => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('when the server returns an error', () => {
    let container: HTMLElement;
    const mocks = [
      {
        request: { query: getTeamsQuery },
        error: new Error('error'),
      },
    ];

    beforeEach(async () => {
      container = render(
        <MockedProvider mocks={mocks}>
          <TeamSelect />
        </MockedProvider>
      ).container;

      await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));
    });

    it('renders empty', () => {
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when the server returns data', () => {
    const mocks = [
      {
        request: { query: getTeamsQuery },
        result: {
          data: {
            teams: [
              {
                id: 1,
                name: 'Team Name One',
              },
            ],
          },
        },
      },
    ];

    beforeEach(async () => {
      render(
        <MockedProvider mocks={mocks}>
          <TeamSelect />
        </MockedProvider>
      );

      await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));
    });

    it('renders a button with the first team name', () => {
      expect(screen.getByRole('button', { name: 'Team Name One' })).toBeInTheDocument();
    });
  });
});
