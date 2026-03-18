module.exports = {
  apps: [{
    name: 'ali',
    script: './node_modules/.bin/next',
    args: ['start', '-p', '3001'],
    cwd: '/var/www/ali',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production'
    }
  }]
};
