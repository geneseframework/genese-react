// Modules
import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { GeneseMapper } from 'genese-mapper';

// Services

// Models
import { TConstructor } from '../models/t-constructor.model';

// Enums
import { ResponseStatus } from '../enums/response-status';

export class GeneseReact<T> {


    private readonly geneseMapperServiceT?: GeneseMapper<T>;


    constructor(private readonly axiosInstance: AxiosInstance, private readonly tConstructor?: TConstructor<T>) {
        this.geneseMapperServiceT = this.tConstructor ? new GeneseMapper<T>(this.tConstructor) : undefined;

    }


    /**
     * Deletes an element and returns success or failed status.
     * This method needs to respect Genese standard model
     * @param path the route of the endpoint
     * @param options the options of the request
     * @returns {Promise<T | ResponseStatus>}
     */
    delete(path: string, options?: AxiosRequestConfig): Promise<T | ResponseStatus> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.delete(path, options as unknown)
                .then((res: AxiosResponse) => {
                    resolve(this.tConstructor ? this.geneseMapperServiceT.map(res) : res?.status === 200 ? ResponseStatus.SUCCESS : ResponseStatus.FAILED);
                })
                .catch(function (error: any) {
                    reject(error);
                });
        });
    }


    /**
     * Calls GET method and returns eventually a response
     * @param path
     * @param options
     * @returns {Promise<T>}
     */
    get(path: string, options?: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.get(path, options)
                .then((res: AxiosResponse) => {
                    resolve(this.geneseMapperServiceT.map(res.data));
                })
                .catch(function (error: any) {
                    reject(error);
                });

        });

    }


    /**
     * Calls POST request and returns eventually a response
     * @param path          the route of the endpoint
     * @param body          the body of the request
     * @param options       the options of the request
     * @returns {Promise<T | any>}
     */
    post(path: string, body: any, options?: AxiosRequestConfig): Promise<T | any> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.post(path, body, options).then(
                (res: AxiosResponse) => {
                    resolve(this.geneseMapperServiceT.map(res.data));
                }
            ).catch(error => {
                reject(error);
            });
        });

    }


    /**
     * Calls PUT request and returns eventually a response
     * @param path          the route of the endpoint
     * @param body          the body of the request
     * @param options       the options of the request
     * @returns {Promise<T | any>}
     */
    put(path: string, body: any, options?: AxiosRequestConfig): Promise<T | any> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.put(path, body, options).then(
                (res: AxiosResponse) => {
                    resolve(this.geneseMapperServiceT.map(res.data));
                }
            ).catch(error => {
                reject(error);
            });

        });


    }


    /**
     * Calls PATCH request and returns eventually a response
     * @param path          the route of the endpoint
     * @param body          the body of the request
     * @param options       the options of the request
     * @returns {Promise<T | any>}
     */
    patch(path: string, body: any, options?: AxiosRequestConfig): Promise<T | any> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.patch(path, body, options).then(
                (res: AxiosResponse) => {
                    resolve(this.geneseMapperServiceT.map(res.data));
                }
            ).catch(error => {
                reject(error);
            });
        });
    }


    /**
     * Calls a GET request in order to get all elements of an array and to map them with T[] type
     * @param path       the route of the endpoint
     * @param options    the options of the request
     * @returns {Promise<T[]>}
     */
    getAll(path: string, options?: AxiosRequestConfig): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.get(path, options).then(
                (res: AxiosResponse) => {
                    resolve(res?.data ? this.geneseMapperServiceT.arrayMap(res.data) : []);
                }
            ).catch(error => {
                reject(error);
            });
        });
    }
}

