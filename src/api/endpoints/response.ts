import {instance} from '~/api/config';
import { IResponse } from '~/interfaces';

export const GetResponse = async (language): Promise<IResponse>=> {
    const response = await instance.get(``);
    const data = response.data[language] as IResponse
    return data;
}