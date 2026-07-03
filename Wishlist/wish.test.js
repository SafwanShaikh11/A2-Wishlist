const { add, removed, inWish } = require("./wish");

test("should return false when M3 is not  in the wishlist", () => {

//clearing the storage everytime the test runs
localStorage.clear();

//Act
add("BMW M3")
removed("BMW M3")

const result = inWish("BMW M3");
expect(result).toBe(false); 


});

test("should not be able to add duplicate items", () =>{

    //Arrange 
    localStorage.clear();

    //Add
    add("BMW M3")

    const wishlist = JSON.parse(localStorage.getItem("wishlist"));

    expect(wishlist.length).toBe(1);
    expect(wishlist).toContain("BMW M3");


});

test("should  be able to remove items", () => {

    //clear the storage
    localStorage.clear();

    add("BMW M3")
    removed("BMW M3")

    const wishlist = JSON.parse(localStorage.getItem("wishlist"));

        expect(wishlist.length).toBe(0);


});


test("No duplicate items allowed", () => {

    //clear the storage
    localStorage.clear();

    //add
    add("BMW M3")
    add("BMW M3")
    
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));

        expect(wishlist.length).toBe(1);
        expect(wishlist).toContain("BMW M3");


});

test("should return true when M3 is in the wishlist", () => {

//clearing the storage 
localStorage.clear();

//Act
add("BMW M3")

const result = inWish("BMW M3");
expect(result).toBe(true); 


});
