import { HTTPCodes } from '../../client/enums/enums';

export interface Auth {
  token: string;
  validar: {
    statusCode: HTTPCodes;
    message: string;
    data: boolean;
  };
}
