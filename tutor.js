1. paste ke root zipnya
2. unzipkan 
3. cd satanix && screen -s satanix
4. npm install
5. migrate ip ke dns
6. sudo apt install nginx -y
7. sudo nano /etc/nginx/sites-available/nixcal
8. server {
    listen 80;
    server_name coin.panelmorphine.my.id;

    location / {
        proxy_pass http://127.0.0.1:2000;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_read_timeout 86400;
    }
}

9. sudo ln -s /etc/nginx/sites-available/nixcal /etc/nginx/sites-enabled/
10. sudo nginx -t
11. sudo systemctl reload nginx
12. sudo apt install certbot python3-certbot-nginx -y
13. sudo certbot --nginx -d satanix.panelmorphine.my.id

# WAJIB MENGGUNAKAN VPS 