# Who wish it?
People can "wish" products on eBay. We want to create the text that should be displayed under such products.  

Implement the function `displayWishes([string] | String) -> String`, which can take an **array of strings** or a **single string separated by comma and space** as input, containing the names of people who wish a product. It must return a string as shown in this example:

```javascript
displayWishes([]) // must return "no wishes for this product"
displayWishes(["Peter"]) // must return "Peter wishes this product"
displayWishes("John, Louise") // must return "John and Louise wish this product"
displayWishes(["Sarah", "John", "Jeff"]) // must return "Sarah, John and Jeff wish this product"
displayWishes("Cyril, Edward, Francis, Andy") // must return "Cyril, Edward and 2 others wish this product"
```

> **Note:** for more than 3 people, you just need to increase the number of *"others".*
