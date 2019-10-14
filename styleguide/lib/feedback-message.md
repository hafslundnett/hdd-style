---
name: Feedback message
category: Components
---

A feedback message could be an info, warning or error. Feedback messages should be displayed in the lower right corner and act like a "snackbar" that pops up and dissapears after approximately 8 seconds. 


## Info feedback
`feedback-container`.`is-info`

Usage of icons in feedback messages should be kept to an absolute minimum, since they usually don't serve any purpose and may be considered as visual "noise".

```feedbackmessage-info.html
<div class="feedback-container" style="margin-bottom: 10px">
  <i class="fal fa-info-circle feedback-container_icon"></i>
  <p class="feedback-container_message">This is just for <em>info</em></p>
  <button class="feedback-container_close-button">
    <i class="fal fa-times"></i>
  </button>
</div>

<div class="feedback-container is-info" style="margin-bottom: 10px">
  <i class="fal fa-info-circle feedback-container_icon"></i>
  <p class="feedback-container_message">Usage of icons should be kept to an absolute <span class="is-strong">minimum</span>. Long messages is also supported, since the text will wrap to a new line. However, long feedbacks is not recommended.</p>
  <button class="feedback-container_close-button">
    <i class="fal fa-times"></i>
  </button>
</div>
```

## Warning feedback
`feedback-container`.`is-warn`

```feedbackmessage-warn.html
<div class="feedback-container is-warn" style="margin-bottom: 10px">
  <p class="feedback-container_message">There are some things you might want to check out.</p>
  <button class="feedback-container_close-button">
    <i class="fal fa-times"></i>
  </button>
</div>
```

## Error feedback
`feedback-container`.`is-error`

```feedbackmessage-error.html
<div class="feedback-container is-error">
  <p class="feedback-container_message">There is something seriously wrong going on!</p>
</div>
```

## Mutations
**`feedback-container`:**

| class | description|
| :--- | :--- |
| `is-info` | Sets the given feedback to the info state |
| `is-warn` | Sets the given button to the warn state |
| `is-error` | Sets the given button to the error state |