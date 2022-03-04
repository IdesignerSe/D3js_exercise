
const FAKE_DATA = [
    {   id:'data1', value: 10, region: 'North'},
    { id: 'data2', value: 10, region: 'South' },
    { id: 'data3', value: 10, region: 'West' },
    { id: 'data4', value: 10, region: 'East' },

];

d3.select('div')
//'div'by a tag 
//'#any-class by a ID
//'.any-class' by class name

    .selectAll('p')
    .data(FAKE_DATA)
    .enter()
    .append('p')
// How I read this exemple
// select div all paragraph within  
// data that was rendered before 
// enter render the information missing 
.text(dta => dta.region);
// text method call a function where add data to
// each element in data row. https://www.youtube.com/watch?v=TOJ9yjvlapY
