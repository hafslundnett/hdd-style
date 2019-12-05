---
name: Cards
category: Components
---

In component based services (especially internal systems), content can be structured using Cards.

## Card 
`hdd-card`
 
```cards-1.html
<div class="hdd-card">
  <div class="hdd-card_header">
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">A card should have a title</div>
      <div class="hdd-card_subtitle">And a subtitle</div>
    </div>
  </div>
  <div class="hdd-card_content">
    <p>A card consist of some content.</p>
    <p>The card can have multiple lines of content.The card can have multiple lines of content.The card can have multiple lines of content.</p>
    <p>Cards are useful for displaying some kind of information</p>
  </div>
</div>
```
# Card without subtitle
 
```cards-1-1.html
<div class="hdd-card">
  <div class="hdd-card_header">
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">Card with no subtitle</div>
    </div>
  </div>
  <div class="hdd-card_content">
    <p>A card consist of some content.</p>
    <p>The card can have multiple lines of content.The card can have multiple lines of content.The card can have multiple lines of content.</p>
    <p>Cards are useful for displaying some kind of information</p>
  </div>
</div>
```

## Card with icons and View
`hdd-card`
 
```cards-2.html
<div class="hdd-card">
  <div class="hdd-card_header">
    <div class="hdd-card_header_icon">
      <i class="fal fa-arrow-right"></i>
    </div>
    <div class="hdd-card_header_text">
      <div class="hdd-card_title">Title</div>
    </div>
  </div>
  <div class="hdd-card_content">
    <p>The different pieces of a card can be combined as desired.</p>
  </div>
  <div class="hdd-card_actions">
    <button class="hdd-card_actions_action">View more</button>
    
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
    <button class="hdd-card_actions_action">View more <i class="fal fa-arrow-right"></i>
    </button>
  </div>
</div>
```


## Mutations
**`hdd-card`:**

| class | description|
| :--- | :--- |
| `is-full-height` | Sets the height of the given card to 100% |

**`hdd-card_actions`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the `:hover` state |
