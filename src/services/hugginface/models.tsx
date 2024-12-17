interface CreatePredictPayloadSchema {
    data: string[];
}

interface CreatePredictResponseSchema {
    event_id: string;
}

interface GetPredictPayloadSchema {
    event_id: string;
}


export type GetPredictResponse = string;
export type CreatePredictPayload = CreatePredictPayloadSchema;
export type CreatePredictResponse = CreatePredictResponseSchema;
export type GetPredictPayload = GetPredictPayloadSchema;