$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();  // Evita que el formulario se recargue

        // Obtener valores del formulario
        var formData = {
            nombre: $('#exampleInputNombre').val().trim(),
            apellido: $('#exampleInputApellido').val().trim(),
            email: $('#exampleInputEmail1').val().trim(),
            telefono: $('#exampleInputNumero').val().trim(),
            estado: $('#exampleSelectEstado').val().trim(),
            mensaje: $('#exampleTextarea').val().trim()
        };

        // Validar que los campos obligatorios no estén vacíos
        if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono || !formData.estado) {
            mostrarMensaje("⚠️ Todos los campos obligatorios deben ser llenados.", "danger");
            return; // Detiene el envío
        }

        $.ajax({
            url: "https://ener3.onrender.com/contacto",
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                mostrarMensaje("✅ Mensaje enviado con éxito.", "success");
                console.log(response);
                $('#contactForm')[0].reset();
            },
            error: function(xhr) {
                let errorMsg = "❌ Error al enviar el formulario.";
                if (xhr.responseJSON && xhr.responseJSON.msg) {
                    errorMsg = "❌ " + xhr.responseJSON.msg; // Mensaje del backend
                }
                mostrarMensaje(errorMsg, "danger");
            }
        });
    });

    function mostrarMensaje(mensaje, tipo) {
        var mensajeDiv = $('#mensajeAlerta');
        mensajeDiv.removeClass("d-none alert-success alert-danger").addClass("alert alert-" + tipo);
        mensajeDiv.html(mensaje);
        mensajeDiv.fadeIn(); // Animación de aparición

        // Desaparece con animación después de 4 segundos
        setTimeout(function() {
            mensajeDiv.fadeOut();
        }, 2000);
    }
});
