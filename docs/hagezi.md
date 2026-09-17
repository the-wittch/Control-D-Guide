# Using Hagezi Lists

[Hagezi's DNS Blocklists](https://github.com/hagezi/dns-blocklists) are a popular source of third-party filter lists.

They are especially valued because they often combine broad coverage with careful filtering practices and strong maintenance.

## Why Hagezi is useful

Hagezi lists can provide:

- Useful malware and tracker coverage
- Strong blocking for suspicious domains
- A practical way to improve privacy without blindly stacking every list available

## Do not enable everything

A common mistake is enabling multiple Hagezi variants at the same time without understanding their purpose.

The better approach is:

- Pick one list level that fits your needs
- Test it on one profile first
- Watch for false positives
- Add exceptions only where necessary

## Start conservative

If you are new to DNS filtering, a good workflow is:

1. Choose one Hagezi list
2. Apply it to a single profile
3. Use it for several days
4. Watch for unexpected blockages
5. Adjust only if needed

This keeps the setup easier to maintain and easier to troubleshoot.

## Specialized folders

Hagezi also offers specialized Control D folder imports for certain categories.

These can be useful, but they should be treated carefully because some specialized rules are more likely to create false positives.

Before importing a specialized folder:

- Read the description
- Understand what it blocks
- Consider whether your region or usage pattern makes it less appropriate
- Test it on a less critical profile first

## False positives are normal

Even good lists can block something legitimate.

When that happens:

- Check the blocked query
- Determine whether the domain is truly necessary
- Add a narrow allowlist entry if appropriate
- Keep the exception specific and temporary if possible

## Bottom line

Hagezi is a strong option, but it is best used with care and moderation. A single well-chosen list is often better than stacking several lists that you do not understand.
