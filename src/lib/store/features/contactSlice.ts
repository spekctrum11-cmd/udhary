import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitContactApi, ContactFormData } from '@/services/contactService';

interface ContactState {
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
}

const initialState: ContactState = {
    status: 'idle',
    error: null,
};

// Async thunk for handling API submission
export const submitContact = createAsyncThunk(
    'contact/submitContact',
    async (formData: ContactFormData, { rejectWithValue }) => {
        try {
            console.log('Submitting contact/booking data via Thunk to Service:', JSON.stringify(formData, null, 2));
            const response = await submitContactApi(formData);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to book appointment');
        }
    }
);

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        resetContact: (state) => {
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContact.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(submitContact.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(submitContact.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload as string;
            });
    },
});

export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;
