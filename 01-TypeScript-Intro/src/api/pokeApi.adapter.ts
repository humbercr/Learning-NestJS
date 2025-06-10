import axios from "axios";


export interface HttpAdapter {
    
    get<T>( url: string ): Promise<T>;

}



export class PokeApiFetchAdapter implements HttpAdapter {
async get<T>( url:string ): Promise<T> {
const resp = await fetch(url);
console.log('Con Fetch')
const data: T = await resp.json();
return data;
}  
}


export class PokeApiAdapter  implements HttpAdapter  {

    private readonly axios = axios;

    async get<T>(url: string ): Promise<T>{
        const { data } = await axios.get<T>(url);
        console.log('Con Axios')
        //peticicion get
        return data;
    }

    async post(url: string, data: any ) {

    }

    async patch(url: string, data: any ) {
    
}


    async delete(url: string ) {
    
}


}