async function fetchFiles(path:string){
    const baseURL = import.meta.env.BASE_URL
    return await fetch(baseURL+path)
}


export async function getExpressionValues(geneId:string) {
    let headers: string[] = []
    let parsedData: Record<string, any> = {}

    try {
        const resp = await fetchFiles('erc.dmel.selected.replicates.trypsin.gene.TPM.idr_NA.tsv');
        const tsvData = await resp.text();
        // Split the TSV data into rows
        const rows = tsvData.split('\n');
        // Get headers from the first row
        headers = rows.shift()?.split('\t') ?? [];
        // Parse the TSV data into objects
        parsedData = rows
            .map(r => r.split('\t'))
            .filter(r => r[0] === geneId)
            .map(r => {
                const rowData: Record<string, any> = {};
                // Create an object with headers as keys and corresponding cells as values
                headers.filter(h => h !== 'geneName').forEach((header, index) => {
                    rowData[header] = Number(r[index]);
                });
                // Create an ID by combining labExpId and replicate
                return rowData;
            })[0]
        // Update component data
    } catch (error) {
        console.error('Error loading TSV file:', error);
    } finally {
        return { parsedData, headers }
    }
}

export async function useFeatureData() {
    let headers: string[] = []
    let parsedData: Record<string, any>[] = []

    try {
        const response = await fetchFiles("genes_with_descriptions.tsv");
        const tsvData = await response.text();
        // Split the TSV data into rows
        const rows = tsvData.split('\n');
        // Get headers from the first row
        headers = rows.shift()?.split('\t') ?? [];
        // Parse the TSV data into objects
        parsedData = rows
            .map(r => r.split('\t'))
            .map(r => {
                const rowData: Record<string, any> = {};
                // Create an object with headers as keys and corresponding cells as values
                headers.forEach((header, index) => {
                    rowData[header] = r[index];
                });
                // Create an ID by combining labExpId and replicate
                return rowData;
            })
        // Update component data
    } catch (error) {
        console.error('Error loading TSV file:', error);
    } finally {
        return { parsedData, headers }
    }
}

export async function useSampleData(dataType: string, organism: string) {
    let headers: string[] = []
    let parsedData: Record<string, any>[] = []

    try {
        const response = await fetchFiles('metadata.tsv');
        const tsvData = await response.text();

        // Split the TSV data into rows
        const rows = tsvData.split('\n');

        // Get headers from the first row
        headers = rows.shift()?.split('\t') ?? [];
        const dataTypeIndex = headers.findIndex(h => h === 'dataType')
        const organismIndex = headers.findIndex(h => h === 'organism')
        // Parse the TSV data into objects
        parsedData = rows
            .map(r => r.split('\t'))
            .filter(r => {
                return r[organismIndex] === organism
            })
            .filter(r => r[dataTypeIndex] === dataType)
            .map(r => {
                const rowData: Record<string, any> = {};
                // Create an object with headers as keys and corresponding cells as values
                headers.forEach((header, index) => {
                    rowData[header] = r[index];
                });

                // Create an ID by combining labExpId and replicate
                rowData.id = rowData.labExpId + '_' + rowData.replicate;

                return rowData;
            });
        // Update component data
    } catch (error) {
        console.error('Error loading TSV file:', error);
    } finally {
        return { parsedData, headers }
    }
}
