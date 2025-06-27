# Typography System

This library uses a **rem-like typography system** similar to CSS, where all font sizes are relative to a configurable root font size.

## Default Configuration

- **Root Font Size**: 16px (configurable)
- **Base Unit**: All typography scales relative to this base unit

## Typography Scale

| Component | Rem Value | Pixel Size (16px base) |
|-----------|-----------|------------------------|
| Display1  | 3rem      | 48px                   |
| Display2  | 2.5rem    | 40px                   |
| Display3  | 2.25rem   | 36px                   |
| Display4  | 2rem      | 32px                   |
| Display5  | 1.75rem   | 28px                   |
| Display6  | 1.5rem    | 24px                   |
| H1        | 1.375rem  | 22px                   |
| H2        | 1.25rem   | 20px                   |
| H3        | 1.125rem  | 18px                   |
| H4        | 1rem      | 16px                   |
| H5        | 0.875rem  | 14px                   |
| H6        | 0.8125rem | 13px                   |
| H7        | 0.75rem   | 12px                   |
| H8        | 0.6875rem | 11px                   |
| H9        | 0.625rem  | 10px                   |

## Configuration

### Setting Custom Root Font Size

```typescript
import { setTypographyConfig } from 'vital-react-native';

// Set root font size to 18px
setTypographyConfig({ rootFontSize: 18 });

// Now all typography will scale relative to 18px
// Display1 will be 54px (3 * 18)
// H4 will be 18px (1 * 18)
```

### Getting Current Configuration

```typescript
import { getTypographyConfig, getRootFontSize } from 'vital-react-native';

const config = getTypographyConfig();
console.log(config.rootFontSize); // Current root font size

const currentRootSize = getRootFontSize();
console.log(currentRootSize); // Current root font size
```

### Using Custom Rem Values

```typescript
import { rem } from 'vital-react-native';

// Create custom font sizes
const customStyle = {
  fontSize: rem(1.5), // 1.5rem = 24px (with 16px base)
  fontSize: rem(0.5), // 0.5rem = 8px (with 16px base)
};
```

### Resetting to Default

```typescript
import { resetTypographyConfig } from 'vital-react-native';

// Reset to default 16px root font size
resetTypographyConfig();
```

## Benefits

1. **Consistent Scaling**: All typography scales proportionally
2. **Easy Global Changes**: Change root font size to adjust all typography
3. **Predictable**: No more width-dependent calculations
4. **Accessible**: Easy to implement accessibility features
5. **Familiar**: Works like CSS rem units