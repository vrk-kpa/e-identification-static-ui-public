FROM nginx:1.9

COPY conf/ansible /data00/templates/store/ansible
COPY dist/pages /usr/share/nginx/html/pages
COPY dist/sivut /usr/share/nginx/html/sivut
COPY dist/resources /usr/share/nginx/html/resources
COPY dist/resources/js/config.js /data00/templates/store/

# Add default-translation files (directory) to static - in some dir:
RUN mkdir -p /usr/share/localisation_service/default_translations
COPY default_translations /usr/share/localisation_service/default_translations

CMD \
  cp -a /usr/share/localisation_service/default_translations/. /usr/share/nginx/html/localisation/ && \
  nginx -g "daemon off;"



