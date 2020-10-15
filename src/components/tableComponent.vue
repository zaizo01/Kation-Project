<template>

    <div>
        <div class="flex items-center justify-between">
            <div class="flex items-center w-2/6">
                <h3 class="py-10 pr-2 text-xl font-medium text-info">Buscar:</h3>
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

            <div>
                <button class="px-4 py-2 text-xl font-semibold text-white rounded-lg bg-default">+ Nuevo
                    Domicilio</button>
            </div>
        </div>

        <div>
            <vue-good-table 
            :columns="columns" 
            :rows="rows" 
            styleClass="vgt-table condensed w-full"
            :search-options="{
            enabled: true,
            externalQuery: searchTerm
        }">

            </vue-good-table>
        </div>

    </div>
</template>

<script>
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
                rows: [{
                        suspensivos: '...',
                        personaNo: '1',
                        tipoDomicilio: 'Sucursal',
                        calle: 'Ave. Winton Churchil',
                        numero: 1020,
                        sector: 'Naco',
                        provincia: 'Distrito Nacional',
                        estado: 'Activo'

                    },

                    {
                        suspensivos: '...',
                        personaNo: '2',
                        tipoDomicilio: 'Trabajo',
                        calle: 'Manuel de Jesus Troncoso',
                        numero: 4,
                        sector: 'Evaristo Morales',
                        provincia: 'Santiago',
                        estado: 'Activo'

                    },

                    {
                        suspensivos: '...',
                        personaNo: '3',
                        tipoDomicilio: 'Verano',
                        calle: 'Paseo Oeste',
                        numero: 'S/N',
                        sector: 'Centro de la Ciudad',
                        provincia: 'La Romana',
                        estado: 'Activo'

                    },

                    {
                        suspensivos: '...',
                        personaNo: '4',
                        tipoDomicilio: 'Residencia',
                        calle: 'Calle Luis Alberty',
                        numero: 156,
                        sector: 'La Romana',
                        provincia: 'Distrito Nacional',
                        estado: 'Activo'

                    }
                ],
            };
        },
    };
</script>


<style>
 
</style>>