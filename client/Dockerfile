FROM nginx:alpine

COPY --chown=nginx:nginx ["./dist/spa", "/usr/share/nginx/html"]
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

EXPOSE 80

RUN addgroup nginx root
USER nginx
