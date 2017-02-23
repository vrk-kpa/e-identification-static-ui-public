#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <metadata-file>"
  exit 0
fi

metadata_file=$1
post_start="xml="
# this rather interesting bit makes sure, that the xml-file is urlencoded. By urlencoding every byte.
post=$post_start$(xxd -plain ${metadata_file}| tr -d '\n' | sed 's/\(..\)/%\1/g')

curl -s --data "xsd=md-metadata" --data-binary "act_validate_xml=Validate+XML+with+the+XSD+schema" --data-binary @<(echo -n "${post}") -X POST https://www.samltool.com/validate_xml.php|grep "alert alert"|sed -e 's/.*The XML is //' -e 's/valid.*/valid/'
