
const FAKE_DATA = [
    {   id:'data1', value: 10, region: 'North'},
    { id: 'data2', value: 10, region: 'South' },
    { id: 'data3', value: 10, region: 'West' },
    { id: 'data4', value: 10, region: 'East' },

];

d3.select('div')
.classed('container', true)

.style('border', '1px solid red');
//.style method or .style()
//.class method or .classed()