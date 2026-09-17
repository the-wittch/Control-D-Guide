# Using Hagezi Lists

[Hagezi's DNS Blocklists](https://github.com/hagezi/dns-blocklists) are a strong choice for many users because they are practical, active, and useful without forcing you to stack dozens of unrelated lists.

## My approach

I do not use Hagezi in an all-or-nothing way.

Instead, I use it like this:

- Pick one Hagezi list level
- Test it on one profile
- Watch for false positives
- Add only small, targeted exceptions
- Keep the configuration stable and understandable

This is usually a better approach than enabling every Hagezi variant at once.

## Good beginner rule

If you are new to DNS filtering, start with one Hagezi list that matches your tolerance for risk and maintenance.

If you are more aggressive, you can later explore more specialized lists. But the first step should still be simple and conservative.

## Specialized folders

Hagezi also offers specialized Control D folders. These may be useful, but they can have a higher chance of creating false positives or blocking something legitimate.

Use them with care and test them on a less important profile before applying them everywhere.

## The real principle

Hagezi is not a replacement for thoughtful configuration.

It is a useful filter source, not a license to overblock everything.

The best result is usually:

- One good list
- One stable profile
- A few intentional exceptions
- A calm maintenance routine
