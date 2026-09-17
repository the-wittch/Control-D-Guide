# Custom Rules

Custom rules let you manually allow, block, or redirect domains.

They are useful when a filter does not behave exactly as you want.

## Create an allowlist

An allowlist contains domains that should be allowed.

Use it for a domain that is incorrectly blocked by a filter.

A good allowlist entry should be as specific as possible. Avoid allowing an entire unrelated domain when only one subdomain is required.

Before adding an exception:

1. Confirm that the domain is actually being blocked.
2. Check the Control D query log.
3. Confirm that the blocked request is responsible for the problem.
4. Add the smallest exception that fixes the issue.
5. Test the website or application again.

## Create a denylist

A denylist contains domains that should always be blocked.

You might use one for:

- A website you do not want to access
- A tracker that is not covered by your filters
- A domain used by an unwanted application
- A personal content restriction

## Use folders

Folders help organize custom rules.

Useful folders include:

- `Allowlist`
- `Denylist`
- `Work`
- `Kids`
- `Temporary`
- `Testing`

Keeping rules organized makes future maintenance easier.

## Wildcards

Wildcards can apply a rule to multiple subdomains.

For example:

```text
*.example.com
```

This may apply to subdomains such as:

```text
www.example.com
api.example.com
cdn.example.com
```

Use wildcards carefully. A broad wildcard can affect more services than expected.

## Do not use exceptions as a first response

If something breaks, avoid immediately allowing every domain associated with the website.

Instead:

- Inspect the query log.
- Identify the blocked request.
- Allow only the necessary domain.
- Re-test the affected service.

This keeps the protection provided by your other filters.
