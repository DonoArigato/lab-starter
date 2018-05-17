describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
        let newChange = new ChangeHandler({
        amountDue = 25
      })
        expect(newChange.amountDue)
    });
    it("initializes cashTendered to 0", function() {
        let newChange = new ChangeHandler ({
        cashTendered = 0
    });
     newChange.insertCoin("penny");
    
    expect(newchange.cashTendered).toBe(5);





























    // Insert coin tests
    it("insert quarter adds 25", function() {

        // let newChange = new ChangeHandler
        // cashTendered = 0;
        //  newChange.insertCoin("quarter")
    });

    it("insert dime adds 10", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
        // newChange.insertCoin("dime")
    });

    it("insert nickel adds 5", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
        // newChange.insertCoin("nickel")
    });

    it("insert penny adds 1", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
        // newChange.insertCoin("penny")
    });

    it("subsequent coins continue to add value", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
       
        // newChange.insertCoin("dime")
        // newChange.insertCoin("dime")
        // newChange.insertCoin("dime")
        // newChange.insertCoin("dime")
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
        //  newChange.isPaymentSufficient = "true"
    }); 

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });

    it("giveChange returns correct coins for 10", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });

    it("giveChange returns correct coins for 27", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });

    it("giveChange returns correct coins for 68", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });
    // let newChange = new ChangeHandler
    // cashTendered = 0;
    it("giveChange returns correct coins for 15", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });
    // let newChange = new ChangeHandler
    // cashTendered = 0;  
    it("giveChange returns correct coins for 2", function() {
        // let newChange = new ChangeHandler
        // cashTendered = 0;
    });

});