const fs = require('fs')
const request = require('request')
const child_process = require('child_process')
const utils = require('shipit-utils')

const releaseOptions = (version) => ({
  method: 'POST',
  url: 'https://app.getsentry.com/api/0/projects/21eeededa606/mihuapay-hub/releases/',
  headers:
  {
    'content-type': 'application/json',
    authorization: 'Bearer 052b8a7d720940829ad086d34308227efb38c976c7154ab3aa140fe87baee25a',
  },
  body: {
    version,
  },
  json: true,
})

const uploadOptions = (releaseVersion, fileName) => ({
  method: 'POST',
  url: `https://app.getsentry.com/api/0/projects/21eeededa606/mihuapay-hub/releases/${releaseVersion}/files/ `,
  headers:
  {
    authorization: 'Bearer 052b8a7d720940829ad086d34308227efb38c976c7154ab3aa140fe87baee25a',
  },
  formData: {
    file: fs.createReadStream(`./build/static/js/${fileName}`),
    name: `http://static.cloudpayfs.com/static/js/${fileName}`,
  },
  timeout: 120000,
})

const commitHash = child_process.execSync('git rev-parse HEAD').toString().trim().substr(0, 12)
console.log('Commit Hash', commitHash)

module.exports = (shipit) => {
  shipit.initConfig({
    default: {
      rsync: ['--del'],
    },
    staging: {
      servers: 'black-hole-1',
    },
  })

  shipit.task('build', () => {
    try {
      child_process.execSync(`sed -i '' -e "s/__COMMIT_HASH__/${commitHash}/g" config/env/prod.js`, { stdio: [0, 1, 2] })
      child_process.execSync('yarn build', { stdio: [0, 1, 2] })
    } catch (e) {
      console.log(e)
      process.exit(1)
    } finally {
      child_process.execSync('git checkout .')
    }
  })

  utils.registerTask(shipit, 'sentry', () => {
    try {
      request(releaseOptions(commitHash), (error, response, body) => {
        if (error) throw new Error(error)
        console.log('Release version was created in Sentry:', body)
        const mapFileName = fs.readdirSync('./build/static/js/').filter((filename) => filename.endsWith('.js.map'))[0]
        request(uploadOptions(commitHash, mapFileName), (error, response, body) => {
          if (error) throw new Error(error)
          shipit.log('Sourcemap was uploaded in Sentry:', body)
        })
      })
    } catch (e) {
      console.log(e)
      console.log('Just exec \'shipit staging sentry\'')
      process.exit(1)
    }
  })

  utils.registerTask(shipit, 'rsync', () => {
    try {
      shipit.remote('mkdir -p /var/www/hub')
      const files = fs.readdirSync('./build').filter((filename) => filename.endsWith('.html'))
      files.forEach((filename) => {
        shipit.remoteCopy(`./build/${filename}`, `/var/www/hub/${filename}`)
      })
    } catch (e) {
      console.log(e)
      console.log('Just exec \'shipit staging rsync && shipit staging sentry\'')
      process.exit(1)
    }
  })

  shipit.task('deploy', () => {
    child_process.execSync('shipit staging build', { stdio: [0, 1, 2] })
    child_process.execSync('shipit staging rsync', { stdio: [0, 1, 2] })
    child_process.execSync('shipit staging sentry', { stdio: [0, 1, 2] })
  })
}
