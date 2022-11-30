
$("#btnSend").click(function () {

    var parameters = {};
    parameters.id = $("#id").val();
    parameters.nombre = $("#nombre").val();
    parameters.apellido = $("#apellido").val();
    parameters.correo = $("#correo").val();
    parameters.password = $("#password").val();
    
            $.ajax({
                type: "POST",
                contentType: 'application/json; charset=utf-8',
                url: "https://api-u.herokuapp.com/sigin",
                data: JSON.stringify(parameters),
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    swal(data.message);
                    if(data.message == "Usuario creado con éxito"){
                        window.location.href = "index-login.html";
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr);
                }
            });
    
    });

    

    $("#entrar-sesion").click(function () {

        var parameters = {};
        parameters.correo = $("#correo-sesion").val();
        parameters.password = $("#password-sesion").val();
        
                $.ajax({
                    method: "POST",
                    contentType: 'application/json; charset=utf-8',
                    url: "https://api-u.herokuapp.com/login",
                    data: JSON.stringify(parameters),
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
  
                        if(data.tipo_u == "USUARIO"){
                            window.location.href = "index-login.html";
                            swal(data.message);
                        }else if(data.tipo_u == "ADMIN"){
                            window.location.href = "inventario.html";

                        }else{
                            swal(data.message);
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr);
                        alert(xhr.status + " " + thrownError);
                    }
                });

        
        });