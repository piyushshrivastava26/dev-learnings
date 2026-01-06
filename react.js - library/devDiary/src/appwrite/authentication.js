import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') 
//     .setProject('66ffd0e300292f1c2889');              

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );

export class AuthService {
    client = new Client;
    account;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);

        this.account = new Account(this.client);
    }

    async createAccount ({name, email, password}) {
        try {
            const userAccount = await this.account.create(ID.unique(), name, email, password)
                if (userAccount) {
                    return this.login({email, password})
                } else {    
                    return userAccount
                }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}) {       
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser () {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
            // console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        // return null;
    }

    async logout ({}) {
        try {
            // return this.account.deleteSession('current')
            await this.account.deleteSessions( )
        } catch (error) {
            throw error
        }
    }
}


const authService = new AuthService();


export default authService


/*
export class AuthService {

}

const authService = new AuthService()


export default authService
--> now you can take access of the fn written inside AuthService just using dot with 'authService'
*/