---
name: Cards
category: Components
---

A card is composed of several elements (eg title, description, icon, illustration). Combined, these elements are related to a single theme or to a destination. A card does not have an active / selected state. Cards contain interactive content, like function or other action points. Since cards are the starting point for more detailed info, they should contain a limited number of actions.

### ✅ When to use: 
Cards are used when you want to view content related to a theme. The text of the card is recommended to be kept at a maximum of 70 characters per line to improve the readability for the user. The content should be short and kept to a minimum. A header-icon in the top left corner can be used to improve the recognition of content. A card can also have an icon prompting the user to go to settings for this specific content. 

### ⛔ When not to use:
A card should only encapsulate one type of content. 

### 🖋️ For designer: 
Padding inside the card is recommended to have spacing-3. If there are multiple cards in a row, the cards should have the same height. The icon in the label should be inside a circle, aligned to the H1 element. The icon should clearly be connected to the title, and be relevant to content. If a card is clickable, this should be displayed with a light border, view more and an arrow.

## Card 
`hdd-card`
 
```cards-1.html
<div class="example-background">
  <div class="hdd-card">
    <div class="hdd-card_header">
      <div class="hdd-card_header_text">
        <div class="hdd-card_title is-center">A card should have a title</div>
        <div class="hdd-card_subtitle is-center">And a subtitle</div>
      </div>
    </div>
    <div class="hdd-card_content">
      <p>A card consist of some content.</p>
      <p>The card can have multiple lines of content.</p>
      <p>Cards are useful for displaying some kind of information</p>
    </div>
    <div class="hdd-card_header">
      <div class="hdd-card_header_text">
        <div class="hdd-card_title">A card can have more than one title</div>
        <div class="hdd-card_subtitle">And a subtitle</div>
      </div>
    </div>
    <div class="hdd-card_content">
      <p>And more content.</p>
    </div>
  </div>
</div>
```

## Card with full width button
`hdd-card`
 
```cards-2.html
<div class="example-background">
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
</div>
```

## Card with header action
`hdd-card`

```cards-3.html
<div class="example-background">
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
</div>
```

## Card with action button
`hdd-card`

```cards-4.html
<div class="example-background">
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
</div>
```

```cards-1.css hidden
.example-background {
  margin: -20px;
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```
```cards-2.css hidden
.example-background {
  margin: -20px;
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```
```cards-3.css hidden
.example-background {
  margin: -20px;
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```
```cards-4.css hidden
.example-background {
  margin: -20px;
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```


## Mutations
**`hdd-card`:**

| class | description|
| :--- | :--- |
| `is-full-height` | Sets the height of the given card to 100% |

**`hdd-card_title`:**

| class | description|
| :--- | :--- |
| `is-center` | Sets the given content of card title centered |

**`hdd-card_subtitle`:**

| class | description|
| :--- | :--- |
| `is-center` | Sets the given content of card subtitle centered |

**`hdd-card_actions`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the `:hover` state |
