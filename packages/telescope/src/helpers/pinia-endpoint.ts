export const pinia = `
import { defineStore, type StoreDefinition } from "pinia";
import type { LCDClient } from '@cosmology/lcd';

export const useEndpoint: StoreDefinition<
    'pinia.endpoint',
    { restClient: LCDClient },
    {},
    { setRestClient(client: LCDClient): void }
> = defineStore('pinia.endpoint', {
    state: () => {
        return {
            restClient: {} as LCDClient,
        }
    },
    actions: {
        setRestClient(client: LCDClient) {
            this.restClient = client
        }
    }
})
`;
