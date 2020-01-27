---
name: Spacing
category: Utilities
---

Spatial system that follows multiplication of 0.5rem (1rem = 16px). This provides predictability and is visually more comfortable to look at. Every spacing can be used directly on margins and paddings by using the css-variable for a spacing: `var(--hdd-spacing-$name)`. For example for primary: `padding: var(--hdd-spacing-primary)`

## All spacing sizes

- 0.5rem (8px):  `--hdd-spacing-1` / `--hdd-spacing-primary`
- 1.0rem (16px): `--hdd-spacing-2`
- 1.5rem (24px): `--hdd-spacing-3`
- 2.0rem (32px): `--hdd-spacing-4`
- 2.5rem (40px): `--hdd-spacing-5`
- 3.0rem (48px): `--hdd-spacing-6`
- 3.5rem (56px): `--hdd-spacing-7`
- 4.0rem (64px): `--hdd-spacing-8`

```spacing.html
<div>
	<div style="padding: var(--hdd-spacing-1)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-2)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
</div>
<div>
	<div style="padding: var(--hdd-spacing-3)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-4)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
</div>
<div>
	<div style="padding: var(--hdd-spacing-5)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-6)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
</div>
<div>
	<div style="padding: var(--hdd-spacing-7)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-8)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
</div>
```

```spacing.css	hidden
.spacing-circle {
	display: inline-block; 
	border-radius: 100%; 
	background: var(--hdd-color-white); 
	box-shadow: var(--hdd-color-shadow-strong); 
	margin: var(--hdd-spacing-1); 
	vertical-align: middle;
}
.spacing-circle-mini {
	display: block; 
	height: 8px; 
	width: 8px; 
	border-radius: 100%; 
	background: var(--hdd-color-grey-medium); 
}
```

## Spacing in practice
Standard spacing should be used when possible to standardized the separation between elements, as seen in the example below. Exceptions from this should be pre-approved by designer.

```spacing-realistic.html
<!--NB! Style tags are only applied here to illustrate the use of spacing variables. -->
<div class="dark-mode">
	<div style="padding: var(--hdd-spacing-3); background: var(--hdd-color-white); border-radius: 5px;">
		<h1 style="margin-bottom: var(--hdd-spacing-3);">
			Gjennomfør handling for ticket #8
		</h1>
		
		<div class="hdd-form_field" style="margin-bottom: var(--hdd-spacing-2)">
			<label class="hdd-form_field_label" for="select-alt1">Målepunkt</label>
			<div class="hdd-form_select">
				<select id="select-alt2">
					<option default>Velg handling</option>
					<option>Alternative 1</option>
					<option>Alternative 2</option>
				</select>
				<i class="fal fa-angle-down"></i>
			</div>
		</div>

		<div>
			<button class="hdd-button is-secondary" style="margin-right: var(--hdd-spacing-2);">Avbryt</button>
			<button class="hdd-button">Gjennomfør handling</button>
		</div>
	</div>
</div>
```

```spacing-realistic.css
@media (prefers-color-scheme: dark) {
  .dark-mode {
    margin: -20px;
    padding: 20px;
    background: var(--primary-background-color);
  }
}
```
