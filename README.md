# Sending a Welcome Message to a New User

> _Updated July 2019: This are specific instructions for use in Transposit. For other methods, check the Slack API website._

Sample Slack app that presents a Terms of Service (or any other message) when a new user joins a team.

The user can accept the Terms of Service using message buttons. If a user has been presented with the Terms before and they haven't accepted, a background job can send them a reminder after a specific period of time. Eventually you can use the [SCIM API](https://api.slack.com/scim) to disable the user's account.

![term-of-service](https://user-images.githubusercontent.com/700173/27111030-42359a02-5062-11e7-9750-385ae9ca084e.png)

## Setup

#### Create a Slack app

1. [Create an app](https://api.slack.com/apps)
2. Go to **Bot Users** and click "Add a Bot User" to create a, app bot. Save the change.
3. Enable Interactive components (See _Enable Interactive Components_ below)
4. Navigate to the **OAuth & Permissions** page and add the following scopes:
   - `chat:write:bot`
5. Click 'Save Changes' and install the app (You should get an OAuth access token after the installation)
6. Enable the events (See _Enable the Events API_ below. It doesn't let you the Request URL until you run the code!)
7. In your Slack workspace, invite the bot to #general, where the new user will join.

#### Fork in Transposit

1. [Fork this app on Transposit](https://console.transposit.com/t/transposit-sample/slack_terms_of_service_sample?readme=true)
2. Authenticate your API token with Slack

#### Enable the Events API

1. Go back to the app settings and click on Events Subscriptions
2. Set the Request URL to the generated webhook url for `newuser` in Transposit under Deploy
3. On the same page, subscribe to the `team_join` team events

#### Enable Interactive Messages

1. In the app settings, click on Interactive Messages
2. Set the Request URL to the generated webhook url for `acceptpush` in Transposit under Deploy

Note: Database functions require a user provided database. Sample code is provided.

### Transposit Functions

`acceptpush`: The function that is called when the accept button is pressed in Slack.

`newuser`: The function that is called when a new user joins a workspace.

`post_tos`: The Slack API call to post the welcome message.

`reminder`: A scheduled task to remind users who have not accepted the TOS to accept them.
