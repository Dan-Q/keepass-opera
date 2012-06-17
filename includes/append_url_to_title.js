window.addEventListener('DOMContentLoaded', function(){
  var protoDelimIndex = document.URL.indexOf("://");
  if(protoDelimIndex != -1) {
    var domainDelimIndex = document.URL.indexOf("/", protoDelimIndex + 4);
    if(domainDelimIndex != -1) {
        document.title=document.title + ' [' + document.URL.slice(0, domainDelimIndex + 1) + ']';
      }
  }
}, false);