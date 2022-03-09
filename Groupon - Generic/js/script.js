function clickTest() {

    var business = new Object();
    business.name = document.getElementById("name").value;
    business.address = document.getElementById("address").value;
    business.description = document.getElementById("description").value;
    business.highlight = document.getElementById("highlight").value;
    business.aboutThisDeal = document.getElementById("aboutThisDeal").value;
    business.finePrint = document.getElementById("finePrint").value;
    business.about = document.getElementById("about").value;

    business.option1 = document.getElementById("option1").value;
    business.option1Regular = document.getElementById("option1Regular").value;
    business.option1Discounted = document.getElementById("option1Discounted").value;
    var discount = (parseFloat(business.option1Regular) - parseFloat(business.option1Discounted));
    business.option1DiscountPercentage = Math.round((discount / (parseFloat(business.option1Regular))) * 100);

    business.option2 = document.getElementById("option2").value;
    business.option2Regular = document.getElementById("option2Regular").value;
    business.option2Discounted = document.getElementById("option2Discounted").value;
    discount = (parseFloat(business.option2Regular) - parseFloat(business.option2Discounted));
    business.option2DiscountPercentage = Math.round((discount / (parseFloat(business.option2Regular))) * 100);

    business.option3 = document.getElementById("option3").value;
    business.option3Regular = document.getElementById("option3Regular").value;
    business.option3Discounted = document.getElementById("option3Discounted").value;
    discount = (parseFloat(business.option3Regular) - parseFloat(business.option3Discounted));
    business.option3DiscountPercentage = Math.round((discount / (parseFloat(business.option3Regular))) * 100);

    var jsonStrings = JSON.stringify(business);

    const FileSystem = require("fs");
    FileSystem.writeFile('file.json', JSON.stringify(business), (error) => {
       if (error) throw error;
     });
}



