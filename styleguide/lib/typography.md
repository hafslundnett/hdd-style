---
name: Typeface
category: Utilities
---
The typeface should be kept consistent in all mediums, physical and digital. The typography of Hdd is based on the rem unit. The body is set to the browsers default font size. All typography blocks are defined in the $typography variable found in the typography variables file.

## Default font
Roboto is default font for all text. Append the corresponding class to the tags, like the class "is-h1" to a h1 tag for example.

```roboto.html
<h1 class="is-h1">Heading 1</h1>
<h1 class="is-h1">ABCDEFHILMNOPQRSTVXÆØÅ</h1>
<h1 class="is-h1">abcdefghijklmnopqrstuvwxyzæøå</h1>
<h1 class="is-h1">0123456789</h1>
<br />
<h2 class="is-h2">Heading 2</h2>
<h2 class="is-h2">ABCDEFHILMNOPQRSTVXÆØÅ</h2>
<h2 class="is-h2">abcdefghijklmnopqrstuvwxyzæøå</h2>
<h2 class="is-h2">0123456789</h2>
<br />
<h3 class="is-h3">Heading 3</h3>
<h3 class="is-h3">ABCDEFHILMNOPQRSTVXÆØÅ</h3>
<h3 class="is-h3">abcdefghijklmnopqrstuvwxyzæøå</h3>
<h3 class="is-h3">0123456789</h3>
<br />
<h4 class="is-h4">Heading 4</h4>
<h4 class="is-h4">ABCDEFHILMNOPQRSTVXÆØÅ</h4>
<h4 class="is-h4">abcdefghijklmnopqrstuvwxyzæøå</h4>
<h4 class="is-h4">0123456789</h4>
<br />
<p class="is-p">paragraph</p>
<p class="is-p">ABCDEFHILMNOPQRSTVXÆØÅ</p>
<p class="is-p">abcdefghijklmnopqrstuvwxyzæøå</p>
<p class="is-p">0123456789</p>
<br />
<p class="is-icon-text">Icon-text</p>
<p class="is-icon-text">ABCDEFHILMNOPQRSTVXÆØÅ</p>
<br />
<p class="is-icon-text-italic">Icon-text-italic</p>
<p class="is-icon-text-italic">ABCDEFHILMNOPQRSTVXÆØÅ</p>
<br />
<label class="is-label">Label</label>
<br />
<label class="is-label">Some informative text</label>
<br />
<br />
<label class="is-label-small">Small Label text</label>
<br />
<label class="is-label-small">Some small informative text</label>

```