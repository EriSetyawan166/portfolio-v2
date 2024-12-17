import { CreatePredictPayload, CreatePredictResponse, GetPredictPayload, GetPredictResponse } from "./models";
import request from "../../lib/huggingface/request";

const handleError = (error: any) => {
    console.error("Hugginface API error:", error);
    throw error.response?.data || error.message || "An unexpected error occurred";
};

export const HuggingfaceAPI = {
    async createPredict(payload: CreatePredictPayload): Promise<CreatePredictResponse> {
        try {
            const response = await request.post<CreatePredictResponse>("/predict", payload);
            return response.data;
        } catch (error: any) {
            return handleError(error);
        }
    },

    async getPredict(params: GetPredictPayload): Promise<GetPredictResponse> {
        try {
            const response = await request.get<GetPredictResponse>(`/predict/${params.event_id}`);
            return response.data;
        } catch (error: any) {
            return handleError(error);
        }
    },
}