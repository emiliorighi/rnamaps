///file adapter configs

export const mapper = {
    bb:
        {
            "type": "FeatureTrack",
            "trackId": "",
            "name": "",
            "assemblyNames": [],
            "category": ["Annotation"],
            "adapter": {
              "type": "BigBedAdapter",
              "bigBedLocation": {
                "uri": "",
                "locationType": "UriLocation"
              }
        }  
    },
    bw: 
    {
        "trackId": "",
        "name": "",
        "assemblyNames": [""],
        "type": "QuantitativeTrack",
        "adapter": {
          "type": "BigWig",
          "bigWigLocation": {
            "uri": "",
            "locationType": "UriLocation"
          }
        }
    }
}

export const humanAnnTrack= 
    {
        type: 'BasicTrack',
        trackId:
          'GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff',
        name: 'NCBI RefSeq Genes',
        assemblyNames: ['GRCh38'],
        category: ['Genes'],
        adapter: {
          type: 'Gff3TabixAdapter',
          gffGzLocation: {
            uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
          },
          index: {
            location: {
              uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.tbi',
            },
          },
        },
    }


export const flyAnnTrack= {

}