# Custom Rules

Custom rules let you manually allow, block, or redirect domains.

This is where you can fine-tune a profile without turning it into a giant exception list that is impossible to maintain.

## Allowlist

An allowlist contains domains you want to permit even if a filter would otherwise block them.

Use allowlist entries when:

- A website is being blocked incorrectly
- An app needs a specific API or CDN domain
- A trusted service is being caught by a broad list

Important: keep the allowlist as narrow as possible.

A good allowlist entry is:

- Specific
- Necessary
- Well-documented
- Easy to review later

## Denylist

A denylist contains domains you want to block regardless of other filters.

This is helpful when:

- You know a specific domain is unwanted
- A website is not covered by your active filters
- You want a personal rule for a domain you do not trust

## Use folders

Folders help keep rules organized.

Useful folder names include:

- Allowlist
- Denylist
- Work
- Kids
- Temporary
- Exceptions

This helps a lot when you later need to audit or clean up rules.

## Wildcards

Wildcards can apply a rule to multiple subdomains.

Example:

```text
*.example.com
```

This may affect several subdomains, including:

```text
www.example.com
api.example.com
cdn.example.com
```

Use them carefully. Broad wildcards can affect more than you intended.

## Best practice: narrow exceptions

If a website is broken, do not immediately allow a whole domain family.

Instead:

1. Check the Control D query log
2. Identify the exact blocked domain
3. Allow only the necessary domain
4. Re-test the site or app
5. Keep the exception documented

This is much safer than allowing broad categories or random domains.
