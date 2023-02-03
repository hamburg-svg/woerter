setInterval(
    function() {
      document.getElementById("my-input").value = "";
    }, 2000);

    $(document).ready(function(){
        var interval = 2000; /*seconds * 1000. I'm using 1000 */
        setInterval(function(){
          $("#input").val('');
        }, interval);
      });
