<template>

    <div>
        <div class="flex flex-wrap items-center justify-between">
            <div class="flex items-center md:w-2/6 sm:w-4/5">
                <h3 class="py-10 pr-2 font-medium md:text-xl sm:text-sm text-info">Buscar:</h3>
                <div class="flex items-center w-full px-4 py-2 bg-white border border-gray-500 rounded shadow-sm">
                    <button class="flex"><svg class="w-5 h-5 text-gray-600 cursor-pointer " fill="none"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg></button>
                    <input type="text" placeholder="Escribe lo que deseas buscar..."
                        class="w-full pl-3 bg-transparent rounded-lg focus:outline-none" v-model="searchTerm">
                </div>
            </div>

            <div class="sm:w-1/2 sm:px-3 sm:my-3">
                <button class="px-4 py-2 font-semibold text-white rounded-lg md:text-xl bg-default sm:text-sm">+ Nuevo
                    Domicilio</button>
            </div>
        </div>

        <div class="my-3">
            <vue-good-table :columns="columns" :rows="rows" styleClass="vgt-table condensed w-full" :search-options="{
            enabled: true,
            externalQuery: searchTerm
        }">

            </vue-good-table>
        </div>

    </div>
</template>

<script>
    const baseUrl = 'http://localhost:3000/info';
    import axios from 'axios';

    export default {
        name: 'my-component',
        data() {
            return {
                searchTerm: '',
                columns: [{
                        label: '...',
                        field: 'suspensivos'
                    },
                    {
                        label: 'Persona No.',
                        field: 'personaNo'
                    },
                    {
                        label: 'Tipo Domicilio',
                        field: 'tipoDomicilio',

                    },
                    {
                        label: 'calle',
                        field: 'calle',

                    },
                    {
                        label: 'numero',
                        field: 'numero',
                    },
                    {
                        label: 'sector',
                        field: 'sector',

                    },
                    {
                        label: 'provincia',
                        field: 'provincia',

                    },
                    {
                        label: 'estado',
                        field: 'estado',
                    },
                ],
                rows: [],
            };
        },
        methods: {
            getData() {
                axios.get(baseUrl).then(resp => {
                    for (let i = 0; i < resp.data.length; i++) {
                        this.rows.push({
                            suspensivos: resp.data[i].suspensivos,
                            personaNo: resp.data[i].personaNo,
                            tipoDomicilio: resp.data[i].tipoDomicilio,
                            calle: resp.data[i].calle,
                            numero: resp.data[i].numero,
                            sector: resp.data[i].sector,
                            provincia: resp.data[i].provincia,
                            estado: resp.data[i].estado,
                        })
                    }

                })
            },
        },
        created() {
            this.getData();
        },
    };
</script>

<style>
  
</style>>