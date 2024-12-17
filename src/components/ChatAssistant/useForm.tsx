import React from 'react';
import { Form, notification } from 'antd';
import { fetchGetPredict, useSubmitPredict } from '../../react-query/useHugginFaceManagement';


const useForm = (onSuccess?: (chatData: any) => void) => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { mutateAsync } = useSubmitPredict();


    const onFinish = async (values: any) => {
        try {
            setIsLoading(true);
            const createPredict = await mutateAsync({ data: [values.chatUser] });

            const fetchedData = await fetchGetPredict({ event_id: createPredict.event_id });
            const messageString = fetchedData.split('data: ')[1];
            const messageArray = JSON.parse(messageString);

            const message = messageArray[0]
            const chatData = {
                input: values.chatUser,
                response: message,
            };

            if (onSuccess) {
                onSuccess(chatData);
            }

            setIsLoading(false);
            form.resetFields();

        } catch (err) {
            console.error('Error during form submission:', err);
            setIsLoading(false);
            notification.error({
                message: 'Error',
                description: (err as { message?: string })?.message || 'An error occurred while submitting.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return {
        form,
        onFinish,
        onFinishFailed,
        isLoading,
    };
};

export default useForm;
