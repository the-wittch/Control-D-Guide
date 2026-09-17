---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">CONTROL D · COMMUNITY GUIDE</p>
    <h1>Practical DNS protection<br><span>without the headache.</span></h1>
    <p class="hero-lede">A clear, beginner-friendly way to set up Control D, choose balanced filters, use Hagezi responsibly, and keep your configuration working.</p>
    <div class="guide-actions">
      <a class="button button-primary" href="{{ '/docs/getting-started.html' | relative_url }}">Start the guide <span>→</span></a>
      <a class="button button-quiet" href="{{ '/docs/cheat-sheet.html' | relative_url }}">Quick cheat sheet</a>
    </div>
    <p class="hero-note">Start simple. Test deliberately. Keep exceptions narrow.</p>
  </div>
  <div class="hero-art">
    <img src="{{ '/assets/control-d-guide-banner.svg' | relative_url }}" alt="Control D Guide illustration">
  </div>
</section>

<section class="trust-row">
  <div><strong>Balanced</strong><span>not maximal</span></div>
  <div><strong>Practical</strong><span>real-world advice</span></div>
  <div><strong>Maintainable</strong><span>easy to troubleshoot</span></div>
</section>

<section class="intro-section">
  <p class="eyebrow">THE APPROACH</p>
  <h2>Good DNS protection should feel quiet.</h2>
  <p class="section-lede">The goal is not to block the most domains possible. It is to improve privacy and security while keeping the websites, apps, and devices you use every day working normally.</p>
</section>

<section class="feature-grid">
  <a class="feature-card feature-card-accent" href="{{ '/docs/starter-profiles.html' | relative_url }}">
    <span class="card-number">01</span>
    <h3>Choose a sensible profile</h3>
    <p>Start with Basic or Balanced. Move to Hardened only after you understand the trade-offs.</p>
    <span class="card-link">Explore profiles <b>→</b></span>
  </a>
  <a class="feature-card" href="{{ '/docs/filters.html' | relative_url }}">
    <span class="card-number">02</span>
    <h3>Filter with intention</h3>
    <p>Use a small number of trusted lists instead of stacking every filter available.</p>
    <span class="card-link">Learn about filters <b>→</b></span>
  </a>
  <a class="feature-card" href="{{ '/docs/hagezi.html' | relative_url }}">
    <span class="card-number">03</span>
    <h3>Use Hagezi responsibly</h3>
    <p>Pick one list level, test it first, and add targeted exceptions only when necessary.</p>
    <span class="card-link">Read the Hagezi guide <b>→</b></span>
  </a>
</section>

<section class="path-section">
  <div>
    <p class="eyebrow">YOUR FIRST SESSION</p>
    <h2>A simple path from zero to working.</h2>
  </div>
  <ol class="step-list">
    <li><span>1</span><div><strong>Create a profile</strong><small>Keep the first policy simple.</small></div></li>
    <li><span>2</span><div><strong>Add one device</strong><small>Test safely before expanding.</small></div></li>
    <li><span>3</span><div><strong>Run it for a few days</strong><small>Watch the query log when something breaks.</small></div></li>
    <li><span>4</span><div><strong>Refine, don’t overreact</strong><small>Add the smallest exception that solves the problem.</small></div></li>
  </ol>
</section>

<section class="all-guides">
  <div><p class="eyebrow">THE LIBRARY</p><h2>Everything you need to get oriented.</h2></div>
  <div class="guide-links">
    <a href="{{ '/docs/getting-started.html' | relative_url }}">Getting Started <span>→</span></a>
    <a href="{{ '/docs/profiles-and-devices.html' | relative_url }}">Profiles and Devices <span>→</span></a>
    <a href="{{ '/docs/custom-rules.html' | relative_url }}">Custom Rules <span>→</span></a>
    <a href="{{ '/docs/troubleshooting.html' | relative_url }}">Troubleshooting <span>→</span></a>
    <a href="{{ '/docs/maintenance.html' | relative_url }}">Maintenance <span>→</span></a>
  </div>
</section>

<p class="disclaimer">Independent community guide · <a href="https://docs.controld.com/">See the official Control D documentation</a> for current product details.</p>
