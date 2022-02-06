FROM nginx:mainline

ARG DISTRIBUTION

LABEL "authors"="modestoartur@gmail.com" \
	  "vendor"="Ilegra"

RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

RUN sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./koiketec.nginx_asset/404.html /usr/share/nginx/html/

RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

COPY $DISTRIBUTION /usr/share/nginx/html/

COPY entrypoint.sh /entrypoint.sh

RUN chown -R nginx /usr/share/nginx/html/ && \
  chown -R nginx /usr/share/nginx/html/* && \
  chmod -R g=u /usr/share/nginx/html/ && \
  chmod -R g=u /usr/share/nginx/html/* && \
  chown -R nginx /entrypoint.sh && \
  chmod -R g=u /entrypoint.sh

RUN addgroup nginx root

USER nginx

ENTRYPOINT ["/bin/bash","/entrypoint.sh"]
