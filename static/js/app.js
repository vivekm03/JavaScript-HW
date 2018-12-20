// from data.js
// Assign the data from `data.js` to a descriptive variable

var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //Remove previous selections
  d3.selectAll("td").remove();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);
// Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
tbody = d3.select("tbody");
filteredData.forEach(function(ufosight) {
  //console.log(ufosight);
  var row = tbody.append("tr");
  Object.entries(ufosight).forEach(function([key, value]) {
    //console.log(key, value);
    // Append a cell to the row for each value
    // in the Ufosight object
    var cell = row.append("td");
    cell.text(value);
  });
});
});