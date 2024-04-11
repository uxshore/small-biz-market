var id = '17F2EwW8YGQGWIpHbTOfe1X7mNbvzs_KZz3S3SaHzXmk';

var gid = '0';
var gid2 = '198699933';
var gid3 = '3029457';
var gid4 = '1325980220';

var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
var url2 = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid2;
var url3 = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid3;
var url4 = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid4;


// fetch link for form 1
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").setAttribute("href", myItems(data.substring(47).slice(0, -2)))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = ''
  json.table.cols.forEach(colonne => colonne.label)
//   table += '</tr>'
  json.table.rows.forEach(ligne => {
    // table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.b : cellule.v}
        catch(e){var valeur = ''}
        table += valeur
      }
    )
    // table += '</tr>'
    }
  )
//   table += '</table>'
  return table
}    



// fetch link for form 2
fetch(url2)
  .then(response => response.text())
  .then(data => document.getElementById("json1").setAttribute("href", myItems1(data.substring(47).slice(0, -2)))  
  );
function myItems1(jsonString){
  var json = JSON.parse(jsonString);
  var table = ''
  json.table.cols.forEach(colonne => colonne.label)
//   table += '</tr>'
  json.table.rows.forEach(ligne => {
    // table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.b : cellule.v}
        catch(e){var valeur = ''}
        table += valeur
      }
    )
    // table += '</tr>'
    }
  )
//   table += '</table>'
  return table
}  

// fetch date for form 1
fetch(url3)
  .then(response => response.text())
  .then(data => document.getElementById("json2").innerHTML= "Vendor Application " + myItems2(data.substring(47).slice(0, -2))  
  );
function myItems2(jsonString){
  var json = JSON.parse(jsonString);
  var table = ''
  json.table.cols.forEach(colonne => colonne.label)
//   table += '</tr>'
  json.table.rows.forEach(ligne => {
    // table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.b : cellule.v}
        catch(e){var valeur = ''}
        table += valeur
      }
    )
    // table += '</tr>'
    }
  )
//   table += '</table>'
  return table
}  

// fetch date for form 2
fetch(url4)
  .then(response => response.text())
  .then(data => document.getElementById("json3").innerHTML= "Vendor Application " + myItems3(data.substring(47).slice(0, -2))  
  );
function myItems3(jsonString){
  var json = JSON.parse(jsonString);
  var table = ''
  json.table.cols.forEach(colonne => colonne.label)
//   table += '</tr>'
  json.table.rows.forEach(ligne => {
    // table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.b : cellule.v}
        catch(e){var valeur = ''}
        table += valeur
      }
    )
    // table += '</tr>'
    }
  )
//   table += '</table>'
  return table
}  


let pthing = document.getElementById("json").innerHTML;

pthing.className = "hidden";

let form1btn = document.getElementById("form1btn");

// form1btn.setAttribute("href", pthing);



let pthing1 = document.getElementById("json1").innerHTML;

pthing1.className = "hidden";

// let form2btn = document.getElementById("form2btn");

// form2btn.setAttribute("href", pthing1);


// let pthing2 = document.getElementById("json2").innerHTML;

// pthing2.className = "hidden";
