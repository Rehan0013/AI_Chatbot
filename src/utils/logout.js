import { account } from "../lib/appwrite";

const logout = async (navigate) => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        return console.log('error', error);
    }

    return navigate('/login');
}

export default logout;