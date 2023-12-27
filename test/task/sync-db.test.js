const { syncDB } = require("../../Task/sync-db")


describe('Pruebas en Sync-DB', () => {

    test('debe ejecutar el proceso 2 veces', () => {

        syncDB();
        const times = syncDB();
        console.log('Se llamo ', times ); 
        
        expect( times ).toBe( 2 );
    });
});