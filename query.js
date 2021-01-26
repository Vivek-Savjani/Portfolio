$.getJSON("https://api.github.com/users/Vivek-Savjani/repos", function(data){
  var repo_data = '';
  $.each(data, function(key, value){
      repo_data += '<tr>';
      repo_data += '<td>'+value.name+'</td>';
      repo_data += '<td>'+value.description+'</td>';
      repo_data += '<td>'+value.html_url+'</td>';
      repo_data += '<td>'+ value.language+'</td>';
      repo_data += '<tr>';
  });
  $('#repo_table').append(repo_data);
});

