function getPlots(id) {
    // Use D3 library to read in samples.json
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        samples = data.samples
        var sampleData = samples.filter(meta => meta.id == id)[0];
        // console.log(sampleData)
        var IDs = sampleData.otu_ids;
        // console.log(IDs)
        var sampleValues = sampleData.sample_values.slice(0, 10).reverse();
        // console.log(sampleValues)
        var labels = sampleData.otu_labels.slice(0, 10);
        // console.log(labels)

        // Pull top 10 OTU IDs
        var OTU_top = (sampleData.otu_ids.slice(0, 10)).reverse();

        // Format OTU IDs
        var OTU_id = OTU_top.map(d => "OTU " + d);
        // console.log(`OTU IDs: ${OTU_id}`)

        // Get plot labels
        var labels = sampleData.otu_labels.slice(0, 10);
        // console.log(`OTU_labels: ${labels}`)
        var trace = {
            x: sampleValues,
            y: OTU_id,
            text: labels,
            marker: {
                color: "blue"
            },
            type: "bar",
            orientation: "h",
        };

        // Set the data variable
        var data = [trace];

        // Set the layout variable for setting the plots layout
        var layout = {
            title: "Top 10 OTU",
            yaxis: {
                tickmode: "linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };

        // Create bar plot
        Plotly.newPlot("bar", data, layout);

        // Initialize bubble chart
        var trace1 = {
            x: sampleData.otu_ids,
            y: sampleData.sample_values,
            mode: "markers",
            marker: {
                size: sampleData.sample_values,
                color: sampleData.otu_ids,
                colorscale: "Earth"
            },
            text: sampleData.otu_labels

        };

        // Set bubble plot layout
        var layout_2 = {
            xaxis: { title: "OTU ID" },
            height: 600,
            width: 1000
        };

        // Set another data variable 
        var data1 = [trace1];

        // Create bubble plot
        Plotly.newPlot("bubble", data1, layout_2);

    });
}

// Retrieve necessary data for function
function getDemoInfo(id) {
    // Use D3 library to read in samples.json file from the URL
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        // Retrieve demographic panel data
        let metadata = data.metadata;
        // console.log(metadata)

        // Filter metadata info using ID
        var result = metadata.filter(meta => meta.id == id)[0];
        // console.log(result)

        // Retrieve demographic panel for data
        var demographicInfo = d3.select("#sample-metadata");

        // Reset panel for demographic info before getting new ID info each time
        demographicInfo.html("");

        // Retrieve necessary demographic data for ID, then append info to panel
        for (key in result) {
            demographicInfo.append("h6").text(`${key}: ${result[key]}`);

        }
    });
}
// Create option changed function
function optionChanged(id) {
    getPlots(id);
    getDemoInfo(id);
}

// Create initial data function
function init() {
    // Select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // Read data 
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        console.log(data)

        // Put ID data in dropdown menu
        data.names.forEach(function (name) {
            dropdown.append("option").text(name).property("value", name);
        });

        // Call functions to display data and plots to webpage
        getPlots(data.names[0]);
        getDemoInfo(data.names[0]);
    });
}

init();