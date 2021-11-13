function traerInformacion(){
    $.ajax({
        url:"https://g4b3a2e4b76cd01-db202111051721.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        }

    });
}

function pintarRespuesta(items){

    let myTable="<table>";
    myTable+="<tr>";

        myTable+="<td>ID</td>";
        myTable+="<td>NAME</td>";
        myTable+="<td>EMAIL</td>";
        myTable+="<td>AGE</td>";
        myTable+="<td>🚨</td>";

    "</tr>";

    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id+"</td>";
        myTable+="<td>" +items[i].name+"</td>";
        myTable+="<td>" +items[i].email+"</td>";
        myTable+="<td>" +items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").html(myTable);

}

function guardarInformacion(){

    if ($("#id").val().length==0 || $("#name").val().length==0 || $("#email").val().length==0 || $("#age").val().length==0){

        alert("POR FAVOR INGRESE LOS DATOS");
    }else{

    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4b3a2e4b76cd01-db202111051721.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("DATO GUARDADO")
        }
    }); }
}

function editarInformacion(){

    if ($("#id").val().length==0 || $("#name").val().length==0 || $("#email").val().length==0 || $("#age").val().length==0){

        alert("POR FAVOR INGRESE LOS DATOS");
    }else{

    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4b3a2e4b76cd01-db202111051721.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("ACTUALIZADO")
        }
    }); }
}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4b3a2e4b76cd01-db202111051721.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("ELIMINADO.")
        }
    });
}
