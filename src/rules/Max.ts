import Validator from "./Validator"

class Max implements Validator {

    validate(data: string, max: string) {
        return {
            isValid        : data.toString().length <= Number(max),
            additionalData : {
                max: max
            }
        }
    }

}

export default Max