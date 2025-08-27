# Input Component Preview

This preview showcases all variants and functionalities of the Vital React Native Input component.

## Variants Included

### 1. Basic Input

- Standard text input with placeholder
- Custom border colors and focus states
- Demonstrates basic styling capabilities

### 2. Floating Placeholder

- Animated placeholder that moves up when focused
- Customizable font sizes for normal and active states
- Smooth animations using react-native-reanimated

### 3. Password Input

- Secure text entry with show/hide toggle
- Eye icon that toggles password visibility
- Floating placeholder integration

### 4. Input with Left Addon

- Search icon on the left side
- Demonstrates left addon functionality
- Rounded corners for search-like appearance

### 5. Input with Right Addon

- Currency indicator on the right side
- Numeric keyboard type
- Right addon positioning

### 6. Input with Both Addons

- Phone icon on left, "Call" text on right
- Phone-pad keyboard type
- Both left and right addons working together

### 7. Multiline Input

- Multi-line text input for longer content
- Custom height and alignment
- Maintains all styling features

### 8. Error State

- Red border color for error indication
- Error message below the input
- Feedback system integration

### 9. Success State

- Green border color for success indication
- Success message with checkmark
- Positive feedback display

### 10. Custom Background

- Custom background colors for normal and focus states
- Different color scheme demonstration
- Background color transitions

### 11. Rounded Input

- Highly rounded corners (borderRadius: 25)
- Pill-shaped input appearance
- Extreme border radius example

### 12. Disabled Input

- Non-editable input field
- Grayed out appearance
- Disabled state styling

## Key Features Demonstrated

### Styling System

- **Border Colors**: Normal and focus state colors
- **Border Radius**: Customizable corner rounding
- **Background Colors**: Normal and focus state backgrounds
- **Gradient Borders**: Using LinearGradient for border effects

### Addon System

- **Left Addons**: Icons, text, or any React component
- **Right Addons**: Currency, labels, or action buttons
- **Dual Addons**: Both left and right addons simultaneously

### Placeholder System

- **Standard Placeholders**: Regular text placeholders
- **Floating Placeholders**: Animated placeholders that move up
- **Custom Colors**: Placeholder text color customization
- **Font Size Control**: Different sizes for normal and active states

### Input Types

- **Text Input**: Standard text entry
- **Password Input**: Secure text with toggle
- **Email Input**: Email keyboard type
- **Phone Input**: Phone-pad keyboard
- **Numeric Input**: Numeric keyboard
- **Multiline Input**: Multi-line text area

### State Management

- **Focus States**: Visual feedback on focus
- **Error States**: Red styling for validation errors
- **Success States**: Green styling for valid input
- **Disabled States**: Grayed out appearance

### Feedback System

- **Error Messages**: Text feedback below inputs
- **Success Messages**: Positive feedback with icons
- **Custom Feedback**: Any React component as feedback

### Accessibility

- **Keyboard Types**: Appropriate keyboards for different input types
- **Auto Capitalization**: Controlled text capitalization
- **Editable State**: Enable/disable input functionality

## Technical Implementation

The input component uses:

- **React Native Reanimated**: For smooth floating placeholder animations
- **Linear Gradient**: For gradient border effects
- **Context API**: For theme integration
- **TypeScript**: For type safety and developer experience

## Testing Recommendations

When testing this preview, focus on:

1. **Animation Smoothness**: Floating placeholder animations
2. **Focus States**: Border color changes on focus
3. **Password Toggle**: Show/hide functionality
4. **Addon Positioning**: Left and right addon placement
5. **Multiline Behavior**: Text area expansion
6. **Keyboard Types**: Appropriate keyboard appearance
7. **State Transitions**: Color changes between states
8. **Accessibility**: Screen reader compatibility
9. **Performance**: Smooth scrolling and interactions
10. **Cross-platform**: iOS and Android consistency

This preview serves as both a demonstration of capabilities and a testing ground for the input component's functionality.
