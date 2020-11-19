

export class Tools {


    /**
     * clone with deep copy
     * @param model
     * @returns {any}
     */
    static clone(model: any): any {
        if (!model || (!Array.isArray(model) && typeof model !== 'object')) {
            return model;
        }

        return Array.isArray(model) ? this.cloneArray(model) : this.cloneObject(model);
    }


    /**
     * Clone array with deep copy
     * @param model
     * @returns {any[]}
     */
    static cloneArray(model: any[]): any[] {
        const newArray: any[] = [];
        model.forEach(item => newArray.push(this.clone(item)));
        return newArray;
    }


    /**
    * Clone object with deep copy
    * @param model
    * @returns {object}
    */
    static cloneObject(model: object): object {
        const newObject = {};
        Object.keys(model).forEach(key => newObject[key] = this.clone(model[key]));
        return newObject;
    }


    /**
     * Check if an object is a primitive or not
     * @param target
     * @returns {boolean}
     */
    static isPrimitive(target: any): boolean {
        return ['string', 'number', 'boolean'].includes(typeof target);
    }


    /**
     * Returns a value by default if value to check doesn't exists
     * @param valueToCheck
     * @param valueByDefault
     * @returns {any}
     */
    static default(valueToCheck: any, valueByDefault: any): any {
        return valueToCheck ? valueToCheck : valueByDefault;
    }


    // --------------------------------------------------
    //                  REQUEST METHODS
    // --------------------------------------------------

    /**
     * Get the root path of the api
     * @param rootApi
     * @param path
     * @param id
     * @returns {string}
     */
    static apiRoot(rootApi: string, path?: string, id?: string,): string {
        const url = path ? rootApi + path : rootApi;
        return id ? `${url}/${id}` : url;
    }


    /**
     * Check if the path is correct
     * @param path
     * @returns {void}
     */
    static checkPath(path: string): void {
        if (!path || typeof path !== 'string') {
            throw Error('Incorrect Genese path.')
        }
    }
}
