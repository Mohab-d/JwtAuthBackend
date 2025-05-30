import AppError from "../errorHandler/definedError/AppError";
import ErrorType from "../errorHandler/ErrorType";
import ISchemaValidation from "../interface/ISchemaValidation";
import JoiSchemaValidator from "../schemaValidator/joi/JoiSchemaValidator";

type SchemaValidators = "joi";

class SchemaValidatorFactory {
  public createValidator(name: SchemaValidators): ISchemaValidation {
    switch (name) {
      case "joi":
        return new JoiSchemaValidator();
      default:
        throw new AppError(
          "NoSuchSchema",
          "This schema does not exist",
          true,
          ErrorType.ERR_IMPLEMENTATION,
          { schema: name },
        );
    }
  }
}

export default SchemaValidatorFactory;
