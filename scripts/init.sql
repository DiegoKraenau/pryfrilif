db.globalforms.save({
    code: 'GLOBAL_FORM',
    categories: [
        {
            name:'Regulación Local',
            subcategories: [
                {
                    name:'Seguridad Incorporada en Tarjeta',
                    controls: [
                        {
                            name:'Integración de chip con mecanismos de autenticación para validar la autenticidad.', 
                        },
                         {
                            name:'Aplicación de criptografía robusta para la generación y almacenamiento de códigos de transacciones únicas.', 
                        },
                         {
                            name:'Aplicación de autenticación de datos para operaciones fuera de línea.', 
                        },
                         {
                            name:'Bloqueo de seguridad para transacciones en línea para tarjetas extraviadas o sustraídas.', 
                        },
                        {
                            name:'Emisión de tarjetas con chip EMV, PAN, nombre de tarjeta habiente, fecha de expiración, CVV y banda magnética.', 
                        },
                        {
                            name:'Capacidad de habilitación y deshabilitación de tarjeta para compras por internet y en el extranjero.', 
                        },
                    ]
                },
                 {
                    name:'Seguridad relacionada al Usuario',
                    controls: [
                        {
                            name:'Cambio obligatorio de clave inicial antes de primera operación.', 
                        },
                         {
                            name:'Capacidad de realizar cambios de clave de manera ilimitada.', 
                        },
                         {
                            name:'Uso de autenticación ante operaciones de disposición o retiro de efectivo, compras y otros, que sean identificados como riesgo de fraude.', 
                        },
                         {
                            name:'Notificaciones de operaciones realizadas a través de mensaje de texto, correos electrónicos, llamadas y entre otros, definidos por el usuario', 
                        },
                        {
                            name:'Notificaciones sobre transacciones electrónicas realizadas a nivel internacional.', 
                        },
                        {
                            name:'Capacidad de establecer el monto máximo sin necesidad de autenticación para operaciones de micropagos.', 
                        },
                    ]
                },
                  {
                    name:'Seguridad respecto a monitoreo y realización de operaciones',
                    controls: [
                        {
                            name:'Monitoreo de operaciones para detectar comportamientos y patrones de fraude en transacciones del usuario.', 
                        },
                         {
                            name:'Solicitud de documento oficial de identidad al usuario en transacciones virtuales de alto riesgo de fraude.', 
                        },
                         {
                            name:'Solicitud de documento oficial de identidad al usuario en transacciones físicas de alto riesgo de fraude.', 
                        },
                         {
                            name:'Autenticación de múltiple factor en transacciones de alto riesgo de fraude.', 
                        },
                        {
                            name:'Solicitud de clave secreta al usuario por operaciones de retiro o disposición de efectivo.', 
                        },
                    ]
                }, 
                 {
                    name:'Políticas y controles de manejo interno de información',
                    controls: [
                        {
                            name:'Implementación de firewalls en red interna de la entidad financiera.', 
                        },
                         {
                            name:'Implementación de políticas para uso de clave secreta y parámetros de seguridad dentro de la red interna de la entidad financiera.', 
                        },
                         {
                            name:'Implementación de políticas de almacenamiento, retención y eliminación de datos y manejo de llaves criptográfica.', 
                        },
                         {
                            name:'Cifrado para transmisiones de información sensible y crítica en redes públicas.', 
                        },
                        {
                            name:'Software y programas antivirus en computadores y servidores.', 
                        },
                        {
                            name:'Instalación de sistemas o aplicaciones informáticas originales y seguras.', 
                        },
                        {
                            name:'Política de restricción que permita al personal autorizado el acceso a los datos de usuario.', 
                        },
                        {
                            name:'Política de asignación de token para el acceso a través de software a datos de usuario.', 
                        },
                        {
                            name:'Control de acceso físico para protección de datos de usuarios.', 
                        },
                         {
                            name:'Registo y monitoreo de accesos a recursos de red y datos de usuarios.', 
                        },
                         {
                            name:'Monitoreo y análisis de vulnerabilidades constantes en la red interna de la entidad financiera.', 
                        },
                         {
                            name:'Realización de pruebas de penetración externas e internas en la entidad financiera.', 
                        },
                    ]
                }, 
                 {
                    name:'Seguimiento de operaciones por posible fraude',
                    controls: [
                        {
                            name:'Utilización de canales de comunicación con el usuario ante posibles operaciones fraudelentas o de alto riesgo.', 
                        },
                         {
                            name:'Bloqueo temporal o cancelación definitiva de tarjeta en caso de fraude o actividad sospechosa.', 
                        }, 
                    ]
                }, 
                    
            ]
        },
        {
            name:'Regulación adicional y extranjera',
            subcategories: [
                {
                    name:'Seguridad en banca móvil y web',
                    controls:[
                        {
                            name:'Detección y prevención de accesos de dispositivos "rooteados" o con "jailbreak".',
                        },
                         {
                            name:'Cierre de sesión automático por inactividad de banca en línea y aplicación móvil.', 
                        }, 
                         {
                            name:'Uso de factores robustos de autenticación para las transacciones bancarias de Banca por Internet.', 
                        }, 
                         {
                            name:'Procedimiento de re-activación de cuenta mediante canales digitales en caso de varios intentos fallidos al inicio de sesión de la banca en línea y aplicación móvil. ', 
                        }, 
                         {
                            name:'Desactivación de versiones anteriores de la aplicación móvil que no exceda los 6 meses de lanzamiento de la nueva versión.', 
                        }, 
                         {
                            name:'Encriptación de aplicación de la banca móvil.', 
                        }, 
                         {
                            name:'Renovación y actualización de certificados digitales dentro del ecosistema de pago.', 
                        }, 
                         {
                            name:'Posibilidad de restricción de retiro de efectivo en ATMs locales y extranjeros', 
                        }, 
                        {
                            name:'Parametrización de alertas de sistemas y monitoreo de parámetros aplicables como zonas horarias, origen de la dirección IP, biometría del comportamiento y entre otros.', 
                        }, 
                    ]
                },
                {
                    name:'Políticas y controles de manejo interno de información',
                    controls:[
                        {
                            name: 'Implementación de técnicas de mitigación para ataques DDoS.',
                        },
                         {
                            name:'Encriptación de alto nivel de los protocolos de comunicación en canales de pagos digitales.', 
                        }, 
                         {
                            name:'Establecimiento de acuerdos de confidencialidad y responsabilidad de servicios prestados por terceros o proveedores a la institución financiera.', 
                        }, 
                         {
                            name:'Incorporamiento de framework ante amenazas durante gestión del ciclo de vida de aplicaciones en desarrollo.', 
                        }, 
                         {
                            name:'Capacitación y evaluación de colaboradores relacionado a las políticas internas de la entidad financiera.', 
                        }, 
                         {
                            name:'Canales y campañas de educación, conscientización y conocimientos acerca de los métodos de fraude y su prevención.', 
                        }, 
                         {
                            name:'Capacitación y evaluación de colaboradores relacionado a las políticas internas de la entidad financiera.', 
                        }, 
                         {
                            name:'Pólizas de seguro para ciberfraude y ciberataque.', 
                        }, 
                    ]
                },
                {
                    name:'Seguridad para transacciones de e-commerce',
                    controls:[
                        {
                            name: 'Configuración de montos mínimos de gasto por tarjeta.',
                        },
                         {
                            name:'Renovación y actualización de certificados digitales dentro del ecosistema de pago.', 
                        }, 
                         {
                            name:'Posibilidad de restricción de compras por e-commerce.', 
                        }, 
                         {
                            name:'Exigencia de uso de código de validación por transacción en comercios.', 
                        }, 
                    ]
                },
                {
                    name:'Experiencia del Usuario',
                    controls:[
                        {
                            name: 'Transacciones de pagos Pair-to-Pair o Pair-to-Business.',
                        },
                         {
                            name:'Pagos mediante NFC en dispositivos con sistema operativo Android.', 
                        }, 
                         {
                            name:'Pagos con comandos de voz mediante asistentes virtuales.', 
                        }, 
                        {
                            name:'Geolocalización de transacciones bancarias para proceso de validación en pagos electrónicos (viaje imposible).', 
                        }, 
                        {
                            name:'Adhesión del uso de criptomonedas vinculado a la cuenta bancaria.', 
                        }, 
                        {
                            name:'Detección de acceso a redes públicas mediante la aplicación móvil de banca.', 
                        }, 
                        {
                            name:'Detección de malware o aplicaciones sospechosas desde la aplicación móvil de banca.', 
                        }, 
                    ]
                },
            ]
        }
    ]
})