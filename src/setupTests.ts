import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-localstorage-mock';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));
