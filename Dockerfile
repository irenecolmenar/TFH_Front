FROM nginxinc/nginx-unprivileged

#### copy nginx conf
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
COPY dist/TFH-Front/ /usr/share/nginx/html

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]