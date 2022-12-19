"https://api.flybase.org/api/v1.0/gene/summaries/auto/FBgn0000490"
import axios from '../axios'

const flyBase = axios.flyBase

class FlyBaseService {

    getGeneIdSummary(id){
        return flyBase.get(`/gene/summaries/auto/${id}`)
    }

}

export default new FlyBaseService();