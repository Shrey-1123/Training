var data0 = document.getElementById('data0');
var data1 = document.getElementById('data1');
var userList = document.getElementById('userList');

// add employee code
var counter = 0;
function addUser(){
  var inputdata0 = document.getElementById('data0').value;
  var inputdata1 = document.getElementById('data1').value;
  // console.log(inputdata);


  var html =  '<div class="row" id="data0'+counter+'" style="margin-bottom:15px;">'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<input type="text" class="form-control" value="'+inputdata0+'" disabled>'+
    '</div>'+
    '<div class="row" id="data1'+counter+'" style="margin-bottom:15px;">'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<input type="text" class="form-control" value="'+inputdata1+'" disabled>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
    '</div>'+

    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+counter+'">Delete</button>'+
    '</div>'+
  '</div>';

  document.getElementById('userList').insertAdjacentHTML('beforeend', html);
  localStorage.setItem(JSON.stringify(inputdata0),JSON.stringify(inputdata1));
    counter++;
    document.getElementById('data0').value="";
    document.getElementById('data1').value="";
}

function edit(editId){
  // console.log(editId);
  var parent =   document.getElementById(editId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.removeAttribute('disabled');
  console.log(child);
  
}

function update(updateId){
  // console.log(updateId);
  var parent =   document.getElementById(updateId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.setAttribute("disabled",'disabled');
  console.log(child);
}

function remove(deleteId){
  // console.log(deleteId);
  var parent =   document.getElementById(deleteId).parentNode.parentNode.parentNode;
  parent.remove();
  console.log(parent);
}
