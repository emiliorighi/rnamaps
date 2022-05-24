import {root} from '../../metadata.json'

//fake API call

class DataPortalService {

    getExperiments(params){
        return Object.freeze(root[params.organism])
    }
}

export default new DataPortalService()