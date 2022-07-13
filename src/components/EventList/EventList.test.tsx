import { useQuery } from '@apollo/react-hooks';
import { ShallowWrapper, shallow } from 'enzyme';

import { GetCurrentUserEvents } from '../../graphql/types/GetCurrentUserEvents';
import { RsvpStatus } from '../../graphql/types/globalTypes';

import EventList from './EventList';

describe('EventList', () => {
  let component: ShallowWrapper;

  describe('when the data is loading', () => {
    beforeEach(() => {
      (useQuery as jest.Mock).mockReturnValue({ loading: true });

      component = shallow(<EventList />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the server returns an error', () => {
    beforeEach(() => {
      (useQuery as jest.Mock).mockReturnValue({ loading: false, error: 'nope' });

      component = shallow(<EventList />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the server returns no data', () => {
    beforeEach(() => {
      (useQuery as jest.Mock).mockReturnValue({ loading: false, error: undefined, data: null });

      component = shallow(<EventList />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the server returns data', () => {
    describe('and the user has no events', () => {
      beforeEach(() => {
        const data: GetCurrentUserEvents = {
          currentUser: {
            events: [],
            __typename: 'User',
          },
        };
        (useQuery as jest.Mock).mockReturnValue({ loading: false, error: undefined, data });

        component = shallow(<EventList />);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('and the user has events', () => {
      beforeEach(() => {
        const data: GetCurrentUserEvents = {
          currentUser: {
            events: [
              {
                __typename: 'Event',
                endTimestamp: 1657691037616,
                startTimestamp: 1657691025566,
                id: 1,
                location: null,
                team: {
                  __typename: 'Team',
                  id: 1,
                  photoThumbnailUrl: 'url',
                  shortName: 'team',
                },
                title: 'test',
                viewerRsvpStatus: RsvpStatus.NONE,
              },
            ],
            __typename: 'User',
          },
        };
        (useQuery as jest.Mock).mockReturnValue({ loading: false, error: undefined, data });

        component = shallow(<EventList />);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('when the event has no start time', () => {
      beforeEach(() => {
        const data: GetCurrentUserEvents = {
          currentUser: {
            events: [
              {
                __typename: 'Event',
                endTimestamp: 1657691037616,
                startTimestamp: null,
                id: 1,
                location: {
                  __typename: 'Location',
                  name: 'test location',
                  address: '123 test',
                  googleMapsUrl: 'url',
                },
                team: {
                  __typename: 'Team',
                  id: 1,
                  photoThumbnailUrl: 'url',
                  shortName: 'team',
                },
                title: 'test',
                viewerRsvpStatus: RsvpStatus.NONE,
              },
            ],
            __typename: 'User',
          },
        };
        (useQuery as jest.Mock).mockReturnValue({ loading: false, error: undefined, data });

        component = shallow(<EventList />);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('when the event has a location', () => {
      beforeEach(() => {
        const data: GetCurrentUserEvents = {
          currentUser: {
            events: [
              {
                __typename: 'Event',
                endTimestamp: 1657691037616,
                startTimestamp: 1657691025566,
                id: 1,
                location: {
                  __typename: 'Location',
                  name: 'test location',
                  address: '123 test',
                  googleMapsUrl: 'url',
                },
                team: {
                  __typename: 'Team',
                  id: 1,
                  photoThumbnailUrl: 'url',
                  shortName: 'team',
                },
                title: 'test',
                viewerRsvpStatus: RsvpStatus.NONE,
              },
            ],
            __typename: 'User',
          },
        };
        (useQuery as jest.Mock).mockReturnValue({ loading: false, error: undefined, data });

        component = shallow(<EventList />);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
