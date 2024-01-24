import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withStoreProvider } from './withStoreProvider';

export const withAppProviders = compose(withRouter, withStoreProvider);
