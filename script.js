// JavaScript Document
            $(document).ready(function(){
                fn_dar_eliminar();
				fn_cantidad();
                $("#frm_usu").validate();
            });
			
			function fn_cantidad(){
				cantidad = $("#grilla tbody").find("tr").length;
				$("#span_cantidad").html(cantidad);
			};
            
            function fn_agregar(){
            	/*var contador=1;
                for (i = 0; i < $("#valor_num").val(); i++) {
                cadena = "<tr>";
                cadena = cadena + "<td>1</td>";
                cadena = cadena + "<td>" + $("#valor_campo").val() + "</td>";
                cadena = cadena + "<td>" + $("#valor_tdato").val() + "</td>";
                cadena = cadena + "<td>" + $("#valor_long").val() + "</td>";
                cadena = cadena + "<td><a class='elimina'><img src='delete.png' /></a></td>";
                contador +=1;
                $("#grilla tbody").append(cadena);
                }
                
                /*
                    aqui puedes enviar un conunto de tados ajax para agregar al usuairo
                    $.post("agregar.php", {ide_usu: $("#valor_ide").val(), nom_usu: $("#valor_uno").val()});
                */
            	var contador=1;
                for (i = 0; i < $("#valor_num").val(); i++) {
                cadena = "<tr>";
                cadena = cadena + "<td>"+contador+"</td>";
                cadena = cadena + "<td><input type='text' placeholder='nombre del Campo'/></td>";
                cadena = cadena + "<td><select name='tipo' id='tipo'><option>Seleccione el tipo de dato</option><option>Int</option><option>Varchar</option><option>Char</option><option>Date</option></select></td>";
                cadena = cadena + "<td><input type='text' placeholder='Longuitud'/></td>";
                cadena = cadena + "<td><a class='elimina'><img src='delete.png' /></a></td>";
                contador +=1;
                $("#grilla tbody").append(cadena);
                }
            	
            	
                fn_dar_eliminar();
				fn_cantidad();
                //alert("Usuario agregado");
            };
            
            function fn_dar_eliminar(){
                $("a.elimina").click(function(){
                    id = $(this).parents("tr").find("td").eq(0).html();
                    respuesta = confirm("Desea eliminar el Campo: " + id);
                    if (respuesta){
                        $(this).parents("tr").fadeOut("normal", function(){
                            $(this).remove();
                            alert("Campo " + id + " eliminado")
                            /*
                                aqui puedes enviar un conjunto de datos por ajax
                                $.post("eliminar.php", {ide_usu: id})
                            */
                        })
                    }
                });
            };
