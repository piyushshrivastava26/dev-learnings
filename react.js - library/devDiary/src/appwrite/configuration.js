import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Functions, Query} from 'appwrite'

 
export class Service{
    client = new Client()
    databases;
    bucket;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)

        this.databases = new Databases(this.client) 

        this.bucket = new Storage(this.client)
    }

    async createPost ({title, contentInTitle, imagesID, activeStatus, UserID, slug }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    contentInTitle,
                    imagesID,
                    activeStatus,
                    UserID,
                    slug,
                    createdAt : new Date().getTime()
                }
            )
        } catch (error) {
            console.log('Appwrite service :: createPost :: error', error);
            
        }
    }

    async updatePost (slug, {title, contentInTitle, imagesID, activeStatus, UserID}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    contentInTitle,
                    imagesID,
                    activeStatus,
                    UserID
                }
            )
        } catch (error) {
            console.log('Appwrite service :: updatePost :: error', error);
        }
    }

    async deletePost (slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log('Appwrite service :: deletePost :: error', error);
            return false;
        }
    }


    async getPost (slug) {  // slug  is a unigue id for that particular post or ID.unique can be used.
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log('Appwrite service :: getPost :: error', error);
        }
    }

    async getAllPost (queries = [Query.equal('isActive', activeStatus)]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.log('Appwrite service :: getAllPost :: error', error);
            return false    // if nothing is found in try
        }
    }    


    // services for uploading and deleting File, sooner will move it to another folder 

    async uploadFile(file) {
        try {
            return await this.bucket.uploadFile(
                conf.appwriteBucketID,
                ID.unique,
                file
            )
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error);
        }
    }
    // will return the id of the file to be used in creating post

    async filePreview (fileID) {
        try {
            this.bucket.getFilePreview(
                conf.appwriteBucketID,
                fileID
            )
        } catch (error) {
            console.log('Appwrite service :: filPreview :: error', error);
            return false;
        }
    }

    async deleteFile(fileID) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error', error);
            return false;
        }
    }
}


const service = new Service

export default service