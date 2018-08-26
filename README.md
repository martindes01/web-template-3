# web-template-3

## About

This is a simple set of customisable material styles and components, including cards, buttons, elevation, shadows and typography.

## Getting Started

### Installation

Simply link the `Theme.css`, `Design.css`, `Values.css`, `Application.css` and `Support.css` style sheets via the CDN, and follow the [guide](#guide) and [reference](#reference).

```html
<link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Theme.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Design.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Values.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Application.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Support.css" rel="stylesheet"/>
```

### Example

An example can be viewed at [martindes01.github.io/web-template-3](https://martindes01.github.io/web-template-3).
Clone the source from this repository.

```shell
git clone https://github.com/martindes01/web-template-3.git
cd web-template-3
```

## Usage

### Guide

#### Create an HTML file

Create a basic HTML file `index.html`.

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

#### Link the Style Sheets

Link the `Theme.css`, `Design.css`, `Values.css`, `Application.css` and `Support.css` style sheets via the CDN.

```html
<head>
  <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Theme.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Design.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Values.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Application.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Support.css" rel="stylesheet"/>
</head>
```

The default theme colours and font family are defined in `Theme.css`.
To customise these properties, edit and link a local copy of this style sheet.

These styles use [CSS custom properties](https://developer.mozilla.org/docs/Web/CSS/Using_CSS_custom_properties), which are an experimental feature and may not work in some browsers.

#### Add a Card

```html
<body class="Color_Background">
  <main class="Content">
    <div class="ContentBlock ContentBlock_1-2-3">
      <div class="ContentBlockListItem Component_Card Color_Surface Elevation_01 Shadow_01"></div>
    </div>
  </main>
</body>
```

The `Content` class applies margins and padding to the main content, the `ContentBlock` class groups content between gutters and the `ContentBlock_1-2-3` class is one of a number of classes that implement a responsive grid layout.
See the [layout](#layout) reference for more information.

#### Add Text

```html
<body class="Color_Background">
  <main class="Content">
    <div class="ContentBlock ContentBlock_1-2-3">
      <div class="ContentBlockListItem Component_Card Color_Surface Elevation_01 Shadow_01">
        <span class="Text Type_H6">Title</span>
        <span class="Text Type_Body2">Supporting text</span>
      </div>
    </div>
  </main>
</body>
```

The `Text` class applies line spacing.
The `Type_H6` and `Type_Body2` classes implement two styles in the type system.
See the [typography](#typography) reference for more information.

#### Add a Button

```html
<body class="Color_Background">
  <main class="Content">
    <div class="ContentBlock ContentBlock_1-2-3">
      <div class="ContentBlockListItem Component_Card Color_Surface Elevation_01 Shadow_01">
        <span class="Text Type_H6">Title</span>
        <span class="Text Type_Body2">Supporting text</span>
        <div class="Text AlignChild_HorizontalRight">
          <a class="Component_ButtonContained Color_Primary Elevation_02 Elevation_Active08 Shadow_02 Shadow_Active08 Type_Button" href="" target="">Button</a>
        </div>
      </div>
    </div>
  </main>
</body>
```

The `AlignChild_HorizontalRight` class aligns child elements to the right.
Together, the `Component_ButtonContained` and `Color_Primary` classes produce a filled button.
See the [components](#components) and [colour](#colour) references for more information.

The final `index.html` should look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Theme.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Design.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Values.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Application.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/gh/martindes01/web-template-3/Stylesheets/Support.css" rel="stylesheet"/>
  </head>
  <body class="Color_Background">
    <main class="Content">
      <div class="ContentBlock ContentBlock_1-2-3">
        <div class="ContentBlockListItem Component_Card Color_Surface Elevation_01 Shadow_01">
          <span class="Text Type_H6">Title</span>
          <span class="Text Type_Body2">Supporting text</span>
          <div class="Text AlignChild_HorizontalRight">
            <a class="Component_ButtonContained Color_Primary Elevation_02 Elevation_Active08 Shadow_02 Shadow_Active08 Type_Button" href="" target="">Button</a>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
```

### Reference

#### Layout

CSS class | Description
--- | ---
`Content` | Apply margins and padding to the main content.
`ContentBlock` | Group content between gutters.
`ContentBlock_1-1-1` | Span all of the columns in phone display mode, tablet display mode and desktop display mode.
`ContentBlock_1-1-3` | Span all of the columns in phone display mode and tablet display mode, and a third of the columns in desktop display mode.
`ContentBlock_1-2-3` | Span all of the columns in phone display mode, half of the columns in tablet display mode and a third of the columns in desktop display mode.
`ContentBlockListItem` | Arrange child elements vertically.

Phone display mode is active for screens less than 720 pixels wide, tablet display mode is active for screens from 720 pixels to 1024 pixels wide, and desktop display mode is active for screens 1024 pixels wide or wider.

#### Child Alignment

CSS class | Description
--- | ---
`AlignChild_HorizontalLeft` | Align child elements to the left.
`AlignChild_HorizontalCenter` | Centre child elements horizontally.
`AlignChild_HorizontalRight` | Align child elements to the right.
`AlignChild_VerticalTop` | Align child elements to the top.
`AlignChild_VerticalMiddle` | Centre child elements vertically.
`AlignChild_VerticalBottom` | Align child elements to the bottom bottom.

#### Text Alignment

CSS class | Description
--- | ---
`Text` | Apply line spacing.
`Text_AlignLeft` | Align text to the left.
`Text_AlignCenter` | Centre text horizontally.
`Text_AlignRight` | Align text to the right.
`Text_AlignJustify` | Justify text.

#### Components

CSS class | Description
--- | ---
`Component_ButtonContained` | Apply rounded corners.
`Component_ButtonOutlined` | Apply a solid border and rounded corners.
`Component_ButtonFullWidth` | Fill the width of the parent element.
`Component_Card` | Apply rounded corners.
`Component_DividerFull` | Apply the outline colour to the background of an element without content.

#### Colour

CSS class | Description
--- | ---
`Color_Background` | Apply background and foreground colours suitable for behind scrollable content.
`Color_Surface` | Apply background and foreground colours suitable for cards, sheets and menus.
`Color_Primary` | Apply the primary background and foreground colours.
`Color_PrimaryLight` | Apply a light variant of the primary background and foreground colours.
`Color_PrimaryDark` | Apply a dark variant of the primary background and foreground colours.
`Color_Secondary` | Apply the secondary background and foreground colours
`Color_SecondaryLight` | Apply a dark variant of the secondary background and foreground colours.
`Color_SecondaryDark` | Apply a light variant of the secondary background and foreground colours.
`Color_Error` | Apply the error background and foreground colours.

The classes of the form `Color_Primary[Light|Dark]`, `Color_Secondary[Light|Dark]` and `Color_Error` each have two corresponding classes with the suffices `_ReversedBack` and `_ReversedFore`, respectively.
Each `_ReversedBack` class applies its corresponding foreground colour to the background.
Each `_ReversedFore` class applies its corresponding background colour to the foreground.

#### Elevation

CSS class | Description
--- | ---
`Elevation_<level>` | Apply a z-index of `<level>`, for each `<level>` from `00` through `04`, `06`, `08`, `16` and `24`.
`Elevation_Active08` | Apply a z-index of `08` when active.
`Elevation_Active12` | Apply a z-index of `12` when active.

#### Shadows

CSS class | Description
--- | ---
`Shadow_<level>` | Apply a box shadow corresponding to an elevation of `<level>`, for each `level` from `00` through `24`.
`Shadow_Active<level>` | Apply a box shadow corresponding to an elevation of `<level>` when active, for each `level` from `00` through `24`.

#### Typography

CSS class | Description
--- | ---
`Type_H1` | Apply the headline level 1 font.
`Type_H2` | Apply the headline level 2 font.
`Type_H3` | Apply the headline level 3 font.
`Type_H4` | Apply the headline level 4 font.
`Type_H5` | Apply the headline level 5 font.
`Type_H6` | Apply the headline level 6 font.
`Type_Subtitle1` | Apply the subtitle level 1 font.
`Type_Subtitle2` | Apply the subtitle level 2 font.
`Type_Body1` | Apply the body level 1 font.
`Type_Body2` | Apply the body level 2 font.
`Type_Button` | Apply the button font.
`Type_Caption` | Apply the caption font.
`Type_Overline` | Apply the overline level 1 font.

## License

This project is distributed under the terms of the MIT License.
See [LICENSE](LICENSE) for more information.
