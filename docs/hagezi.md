# Using Hagezi Lists

[Hagezi's DNS Blocklists](https://github.com/hagezi/dns-blocklists) are widely used third-party lists for blocking advertisements, trackers, malware, and other unwanted domains.

They are available in different versions with different levels of aggressiveness.

## Choose one level

Do not enable every Hagezi list at the same time.

Choose the list that matches your needs and tolerance for troubleshooting.

In general:

- A normal or moderate list is a good starting point.
- A stronger list provides more coverage but may cause more false positives.
- Aggressive lists require more maintenance.
- Specialized lists should be enabled only when you understand their purpose.

The exact names and availability of lists may change. Check the Hagezi documentation for current descriptions.

## Start conservatively

If you are new to DNS filtering:

1. Choose one Hagezi list.
2. Enable it for one profile.
3. Use the profile normally for several days.
4. Check the query log when something breaks.
5. Add exceptions only when necessary.

Do not combine several lists just because they are available.

## Hagezi Control D folders

Hagezi also provides folders intended for import into Control D custom rules.

For example, the project may provide folders for:

- Spam-related top-level domains
- Suspicious internationalized domain names
- Other specialized categories

Review the current files and instructions in the [Hagezi repository](https://github.com/hagezi/dns-blocklists/tree/main/controld) before importing anything.

## Use specialized folders carefully

Specialized folders can be useful, but they may have a higher risk of false positives.

Before importing one:

- Read its description.
- Understand what it blocks.
- Consider whether it applies to your region.
- Keep a record of where it came from.
- Test it on a less important profile first.

## Hagezi is not a replacement for troubleshooting

Even a well-maintained list can block something that you need.

When a website or application fails:

1. Check Control D's query log.
2. Identify the blocked domain.
3. Determine whether it is necessary.
4. Add a narrow allowlist entry if appropriate.
5. Report a false positive to the list maintainer when applicable.
