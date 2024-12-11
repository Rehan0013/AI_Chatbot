import { Client, Account, Avatars } from "appwrite";

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('phoenix13');

const account = new Account(client);
const avatars = new Avatars(client);

export { account, avatars };