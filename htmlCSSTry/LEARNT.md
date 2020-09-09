1. Sending yourself (ie. the element 😅), can be done by passing `this`
    ```html
        <script>
            function callIt(params){ console.log(params); }
        </script>

        <button onclick="callIt(this)">Click Please</button> 
        
        <!-- If we just call callIt() onclick, NO INFORMATION IS PASSED, ie. the params will be undefined, actually i was expecting atleast some event object etc to be passed, but it doesn't by defualt -->
    ```

    ie. inside any element (which is basically an object), `this` refers to the element itself

2. Adding opening and closing angular brackets in texts ->
    Use `&lt;` and `&gt;` 
    ```html
    <footer>
        Some copyright info or perhaps some author
        info for an &lt;article&gt;?
    </footer> 
    ```

3. `<aside>`, `<footer>` don't actually have any effect, other than starting at a new line

4. A `Sectioning Content` introduces a new section in the outline... similarly most elements are of the [`Content Category`](https://developer.mozilla.org/en-US/docs/HTML/Content_categories) `Flow content`
