
function borrar(){
    $("#boton-eliminar").click(function () {
        var parameters = {};
        parameters.id = "b1";
        
                $.ajax({
                    type: "POST",
                    contentType: 'application/json; charset=utf-8',
                    url: "https://endpoints-service.herokuapp.com/delete_inventory",
                    data: JSON.stringify(parameters),
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr);
                    }
                });
        
        });
}