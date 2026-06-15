import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitApplicationApi, ApplyFormData } from '@/services/applyService';

export type FormData = ApplyFormData;

interface ApplyState {
    status: 'idle' | 'loading' | 'success' | 'error';
    isEligible: boolean;
    error: string | null;
}

const initialState: ApplyState = {
    status: 'idle',
    isEligible: true,
    error: null,
};

// Async thunk for handling API submission
export const submitApplication = createAsyncThunk(
    'apply/submitApplication',
    async (formData: ApplyFormData, { rejectWithValue }) => {
        try {
            console.log('Submitting form data via Thunk to Service:', JSON.stringify(formData, null, 2));
            const response = await submitApplicationApi(formData);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to submit application');
        }
    }
);

const applySlice = createSlice({
    name: 'apply',
    initialState,
    reducers: {
        resetApplication: (state) => {
            state.status = 'idle';
            state.isEligible = true;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitApplication.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(submitApplication.fulfilled, (state, action) => {
                state.status = 'success';
                state.isEligible = action.payload.isEligible;
            })
            .addCase(submitApplication.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload as string;
            });
    },
});

export const { resetApplication } = applySlice.actions;
export default applySlice.reducer;
