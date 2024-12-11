import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";
import { redirect } from "react-router-dom";

const registerAction = async ({ request}) => {

        const formData = await request.formData();
        try {
            await account.create(generateID(), formData.get('email'), formData.get('password'), formData.get('name'), );
        }catch (error) {
            return {
                message: error.message,
            }
        }

        try {
            await account.createEmailSession(formData.get('email'), formData.get('password'), );
        } catch (error) {
            console.log('Error creating email session:', error.message);
            return redirect('/login');
        }

        return redirect('/');
};

export default registerAction;