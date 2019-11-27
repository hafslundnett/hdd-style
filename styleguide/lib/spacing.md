---
name: Spacing
category: Utilities
---

Spatial system that follows multiplication of 0.5rem (1rem = 16px). This provides predictability and is visually more comfortable to look at. Every spacing can be used directly on margins and paddings by using the css-variable for a spacing: `var(--hdd-spacing-$name)`. For example for primary: `padding: var(--hdd-spacing-primary)`

## All spacing sizes

- `--hdd-spacing-1` / `--hdd-spacing-primary`
- `--hdd-spacing-2`
- `--hdd-spacing-3`
- `--hdd-spacing-4`
- `--hdd-spacing-5`
- `--hdd-spacing-6`
- `--hdd-spacing-7`
- `--hdd-spacing-8`

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
	display: inline-block; border-radius: 100%; background: var(--hdd-white); box-shadow: var(--hdd-shadow-strong); margin: var(--hdd-spacing-1); vertical-align: middle;
}
.spacing-circle-mini {
	display: block; height: 8px; width: 8px; border-radius: 100%; background: var(--hdd-grey-medium); 
}
```

## Spacing in practice
NB! Work in progress.

```spacing-realistic.html
	<h1 style="margin-bottom: var(--hdd-spacing-3)">Header</h1>

	<div class="hdd-tags" style="margin-bottom: var(--hdd-spacing-primary)">
		<span class="hdd-tags_item">2019<i class="fal fa-times"></i></span>
		<span class="hdd-tags_item">2018<i class="fal fa-times"></i></span>
		<span class="hdd-tags_item">2017<i class="fal fa-times"></i></span>
	</div>

	<div class="hdd-card" style="margin-bottom: var(--hdd-spacing-primary);">
		<div class="hdd-card_header">
			<div class="hdd-card_header_text">
				<div class="hdd-card_title">A card should have a title</div>
			</div>
		</div>
		<div class="hdd-card_content">
			<p>A card content.</p>
		</div>
	</div>
	
	<div class="hdd-card" style="margin-bottom: var(--hdd-spacing-primary)">
		<div class="hdd-card_header">
			<div class="hdd-card_header_text">
				<div class="hdd-card_title">A card should have a title</div>
			</div>
		</div>
		<div class="hdd-card_content">
			<p>A card content.</p>
		</div>
	</div>
```
