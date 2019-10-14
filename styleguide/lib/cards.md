---
name: Cards
category: Components
---

In component based services (especially internal systems), content can be structured using Cards.

## Card with full width button
`hdd-card`
 
```cards-2.html
<div class="hdd-card">
  <div class="hdd-card_header">
    <div class="hdd-card_header_icon">
      <i class="fal fa-info"></i>
    </div>
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">Title</div>
    </div>
  </div>
  <div class="hdd-card_content">
    <p>The different pieces of a card can be combined as desired.</p>
  </div>
  <div class="hdd-card_actions">
    <button class="hdd-button">Full width button</button>
  </div>
</div>
```

## Card with header action
`hdd-card`

```cards-3.html
<div class="hdd-card">
  <div class="hdd-card_header">
    <div class="hdd-card_header_icon">
      <i class="fal fa-info"></i>
    </div>
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">Title</div>
      <div class="hdd-card_subtitle">Subtitle</div>
    </div>
    <button class="hdd-card_header_action">
      <i class="fal fa-cog"></i>
    </button>
  </div>
  <div class="hdd-card_content">
    <p>Example-content</p>
  </div>
  <div class="hdd-card_actions">
    <button class="hdd-button">Cancel action</button>
    <button class="hdd-button">Complete action</button>
  </div>
</div>
```

## Card with action button
`hdd-card`

```cards-4.html
<div class="hdd-card">
  <div class="hdd-card_header">
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">Title</div>
      <div class="hdd-card_subtitle">Subtitle</div>
    </div>
  </div>
  <div class="hdd-card_content">
    <p>Any content can be placed within the card body.</p>
  </div>
  <div class="hdd-card_actions">
    <button class="hdd-card_actions_action">View more</button>
  </div>
</div>
```


## Mutations
**`hdd-card`:**

| class | description|
| :--- | :--- |
| `is-full-height` | Sets the given card to it's full height |

**`hdd-card_header`:**

| class | description|
| :--- | :--- |
| `is-center` | Sets the given content of card header centered |

**`hdd-card_actions`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the `:hover` state |
