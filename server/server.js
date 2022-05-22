require('dotenv').config()

const axios = require('axios').default
const fastify = require('fastify')({logger: true})
const cors = require('fastify-cors')
const fs = require('fs')
const yaml = require('js-yaml')

const DB_FILE = './gh_result.yml'
const PORT = 5000

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'Server API' }
  }
})

fastify.register(require('fastify-http-proxy'), {
  upstream: 'https://api.github.com/user/repos',
  prefix: 'gh_sec',
  httpMethods: ['GET'],
  replyOptions: {
    rewriteRequestHeaders: (orgReq, headers) => {
      return {
        ...headers,
        authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    }
  }
})

fastify.register(cors, {
  origin: "*"
})

fastify.register(require('fastify-http-proxy'), {
  upstream: 'https://api.github.com/users/nunojun/repos',
  prefix: 'gh',
  httpMethods: ['GET']
})

fastify.get('/gh_db', async (req, reply) => {
  if (!fs.existsSync(DB_FILE)) {
    let res
    try {
      res = await axios.get('https://api.github.com/users/nunojun/repos')
    } catch (error) {
      reply.send(error)
    }

    try {
      fs.writeFileSync(DB_FILE, yaml.dump(res.data), 'utf8')
    } catch (error) {
      reply.send(error)
    }
  }

  let data = yaml.load(fs.readFileSync(DB_FILE, 'utf8'))

  reply.send(data)
})


const start = async() => {
  try {
    await fastify.listen(PORT, '0.0.0.0')
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
