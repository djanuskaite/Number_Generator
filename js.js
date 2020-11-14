


function addRow()
{
    // input values
    const numeriukas = document.getElementById('numeriukas').value;


    // html table
    // 0 = the first table
    const table = document.getElementsByTagName('table')[0];

    // add new empty row to the table
    // 0 = in the top
    // table.rows.length = the end
    // table.rows.length/2+1 = the center
    const newRow = table.insertRow(table.rows.length/2+1);

    // add cells to the row
    const cel1 = newRow.insertCell(0);
    const cel2 = newRow.insertCell(1);


    // add values to the cells
    cel1.innerHTML = numeriukas;
    cel2.innerHTML = '<input type="text" placeholder="">';


}

// random numbner button

function random()
{
    document.getElementById("number").innerHTML = Math.floor(Math.random() * 20);

}