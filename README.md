


# Who wish it?
People can "wish" products on eBay. We want to create the text that should be displayed under such products.  

Implement the function `displayWishes([string] | String) -> String`, which can take an array of String or a Single string separated by comma+space as input, containing the names of people who wish a product. It must return the a String as shown in the example:

```javascript
displayWishes([]) // must return "no wishes for this product"
displayWishes(["Peter"] || "Peter") // must return "Peter wishes this product"
displayWishes(["John", "Louise"] || "John, Louise") // must return "John and Louise wish this product"
displayWishes(["Sarah", "John", "Jeff"] || "Sarah, John, Jeff") // must return "Sarah, John and Jeff wish this product"
wishes ["Cyril", "Edward", "Francis", "Andy"] || "Cyril, Edward, Francis, Andy") // must return "Cyril, Edward and 2 others wish this product"
```

> **Note:** for more than 3 people, you just need to increase the number of *"others".*
