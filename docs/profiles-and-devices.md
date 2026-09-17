# Profiles and Devices

## What is a profile?

A profile contains the rules and settings that Control D applies to a device.

A profile can include:

- Filters
- Services
- Custom rules
- Security settings
- Content restrictions
- DNS behavior settings

Think of a profile as a policy.

## What is a device?

A device is the endpoint that uses a profile.

For example, you might create:

| Device | Profile |
|---|---|
| Personal computer | Balanced |
| Personal phone | Balanced |
| Smart TV | Basic |
| Child's tablet | Kids |
| Router | Basic |

The names are only for your organization. Choose names that make it obvious what each endpoint represents.

## Start with a simple arrangement

A beginner usually needs only one or two profiles.

### Basic

Use this for devices where compatibility is more important than stronger filtering.

Examples:

- Smart TVs
- Game consoles
- Shared household devices
- Devices that frequently have connectivity problems

### Balanced

Use this as a general-purpose profile.

It should provide:

- Malware protection
- Phishing protection
- Advertisement and tracker blocking
- A reasonable level of privacy protection
- Minimal compatibility problems

### Hardened

Use this only after you are comfortable troubleshooting.

A hardened profile may block more trackers, newly registered domains, telemetry, and other questionable traffic. It also has a greater chance of causing false positives.

## Do not make profiles unnecessarily complicated

Creating a separate profile for every device is not always useful.

Create a new profile when the device genuinely needs different rules. For example:

- A child's device needs content restrictions.
- A smart TV needs fewer filters.
- A work device needs a more relaxed configuration.
- A personal browser can use stronger protection.

Otherwise, reuse the same profile.
