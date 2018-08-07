---
name: Feedback message
category: Components
---

A feedback message could be an error or success message. If possible, usage of success messages should be kept to a minimum. A user should also be given the opportunity to fix/act on the error message. Feedback messages should be displayed in the lower right corner and act like a "snackbar" that pops up and dissapears after approximately 8 seconds.
Usage of icons in feedback messages should be kept to an absolute minimum, since they usually don't serve any purpose and may be considered as visual "noise".

```feedbackmessage.html
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

<div class="feedback-container is-warn" style="margin-bottom: 10px">
  <p class="feedback-container_message">There are some things you might want to check out.</p>
  <button class="feedback-container_close-button">
    <i class="fal fa-times"></i>
  </button>
</div>

<div class="feedback-container is-error">
  <p class="feedback-container_message">There is something seriously wrong going on!</p>
</div>
```