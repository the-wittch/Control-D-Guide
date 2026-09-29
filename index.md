---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow"><span class="eyebrow-dot"></span> CONTROL D · COMMUNITY GUIDE</p>
    <h1>A practical Control D<br><span>setup guide.</span></h1>
    <p class="hero-lede">Notes from running Control D day to day: how I set it up, pick filters, use Hagezi without overdoing it, and fix things when a site breaks.</p>
    <div class="guide-actions">
      <a class="button button-primary" href="{{ '/docs/getting-started.html' | relative_url }}">Start here <span>→</span></a>
      <a class="button button-quiet" href="{{ '/docs/cheat-sheet.html' | relative_url }}">Cheat sheet</a>
    </div>
    <p class="hero-note"><span>✓</span> Keep it simple &nbsp;·&nbsp; Test before you stack filters &nbsp;·&nbsp; Prefer small exceptions</p>
  </div>
  <div class="hero-art">
    <div class="art-glow"></div>
    <img src="{{ '/assets/control-d-guide-banner.svg' | relative_url }}" alt="Control D Guide illustration">
  </div>
</section>

<section class="trust-row">
  <div><span class="trust-icon">◒</span><strong>Balanced</strong><span>not “block everything”</span></div>
  <div><span class="trust-icon">✦</span><strong>Hands-on</strong><span>what I’ve actually used</span></div>
  <div><span class="trust-icon">↗</span><strong>Maintainable</strong><span>easy to debug later</span></div>
</section>

<section class="intro-section">
  <p class="eyebrow">HOW I THINK ABOUT IT</p>
  <h2>Protection that stays out of the way.</h2>
  <p class="section-lede">I am not trying to block the most domains possible. I want better privacy and fewer ads or threats, while the sites and apps I use every day still work.</p>
</section>

<section class="feature-grid">
  <a class="feature-card feature-card-accent" href="{{ '/docs/starter-profiles.html' | relative_url }}">
    <span class="card-icon">◎</span><span class="card-number">01</span>
    <h3>Start with a sane profile</h3>
    <p>Basic or Balanced first. Hardened can wait until you know what you are trading away.</p>
    <span class="card-link">Profiles <b>→</b></span>
  </a>
  <a class="feature-card" href="{{ '/docs/filters.html' | relative_url }}">
    <span class="card-icon">◈</span><span class="card-number">02</span>
    <h3>Don’t stack every filter</h3>
    <p>A couple of trusted lists beat turning everything on and spending a week allowlisting.</p>
    <span class="card-link">Filters <b>→</b></span>
  </a>
  <a class="feature-card" href="{{ '/docs/hagezi.html' | relative_url }}">
    <span class="card-icon">✳</span><span class="card-number">03</span>
    <h3>Hagezi, carefully</h3>
    <p>Pick one list level, try it, then add narrow exceptions only when something real breaks.</p>
    <span class="card-link">Hagezi notes <b>→</b></span>
  </a>
</section>

<section class="path-section">
  <div class="path-heading">
    <p class="eyebrow">FIRST SESSION</p>
    <h2>Get one setup working, then expand.</h2>
    <p>You do not need to configure every device on day one. One profile and one endpoint is enough to learn from.</p>
  </div>
  <ol class="step-list">
    <li><span>1</span><div><strong>Create a profile</strong><small>Keep the first policy small.</small></div></li>
    <li><span>2</span><div><strong>Add one device</strong><small>Confirm it before rolling out further.</small></div></li>
    <li><span>3</span><div><strong>Live with it a few days</strong><small>Use the query log when something fails.</small></div></li>
    <li><span>4</span><div><strong>Fix the smallest thing</strong><small>One allow rule beats disabling a whole filter.</small></div></li>
  </ol>
</section>

<section class="all-guides">
  <div>
    <p class="eyebrow">PAGES</p>
    <h2>What is in this guide.</h2>
    <p>Setup, profiles, rules, and what to do when a page or app misbehaves.</p>
  </div>
  <div class="guide-links">
    <a href="{{ '/docs/getting-started.html' | relative_url }}"><span class="link-index">01</span>Getting Started <span>→</span></a>
    <a href="{{ '/docs/profiles-and-devices.html' | relative_url }}"><span class="link-index">02</span>Profiles and Devices <span>→</span></a>
    <a href="{{ '/docs/custom-rules.html' | relative_url }}"><span class="link-index">03</span>Custom Rules <span>→</span></a>
    <a href="{{ '/docs/troubleshooting.html' | relative_url }}"><span class="link-index">04</span>Troubleshooting <span>→</span></a>
    <a href="{{ '/docs/maintenance.html' | relative_url }}"><span class="link-index">05</span>Maintenance <span>→</span></a>
  </div>
</section>

<p class="disclaimer">Independent community guide · <a href="https://docs.controld.com/">Official Control D docs</a> for current product details.</p>
