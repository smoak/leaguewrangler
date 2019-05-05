import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-localstorage-mock';
import moment from 'moment-timezone';

configure({ adapter: new Adapter() });
moment.tz.setDefault('EST');
