# Troubleshooting

DNS filtering can occasionally interfere with websites and applications. Most problems can be resolved by identifying the blocked request.

## A website does not load

1. Confirm that the problem occurs only when Control D is enabled.
2. Open the Control D query log.
3. Look for blocked requests made when loading the website.
4. Identify the domain associated with the failure.
5. Temporarily allow the suspected domain.
6. Test the website again.

If allowing the domain fixes the problem, decide whether the domain is necessary and trustworthy before keeping the exception.

## An application cannot connect

Applications may use domains that are not obvious from the application name.

Check for:

- Authentication domains
- API endpoints
- Content delivery networks
- Analytics or telemetry domains
- Push notification services
- Certificate or update services

Allow only the domains required for the application to work.

## A website partially loads

If the page loads but images, videos, login forms, or other features do not work:

- Check blocked requests while using the affected feature.
- Look for content delivery or API domains.
- Test the feature after adding a narrow exception.
- Avoid allowing the entire domain unless necessary.

## Clear cached DNS information

After changing a rule, the previous DNS result may still be cached.

Try:

- Reloading the website.
- Closing and reopening the application.
- Restarting the browser.
- Flushing the local DNS cache.
- Restarting the device or network connection.

## Temporarily disable a profile

If you cannot identify the problem, temporarily disable the relevant filters or profile to confirm whether Control D is involved.

Re-enable the protection after testing. Disabling everything should be a diagnostic step, not the permanent solution.

## Avoid random exceptions

A large collection of unexplained allowlist entries becomes difficult to trust and maintain.

For every exception, record:

- The domain
- The date
- The affected application or website
- Why it was necessary
