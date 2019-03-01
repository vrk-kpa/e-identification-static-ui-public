var IdentificationConfig = {
    idpHost: "{{ idpconf_host }}",
    discoTimeout: "{{ discovery_page_timeout }}",
    mobileOperator: "{{ mobile_identification_operator }}", // "elisa" or "telia"
    apiMetadataPath: "/api/metadata/",
    apiProvidersPath: "/api/metadata/?type=AUTHENTICATION_PROVIDER",
    apiCountryPath: "/api/country/",
    idpAuthnPath: "/idp/authn/External",
};
