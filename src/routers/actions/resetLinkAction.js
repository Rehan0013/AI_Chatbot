import {account} from '../../lib/appwrite';

const resetLinkAction = async ({request}) => {
    const formData = await request.formData();
    const email = formData.get("email");
    try {
        await account.createRecovery(email, `${location.origin}/reset-password`);
        return {ok: true, message: "Password reset link sent to your email"};
    } catch (error) {
       console.log(error);

       return {ok: false, message: error.message};
    }
};

export default resetLinkAction;