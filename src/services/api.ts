import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-principia-js.onrender.com'
})

export const services = {
    listStudents: async (month = 'todos') => {
        if (month === 'todos') {
            const { data } = await api.get<any[]>('/');
            const result = data?.map((item) => [item.month, item.percent, item.paidOut, item.open]);
            const lastArray = data[data?.length - 1];

            return {
                data,
                result,
                lastArray
            }

        } else {
            const { data } = await api.get<any>(`/list/month/${month}`);
            const result = [[
                data.month,
                data.percent,
                data.paidOut,
                data.open
            ]]

            return {
                data,
                result,
                lastArray: null
            }
        }
    },
    update: async (month: string, mat: string) => {
        try {
            const { data } = await api.post('/update', { month, mat })
            return data;
        } catch (e) {
            return {
                message: 'Não foi possível atualizar'
            }
        }
    },
    listStudentsPerMonth: async (month: string) => {
        const { data } = await api.get(`/list-students/${month}`);
        return data;
    }
}