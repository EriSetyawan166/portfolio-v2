import { Form, Input, Button } from 'antd';
import useForm from './useForm';
import { useState } from 'react';
import palicoIcon from '../../assets/img/palico.png'
import ReactMarkdown from 'react-markdown';

const ChatAssistant = () => {
    const [chatData, setChatData] = useState<any>(null);

    const { form, onFinish, isLoading, onFinishFailed } = useForm((data) => {
        setChatData(data);
    });

    console.log("chatdata", chatData);
    return (
        <div className="p-2 lg:p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Tanya Ima 🐱</h1>

            {/* Gambar Kucing + Bubble Speech */}
            <div className="flex items-start gap-3">
                <img
                    src={palicoIcon}
                    alt="Cute Cat"
                    className="w-12 h-12 rounded-full"
                />
                <div className="relative bg-gray-100 text-gray-800 p-3 rounded-lg shadow mb-5">
                    <p className="text-sm">
                        {chatData ? (
                            <ReactMarkdown>{chatData.response}</ReactMarkdown>
                        ) : (
                            <p>Halo! Aku Ima 🐱. Aku di sini untuk membantumu dengan apa saja, terutama jika kamu ingin tahu lebih banyak tentang temanku, Muhammad Eri Setyawan!</p>
                        )}
                    </p>
                    <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 border-8 border-transparent border-r-gray-100"></div>
                </div>
            </div>
            {/* Form Input */}
            <Form
                className="flex items-center gap-3 mb-6"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="chatUser"
                    className="flex-1 focus:ring-blue-400 mb-0"
                    rules={[
                        {
                            required: true,
                            message: "Kamu kalo nanya jangan kosong dong",
                        },
                    ]}
                >
                    <Input
                        type="text"
                        placeholder="Ketik sesuatu..."
                    />
                </Form.Item>
                <Button
                    type="primary"
                    loading={isLoading}
                    htmlType="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Kirim
                </Button>
            </Form>
        </div>

    );
};

export default ChatAssistant;
