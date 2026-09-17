# Troubleshooting

DNS filtering usually works well, but websites and apps occasionally break. The most important skill is learning how to identify the exact blocked domain and fix the issue without removing your protections entirely.

## A website does not load

When a website fails, check the following:

1. Confirm the problem only occurs with Control D enabled
2. Open the query log
3. Look for blocked domains related to the page
4. Identify the specific request causing the issue
5. Add a minimal allowlist exception if needed

This is much safer than disabling filters broadly.

## An app cannot connect

Applications often connect to domains that are not obvious from the app name alone. Some common examples include:

- Authentication services
- CDN networks
- Analytics endpoints
- Push notification services
- Update servers
- API hosts

If a single app breaks, do not guess. Check the query log and find the actual blocked domain.

## A page loads partially

If a page loads but images, login buttons, or other features fail, the issue is often one missing dependency rather than a total block.

Look for:

- Image hosts
- Video delivery domains
- Tracking scripts
- Embedded API hosts

Again, keep the exception narrow and precise.

## Clear cached results when needed

After making changes to rules, DNS results may remain cached for a little while.

Try:

- Reloading the website
- Closing and reopening the app
- Restarting the browser
- Flushing local DNS cache if needed
- Restarting the device or router

## Temporary disable as a diagnostic step

If you cannot identify the blocked domain, temporarily disable a profile for a moment to confirm it is the cause.

This should be a troubleshooting step, not a permanent workaround.

## Keep a log of exceptions

Every allowlist or custom rule should ideally have a reason behind it.

Record:

- The domain
- The date it was added
- The website or app it fixed
- Why it was necessary

This greatly reduces later confusion.
