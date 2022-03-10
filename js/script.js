function generateJSON() {
  //new business object
  var b = new Object();
  b.name = document.getElementById("enterName").value;
  b.address = document.getElementById("enterAddress").value;
  b.description = document.getElementById("enterDescription").value;
  b.highlight = document.getElementById("enterHighlight").value;
  b.aboutThisDeal = document.getElementById("enterAboutThisDeal").value;
  b.finePrint = document.getElementById("enterFinePrint").value;
  b.about = document.getElementById("enterAbout").value;

  //option 1 details
  b.option1 = document.getElementById("enterOption1").value;
  b.option1Regular = document.getElementById("enterOption1Regular").value;
  b.option1Discounted = document.getElementById("enterOption1Discounted").value;
  var discount = parseFloat(b.option1Regular) - parseFloat(b.option1Discounted);
  b.option1DiscountPercentage = Math.round(
    (discount / parseFloat(b.option1Regular)) * 100
  ).toString();

  //option 2 details
  b.option2 = document.getElementById("option2").value;
  b.option2Regular = document.getElementById("option2Regular").value;
  b.option2Discounted = document.getElementById("option2Discounted").value;
  discount = parseFloat(b.option2Regular) - parseFloat(b.option2Discounted);
  b.option2DiscountPercentage = Math.round(
    (discount / parseFloat(b.option2Regular)) * 100
  ).toString();

  //option 3 details
  b.option3 = document.getElementById("option3").value;
  b.option3Regular = document.getElementById("option3Regular").value;
  b.option3Discounted = document.getElementById("option3Discounted").value;
  discount = parseFloat(b.option3Regular) - parseFloat(b.option3Discounted);
  b.option3DiscountPercentage = Math.round(
    (discount / parseFloat(b.option3Regular)) * 100
  ).toString();

  var jsonStrings = JSON.stringify(b);

  window.alert(jsonStrings);
  exportJSON("b.json", jsonStrings);
}

function exportJSON(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

