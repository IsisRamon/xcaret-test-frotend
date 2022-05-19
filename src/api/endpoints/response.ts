import {instance} from '../config';
import { IResponse } from '~/interfaces/response';

export const GetResponse = async (): Promise<IResponse>=> {
 
    const response = await instance.get(``);
    const data = response.data.es as IResponse
    return data;
}