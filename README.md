# @angabar21/horizontal-scroller ![npm](https://img.shields.io/npm/v/npm)

`horizontal-scroller` is a web component made with Lit to provides a horizontal scroll on a HTML containers.

## Instalation

```
npm i @angabar21/horizontal-scroller
```

## Usage

The only thing you need to do is add an `anchor` property to the component with the same value than the `id` of the container.

**Note:** The container needs an active `overflow-x: scroll`.

### DOM

```html
<horizontal-scroller
    anchor="my-component"
>
    <div class="main-container" id="horizontal-scroller">
        <div class="element">Element 1</div>
        <div class="element">Element 2</div>
        <div class="element">Element 3</div>
        <div class="element">Element 4</div>
        <div class="element">Element 5</div>
    </div>
</horizontal-scroller>
```

### React

```jsx
import "@angabar21/horizontal-scroller";

function HorizontalScrollExample() {
    return (
        <horizontal-scroller anchor="horizontal-scroller">
            <div className="main-container" id="horizontal-scroller">
                <div className="element">Element 1</div>
                <div className="element">Element 2</div>
                <div className="element">Element 3</div>
                <div className="element">Element 4</div>
                <div className="element">Element 5</div>
            </div>
        </horizontal-scroller>
    );
}

export default HorizontalScrollExample;
```

### Vue

```javascript
<template>
    <horizontal-scroller anchor="horizontal-scroller">
        <div class="main-container" id="horizontal-scroller">
            <div class="element">Element 1</div>
            <div class="element">Element 2</div>
            <div class="element">Element 3</div>
            <div class="element">Element 4</div>
            <div class="element">Element 5</div>
        </div>
    </horizontal-scroller>
</template>

<script>
import "@angabar21/horizontal-scroller";

export default {
    name: "App",
};
</script>
```

## Props and events

### `anchor: string`

The value to link to the container.

**Example**

```html
<horizontal-scroller
    anchor="my-component"
>
    <div id="horizontal-scroller">
        ...
    </div>
</horizontal-scroller>
```

### `sensibility: number`

The speed of the scroll in pixels per wheel.

**Example**

```html
<horizontal-scroller
    anchor="my-component"
    sensibility="100"
>
    <div id="horizontal-scroller">
        ...
    </div>
</horizontal-scroller>
```

### `inverted: boolean`

By default when you wheel to top the component scrolls to right and when you wheel to bottom scrolls to the left, this property inverts this behavior.

**Example**

```html
<horizontal-scroller
    anchor="my-component"
    inverted
>
    <div id="horizontal-scroller">
        ...
    </div>
</horizontal-scroller>
```

### `goToScroll: Event`

Moves the container to the given value in pixels.

**Example**

```html
<horizontal-scroller
    id="my-component"
>
    ...
</horizontal-scroller>

const componentRef = document.getElementById("my-component");
componentRef.goToScroll(200);
```

### `goToLeftLimit: Event`

Moves the container to the limit on left side.

**Example**

```html
<horizontal-scroller
    id="my-component"
>
    ...
</horizontal-scroller>

const componentRef = document.getElementById("my-component");
componentRef.goToLeftLimit();
```

### `goToRightLimit: Event`

Moves the container to the limit on right side.

**Example**

```html
<horizontal-scroller
    id="my-component"
>
    ...
</horizontal-scroller>

const componentRef = document.getElementById("my-component");
componentRef.goToRightLimit();
```

## Author

angabar21
