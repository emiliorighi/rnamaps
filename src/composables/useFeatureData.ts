export async function useFeatureData() {
    let headers: string[] = []
    let parsedData: Record<string, any>[] = []

    try {
        const response = await fetch('../../genes-with-descriptions.tsv');
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
