d3.select('div')
//'div'by a tag 
//'#any-class by a ID
//'.any-class' by class name

    .selectAll('p')
    .data([1, 2, 3])
    .enter()
    .append('p')
// How I read this exemple
// select div all paragraph within  
// data that was rendered before 
// enter render the information missing 
.text(dta => dta);
// text method call a function where add data to
// each element in data row. 
