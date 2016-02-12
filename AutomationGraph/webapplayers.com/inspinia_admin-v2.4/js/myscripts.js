
$.ajax({
  type: 'GET',
  url: 'http://127.0.0.1:8080/getData',
  datatype: 'json',
  success: function(res){
	  var ret = jQuery.parseJSON(data);
	  console.log(ret);
	  $(#data).html(ret);
	  alert(res);
  }
});