# @angabar21/horizontal-scroller

`horizontal-scroller` is a web component made with Lit to provides a horizontal scroll on a HTML containers.

## Instalation

```
npm i @angabar21/horizontal-scroller
```

## Usage

The only thing you need to do is add an `anchor` property to the component with the same value than the `id` of the container.

**Note:** The container needs an active `overflow-x: scroll`.

### DOM

```
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

Coming soon

### Vue

Coming soon

### Angular

Coming soon

## Props and events

### `anchor: string`

The value to link to the container.

**Example**

```
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

```
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

```
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

```
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

```
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

```
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
