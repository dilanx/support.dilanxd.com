---
pagination_prev: developer/index
pagination_next: developer/get-access-token
---

# Create an Application

As of right now, there is no way to self register an application. You'll need to contact me to get started by sending an email to [support@dilanxd.com](mailto:support@dilanxd.com?subject=App%20Client%20Request).

Once your application is created, you'll be given a **public client ID**. This ID will be locked to the domain(s) you specify when you request the application. The server will only redirect to approved domains with any authorization codes or tokens. You'll also need to specify scope for your application, which must be approved and are also locked to specified domains.

## Scope options

These are scopes that are publicly available upon request for your application:

- **user**: Read profile data for a given user.
- **plan-nu**: Read [Paper](/paper/develop) plan and schedule data for a given user (read-only).
  - **plan-nu:write**: Write [Paper](/paper/develop) plan and schedule data for a given user (write-only, used alongside base level plan-nu scope to have read and write access).

## Next steps

Once you have a registered client, you can begin using the OAuth 2.0 flow to get an access token for a user, which can then be used to perform a restricted set of actions as the user with their approval. These tokens are commonly short-lived but can be refreshed with reauthentication.

**[Get an access token](./get-access-token.mdx)**
