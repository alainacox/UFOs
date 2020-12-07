// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
filteredData.forEach(obj => {
        
  // Make new row
  var row = tbody.append("tr");

  // Append each row with data
  row.append("td").text(obj.datetime);
  row.append("td").text(obj.city);
  row.append("td").text(obj.state);
  row.append("td").text(obj.country);
  row.append("td").text(obj.shape);
  row.append("td").text(obj.durationMinutes);
  row.append("td").text(obj.comments);
});


// 3. Use this function to update the filters. 
function updateFilters() {filteredData.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
  });
});
};


    // 4a. Save the element that was changed as a variable.
    let date = d3.select("datetime").property("value");
    let filterData = tableData; 
    // 4b. Save the value that was changed as a variable.
    function handleClick() {
      let date = d3.select("datetime").property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    var filterEntries = d3.select("filter-btn");
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    var clearEntries = d3.select("clear-btn");
    clearEntries.on("click", function() {
      location.reload();
    });
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var date = d3.select("datetime").property("value");
  let filteredData = tableData;

  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  var button2 = d3.select("filter-btn");

  
  // Build the table when the page loads
  buildTable(tableData);
