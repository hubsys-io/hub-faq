# Hubsys FAQ
Project to create a FAQ page for Hubsys

## Dependencies
- [PHP >=8.1](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [NPM](https://www.npmjs.com/)
- [Laravel >=10](https://laravel.com/docs/10.x/installation)

## Main packages
- [Laravel](https://laravel.com/)
- [VueJs](https://vuejs.org/)
- [Axios](https://axios-http.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Setup
1 - Create a .env file running `cp .env.example .env`.

2 - In the `.env` file, replace the following variables:

```
APP_NAME=Hubsys-Stripe

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=XXXXX
DB_USERNAME=XXXXX
DB_PASSWORD=XXXXX
```

3 - Into Vue folder, change package.json > scripts > dev, to indicate host and port, like:
  "scripts": {
    "dev": "vite --host ec2-52-70-161-201.compute-1.amazonaws.com --port 5175",

4 - Modify config/cors.php file, to indicate that Vue is an allowed origin, instead of localhost:
    'allowed_origins' => ['http://ec2-52-70-161-201.compute-1.amazonaws.com:5175'],

## Instalation
1. Clone this repository
2. Run `composer install` to install dependencies
3. Run `php artisan key:generate` to generate a key 
4. Run `php artisan serve` to start the endpoint
5. Cd into vue folder and run `npm install` to install dependencies
6. Run `npm run dev` to compile assets

## Current env settings to start project
php artisan serve --host=ec2-52-70-161-201.compute-1.amazonaws.com --port=7100

nohup php artisan serve --host=ec2-52-70-161-201.compute-1.amazonaws.com --port=7100 &

cd vue

## TODO
- [ ] Translations

## Screenshots
![image](public/screenshot.png)
