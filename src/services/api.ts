import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const services = {
    listStudents: async (month = 'todos') => {
        if (month === 'todos') {
            const { data } = await api.get<any[]>('/list-formated');
            const result = data?.map((item) => [item.final, item.pago, item.percentage, item.open]);
            const lastArray = data[data?.length - 1];

            return {
                data,
                result,
                lastArray
            }

        } else {
            const { data } = await api.get<any>(`/list/month/${month}`);
            const result = [[
                data.final,
                data.inadiplencia,
                data.pago,
                data.total,
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