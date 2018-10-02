$(document).ready(function () {
    $("#form-contact").validate({
        rules: {
            name: {   //name del input
                //reglas para el rolname
                required: true
            },
            subject: {
                required: true
            },
            email: {   //name del input
                //reglas para el rolname
                required: true,
                email: true
            },
            message: {   //name del input
                //reglas para el rolname
                required: true
            },
        },
        messages: {
            name: {
                required: "<strong>*Este campo es obligatorio</strong>"
            },
            subject: {
                required: "<strong>*Este campo es obligatorio</strong>"
            },
            email: {
                required: "<strong>*Este campo es obligatorio</strong>",
                email: "<strong>*Introduce un email válido</strong>"
            },
            message: {
                required: "<strong>*Este campo es obligatorio</strong>"
            },
        },
        highlight: function (element) {    //todos los elementos de color rojo
            //el elemento que este más cerca de form-group le ponga la clase de error
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {  //quitar el color rojo
            $(element).closest(".form-group").removeClass("has-error");
        },

        //elementos para poner el mensaje
        errorElement: "p",    //para ponerlo en un <p>
        errorClass: "text-danger",
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());    //insertar despues del padre
        },
        //cuando todo esta bien
        submitHandler: function (form) {
            sendMail();
            return false; //evito que haga el submit. 
        }
    });

    function sendMail(form) {
        let mail = {
            name: $("#name").val(),
            subject: $("#subject").val(),
            from: $("#email").val(),
            message: $("#message").val(),
            to: 'vizcainojimenez@gmail.com'
        };
        $.ajax({
            url: "http://206.189.64.53/pos/v1/sendMail/send/message",
            type: "post",
            data: mail
        }).done(function () {
            toastr.success('Se envió el correo correctamente', 'Acción Exitosa!');
        }).fail(function () {
            console.log(err);
            toastr.error('Ocurrió un error, intentalo más tarde.', 'Oops!');
        });
    }

});

    function showValor(valor) {
        $('#valorName').html(valor);
        switch (valor) {
            case 'Honestidad':
                $('#valorContent').html('Las personas que aquí laboramos estamos regidos bajo el principio básico de sinceridad con uno mismo y con los demás, un valor fundamental en la existencia humana que produce verdad interior. Una persona honesta es sincera no sólo en sus palabras y hechos, sino también, en su lenguaje corporal, transmite verdad en su mirada. Una persona honesta es un ejemplo a seguir por los demás, un ejemplo de bondad y de belleza interior. Ser fieles a nuestra ética personal y profesional.');
                break;
            case 'Pasión por el Servicio':
                $('#valorContent').html('Servimos por vocación, servimos porque elegimos servir. En todo momento mostramos actitud positiva que invite al cliente a sentirse en confianza y que se sienta cómodo y cautivado con nosotros. Para ello es necesario la suma total de los esfuerzos comunes, no solo para satisfacer las expectativas de nuestros clientes, sino para sorprenderlos gratamente.');
                break;
            case 'Responsabilidad':
                $('#valorContent').html('Responsabilidad es actuar conscientemente reconociendo que somos nosotros la causa directa o indirecta de lo que ocurre. Ser  responsable en el trabajo no sólo ayuda a elevar el nivel profesional en la empresa, sino también a adquirir hábitos positivos para la vida personal, misma que proyectamos a nuestros clientes.' +
                    'La responsabilidad en nuestra empresa ayuda a promover un ambiente productivo y profesional, damos reporte oportuno de las anomalías que se generan de manera voluntaria o involuntaria, nos preocupamos en mejorar constantemente nuestros rendimientos buscando ser una empresa altamente productiva. ' +
                    'Dedicamos tiempo a planear las diferentes acciones y tareas y con ello desarrollamos la sensibilidad de prever escenarios futuros para influir positivamente en ellos evitando situaciones problema.  ' +
                    'Asumimos con responsabilidad la tarea asignada y garantizamos que la llevaremos a término de manera profesional en tiempo y forma, por lo que, cada uno de nosotros, garantizamos confiabilidad en el equipo para cumplir  los compromisos hechos con nuestros clientes.');
                break;
            case 'Trabajo en equipo':
                $('#valorContent').html('Tenemos la convicción de que la suma de los distintos talentos a nivel individual hace posible el logro de los objetivos poniéndolos al servicio del conjunto. Reconocemos que el verdadero saber se comparte con humildad gracias a la retroalimentación que surge del diálogo asertivo y de la admiración mutua, esta certeza da una sólida cohesión al equipo. Sabemos que un equipo está formado por personas que trabajan en la misma dirección respetando un plan de acción concreto y siguiendo las directrices de un buen líder que se convierte en el mejor ejemplo a seguir y en un referente para los integrantes de ese equipo, regidos siempre bajo el principio de corresponsabilidad. Hemos descubierto que el trabajo en equipo aporta grandes fortalezas puesto que es una suerte y privilegio poder contar con un compañero de trabajo que puede ayudarte en un momento de dificultad: los éxitos se comparten al igual que los fracasos, en el contexto del equipo,  caminamos siempre juntos hacia la meta común.');
                break;
            case 'Orgullo por lo que hacemos':
                break;
                $('#valorContent').html('El trabajo nos dignifica, nos hace realizarnos como personas.  Con el trabajo expresamos lo que sentimos, lo que anhelamos, podemos manifestar nuestras ideas, desarrollamos la creatividad y los conocimientos que tenemos y cada vez más nos convertimos en seres humanos importantes para nuestra familia así como para la sociedad en la que vivimos.  El trabajo es un medio que tiene el hombre para alcanzar su desarrollo personal, el de su familia y el del conjunto social en el que vive. Es un derecho básico del ser humano, que le permite crecer con dignidad.	La calidad del trabajo y la calidad del trabajador son inseparables.  Un esfuerzo a medias no produce resultados a medias; simplemente no produce resultados.  Hagámoslo bien la primera vez y cada vez.  Con el trabajo bien hecho desarrollamos nuestro intelecto y nuestras habilidades tanto físicas como mentales puestas al servicio de los demás.');
        }
    }

    function showCategories(position, name) {
        $("#categoryTitle").html(name);
        let content = "<ul>";
        let categories = [
            {
                data: [
                    "Equipos de escritorio",
                    "Portátiles",
                    "Almacenamiento",
                    "Componentes",
                    "Partes para Laptops",
                    "Periféricos",
                    "Cables y adaptadores",
                    "Mantenimiento y limpieza",
                    "Energía",
                ]
            },
            {
                data: [
                    "Laptops de las mejores marcas",
                    "Equipos de escritorio",
                    "Cámaras semiprofesionales",
                ]
            },
            {
                data: [
                    "Mtto preventivo y correctivo"
                ]
            },
            {
                data: [
                    "Aplicaciónes móviles",
                    "Sitios web",
                    "Soluciones integrales",
                ]
            },
            {
                data: [
                    "Cableado estructurado",
                    "Redes de fibra optica",
                    "Videoconferencia HD",
                    "Telefonía IP",
                    "Redes Wireles",
                    "Diseño de Proyectos de IT",
                ]
            },
            {
                data: [
                    "Grabadores IP",
                    "Grabadores digitales",
                    "Cámaras tipo domo, bala, PTZ, ocultas y especiales",
                    "Reconocimiento facial",
                    "Localización de objetos",
                    "Reconocimiento de placas",
                    "Integración con sistemas de control de acceso",
                ]
            },
            {
                data: [
                    "Control de inventarios",
                    "Punto de venta",
                    "Facturación",
                    "Multisucursales",
                    "Compras",
                    "Inteligencia empresarial",
                    "Cajon de dinero, impresora de tikets y scaner de código de barras",
                ]
            }
        ];
        categories[position].data.forEach(element => {
            content += "<li>" + element + "</li>";
        });
        content += "</ul>"; 
       $("#categoryContent").html(content); 
    } 

