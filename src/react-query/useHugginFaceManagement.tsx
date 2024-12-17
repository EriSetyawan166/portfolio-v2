import { HuggingfaceAPI } from "../services/hugginface";
import { CreatePredictPayload, CreatePredictResponse, GetPredictPayload, GetPredictResponse } from "../services/hugginface/models";
import { useMutation, useQuery } from "@tanstack/react-query";

export const QUERY_KEY = ["HUGGINGFACE_MANAGEMENT"];



export const fetchGetPredict = async (
    payload: GetPredictPayload,
): Promise<GetPredictResponse> => {
    const data = await HuggingfaceAPI.getPredict(payload);
    return data
}

export const useGetPredict = (
    payload: GetPredictPayload | undefined,
    options?: { enabled?: boolean }
) => {
    return useQuery<GetPredictResponse, Error>({
        queryKey: payload ? ['predict', payload.event_id] : ['predict'],
        queryFn: () => fetchGetPredict(payload!),
        enabled: !!payload?.event_id,
        ...options,
    });
};

const fetchDataPredict = async (
    payload: CreatePredictPayload,
): Promise<CreatePredictResponse> => {
    const data = await HuggingfaceAPI.createPredict(payload);
    return data
}

export const useSubmitPredict = () => {
    return useMutation<CreatePredictResponse, Error, CreatePredictPayload>({
        mutationFn: fetchDataPredict,
    });
}

export const saveToLocalStorage = (chatData: { input: string, response: string }) => {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    chatHistory.push(chatData);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
};

export const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('chatHistory') || '[]');
};

