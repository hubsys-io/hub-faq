<p align="center">
  <a href="https://hubsys.io/" target="_blank">
    <img src="https://user-images.githubusercontent.com/40179398/199869232-772a60c9-e717-43bb-8b4f-aafdd3861c04.png" width="100" alt="HubSys Logo">
  </a>  
</p>

<p align="center">
    Simplify and streamline your business management through innovative software solutions.
</p>

## Hubsys FAQ
Hub FAQ page for Hubsys

### Dependencies
- PHP (versão 8.1.12)
- MySQL
- Composer (versão 2.4.4)
- Node.js
- npm

## Setup
1. clone this repository:
```bash
    git clone git@github.com:hubsys-io/hub-faq.git
```
2. Navigate to the project directory:
```bash
    cd hub-faq
```
3. Install the dependencies using Composer:
```bash
    composer install
```
4. Cp the .env.example file and rename it to .env:
```bash
    cp .env.example .env
```

Edit the .env file to set up your database connection and other environment variables. You can use the following command to open the file in a text editor:
```bash
    nano .env

    DB_CONNECTION=mysql
    DB_HOST=localhost
    DB_PORT=3306
    DB_DATABASE=XXXXX
    DB_USERNAME=XXXXX
    DB_PASSWORD=XXXXX
```

5. Generate the application key:   
```bash
   php artisan key:generate
```

6. Start the server:

```bash
   php artisan serve
```

7. cd into vue folder and run `npm install` to install dependencies

8. Cp the .env.example file and rename it to .env:
```bash
    cp .env.example .env
```

Edit the .env file to set up your database connection and other environment variables. You can use the following command to open the file in a text editor:
```bash
    nano .env
```

1. Start the server:
```bash
   npm run dev
```

After this point, the client should be running at http://127.0.0.1:5173

## Instalation
1. Clone this repository
2. Run `composer install` to install dependencies
3. Run `php artisan key:generate` to generate a key 
4. Run `php artisan serve` to start the endpoint
5. Cd into vue folder and run `npm install` to install dependencies
6. Run `npm run dev` to compile assets
