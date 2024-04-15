def parse_tsv(tsv_file):
    data = {}
    with open(tsv_file, 'r') as file:
        for line in file:
            if not line.startswith('#'):
                parts = line.strip().split('\t')
                gene_name = parts[0]
                description = parts[1]
                data[gene_name] = description
    return data

def create_description_tsv(first_tsv, second_tsv, output_tsv):
    # Parse the second TSV file to extract gene descriptions
    descriptions = parse_tsv(second_tsv)

    # Parse the first TSV file to extract all genes
    genes = parse_tsv(first_tsv)

    # Create a new TSV file with gene names and descriptions
    with open(output_tsv, 'w') as file:
        file.write("Gene\tDescription\n")
        for gene, description in genes.items():
            if gene in descriptions:
                file.write(f"{gene}\t{descriptions[gene]}\n")

# Paths to the TSV files
first_tsv_file = 'rna-seq-fly-no-trypsin-TPM-AVG.tsv'
second_tsv_file = 'automated_gene_summaries_fb_2024_01.tsv'
output_tsv_file = 'genes_with_descriptions.tsv'

# Create the TSV file containing genes and their descriptions
create_description_tsv(first_tsv_file, second_tsv_file, output_tsv_file)
