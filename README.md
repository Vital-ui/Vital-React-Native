# vital-react-native

It is Mandatory to use [AppProvider](#AppProvider) component in the `App.js` file before using the library in order to
customize the default theme.

##### Initial State

> - `themeState` referred below in default values refer to the initial state values.
> - `theme` referred below in default values refer to the combines state of themeState and DarkMode/LightMode based on
    the isDark value of [AppProvider](#AppProvider) Component.

```
export const themeState = {
    // White Shades
    White: '#ffffff',
    WhiteMuted: '#dfdfdf',
    WhiteMutedDark: '#bfbfbf',
    //Black Shades
    Black: '#000000',
    BlackMuted: '#3f3f3f',
    BlackMutedDark: '#6f6f6f',
    // Default Colors
    Primary: '#1aa3ff',
    PrimaryDark: '#008ae6',
    Success: '#42d395',
    SuccessDark: '#29b97b',
    Danger: '#f64a6c',
    DangerDark: '#dd3153',
    Warning: '#fcc166',
    WarningDark: '#fbb140',
    Ascent1: '#29d2f1',
    Ascent1Dark: '#0fb9d7',
    Ascent2: '#6e80e7',
    Ascent2Dark: '#5567cd',
    // App Theme
    Theme: '#10101a',
    ThemeMuted: '#20202a',
    ThemeMutedDark: '#30303a',
    Header: '#20202a',
    Body: '#10101a',
    TextColor: '#ffffff'
}

export const DarkMode = {
    // Dark Mode
    Body: '#101010',
    TextColor: '#ffffff',
    // App Theme
    Theme: '#10101a',
    ThemeMuted: '#20202a',
    ThemeMutedDark: '#30303a',
    Header: '#20202a',
}

export const LightMode = {
    // Light Mode
    Body: '#f0f0f0',
    TextColor: '#000000',
    // App Theme
    Theme: '#f5f5ff',
    ThemeMuted: '#e5e5ef',
    ThemeMutedDark: '#d5d5df',
    Header: '#e5e5ef',
}
```

### Components

1. [Accordion](#Accordion)
2. [AppProvider](#AppProvider)
3. [BadgeButton](#BadgeButton)
4. [Block](#Block)
5. [Button](#Button)
6. [Carousel](#Carousel)
7. [Checkbox](#Checkbox)
8. [Container](#Container)
9. [Dialog](#Dialog)
10. [GradientBlock](#GradientBlock)
11. [GradientImage](#GradientImage)
12. [GradientText](#GradientText)
13. [Input](#Input)
14. [OTP](#OTP)
15. [RadioButton](#RadioButton)
16. [ProgressBar](#ProgressBar)
17. [SegmentedTab](#SegmentedTab)
17. [Switch](#Switch)
17. [Toast](#Toast)
18. [Typography](#Typography)
    - [Display1](#Typography)
    - [Display2](#Typography)
    - [Display3](#Typography)
    - [Display4](#Typography)
    - [Display5](#Typography)
    - [Display6](#Typography)
    - [H1](#Typography)
    - [H2](#Typography)
    - [H3](#Typography)
    - [H4](#Typography)
    - [H5](#Typography)
    - [H6](#Typography)
    - [H7](#Typography)
    - [H8](#Typography)
    - [H9](#Typography)

### Styles

1. [Height](#Height)
2. [Spacing](#Spacing)
3. [Border](#Border)
4. [Typography](#FontSize)

# Components

### Accordion

Props:

| Name       | Type          | Default                                        | Required | Description                                                                                  |
|------------|---------------|------------------------------------------------|----------|----------------------------------------------------------------------------------------------|
| style      | Array or Dict | -                                              | No       | The style of the complete container                                                          |
| titleStyle | Array or Dict | { flexDirection: 'row', alignItems: 'center' } | No       | style of the title section                                                                   |
| title      | Component     | -                                              | No       | Component will be displayed in the header part                                               |
| showIcon   | Boolean       | False                                          | No       | Visibility control of the Up and Down arrow to show weather the accordion is expanded or not |
| bodyStyle  | Array or Dict | {overflow: 'hidden'}                           | No       | Style of the expanded content container                                                      |
| children   | Component     | -                                              | No       | Components that will be displayed when the Accordion is expanded                             |

### AppProvider

props:

| Name      | Type     | Default                   | Required | Description                                             |
|-----------|----------|---------------------------|----------|---------------------------------------------------------|
| isDark    | Boolean  | False                     | False    | Default theme for components in the library             |
| getTheme  | function | -                         | False    | To get the updated theme from the AppProvider Component |
| theme     | Object   | [themeState](#themeState) | False    | Override existing theme colors                          |
| darkMode  | Object   | [DarkMode](#DarkMode)     | False    | Override existing dark mode colors                      |
| lightMode | Object   | [LightMode](#LightMode)   | False    | Override existing light mode colors                     |

### BadgeButton

Internally uses [Button](#Button) component and will accept all its properties

props:

| Name      | Type          | Default | Required | Description                                         |
|-----------|---------------|---------|----------|-----------------------------------------------------|
| onPress   | function      | -       | False    | Action to be performed when user taps on the button |
| style     | Array or Dict | -       | False    | Style of the badge button block                     |
| badgeData | Component     | -       | False    | Component to be displayed inside the badge          |
| children  | Component     | -       | False    | Component to be displayed inside the button         |

### Block

props:

| Name                  | Type          | Default           | Required | Description                                                                 |
|-----------------------|---------------|-------------------|----------|-----------------------------------------------------------------------------|
| titleMargin           | Dict          | `margin.mb2`      | False    | Margin around the title of the block                                        |
| blockMargin           | Dict          | `margin.mb5`      | False    | Margin around the complete block                                            |
| titleFluid            | Boolean       | False             | False    | Weather to have a padding on right and left side of the Header of the block |
| header                | Boolean       | False             | False    | Weather to show title or not                                                |
| title                 | String        | `Title Goes Here` | False    | String will be displayed as the title                                       |
| titleLeft             | Component     | -                 | False    | Component to be displayed on the left side of the title                     |
| blockTitleSize        | Array or Dict | `fontSize.H6`     | False    | Font Size of the title, **Can Provide extra styles as well**                |
| blockTitleStyle       | Array or Dict | -                 | False    | Font Size of the title, **Can Provide extra styles as well**                |
| contentContainerStyle | Array or Dict | -                 | False    | Style object of the content of the block                                    |
| children              | Component     | -                 | False    | Component to be displayed inside the button                                 |
| style                 | Array or Dict | -                 | False    | Style to be implemented on block                                            |
| fluid                 | Boolean       | false             | False    | Weather to have a padding on right and left side of the body of the block   |
| blockHeaderRight      | Component     | -                 | False    | Component to be displayed on the right of the title                         |

### Button

All normal props for [TouchableOpacity](https://reactnative.dev/docs/0.64/touchableopacity) component of react native
will work.

props:

| Name            | Type          | Default            | Required | Description                                                                                                    |
|-----------------|---------------|--------------------|----------|----------------------------------------------------------------------------------------------------------------|
| gradient        | Boolean       | False              | False    | For making the background of the button as gradient. Gradient will be implemented in border if `bordered=True` |
| color           | Array/String  | `theme.ThemeMuted` | False    | String if gradient is false, and array with 2 strings if gradient is true                                      |
| start           | Dict          | `{x: 0.0, y: 1.0}` | False    | start position of the gradient                                                                                 |
| end             | Dict          | `{x: 1.0, y: 1.0}` | False    | end position of the gradient                                                                                   |
| borderRadius    | Array or Dict | -                  | False    | border radius of the button                                                                                    |
| margin          | Array or Dict | -                  | False    | margin for button                                                                                              |
| bordered        | Boolean       | False              | False    | enable border for button                                                                                       |
| onPress         | function      | -                  | False    | action to be performed when user taps on the button                                                            |
| loading         | Boolean       | False              | False    | disable the button and show an activity indicator                                                              |
| disabled        | Boolean       | False              | False    | disable the button                                                                                             |
| padding         | Array or Dict | -                  | False    | padding in the button                                                                                          |
| backgroundColor | String        | `theme.Theme`      | False    | background color of the button if the button is bordered                                                       |
| left            | Component     | -                  | False    | component to be displayed of the left side of the button                                                       |
| right           | Component     | -                  | False    | component to be displayed of the right side of the button                                                      |
| children        | Component     | -                  | False    | Component to be displayed inside the button                                                                    |

### Carousel

props:

| Name       | Type          | Default                | Required | Description                                                                                 |
|------------|---------------|------------------------|----------|---------------------------------------------------------------------------------------------|
| style      | Array or Dict | -                      | False    | Style of the carousel container                                                             |
| data       | Array         | -                      | **True** | Array of data that will be used to generate Child Component Screens                         |
| renderItem | function      | -                      | **True** | Generator function that will consume one element of the data array and generate a component |
| fluid      | Boolean       | False                  | False    | Horizontal padding for the paginator dots                                                   |
| DotColor   | String        | `theme.ThemeMutedDark` | False    | Color of the dots                                                                           |

### Checkbox

| Name            | Type           | Default                       | Required | Description                                                          |
|-----------------|----------------|-------------------------------|----------|----------------------------------------------------------------------|
| style           | Array or Dict  | -                             | False    | Style of the Checkbox                                                |
| onPress         | function       | -                             | False    | Event handler function to toggle between checked and unchecked       |
| boxStyle        | Array or Dict  | -                             | False    | Style of the container box of the checkbox                           |
| fill            | Boolean        | False                         | False    | weather to fill the checkbox with some background color              |
| backgroundColor | String         | -                             | False    | background fill color of the checkbox **Required if `fill=True`**    |
| children        | Component      | -                             | False    | Components to be displayed with checkbox, and onPress should work on |
| borderSize      | Integer        | `Math.round(props.size / 20)` | False    | border width of the checkbox                                         |
| borderColor     | String         | `theme.TextColor`             | False    | border color of the checkbox                                         |
| size            | String/Integer | -                             | **True** | size of checkbox                                                     |
| checked         | Boolean        | False                         | False    | checked state of checkbox                                            |
| checkColor      | String         | `theme.TextColor`             | False    | color of the tick icon displayed in the checkbox                     |

### Container

props:

| Name                     | Type          | Default           | Required | Description                                                                                                          |
|--------------------------|---------------|-------------------|----------|----------------------------------------------------------------------------------------------------------------------|
| bottom                   | Integer       | `insets.bottom`   | False    | Bottom Padding for the safe area view                                                                                |
| backgroundColor          | String        | `theme.Body`      | False    | Background color for the content container                                                                           |
| bgImg                    | Dict          | -                 | False    | Source for the image to be displayed in the background                                                               |
| bgImgStyle               | Array or Dict | -                 | False    | style for the background image                                                                                       |
| header                   | Boolean       | False             | False    | Toggle header display                                                                                                |
| keyboardAvoiding         | Boolean       | False             | False    | Need to make it `True` if there is an input field in the view, so that the keyboard doesn't overlap with the content |
| fluid                    | Boolean       | False             | False    | Horizontal padding required or not                                                                                   |
| style                    | Array or Dict | -                 | False    | style for the content container                                                                                      |
| children                 | Component     | -                 | False    | components to be displayed in the screen                                                                             |
| headerColor              | String        | `theme.Header`    | False    | background color of the header                                                                                       |
| addIcon                  | Component     | -                 | False    | Icon to be displayed on the left side                                                                                |
| headerLeftIconStyle      | Array or Dict | -                 | False    | style of the left icon                                                                                               |
| headerLeftIconBackground | String        | -                 | False    | background color of the left icon **Mandatory if left icon is there, `addIcon` `drawerAction` `back`                 |
| addIconAction            | function      | -                 | False    | event handler for left icon tap, ** only for `addIcon` **                                                            |
| drawerAction             | Boolean       | False             | False    | to display Hamburger icon as the left icon                                                                           |
| drawerActionIcon         | Component     | -                 | False    | custom icon instead of hamburger icon                                                                                |
| headerLeftIconColor      | String        | `theme.TextColor` | False    | color of the Back icon or the Hamburger icon                                                                         |
| back                     | Boolean       | False             | False    | Display back action button                                                                                           |
| backIcon                 | Component     | -                 | False    | custom back icon                                                                                                     |
| headerTextStyle          | Array or Dict | -                 | False    | style for the header text                                                                                            |
| headerText               | String        | -                 | False    | -                                                                                                                    |
| headerRight              | Component     | -                 | False    | component to be displayed on the right side of header                                                                |
| navigation               | Object        | -                 | False    | navigation object of react navigation ** Required in case of `back` and `drawerAction`                               |

### Dialog

is `visible` is not provided, Dialog will handle the open and close of Modal on itself

props:

| Name            | Type          | Default        | Required | Description                                                                                |
|-----------------|---------------|----------------|----------|--------------------------------------------------------------------------------------------|
| style           | Array or Dict | -              | False    | Style of the Action button container                                                       |
| visible         | Boolean       | -              | False    | Toggle visibility of the modal                                                             |
| onBackDropPress | function      | -              | False    | Style of the container box of the checkbox **Required if visible is provided**             |
| header          | Boolean       | False          | False    | Toggle header visibility in the modal                                                      |
| headerColor     | String        | `theme.Header` | False    | background color of the header                                                             |
| title           | Component     | -              | False    | Header text                                                                                |
| onRequestClose  | function      | -              | False    | function trigger when close action is triggered  **Required if visible is provided**       |
| bodyColor       | String        | `theme.Body`   | False    | background color of the content in Modal                                                   |
| children        | Component     | -              | False    | Content to be displayed in the Modal                                                       |
| onRequestOpen   | function      | False          | False    | Function triggered when Modal Open action is triggered **Required if visible is provided** |
| actionFrom      | Component     | -              | False    | Component on which user will tap to open the modal                                         |
| onClose         | function      | -              | False    | function will be triggered when the Modal is getting closed                                |

### Drawer

props:

| Name            | Type                                   | Default  | Required | Description                                           |
|-----------------|----------------------------------------|----------|----------|-------------------------------------------------------|
| position        | "top" \| "bottom" \| "right" \| "left" | "right"  | False    | Side from where the drawer will open                  |
| open            | Boolean                                | `false`  | False    | To show/hide the drawer                               |
| backgroundColor | String                                 | `"#fff"` | False    | Background color of the drawer                        |
| width           | String \| Number                       | `"50%"`  | False    | Width of the drawer                                   |
| onBackdropPress | Function                               | -        | False    | Function to be called on backdrop press of the drawer |


### GradientBlock

props:

| Name            | Type          | Default       | Required | Description                                                                     |
|-----------------|---------------|---------------|----------|---------------------------------------------------------------------------------|
| colors          | Array         | -             | **True** | array of 2 strings with hex code for colors                                     |
| start           | Dict          | -             | **True** | start position of the gradient                                                  |
| end             | Dict          | -             | **True** | end position of the gradient                                                    |
| bgfill          | Boolean       | False         | False    | solid background and gradient in border                                         |
| borderRadius    | Array or Dict | -             | False    | border radius of the complete block                                             |
| style           | Array or Dict | -             | False    | style object for the block                                                      |
| borderWidth     | Integer       | 2             | False    | multiplier for the hairlineWidth **Required only is bgfill is True**            |
| padding         | Array or Dict | -             | False    | padding for the content in the block                                            |
| backgroundColor | String        | `theme.Theme` | False    | background color for the block if bgfill is true **Required if bgfill is true** |
| children        | Component     | -             | False    | Component to be displayed in the block                                          |

### GradientImage

props:

| Name     | Type          | Default | Required | Description                                                                 |
|----------|---------------|---------|----------|-----------------------------------------------------------------------------|
| colors   | Array         | -       | **True** | array of 2 strings with hex code for colors                                 |
| start    | Dict          | -       | **True** | start position of the gradient                                              |
| end      | Dict          | -       | **True** | end position of the gradient                                                |
| image    | Dict          | -       | False    | image source object                                                         |
| style    | Array or Dict | -       | False    | style object for the image and the component to be displayed over the image |
| children | Component     | -       | False    | Component to be displayed over the image                                    |

### GradientText

All normal props for [Text](https://reactnative.dev/docs/0.64/text) component of react native will work.

Extra Props for gradient

| Name   | Type  | Default            | Required | Description                                 |
|--------|-------|--------------------|----------|---------------------------------------------|
| colors | Array | -                  | **True** | array of 2 strings with hex code for colors |
| start  | Dict  | `{x: 0.0, y: 0.0}` | False    | start position of the gradient              |
| end    | Dict  | `{x: 1.0, y: 1.0}` | False    | end position of the gradient                |

### Input

All normal props for [TextInput](https://reactnative.dev/docs/0.64/textinput) component of react native will work.

props:

| Name                | Type          | Default            | Required | Description                                         |
|---------------------|---------------|--------------------|----------|-----------------------------------------------------|
| inputStyle          | Array or Dict | -                  | False    | style for the input container                       |
| textStyle           | Array or Dict | -                  | False    | style for the text inside the input field           |
| borderRadius        | Dict          | -                  | False    | border radius of the input field                    |
| borderColor*        | String/Array  | `theme.ThemeMuted` | False    | gradient color of the input field                   |
| bgColor*            | String/Array  | `theme.ThemeMuted` | False    | background color of the input field                 |
| onFocusBorderColor* | String/Array  | -                  | False    | gradient color of the input field when in focus     |
| onFocusBGColor*     | String/Array  | -                  | False    | background color of input field when in focus       |
| secureTextEntry     | Boolean       | False              | False    | make the input field as password field              |
| inputLeft           | Component     | -                  | False    | icon to be displayed on the left side of the field  |
| inputRight          | Component     | -                  | False    | icon to be displayed on the right side of the field |
| feedback            | Component     | -                  | False    | feedback footer component of input field            |

*array of 2 strings with hex code for colors if gradient is true, or a string is gradient is false

### OTP

props:

| Name            | Type          | Default                     | Required | Description                                                          |
|-----------------|---------------|-----------------------------|----------|----------------------------------------------------------------------|
| style           | Array or Dict | -                           | False    | style of the container having otp fields                             |
| length          | Integer       | -                           | **True** | length of the OTP                                                    |
| value           | string        | -                           | False    | value of the OTP field                                               |
| onChange        | function      | -                           | False    | function will be triggered on otp change with the updated otp string |
| editable        | Boolean       | False                       | **True** | otp field editable toggle                                            |
| blockStyle      | Array or Dict | -                           | False    | style of the individual otp field                                    |
| backgroundColor | String        | `themeState.ThemeMutedDark` | False    | background color of the otp field                                    |

### ProgressBar

| Name            | Type   | Default   | Required | Description                                  |
|-----------------|--------|-----------|----------|----------------------------------------------|
| colors          | Array  | -         | **True** | array of 2 strings with hex code for colors  |
| vertical        | Bool   | `false`   | False    | Vertical Progress Bar                        |
| progress        | Number | -         | **True** | value from 0 to 1 0 = 0%, 1 = 100%           |
| thickness       | Number | 5         | False    | thickness of the progress bar                |
| backgroundColor | string | `#EAEBEE` | False    | Background color of progress bar             |
| animationSpeed  | number | 1000      | False    | animation speed in milliseconds of animation |

### SegmentedTab

| Name            | Type          | Default                                                                                    | Required | Description                                 |
|-----------------|---------------|--------------------------------------------------------------------------------------------|----------|---------------------------------------------|
| containerStyle  | Array/Dict    | `{ backgroundColor: context.theme.TextColor + "0D", width: "100%", flexDirection: "row" }` | False    | style of container of segmented tab         |
| colors          | String/Array  | `[context.theme.Primary,context.theme.Primary]`                                            | False    | array of 2 strings with hex code for colors |
| start           | Object        | `{x: 0, y: 0.5}`                                                                           | False    | Vertical Progress Bar                       |
| end             | Object        | `{x: 1, y: 0.5}`                                                                           | False    | Vertical Progress Bar                       |
| borderRadius    | Number        | -                                                                                          | False    | Vertical Progress Bar                       |
| activeTextColor | String        | `#ffffff`                                                                                  | False    | Vertical Progress Bar                       |
| options         | Array         | -                                                                                          | **True** | data of tabs to be shown                    |
| value           | Number/String | -                                                                                          | False    | value of currently selected tab             |
| defaultValue    | Number/String | -                                                                                          | False    | value of initially selected tab             |
| onChange        | Function      | -                                                                                          | False    | function triggered on tab change request    |

### RadioButton

props:

| Name            | Type           | Default                       | Required | Description                                                           |
|-----------------|----------------|-------------------------------|----------|-----------------------------------------------------------------------|
| style           | Array or Dict  | -                             | False    | Style of the radio button                                             |
| onPress         | function       | -                             | False    | Event handler function to toggle between checked and unchecked        |
| boxStyle        | Array or Dict  | -                             | False    | Style of the container box of the radio button                        |
| children        | Component      | False                         | False    | Components to be displayed with checkbox, and onPress should work on  |
| fill            | Boolean        | False                         | False    | weather to fill the radio button with some background color           |
| backgroundColor | String         | -                             | False    | background fill color of the radio button **Required if `fill=True`** |
| borderSize      | String         | `Math.round(props.size / 20)` | False    | border width of the checkbox                                          |
| borderColor     | String         | `theme.TextColor`             | False    | border color of the radio button                                      |
| size            | String/Integer | -                             | **True** | size of radio button                                                  |
| selected        | Boolean        | False                         | False    | checked state of radio button                                         |
| dotColor        | String         | `theme.TextColor`             | False    | color of the dot displayed in the radio button                        |

### Switch

| Name              | Type         | Default            | Required | Description                                                                                        |
|-------------------|--------------|--------------------|----------|----------------------------------------------------------------------------------------------------|
| activeTrackColors | String/Array | -                  | **True** | single color code for single solid color track or array of 2 color codes for linear gradient track |
| start             | Dict         | `{x: 0.0, y: 0.0}` | False    | start position of the gradient                                                                     |
| end               | Dict         | `{x: 1.0, y: 1.0}` | False    | end position of the gradient                                                                       |
| thumbStyle        | Dict         | -                  | False    | style to be implemented on the thumb                                                               |
| defaultValue      | Boolean      | False              | False    | default initial value of switch if value parameter is not provided                                 |
| value             | Boolean      | -                  | False    | current value of the switch                                                                        |
| onChange          | Func         | -                  | False    | callback called in case of value update                                                            |
| isDark            | Boolean      | False              | False    | updates disabled track color for dark mode                                                         |

### Toast

| Name         | Type    | Default                                                                                                                                                     | Required | Description                    |
|--------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------------------|
| open         | Boolean | false                                                                                                                                                       | **True** | show or hide the toast         |
| top          | Dict    | 20                                                                                                                                                          | False    | location from top of the toast |
| toastStyle   | Dict    | `{ backgroundColor: "#1F1F1F",  paddingVertical: 4,paddingHorizontal: 8, borderRadius: 15,color: "#fff",maxWidth: 2 * Dimensions.get("window").width / 3 }` | False    | style to be toast container    |

## Typography

Common properties for
Components `Display1`, `Display2`, `Display3`, `Display4`, `Display5`, `Display6`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `H7`, `H8`, `H9`

All normal props for [Text](https://reactnative.dev/docs/0.64/text) component of react native will work.

props:

| Name     | Type          | Default                           | Required | Description                 |
|----------|---------------|-----------------------------------|----------|-----------------------------|
| style    | Array or Dict | `{color:context.theme.TextColor}` | False    | text style except font size |
| children | String        | -                                 | **True** | text to be displayed        |

# Styles

## Height

heights to be used for style object

* height used in value for key h1 to h24 is `Dimensions.get('window').height`

| key    | value                             |
|--------|-----------------------------------|
| height | `Dimensions.get('window').height` |
| h1     | `height*1/24`                     |
| h2     | `height*2/24`                     |
| h3     | `height*3/24`                     |
| h4     | `height*4/24`                     |
| h5     | `height*5/24`                     |
| h6     | `height*6/24`                     |
| h7     | `height*7/24`                     |
| h8     | `height*8/24`                     |
| h9     | `height*9/24`                     |
| h10    | `height*10/24`                    |
| h11    | `height*11/24`                    |
| h12    | `height*12/24`                    |
| h13    | `height*13/24`                    |
| h14    | `height*14/24`                    |
| h15    | `height*15/24`                    |
| h16    | `height*16/24`                    |
| h17    | `height*17/24`                    |
| h18    | `height*18/24`                    |
| h19    | `height*19/24`                    |
| h20    | `height*20/24`                    |
| h21    | `height*21/24`                    |
| h22    | `height*22/24`                    |
| h23    | `height*23/24`                    |
| h24    | `height*24/24`                    |

## Width

widths to be used for style object

* width used in value for key w1 to w24 is `Dimensions.get('window').width`

| key   | value                            |
|-------|----------------------------------|
| width | `Dimensions.get('window').width` |
| w1    | `width*1/24`                     |
| w2    | `width*2/24`                     |
| w3    | `width*3/24`                     |
| w4    | `width*4/24`                     |
| w5    | `width*5/24`                     |
| w6    | `width*6/24`                     |
| w7    | `width*7/24`                     |
| w8    | `width*8/24`                     |
| w9    | `width*9/24`                     |
| w10   | `width*10/24`                    |
| w11   | `width*11/24`                    |
| w12   | `width*12/24`                    |
| w13   | `width*13/24`                    |
| w14   | `width*14/24`                    |
| w15   | `width*15/24`                    |
| w16   | `width*16/24`                    |
| w17   | `width*17/24`                    |
| w18   | `width*18/24`                    |
| w19   | `width*19/24`                    |
| w20   | `width*20/24`                    |
| w21   | `width*21/24`                    |
| w22   | `width*22/24`                    |
| w23   | `width*23/24`                    |
| w24   | `width*24/24`                    |

## Spacing

####margin

margin to be used for style object

* height used in value
  is `Dimensions.get('screen').width <= 545 ? Dimensions.get('screen').height : Dimensions.get('screen').height * 1.2`

| key | value                              |
|-----|------------------------------------|
| m0  | `margin: 0`                        |
| mx0 | `marginHorizontal: 0`              |
| my0 | `marginVertical: 0`                |
| mt0 | `marginTop: 0`                     |
| mb0 | `marginBottom: 0`                  |
| ms0 | `marginStart: 0`                   |
| me0 | `marginEnd: 0`                     |
| m1  | `margin: height * 0.005`           |
| mx1 | `marginHorizontal: height * 0.005` |
| my1 | `marginVertical: height * 0.005`   |
| mt1 | `marginTop: height * 0.005`        |
| mb1 | `marginBottom: height * 0.005`     |
| ms1 | `marginStart: height * 0.005`      |
| me1 | `marginEnd: height * 0.005`        |
| m2  | `margin: height * 0.01`            |
| mx2 | `marginHorizontal: height * 0.01`  |
| my2 | `marginVertical: height * 0.01`    |
| mt2 | `marginTop: height * 0.01`         |
| mb2 | `marginBottom: height * 0.01`      |
| ms2 | `marginStart: height * 0.01`       |
| me2 | `marginEnd: height * 0.01`         |
| m3  | `margin: height * 0.015`           |
| mx3 | `marginHorizontal: height * 0.015` |
| my3 | `marginVertical: height * 0.015`   |
| mt3 | `marginTop: height * 0.015`        |
| mb3 | `marginBottom: height * 0.015`     |
| ms3 | `marginStart: height * 0.015`      |
| me3 | `marginEnd: height * 0.015`        |
| m4  | `margin: height * 0.02`            |
| mx4 | `marginHorizontal: height * 0.02`  |
| my4 | `marginVertical: height * 0.02`    |
| mt4 | `marginTop: height * 0.02`         |
| mb4 | `marginBottom: height * 0.02`      |
| ms4 | `marginStart: height * 0.02`       |
| me4 | `marginEnd: height * 0.02`         |
| m5  | `margin: height * 0.03`            |
| mx5 | `marginHorizontal: height * 0.03`  |
| my5 | `marginVertical: height * 0.03`    |
| mt5 | `marginTop: height * 0.03`         |
| mb5 | `marginBottom: height * 0.03`      |
| ms5 | `marginStart: height * 0.03`       |
| me5 | `marginEnd: height * 0.03`         |

####padding

padding to be used for style object

* height used in value
  is `Dimensions.get('screen').width <= 545 ? Dimensions.get('screen').height : Dimensions.get('screen').height * 1.2`

| key | value                               |
|-----|-------------------------------------|
| p0  | `padding: 0`                        |
| px0 | `paddingHorizontal: 0`              |
| py0 | `paddingVertical: 0`                |
| pt0 | `paddingTop: 0`                     |
| pb0 | `paddingBottom: 0`                  |
| ps0 | `paddingStart: 0`                   |
| pe0 | `paddingEnd: 0`                     |
| p1  | `padding: height * 0.005`           |
| px1 | `paddingHorizontal: height * 0.005` |
| py1 | `paddingVertical: height * 0.005`   |
| pt1 | `paddingTop: height * 0.005`        |
| pb1 | `paddingBottom: height * 0.005`     |
| ps1 | `paddingStart: height * 0.005`      |
| pe1 | `paddingEnd: height * 0.005`        |
| p2  | `padding: height * 0.01`            |
| px2 | `paddingHorizontal: height * 0.01`  |
| py2 | `paddingVertical: height * 0.01`    |
| pt2 | `paddingTop: height * 0.01`         |
| pb2 | `paddingBottom: height * 0.01`      |
| ps2 | `paddingStart: height * 0.01`       |
| pe2 | `paddingEnd: height * 0.01`         |
| p3  | `padding: height * 0.015`           |
| px3 | `paddingHorizontal: height * 0.015` |
| py3 | `paddingVertical: height * 0.015`   |
| pt3 | `paddingTop: height * 0.015`        |
| pb3 | `paddingBottom: height * 0.015`     |
| ps3 | `paddingStart: height * 0.015`      |
| pe3 | `paddingEnd: height * 0.015`        |
| p4  | `padding: height * 0.02`            |
| px4 | `paddingHorizontal: height * 0.02`  |
| py4 | `paddingVertical: height * 0.02`    |
| pt4 | `paddingTop: height * 0.02`         |
| pb4 | `paddingBottom: height * 0.02`      |
| ps4 | `paddingStart: height * 0.02`       |
| pe4 | `paddingEnd: height * 0.02`         |
| p5  | `padding: height * 0.03`            |
| px5 | `paddingHorizontal: height * 0.03`  |
| py5 | `paddingVertical: height * 0.03`    |
| pt5 | `paddingTop: height * 0.03`         |
| pb5 | `paddingBottom: height * 0.03`      |
| ps5 | `paddingStart: height * 0.03`       |
| pe5 | `paddingEnd: height * 0.03`         |

## Border

borderRadius to be used for style object

* width used in value
  is `Dimensions.get('screen').width <= 545 ? Dimensions.get('screen').width : Dimensions.get('screen').width * 0.8`

| key    | value          |
|--------|----------------|
| br0    | `0`            |
| br1    | `width * 0.01` |
| br2    | `width * 0.02` |
| br3    | `width * 0.03` |
| br4    | `width * 0.04` |
| br5    | `width * 0.05` |
| circle | `width`        |

##Typography

#### Font Size

fontSize to be used for style object

* width used in value
  is `Dimensions.get('screen').width <= 545 ? Dimensions.get('screen').width : Dimensions.get('screen').width * 0.8`

| key      | value                     |
|----------|---------------------------|
| Display1 | `fontSize: width * 0.15`  |
| Display2 | `fontSize: width * 0.14`  |
| Display3 | `fontSize: width * 0.13`  |
| Display4 | `fontSize: width * 0.12`  |
| Display5 | `fontSize: width * 0.11`  |
| Display6 | `fontSize: width * 0.10`  |
| H1       | `fontSize: width * 0.09`  |
| H2       | `fontSize: width * 0.08`  |
| H3       | `fontSize: width * 0.07`  |
| H4       | `fontSize: width * 0.06`  |
| H5       | `fontSize: width * 0.05`  |
| H6       | `fontSize: width * 0.045` |
| H7       | `fontSize: width * 0.04`  |
| H8       | `fontSize: width * 0.035` |
| H9       | `fontSize: width * 0.03`  |



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
