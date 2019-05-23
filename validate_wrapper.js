import validation from 'validate.js'

export default function validate(fieldName, value) {
    var constraints = {
        nombre: {
          presence: true,
          length: {
              minimum: 1,
              message: ' es requerido',
          }
        },
        correo: {
            presence: true,
            format: {
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: ' con error en formato',
            }
        },
        ubicacion: {
            presence: true,
            length: {
                minimum: 1,
                message: ' es requerida',
            }
          },
    };

    var formValues = {}
    formValues[fieldName] = value

    var formFields = {}
    formFields[fieldName] = constraints[fieldName]


    const result = validation(formValues, formFields)
    
    if (result) {
	return result[fieldName][0]
    }
    return null
}