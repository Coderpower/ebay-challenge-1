# Who wish it?
People can "wish" products on eBay. We want to create the text that should be displayed under such products.
Implement the function `displayWishes([string]) -> String`, which must take an array of String as input, containing the names of people who wish a product. It must return the a String as shown in the example:

```javascript
wishes [] // must return "no wishes for this product"
wishes ["Peter"] // must return "Peter wishes this product"
wishes ["John", "Louise"] // must return "John and Louise wish this product"
wishes ["Sarah", "John", "Jeff"] // must return "Sarah, John and Jeff wish this product"
wishes ["Cyril", "Edward", "Francis", "Andy"] // must return "Cyril, Edward and 2 others wish this product"
```

> **Note:** for more than 4 people just need to increase the number of *"other wish"*
