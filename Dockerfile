FROM nginx:1.9

COPY conf/templates /data00/templates/store
COPY conf/ansible /data00/templates/store/ansible
COPY dist/pages /usr/share/nginx/html/pages
COPY dist/sivut /usr/share/nginx/html/sivut
COPY dist/resources /usr/share/nginx/html/resources
COPY dist/resources/js/config.js /data00/templates/store/

# Add default-translation files to image
COPY default_translations /usr/share/nginx/html/localisation

CMD nginx -g "daemon off;"
