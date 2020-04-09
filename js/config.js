var IdentificationConfig = {
    idpHost: "{{ idpconf_host }}",
    discoTimeout: "{{ discovery_page_timeout }}",
    apiMetadataPath: "/api/metadata/",
    apiProvidersPath: "/api/metadata/?type=AUTHENTICATION_PROVIDER",
    apiCountryPath: "/api/country/",
    idpAuthnPath: "/idp/authn/External",
    tlsCheckUrl: "{{ discovery_page_tls_check_url}}",
    showTLSWarning: "{{ discovery_page_show_tls_warning }}",
    disruptionUrl: "{{ disruption_message_url }}",
    eidasDisruptionUrl: "{{ disruption_message_eidas_url }}"
};
