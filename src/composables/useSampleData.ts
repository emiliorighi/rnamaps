export async function useSampleData(dataType: string, organism: string) {
    let headers: string[] = []
    let parsedData: Record<string, any>[] = []

    try {
        const response = await fetch('/metadata.tsv');
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
