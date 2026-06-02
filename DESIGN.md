---
name: Agrarian Sentinel
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bccabb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#869486'
  outline-variant: '#3d4a3e'
  surface-tint: '#4de082'
  primary: '#6bfb9a'
  on-primary: '#003919'
  primary-container: '#4ade80'
  on-primary-container: '#005e2d'
  inverse-primary: '#006d36'
  secondary: '#ffc640'
  on-secondary: '#402d00'
  secondary-container: '#e3aa00'
  on-secondary-container: '#5a4100'
  tertiary: '#ffd7d3'
  on-tertiary: '#68000a'
  tertiary-container: '#ffb0aa'
  on-tertiary-container: '#a50318'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6dfe9c'
  primary-fixed-dim: '#4de082'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005227'
  secondary-fixed: '#ffdf9f'
  secondary-fixed-dim: '#f9bd22'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max-width: 1200px
---

## Brand & Style

The brand personality is authoritative, vigilant, and essential. Designed for farmers whose livelihoods depend on precision data, the UI evokes a sense of calm control amidst unpredictable environmental factors. It is a high-utility tool that feels premium and reliable.

The design style is **Modern High-Contrast**. It utilizes a deep, "true black" foundation to minimize eye strain during low-light early morning checks, paired with vibrant accent colors for immediate cognitive recognition of safety and danger levels. Subtle dot-matrix patterns (as seen in the reference) provide a technical, data-driven texture without cluttering the interface.

## Colors

The palette is strictly functional. 
- **Emerald Green (#4ADE80):** Used for primary actions, successful syncs, and "Clear/Optimal" weather conditions.
- **Warning Amber (#FBBF24):** Used for cautionary alerts, frost warnings, or upcoming weather shifts.
- **Emergency Red (#EF4444):** Reserved for severe weather alerts (hail, tornado, flash flood) and critical system errors.
- **Neutral Charcoal (#0D0D0D to #171717):** The foundation. Pure black is used for the canvas to ensure high contrast, while slightly lighter charcoals define surface containers and input fields.

## Typography

This design system employs a "Sophisticated Utility" typographic pairing. 

**Libre Caslon Text** is used for brand headers and primary data points (e.g., Temperature, Location Name). This provides a sense of editorial prestige and traditional reliability.

**Manrope** is used for all functional UI elements, including navigation, labels, and body text. Its clean, geometric construction ensures legibility in high-stress situations or direct sunlight when screen brightness is peaked. Labels should often use uppercase with increased tracking for maximum clarity at small sizes.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a professional, dashboard-like density, and a **Fluid Grid** on mobile for field accessibility.

- **Grid:** 12-column system for desktop, 4-column for mobile.
- **Rhythm:** An 8px base unit governs all dimensions.
- **Density:** Elements are given ample breathing room (24px+ padding in cards) to prevent accidental taps, especially important for users who may be operating devices outdoors or with gloves.
- **Safe Zones:** Ensure critical weather alerts are always pinned to the top of the viewport with a high z-index.

## Elevation & Depth

In this dark-themed environment, depth is communicated through **Tonal Layering** rather than heavy shadows.

- **Level 0 (Canvas):** #0D0D0D.
- **Level 1 (Cards/Containers):** #171717 with a 1px subtle border (#262626).
- **Level 2 (Inputs/Active States):** #1E1E1E.
- **Active Overlays:** Use a subtle 10% opacity primary green glow for active toggle states or focused navigation items. 

Avoid drop shadows unless used for high-priority modal interruptions, in which case use a large, soft black shadow (0 20px 40px rgba(0,0,0,0.5)).

## Shapes

The shape language is modern and "Soft-Industrial." 

Main containers and primary buttons use a **0.5rem (8px)** radius to feel approachable yet structured. Smaller elements like chips or tags use a **Pill-shaped (1rem+)** radius to distinguish them from interactive action buttons. Input fields should match the button roundedness to maintain a cohesive form language.

## Components

### Buttons
- **Primary:** Filled Emerald Green (#4ADE80) with Black text. Bold weight.
- **Secondary:** Outlined White or Ghost style with White text.
- **Critical Action:** Filled Emergency Red (#EF4444) with White text.

### Inputs
Text fields utilize a dark fill (#171717) with a subtle bottom border or full 1px stroke. The placeholder text should be a muted grey. Upon focus, the stroke changes to Emerald Green.

### Alerts & Cards
Weather cards should include a "Condition Strip" on the left edge (Green, Amber, or Red) to indicate safety levels at a glance. Agricultural icons (Crop, Tractor, Soil Moisture, Wind Vane) should be rendered in a 2px stroke weight, matching the typography color of the container they sit in.

### Chips
Use chips for filtering "Field Locations" or "Crop Types." Use a 1px border with a background that is 5% opacity of the primary color when selected.

### Navigation
A sidebar or bottom navigation bar depending on the device. Active states are indicated by the Emerald Green accent, while inactive states remain White at 60% opacity.