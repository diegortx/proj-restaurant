import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    tables: [{
            id: 1,
            hour: '00:00',
            value: 0,
            payment: [],
            order: {
                products: [{
                        name: 'Cerveja Preta',
                        price: 10,
                        count: 0

                    },
                    {
                        name: 'Taça de vinho',
                        price: 12,
                        count: 0

                    },
                    {
                        name: 'Caipirinha',
                        price: 13,
                        count: 0

                    },
                    {
                        name: 'Guaraná',
                        price: 6,
                        count: 0
                    },
                    {
                        name: 'X-Tudo',
                        price: 30,
                        count: 0
                    },
                    {
                        name: 'X-Salada',
                        price: 25,
                        count: 0
                    },
                    {
                        name: 'X-Bacon',
                        price: 27,
                        count: 0
                    }
                ]
            }


        },
        {
            id: 2,
            hour: '00:00',
            value: 0,
            payment: [],
            order: {
                products: [{
                        name: 'Cerveja Preta',
                        price: 10,
                        count: 0

                    },
                    {
                        name: 'Taça de vinho',
                        price: 12,
                        count: 0

                    },
                    {
                        name: 'Caipirinha',
                        price: 13,
                        count: 0

                    },
                    {
                        name: 'Guaraná',
                        price: 6,
                        count: 0
                    },
                    {
                        name: 'X-Tudo',
                        price: 30,
                        count: 0
                    },
                    {
                        name: 'X-Salada',
                        price: 25,
                        count: 0
                    },
                    {
                        name: 'X-Bacon',
                        price: 27,
                        count: 0
                    }
                ]
            }
        },
        {
            id: 3,
            hour: '00:00',
            value: 0,
            payment: [],
            order: {
                products: [{
                        name: 'Cerveja Preta',
                        price: 10,
                        count: 0

                    },
                    {
                        name: 'Taça de vinho',
                        price: 12,
                        count: 0

                    },
                    {
                        name: 'Caipirinha',
                        price: 13,
                        count: 0

                    },
                    {
                        name: 'Guaraná',
                        price: 6,
                        count: 0
                    },
                    {
                        name: 'X-Tudo',
                        price: 30,
                        count: 0
                    },
                    {
                        name: 'X-Salada',
                        price: 25,
                        count: 0
                    },
                    {
                        name: 'X-Bacon',
                        price: 27,
                        count: 0
                    }
                ]
            }
        },
        {
            id: 4,
            hour: '00:00',
            value: 0,
            payment: [],
            order: {
                products: [{
                        name: 'Cerveja Preta',
                        price: 10,
                        count: 0

                    },
                    {
                        name: 'Taça de vinho',
                        price: 12,
                        count: 0

                    },
                    {
                        name: 'Caipirinha',
                        price: 13,
                        count: 0

                    },
                    {
                        name: 'Guaraná',
                        price: 6,
                        count: 0
                    },
                    {
                        name: 'X-Tudo',
                        price: 30,
                        count: 0
                    },
                    {
                        name: 'X-Salada',
                        price: 25,
                        count: 0
                    },
                    {
                        name: 'X-Bacon',
                        price: 27,
                        count: 0
                    }
                ]
            }
        },
        {
            id: 5,
            hour: '00:00',
            value: 0,
            payment: [],
            order: {
                products: [{
                        name: 'Cerveja Preta',
                        price: 10,
                        count: 0

                    },
                    {
                        name: 'Taça de vinho',
                        price: 12,
                        count: 0

                    },
                    {
                        name: 'Caipirinha',
                        price: 13,
                        count: 0

                    },
                    {
                        name: 'Guaraná',
                        price: 6,
                        count: 0
                    },
                    {
                        name: 'X-Tudo',
                        price: 30,
                        count: 0
                    },
                    {
                        name: 'X-Salada',
                        price: 25,
                        count: 0
                    },
                    {
                        name: 'X-Bacon',
                        price: 27,
                        count: 0
                    }
                ]
            }
        },

    ],
}

const mutations = {
    setCount: (state, payload) => {
        const {
            id,
            value,
            hour
        } = payload
        const table = state.tables.find(table => table.id === id)
        table.value = value

        if (table.hour == '00:00')
            table.hour = hour

        if (value == 0)
            table.hour = '00:00'
    },
    setPayments: (state, payload) => {
        const {
            id,
            date,
            value
        } = payload
        const table = state.tables.find(table => table.id === id);
        table.value = table.value - value;

        table.payment.push({
            date: date,
            value: value
        })

    },
    closeTable: (state, payload) => {
        const {
            id
        } = payload
        const table = state.tables.find(table => table.id === id);

        table.hour = '00:00',
            table.value = 0,
            table.payment = [],
            table.order = {
                products: [{
                        name: 'Cerveja Preta',
                        price: 10,
                        count: 0

                    },
                    {
                        name: 'Taça de vinho',
                        price: 12,
                        count: 0

                    },
                    {
                        name: 'Caipirinha',
                        price: 13,
                        count: 0

                    },
                    {
                        name: 'Guaraná',
                        price: 6,
                        count: 0
                    },
                    {
                        name: 'X-Tudo',
                        price: 30,
                        count: 0
                    },
                    {
                        name: 'X-Salada',
                        price: 25,
                        count: 0
                    },
                    {
                        name: 'X-Bacon',
                        price: 27,
                        count: 0
                    }
                ]
            }

    }
}

const actions = {
    addItem({
        commit
    }, item) {
        commit('pushItem', item);
    },
}

const getters = {
    tableList: (state) => {
        return state.items;
    },
}

export default new Vuex.Store({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
})