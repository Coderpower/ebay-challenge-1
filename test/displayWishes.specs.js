var expect = require('expect.js');
var displayWishes = require('../sources/displayWishes');

suite('Displaying Wishes', function(){
    test('Must return "no wishes for this product" when no names are provided', function(){
        var names = []
        var result = displayWishes(names);
        expect(result).to.be('no wishes for this product');

        names = ""
        result = displayWishes(names);
        expect(result).to.be('no wishes for this product');
    });

    test('Must return "<name> whishes this product" when only 1 name is provided', function(){
        var names = ["Peter"];
        var result = displayWishes(names);
        expect(result).to.be('Peter wishes this product');

        names = "Peter";
        result = displayWishes(names);
        expect(result).to.be('Peter wishes this product');
    });

    test('Must return "<1st name> and <2nd name> whish this product" when 2 names are provided', function(){
        var names = ["John", "Louise"];
        var result = displayWishes(names);
        expect(result).to.be('John and Louise wish this product');

        names = "John, Louise";
        result = displayWishes(names);
        expect(result).to.be('John and Louise wish this product');
    });

    test('Must return "<1st name>, <2nd name> and <3rd name> whish this product" when only 2 names are provided', function(){
        var names = ["Sarah", "John", "Jeff"];
        var result = displayWishes(names);
        expect(result).to.be('Sarah, John and Jeff wish this product');

        names = "Sarah, John, Jeff";
        result = displayWishes(names);
        expect(result).to.be('Sarah, John and Jeff wish this product');
    });

    test('Must return "<1st name>, <2nd name> and <x> others wish this product"', function(){
        var names = ["Cyril", "Edward", "Francis", "Andy", "Jessica"];
        var result = displayWishes(names);
        expect(result).to.be("Cyril, Edward and 3 others wish this product");
    });

});
