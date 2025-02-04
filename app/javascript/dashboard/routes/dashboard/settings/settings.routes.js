import { frontendURL } from '../../../helper/URLHelper';
import agent from './agents/agent.routes';
import Auth from '../../../api/auth';
import billing from './billing/billing.routes';
import canned from './canned/canned.routes';
import inbox from './inbox/inbox.routes';
import profile from './profile/profile.routes';
import reports from './reports/reports.routes';
import integrations from './integrations/integrations.routes';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/settings'),
      name: 'settings_home',
      roles: ['administrator', 'agent'],
      redirect: () => {
        if (Auth.isAdmin()) {
          return frontendURL('accounts/:accountId/settings/agents');
        }
        return frontendURL('accounts/:accountId/settings/canned-response');
      },
    },
    ...agent.routes,
    ...billing.routes,
    ...canned.routes,
    ...inbox.routes,
    ...profile.routes,
    ...reports.routes,
    ...integrations.routes,
  ],
};
