---
name: Feedback message
category: Components
---

A feedback message could be an error or success message. If possible, usage of success messages should be kept to a minimum. A user should also be given the opportunity to fix/act on the error message. Feedback messages should be displayed in the lower right corner and act like a "snackbar" that pops up and dissapears after approximately 8 seconds.
Usage of icons in feedback messages should be kept to an absolute minimum, since they usually don't serve any purpose and may be considered as visual "noise".

```feedbackmessage.html
<div class="feedback-container info" style="margin-bottom: 10px">
  <i class="fal fa-info-circle icon"></i>
  <p class="message">This is just for <em>info</em></p>
  <button class="close-button">
    <i class="fal fa-times"></i>
  </button>
</div>

<div class="feedback-container warn" style="margin-bottom: 10px">
  <p class="message">There are some things you might want to check out.</p>
  <button class="close-button">
    <i class="fal fa-times"></i>
  </button>
</div>

<div class="feedback-container error" style="margin-bottom: 10px">
  <p class="message">There is something seriously wrong going on!</p>
</div>

<div class="feedback-container error">
  <i class="fal fa-info-circle icon"></i>
  <p class="message">Usage of icons should be kept to an absolute <em>minimum</em></p>
  <button class="close-button">
    <i class="fal fa-times"></i>
  </button>
</div>
```