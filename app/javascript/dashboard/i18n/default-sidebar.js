import { frontendURL } from '../helper/URLHelper';
import auth from '../api/auth';

const user = auth.getCurrentUser() || {};
const accountId = user.account_id;

export default {
  common: {
    routes: [
      'home',
      'inbox_dashboard',
      'inbox_conversation',
      'conversation_through_inbox',
      'settings_account_reports',
      'billing_deactivated',
      'profile_settings',
      'profile_settings_index',
    ],
    menuItems: {
      assignedToMe: {
        icon: 'ion-chatbox-working',
        label: 'Conversations',
        hasSubMenu: false,
        key: '',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
        toolTip: 'Conversation from all subscribed inboxes',
        toStateName: 'home',
      },
      report: {
        icon: 'ion-arrow-graph-up-right',
        label: 'Reports',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/reports`),
        toStateName: 'settings_account_reports',
      },
      settings: {
        icon: 'ion-settings',
        label: 'Settings',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings`),
        toStateName: 'settings_home',
      },
    },
  },
  settings: {
    routes: [
      'agent_list',
      'agent_new',
      'canned_list',
      'canned_new',
      'settings_inbox',
      'settings_inbox_new',
      'settings_inbox_list',
      'settings_inbox_show',
      'settings_inboxes_page_channel',
      'settings_inboxes_add_agents',
      'settings_inbox_finish',
      'billing',
      'settings_integrations',
      'settings_integrations_webhook',
    ],
    menuItems: {
      back: {
        icon: 'ion-ios-arrow-back',
        label: 'Home',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      agents: {
        icon: 'ion-person-stalker',
        label: 'Agents',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/agents/list`),
        toStateName: 'agent_list',
      },
      inboxes: {
        icon: 'ion-archive',
        label: 'Inboxes',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/inboxes/list`),
        toStateName: 'settings_inbox_list',
      },
      cannedResponses: {
        icon: 'ion-chatbox-working',
        label: 'Canned Responses',
        hasSubMenu: false,
        toState: frontendURL(
          `accounts/${accountId}/settings/canned-response/list`
        ),
        toStateName: 'canned_list',
      },
      billing: {
        icon: 'ion-card',
        label: 'Billing',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/billing`),
        toStateName: 'billing',
      },
      settings_integrations: {
        icon: 'ion-flash',
        label: 'Integrations',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/integrations`),
        toStateName: 'settings_integrations',
      },
    },
  },
};
