# belly-button-challenge
I used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    I used sample_values as the values for the bar chart, otu_ids as the labels for the bar chart, and otu_labels as the hovertext for the chart
Next, I created a bubble chart that displays each sample.
    I used otu_ids for the x values, sample_values for the y values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.
Then I displayed the sample metadata (which is an individual's demographic information) and each key-value pair from the metadata JSON object on the page.
Lastly, I updated all the plots when a new sample is selected.
Once I completed all this, I deployed your app to GitHub pages, which is a free static page hosting service.