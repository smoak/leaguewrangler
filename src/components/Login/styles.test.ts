import { Theme, createMuiTheme } from '@material-ui/core/styles';

import styles from './styles';

describe('styles', () => {
  let theme: Theme;

  beforeEach(() => {
    theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
    });
  });

  it('generates styles correctly', () => {
    expect(styles(theme)).toMatchSnapshot();
  });
});
