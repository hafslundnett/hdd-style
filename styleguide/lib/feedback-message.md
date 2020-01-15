---
name: Feedback message
category: Components
---

A feedback message is messages convey information that is important or urgent. This could be an informational, warning, sucess or error message. 

### ✅ When to use: 
Feedback message should be used to guide or inform the user of critical information. For an error the message should inform the user of what went wrong and why.

### ⛔ When not to use:
A feedback message should not be used unnecessarily

## Info feedback
`feedback-container`,  `is-info`, `is-success`, `is-warn`, `is-error`

Usage of icons in feedback messages should be kept to an absolute minimum, since they usually don't serve any purpose and may be considered as visual "noise".

```feedbackmessage.html
<div class="example-container">
  <div class="feedback-container">
    <i class="fal fa-info-circle feedback-container_icon"></i>
    <p class="feedback-container_message">
      This is just for info! Usage of icons should be kept to an absolute minimum. Long messages are also supported, the text will wrap to a new line. However, long feedbacks are not recommended.
    </p>
    <button class="feedback-container_close-button">
      <i class="fal fa-times-circle"></i>
    </button>
  </div>
</div>

<div class="example-container">
  <div class="feedback-container is-success">
    <p class="feedback-container_message">
      Something was a success!
    </p>
    <button class="feedback-container_close-button">
    <i class="fal fa-times-circle"></i>
    </button>
  </div>
</div>

<div class="example-container">
  <div class="feedback-container is-warn">
    <p class="feedback-container_message">
      There is something you might want to check out.
    </p>
    <button class="feedback-container_close-button">
      <i class="fal fa-times-circle"></i>
    </button>
  </div>
</div>

<div class="feedback-container is-error">
  <p class="feedback-container_message">
    There is something seriously wrong going on!
  </p>
  <button class="feedback-container_close-button">
    <i class="fal fa-times-circle"></i>
  </button>
</div>
```
```feedbackmessage.css  hidden
.example-container {
  margin-bottom: 10px;
}
```

## Mutations
**`feedback-container`:**

| class | description|
| :--- | :--- |
| `is-info` | Sets the given feedback to the info state |
| `is-success` | Sets the given feedback to the success state |
| `is-warn` | Sets the given feedback to the warn state |
| `is-error` | Sets the given feedback to the error state |