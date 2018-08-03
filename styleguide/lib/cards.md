---
name: Cards
category: Components
---

In component based services (especially internal systems), content can be structured using Cards.

```cards.html
<div class="hdd-card is-full-height">
  <div class="hdd-card_header">
    <div class="hdd-card_header_text">
      <div class="hdd-card_title is-center">Title</div>
    </div>
    <button class="hdd-card_header_action hdd-tooltip">
      <i class="fal fa-cog"></i>
      <div class="hdd-tooltip_menu">
        <span class="hdd-tooltip_menu_item">Hello</span>
      </div>
    </button>
  </div>
  <div class="hdd-card_content">
    <p>Example-content</p>
  </div>
</div>

<div class="hdd-card is-full-height">
  <div class="hdd-card_header">
    <div class="hdd-card_header_icon">
      <i class="fal fa-info"></i>
    </div>
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">Title</div>
      <div class="hdd-card_subtitle">Subtitle</div>
    </div>
    <button class="hdd-card_header_action hdd-tooltip">
      <i class="fal fa-cog"></i>

      <div class="hdd-tooltip_menu">
        <span class="hdd-tooltip_menu_item">Hello</span>
      </div>
    </button>
  </div>
  <div class="hdd-card_content">
    <p>Example-content</p>
  </div>
  <div class="hdd-card_actions">
    <button class="hdd-button is-full-width">Complete action</button>
  </div>
</div>
```