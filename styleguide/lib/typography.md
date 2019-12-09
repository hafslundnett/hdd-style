---
name: Typeface
category: Utilities
---
The typeface should be kept consistent in all mediums, physical and digital. The typography of Hdd is based on the rem unit. The body is set to the browsers default font size. All typography blocks are defined in the $typography variable found in the typography variables file.

## Default font
Roboto is default font for all text. Append the corresponding class to the tags, like the class "is-h1" to a h1 tag for example.

```roboto.html
<h1>Heading 1</h1>
<h1>ABCDEFHILMNOPQRSTVXÆØÅ</h1>
<h1>abcdefghijklmnopqrstuvwxyzæøå</h1>
<h1>0123456789</h1>
<br />
<h2>Heading 2</h2>
<h2>ABCDEFHILMNOPQRSTVXÆØÅ</h2>
<h2>abcdefghijklmnopqrstuvwxyzæøå</h2>
<h2>0123456789</h2>
<br />
<h3>Heading 3</h3>
<h3>ABCDEFHILMNOPQRSTVXÆØÅ</h3>
<h3>abcdefghijklmnopqrstuvwxyzæøå</h3>
<h3>0123456789</h3>
<br />
<h4>Heading 4</h4>
<h4>ABCDEFHILMNOPQRSTVXÆØÅ</h4>
<h4>abcdefghijklmnopqrstuvwxyzæøå</h4>
<h4>0123456789</h4>
<br />
<p>Paragraph</p>
<p>ABCDEFHILMNOPQRSTVXÆØÅ</p>
<p>abcdefghijklmnopqrstuvwxyzæøå</p>
<p>0123456789</p>
<br />
<p class="is-p-2">Paragraph with is-p2(smaller)</p>
<p class="is-p-2">ABCDEFHILMNOPQRSTVXÆØÅ</p>
<p class="is-p-2">abcdefghijklmnopqrstuvwxyzæøå</p>
<p class="is-p-2">0123456789</p>
<br />
<label>Label</label>
<br />
<label>Some informative text</label>
<br />
<br />
<label class="is-label-small">Small Label text</label>
<br />
<label class="is-label-small">Some small informative text</label>
<br />
<br />
<p class="is-icon-text">Icon-text</p>
<p class="is-icon-text">ABCDEFHILMNOPQRSTVXÆØÅ</p>
<br />
<p class="is-icon-text-italic">Icon-text-italic</p>
<p class="is-icon-text-italic">ABCDEFHILMNOPQRSTVXÆØÅ</p>

```