import { TConstructor } from '../models/t-constructor.model';
import { GeneseReact } from '../factories/genese-react.factory';
import { AxiosInstance } from 'axios';

export class GeneseReactService {


    /**
     * Genese instance for genese-react
     * @param axiosInstance
     * @param tConstructor
     * @returns {GeneseReact<T>}
     */
    instance<T>(axiosInstance: AxiosInstance, tConstructor?: TConstructor<T>): GeneseReact<T> {
        if (!tConstructor) {
            return new GeneseReact<undefined>(axiosInstance);
        } else {
            return new GeneseReact<T>(axiosInstance, tConstructor);
        }
    }
}
