# CSS Flexbox Complete Guide

## What is Flexbox

Flexbox (Flexible Box Layout) is a one-dimensional layout model introduced in CSS3, designed specifically for laying out page components and handling alignment.

![Flexbox Diagram](https://picsum.photos/800/400?random=4)

## Core Concepts

### Main Axis and Cross Axis

Flexbox has two axes:

- **Main Axis**: Defined by `flex-direction`
- **Cross Axis**: Perpendicular to the main axis

```css
.container {
  display: flex;
  flex-direction: row; /* Main axis is horizontal */
}
```

![Axis Diagram](https://picsum.photos/600/300?random=5)

## Container Properties

### 1. display

```css
.container {
  display: flex;        /* Block-level flex container */
  display: inline-flex; /* Inline flex container */
}
```

### 2. flex-direction

Controls the direction of the main axis:

```css
.container {
  flex-direction: row;            /* Horizontal, left to right */
  flex-direction: row-reverse;    /* Horizontal, right to left */
  flex-direction: column;         /* Vertical, top to bottom */
  flex-direction: column-reverse; /* Vertical, bottom to top */
}
```

![Direction Diagram](https://picsum.photos/700/350?random=6)

### 3. justify-content

Defines alignment along the main axis:

```css
.container {
  justify-content: flex-start;   /* Default, left align */
  justify-content: flex-end;     /* Right align */
  justify-content: center;       /* Center */
  justify-content: space-between;/* Space between */
  justify-content: space-around; /* Equal space around */
  justify-content: space-evenly; /* Completely even */
}
```

### 4. align-items

Defines alignment along the cross axis:

```css
.container {
  align-items: stretch;     /* Default, stretch to fill */
  align-items: flex-start;  /* Align to top */
  align-items: flex-end;    /* Align to bottom */
  align-items: center;      /* Vertical center */
  align-items: baseline;    /* Text baseline align */
}
```

![Alignment](https://picsum.photos/800/400?random=7)

## Item Properties

### 1. flex-grow

Defines the growth factor:

```css
.item {
  flex-grow: 0; /* Default, don't grow */
  flex-grow: 1; /* Equal distribution */
}

.item-double {
  flex-grow: 2; /* Take double space */
}
```

### 2. flex-shrink

Defines the shrink factor:

```css
.item {
  flex-shrink: 1; /* Default, shrink if needed */
  flex-shrink: 0; /* Don't shrink */
}
```

### 3. flex-basis

Defines the initial size before distribution:

```css
.item {
  flex-basis: auto;   /* Based on content */
  flex-basis: 200px;  /* Fixed width */
  flex-basis: 20%;    /* Percentage */
}
```

### 4. flex Shorthand

```css
.item {
  flex: 1;              /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 0 0 200px;      /* No grow, no shrink, fixed 200px */
  flex: 1 1 auto;       /* Can grow, can shrink, content-based */
}
```

## Practical Examples

### Horizontal and Vertical Center

```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

![Center Effect](https://picsum.photos/400/400?random=8)

### Responsive Navbar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
```

### Equal Height Cards

```css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1; /* Fill remaining space for equal height */
}
```

![Card Layout](https://picsum.photos/800/350?random=9)

## Common Issues

### 1. Unequal Item Heights

Use `align-items: stretch` (default) or set `height: 100%` on items.

### 2. Last Row Left Alignment

Use `justify-content: flex-start` with `margin`:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  flex: 0 0 calc(33.333% - 1rem);
}
```

### 3. Fixed Sidebar + Flexible Content

```css
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* Fixed width */
}

.main {
  flex: 1; /* Take remaining space */
}
```

## Browser Compatibility

Flexbox support:

| Browser | Version |
|---------|---------|
| Chrome | 29+ |
| Firefox | 28+ |
| Safari | 9+ |
| Edge | 12+ |
| IE | 11 (partial) |

## Summary

Flexbox is suitable for:

- ✅ One-dimensional layouts (single row or column)
- ✅ Component internal alignment
- ✅ Responsive layouts
- ✅ Equal height layouts

Not suitable for:

- ❌ Two-dimensional grid layouts (use Grid)
- ❌ Complex overall page layouts
