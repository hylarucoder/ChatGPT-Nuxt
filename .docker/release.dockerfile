FROM nginx:alpine
ADD .docker/nginx.conf /etc/nginx/conf.d/default.conf
ADD .output/public /app
WORKDIR /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]