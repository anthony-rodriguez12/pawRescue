import { HTTPCodes } from "../enums/enums";

export interface Auth {
  token: string;
  validar: {
    statusCode: HTTPCodes;
    message: string;
    data: boolean;
  };
}
