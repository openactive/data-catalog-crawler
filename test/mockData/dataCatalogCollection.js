const dataCatalogCollection = {
  '@context': 'https://schema.org/',
  '@type': 'DataCatalog',
  '@id': 'https://openactive.io/data-catalogs/data-catalog-collection.jsonld',
  name: 'Collection of all data catalogs recognised as compliant by OpenActive',
  hasPart: [
    'https://openactive.io/data-catalogs/singular.jsonld',
  ],
  datePublished: '2020-02-20T08:51:54+00:00',
  publisher: {
    '@type': 'Organization',
    name: 'OpenActive',
    url: 'https://www.openactive.io/',
  },
  license: 'https://creativecommons.org/licenses/by/4.0/',
};

module.exports = dataCatalogCollection;
