---
name: Spacing
category: Utilities
---

Spatial system that follows 8pt. This provides predictability and is visually more comfortable to look at.

- `--hdd-spacing-1`
- `--hdd-spacing-2`
- `--hdd-spacing-3`
- `--hdd-spacing-4`
- `--hdd-spacing-5`
- `--hdd-spacing-6`
- `--hdd-spacing-7`
- `--hdd-spacing-8`
- `--hdd-spacing-9`

```spacing.html
<div>
	<div style="padding: var(--hdd-spacing-9)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-8)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-7)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
</div>
<div>
	<div style="padding: var(--hdd-spacing-6)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-5)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-4)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
</div>
<div>
	<div style="padding: var(--hdd-spacing-3)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-2)" class="spacing-circle">
		<span class="spacing-circle-mini"></span>
	</div>
	<div style="padding: var(--hdd-spacing-1)" class="spacing-circle">
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

