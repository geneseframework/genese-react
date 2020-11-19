
import { Tools } from '../services/tools.service';
import { GeneseConfig } from '../models/genese-config.model';

export class GeneseEnvironmentService {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    // API URL
    private _api: string;
    private static instance: GeneseEnvironmentService;

    get api(): string {
        return this._api;
    }

    set api(api: string) {
        this._api = api;
    }


    /**
     * Configure a Singleton so the service is present only one time in the project
     * @returns {GeneseEnvironmentService}
     */
    static getInstance(): GeneseEnvironmentService {
        if (!GeneseEnvironmentService.instance) {
            GeneseEnvironmentService.instance = new GeneseEnvironmentService();
        }
        return GeneseEnvironmentService.instance;
    }


    /**
     * Configure Genese environment
     * @param config
     */
    setEnvironment(config: GeneseConfig) {
        if (config) {
            this.api = Tools.default(config.api, 'localhost:3000');
        }
    }
}
